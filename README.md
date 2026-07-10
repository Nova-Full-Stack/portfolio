# Nova Full Stack LLC — Company Site

Marketing site for Nova Full Stack LLC, a web and software development agency.
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

The logo lives at `public/assets/nova-logo.png` and is rendered everywhere via
[`components/common/Logo.jsx`](components/common/Logo.jsx) — header, footer,
favicon and the Open Graph image all resolve from `logo` in
[`data/company.js`](data/company.js).

**The source PNG has no alpha channel** (360×360, 8-bit RGB), so its blue-grey
backdrop is part of the image. `Logo` therefore renders it as a rounded tile,
which makes the opaque square read as deliberate on a dark background. If you
obtain a transparent SVG or PNG, drop it in, update `company.logo`, and remove
the `rounded-md` from `Logo`.

### Favicon

Two generated assets, both derived from `nova-logo.png`:

- `public/favicon.ico` — 16×16, 32×32 and 48×48 renders in one file.
- `public/assets/nova-icon.png` — 180×180, for browsers that prefer a PNG icon.

Both are centre-cropped to the middle 72% of the source (the circuit filigree
turns to noise at icon sizes and steals pixels from the wordmark) and masked to a
**circle** with an antialiased edge, so the logo's opaque grey corners are gone.
They must stay in sync: a browser preferring the PNG would otherwise show a
square icon while the `.ico` renders round.

`apple-touch-icon` intentionally points at the opaque square `nova-logo.png` —
iOS applies its own squircle mask and renders transparent pixels as black.

At 16×16 the "NOVA" lettering is not legible; no resampling fixes that, only a
simpler mark would. A single-glyph monogram would read far better in a browser
tab if you ever want one.

### Open Graph

The share image is square. Social cards crop to roughly 1.91:1, so a dedicated
1200×630 image would present better.

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
