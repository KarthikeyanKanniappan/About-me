# Portfolio

Personal portfolio built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4.

## Develop

```bash
npm install
cp .env.example .env.local   # fill in to enable the contact form
npm run dev
```

## Edit content

All copy lives in `content/`; components never need to change for content updates.

| File | What |
|---|---|
| `content/profile.ts` | Name, role, bio, photo, email, phone (optional), socials |
| `content/resume.ts` | Experience, education, skills, CV link |
| `content/projects.ts` | Projects |

Images go in `public/images/`. The current content and images are placeholders.

## Contact form

Uses a Server Action (`app/contact/actions.ts`) with zod validation and [Resend](https://resend.com). Set `RESEND_API_KEY` and `CONTACT_TO_EMAIL` in `.env.local` (and in Vercel for production). Until you verify a domain in Resend, keep `CONTACT_FROM_EMAIL` as `onboarding@resend.dev`, which only delivers to your own Resend account email.

## Plan

See `docs/IMPLEMENTATION_PLAN.md`.
