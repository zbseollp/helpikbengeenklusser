# HelpIkBenGeenKlusser

Astro 5 static site for **helpikbengeenklusser.nl**, migrated from WordPress and deployed to Cloudflare Workers.

## Stack

- [Astro](https://astro.build) 5 (`output: "static"`, `trailingSlash: "always"`)
- Cloudflare Workers static assets (`wrangler.toml`)
- Blog content via an Astro content collection fed by Payload CMS (`astropayload.config.json`)

## Commands

```bash
npm install       # install dependencies
npm run dev       # local dev server
npm run build     # build to ./dist
npm run deploy    # build + wrangler deploy
```

## Structure

| Path | Purpose |
| --- | --- |
| `src/content/blog/*.md` | blog posts (synced from Payload CMS) |
| `src/content.config.ts` | content collection schema (glob loader) |
| `src/pages/[...slug].astro` | blog post detail route → `/{slug}/` |
| `src/pages/blog/index.astro` | blog index |
| `src/pages/**/index.astro` | static + landing pages, one directory per URL |
| `src/layouts/` | `BaseLayout`, `PageLayout`, `BlogPostLayout` |
| `public/assets/site.css` | design tokens + components |
| `public/img/` | images mirrored from the old site |

## URL structure

Every URL matches the original WordPress site exactly: lowercase slug with a
trailing slash. `wrangler.toml` sets `html_handling = "force-trailing-slash"`
so Cloudflare does not redirect between the `.html` and trailing-slash forms.

## Content

Blog posts live in `src/content/blog` as markdown with frontmatter
(`title`, `description`, `pubDate`, `updatedDate`, `author`, `categories`, `tags`).
Payload CMS writes to this directory through GitHub Actions; nothing is fetched
from a remote CMS at build time.
