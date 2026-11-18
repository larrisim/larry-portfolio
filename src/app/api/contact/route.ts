import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// In-memory rate limiting: max 5 submissions per IP per 10 minutes.
// This resets on server restart / redeploy, which is fine for a low-volume
// contact form; Turnstile is the real spam defence.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (recent.length >= RATE_LIMIT_MAX) {
    submissionsByIp.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissionsByIp.set(ip, recent);
  return false;
}

function error(message: string, status: number) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function verifyTurnstile(
  token: string,
  ip: string | null
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    // Should be caught before calling this; treat as unverifiable.
    return false;
  }
  const form = new URLSearchParams();
  form.append("secret", secret);
  form.append("response", token);
  if (ip) form.append("remoteip", ip);

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body: form }
  );
  if (!res.ok) return false;
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return error("Invalid request body.", 400);
  }

  const { name, email, topic, message, extra, turnstileToken } =
    body as Record<string, unknown>;

  // Honeypot: the "extra" field is hidden from real visitors. If it is
  // filled in, this is almost certainly a bot — pretend it worked so the
  // bot cannot tell it was caught, and send nothing.
  if (typeof extra === "string" && extra.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // --- Validation ---
  if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
    return error("Please enter your name (2–100 characters).", 400);
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return error("Please enter a valid email address.", 400);
  }
  // Topic is optional free text (max 100 characters).
  if (
    topic !== undefined &&
    (typeof topic !== "string" || topic.trim().length > 100)
  ) {
    return error("Please keep the topic under 100 characters.", 400);
  }
  if (
    typeof message !== "string" ||
    message.trim().length < 10 ||
    message.trim().length > 5000
  ) {
    return error("Please write a message between 10 and 5,000 characters.", 400);
  }
  if (typeof turnstileToken !== "string" || turnstileToken.trim() === "") {
    return error("Please complete the spam check and try again.", 400);
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanTopic =
    typeof topic === "string" && topic.trim() !== ""
      ? topic.trim()
      : "(not given)";
  const cleanMessage = message.trim();

  // --- Rate limiting ---
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return error(
      "Too many messages sent recently. Please wait a few minutes and try again.",
      429
    );
  }

  // --- Turnstile verification ---
  if (!process.env.TURNSTILE_SECRET_KEY) {
    return error(
      "Spam protection is not configured on this site yet, so messages can't be sent. Please email larry@larry-chang.com directly.",
      503
    );
  }
  const human = await verifyTurnstile(turnstileToken, ip === "unknown" ? null : ip);
  if (!human) {
    return error(
      "The spam check could not be verified. Please refresh the page and try again.",
      400
    );
  }

  // --- Send via Resend ---
  if (!process.env.RESEND_API_KEY) {
    return error(
      "Email sending is not configured on this site yet. Please email larry@larry-chang.com directly.",
      503
    );
  }

  const to = process.env.CONTACT_TO ?? "larry@larry-chang.com";
  const from =
    process.env.CONTACT_FROM ?? "Larry Chang Portfolio <contact@larry-chang.com>";

  const textBody = [
    `Name: ${cleanName}`,
    `Email: ${cleanEmail}`,
    `Topic: ${cleanTopic}`,
    "",
    cleanMessage,
  ].join("\n");

  const htmlBody = `
    <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
    <p><strong>Topic:</strong> ${escapeHtml(cleanTopic)}</p>
    <hr />
    <p>${escapeHtml(cleanMessage).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error: sendError } = await resend.emails.send({
      from,
      to,
      subject:
        cleanTopic === "(not given)"
          ? `Portfolio contact — ${cleanName}`
          : `Portfolio contact: ${cleanTopic} — ${cleanName}`,
      replyTo: cleanEmail,
      text: textBody,
      html: htmlBody,
    });
    if (sendError) {
      return error(
        "Something went wrong sending your message. Please try again, or email larry@larry-chang.com directly.",
        502
      );
    }
  } catch {
    return error(
      "Something went wrong sending your message. Please try again, or email larry@larry-chang.com directly.",
      502
    );
  }

  return NextResponse.json({ ok: true });
}
