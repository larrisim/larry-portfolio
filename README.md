This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Contact form

The Contact page has a form that sends email via [Resend](https://resend.com)
and is protected by [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/)
plus a honeypot field and basic rate limiting. It needs environment variables
to work — copy `.env.example` to `.env.local` for local development, and add
the same variables in Vercel (Project Settings → Environment Variables,
Production):

1. **Resend** — create an API key at resend.com/api-keys and verify your
   sending domain (for testing, Resend's onboarding sender works but only
   delivers to the account owner's email). Set `RESEND_API_KEY`,
   `CONTACT_TO` (where submissions go) and `CONTACT_FROM`.
2. **Turnstile** — create a site in the Cloudflare dashboard
   (Turnstile → Add site) and copy the site key and secret key into
   `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`.

Until those are set, the form shows a note that spam protection isn't
configured and submissions fail gracefully — the email link on the page still
works. See `.env.example` for details.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
