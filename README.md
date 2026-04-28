# Douglas Ferrin Portfolio

Portfolio website for [Douglas Ferrin](https://douglasferrin.com), a classical realist painter working in oil, acrylic, and other traditional media. The site showcases his self-portraits, figure paintings, still lifes, landscapes, drawings, and murals.

## Tech Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[MDX](https://mdxjs.com/)** - Markdown with components
- **TypeScript** - Type safety
- **Cloudflare Pages** - Hosting & deployment

## Project Structure

```
src/
├── content/
│   ├── config.ts          # Content collection schema
│   └── data/              # Artwork entries (markdown)
├── pages/                 # Routes
├── layouts/               # Layout components
├── components/            # Reusable components
├── styles/                # Custom CSS
├── utils/                 # Helper functions
└── consts.ts              # Site config (menu, email, pagination)

public/                    # Static assets (fonts, favicon)
```

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Management

### Adding Artwork

Create a new markdown file in `src/content/data/`:

```markdown
---
menuId: "figure-paintings"
title: "Jamie"
year: 1999
dimensions: "14 x 18 in"
s3Url: "https://assets.douglasferrin.com/works/jamie-large.jpg"
category: "Oil on Linen"
forSale: true
draft: false
id: "jamie"
---
```

**Fields:**
| Field | Type | Description |
|-------|------|-------------|
| `menuId` | string | Category ID (see below) |
| `title` | string | Artwork title |
| `year` | number | Year created |
| `dimensions` | string | Physical size (e.g., "14 x 18 in") |
| `s3Url` | string | CDN URL to artwork image |
| `category` | string | Medium (e.g., "Oil on Linen") |
| `forSale` | boolean | Show "Inquire to Purchase" link |
| `draft` | boolean | Hide from site if true |
| `id` | string | URL slug (must match filename) |

### Categories

| ID | Display Name |
|----|--------------|
| `self-protraits` | Self Portraits |
| `figure-paintings` | Figure Paintings |
| `still-lifes` | Still Lifes |
| `landscapes` | Landscapes |
| `drawings` | Drawings |
| `murals` | Murals |

## Image Hosting

Artwork images are hosted on a CDN at `assets.douglasferrin.com`. Upload images there and reference them via the `s3Url` field.

Naming convention: `{slug}-large.jpg`

## Deployment

The site deploys automatically to **Cloudflare Pages** when changes are pushed to the main branch.

Manual deployment:
```bash
npm run build
# Deploy the ./dist directory to Cloudflare Pages
```

## Configuration

Key settings in `src/consts.ts`:
- `email` - Contact email for purchase inquiries
- `menuItems` - Navigation categories
- `MAX_POST_PER_PAGE` - Items per gallery page (default: 5)
