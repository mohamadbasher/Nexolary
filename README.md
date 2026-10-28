# Nexolary — company website

**A Hebrew, right-to-left marketing site for Nexolary, a software studio offering web and mobile development, cybersecurity, QA testing, bug fixing and UI/UX design.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)

## What's inside

- A single-page site built from focused sections: hero, services, about and values, tech stack,
  a five-step work process, and a contact form
- Full RTL layout with the Heebo font, responsive down to mobile with its own menu
- Lightweight CSS reveal animations, with no animation library
- A script that generates the logo (`scripts/make-logo.mjs`)

## Tech stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

The contact form is front-end only for now. Ways to connect it (Formspree, a Next.js API route
with email, or WhatsApp) are described in [docs/DEVELOPER-NOTES.md](docs/DEVELOPER-NOTES.md)
(in Hebrew).

## Structure

```
app/
  layout.tsx     base layout (RTL, Heebo font, metadata)
  page.tsx       assembles the sections
  globals.css    colours, global styles, animations
components/      Navbar, Hero, Services, About, TechStack, Process, Contact, Footer
```

---

Built by [Mohamad Basher](https://github.com/mohamadbasher).
