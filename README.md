# Abdul Rafay - Shopify Dropshipping Expert

This repo contains a fully data-driven portfolio built with the Next.js App Router, Tailwind CSS, shadcn/ui primitives, and next-themes. All copy, skills, projects, services, and testimonials live inside `/data` so the UI stays clean and reusable.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS 3 + `tailwindcss-animate`
- shadcn/ui components (Button, Card, Sheet, Carousel, Form, etc.)
- next-themes for light/dark toggle
- react-hook-form + zod for the contact form

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and edit any file under `app/` or `components/` to see instant updates.

## Linting

```bash
npm run lint
```

## Content Architecture

- `data/*.ts` - site config, personal info, services, skills, projects, testimonials, blog posts, and marketing copy.
- `components/shared` - navigation, footer, and mobile sheet.
- `components/home` - hero, skills grid, featured projects, testimonials carousel.
- `components/common` - reusable cards, theme toggle, and contact form.
- `app/*` - page routes (about, services, portfolio + case studies, contact, blog).

Add or edit content in `/data` and the UI will update automatically without touching JSX.
