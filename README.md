# Nova Full Stack — Company Site

Marketing site for Nova Full Stack, a web and software development agency.
Built with [Next.js](https://nextjs.org/) 12 (pages router) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before launch

Company identity lives in one file: [`data/company.js`](data/company.js). Two
values there are placeholders and must be replaced:

- `email` — currently `hello@novafullstack.com`
- `url` — currently `https://novafullstack.com`

Everything else (page copy, `<title>`, Open Graph tags, JSON-LD, the footer
copyright, and every `mailto:` link) is derived from that file.

## Content

All site copy is data-driven, under [`data/`](data/):

| File | Drives |
| --- | --- |
| `company.js` | Name, email, URL, copyright year |
| `home.js` | Hero tagline and introduction |
| `about.js` | About copy, the stat counters, the tech stack list |
| `services.js` | The six service cards |
| `projects.js` | Portfolio tabs and project tiles |
| `testimonials.js` | Client quotes (currently empty — see below) |

Section headings and layout live in [`components/sections/`](components/sections/).

### Testimonials

The testimonial section is **not rendered**. Its previous entries were
unattributable quotes paired with mismatched stock avatars and were removed
rather than rebranded. `components/sections/Testimonial.jsx` is intact — to
re-enable it, follow the instructions at the top of
[`data/testimonials.js`](data/testimonials.js).

## Design system

Dark-first. Dark is the default theme; light only applies when the visitor has
stored that preference or their OS explicitly requests it
([`public/theme.js`](public/theme.js)).

Colors are **semantic tokens**, not raw hues. Each is a CSS variable defined for
both themes in [`styles/index.css`](styles/index.css) and mapped to a Tailwind
color in [`tailwind.config.js`](tailwind.config.js):

| Token | Use |
| --- | --- |
| `canvas` | Page background |
| `surface` | Raised panels, cards, chips |
| `line` | Hairline borders and dividers |
| `fg` | Primary text and headings |
| `muted` | Body copy and secondary text |
| `accent` / `accent-fg` | The single brand accent, and text on top of it |

This means `bg-surface` and `text-fg` are already correct in both themes — you
should rarely need a `dark:` variant. To retheme the whole site, edit the two
variable blocks in `styles/index.css`.

Type is Inter. Icons are [Feather](https://feathericons.com) via
`react-icons/fi` — monochrome stroke icons only, never the multicolor `fc` set.

Two logo assets live in `public/assets/`, both resolved from
[`data/company.js`](data/company.js):

- `nova-logo.png` — the full lockup (rocket mark + "NOVA FULL STACK" wordmark),
  1254×1254. Feeds the Open Graph image (`company.logo`).
- `nova-mark.png` — just the rocket mark, cropped out of the lockup, 512×512.
  Rendered in the header and footer via
  [`components/common/Logo.jsx`](components/common/Logo.jsx) (`company.mark`),
  beside a separate text wordmark. It is also the favicon / app-icon source.

**Both source images are opaque** (white background), so `Logo` renders the mark
as a rounded white tile, which makes the square read as deliberate on a dark
background. If you obtain a transparent version, drop it in and remove the
`rounded-md` from `Logo`.

### Favicon

Two generated assets, both cropped from the rocket mark:

- `public/favicon.ico` — 16×16, 32×32 and 48×48 renders in one file.
- `public/assets/nova-icon.png` — 180×180, for browsers that prefer a PNG icon.

Both are the mark on its opaque white tile and must stay in sync: a browser
preferring the PNG would otherwise disagree with the `.ico`. `apple-touch-icon`
points at `nova-mark.png` — iOS applies its own squircle mask and renders
transparent pixels as black, so the opaque mark is what it needs.

The rocket mark stays legible down to 16×16 where the full "NOVA FULL STACK"
wordmark would not — which is why the favicon is the mark alone, not the lockup.

To regenerate every asset from a new source, re-run the sharp pipeline: crop the
mark's bounding box to a centred square, then emit `nova-logo.png` (full),
`nova-mark.png` (512), `nova-icon.png` (180) and `favicon.ico` (16/32/48).

### Open Graph

The share image is square. Social cards crop to roughly 1.91:1, so a dedicated
1200×630 image would present better.

## Deployment (Vercel)

[`vercel.json`](vercel.json) pins `framework: "nextjs"` and sets `buildCommand`
and `outputDirectory` to `null`.

`null` is meaningful here, not filler. `vercel.json` takes precedence over the
project's dashboard settings, and `null` means "use the framework default"
rather than "unset". Without it, a dashboard **Output Directory** of `dist` (the
Vite/CRA convention, the default when a project is created with the wrong
framework preset) makes deploys fail *after a successful build* with:

> Error: No Output Directory named "dist" found after the Build completed.

Next.js builds to `.next`, never `dist`.

## Known issues

**Next.js 12.3.1 has an open critical advisory.** `npm audit` reports it; the only
remedy is a major upgrade (`next@16`), which is a real migration — the pages
router here nests `<a>` inside `<Link>`, and `next export` was replaced by
`output: 'export'`. Worth scheduling deliberately, not with `npm audit fix --force`.

**Two lockfiles.** The repo carries both `package-lock.json` and `yarn.lock`.
Dependency changes are made with npm, so `yarn.lock` is now stale. Pick one
package manager and delete the other lockfile.

## Build

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint
```
