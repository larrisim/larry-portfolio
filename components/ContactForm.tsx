"use client";

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-base text-black placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black";

export default function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
  // Bumping this key remounts (and therefore resets) the Turnstile widget
  // after a successful send, so the visitor gets a fresh token.
  const [turnstileKey, setTurnstileKey] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [extra, setExtra] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const spamProtectionReady = siteKey !== "";
  const canSubmit =
    status !== "sending" && (!spamProtectionReady || turnstileToken !== null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          topic,
          message,
          extra,
          turnstileToken,
        }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(
          data.error ?? "Something went wrong. Please try again."
        );
      }
      setStatus("success");
      setName("");
      setEmail("");
      setTopic("");
      setMessage("");
      setExtra("");
      setTurnstileToken(null);
      setTurnstileKey((k) => k + 1);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-gray-200 bg-white p-6 text-left sm:p-8"
      >
        <h2 className="text-2xl font-bold text-black">Thanks — message sent.</h2>
        <p className="mt-3 text-base leading-relaxed text-gray-700">
          Your message is on its way. I usually reply within a few days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-block rounded-md border border-gray-300 px-5 py-3 text-base font-medium text-black hover:bg-gray-100"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-gray-200 bg-white p-6 text-left sm:p-8"
    >
      <div className="mb-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-base font-medium text-black"
          >
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-base font-medium text-black"
          >
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="contact-topic"
          className="mb-2 block text-base font-medium text-black"
        >
          Topic{" "}
          <span className="font-normal text-gray-500">(optional)</span>
        </label>
        <input
          id="contact-topic"
          name="topic"
          type="text"
          autoComplete="off"
          maxLength={100}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="What is this about?"
          className={inputClass}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="contact-message"
          className="mb-2 block text-base font-medium text-black"
        >
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project, idea, or question…"
          className={`${inputClass} resize-y`}
        />
      </div>

      {/* Honeypot: hidden from real visitors (off-screen, not display:none,
          so bots still see and fill it). Leave this field empty.
          Deliberately named "extra", not "company": browsers autofill a
          field called "company" from saved profile data, which made the
          server mistake real visitors for bots and silently drop their
          messages while showing a fake success. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="contact-extra">Leave this field empty</label>
        <input
          id="contact-extra"
          name="extra"
          type="text"
          autoComplete="off"
          tabIndex={-1}
          value={extra}
          onChange={(e) => setExtra(e.target.value)}
        />
      </div>

      <div className="mb-6">
        {spamProtectionReady ? (
          <Turnstile
            key={turnstileKey}
            siteKey={siteKey}
            onSuccess={(token) => setTurnstileToken(token)}
            onExpire={() => setTurnstileToken(null)}
            onError={() => setTurnstileToken(null)}
          />
        ) : (
          <p className="rounded-md bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-800">
            Note: spam protection is not configured on this site yet, so this
            form can&rsquo;t send messages right now. Please email{" "}
            <a
              href="mailto:larry@larry-chang.com"
              className="font-medium underline"
            >
              larry@larry-chang.com
            </a>{" "}
            directly instead.
          </p>
        )}
        {spamProtectionReady && !turnstileToken && (
          <p className="mt-2 text-sm text-gray-500">
            Please wait a moment for the spam check to complete before sending.
          </p>
        )}
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mb-6 rounded-md bg-red-50 px-4 py-3 text-base leading-relaxed text-red-800"
        >
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full rounded-md bg-black px-6 py-3 text-base font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className="mt-4 text-sm text-gray-500">
        Your email is only used to reply to you — it won&rsquo;t be shared or
        added to any list.
      </p>
    </form>
  );
}
