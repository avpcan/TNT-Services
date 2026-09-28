# Family business website

A friendly informational site using Next.js App Router, React, TypeScript, and Tailwind CSS.

## Run locally

Install Node.js 24 LTS, then run:

```sh
npm install
npm run dev
```

Open http://localhost:3000. Commit the generated package-lock.json separately after installation.

## Verify

```sh
npm run lint
npm run typecheck
npm run build
```

Review phone, tablet, and desktop layouts, keyboard navigation, focus visibility, and section links.

## Iterate

- Shared placeholders: `src/content/business.ts`.
- Individual sections: `src/components/`.
- Section order: `src/app/page.tsx`.
- Colors and shared styles: `src/app/globals.css`.
- Photo blocks are placeholders, not actual project images.
- Contact details remain plain text until real values are supplied. Add phone/email links when replacing them.
- No accounts, database, booking, or form backend is configured.

Before launch, replace every bracketed placeholder, confirm the team copy and services, add real photos with alt text, and update metadata. Draft metadata disables search indexing; remove that restriction when the site is ready. Add a sitemap and sharing image once the domain and branding are known.

## Commits

Follow `AGENTS.md`: one specific purpose and at most one authored function or component per commit. Configuration commits establish the initial scaffold; homepage composition completes the runnable source.

## Initial verification status

Source and whitespace reviewed. Installation, linting, type checking, production build, and browser inspection have not run because Node.js was unavailable and the runtime download was not approved. Dependencies are declared but not yet locked.
