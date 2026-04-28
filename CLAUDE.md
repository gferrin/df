# CLAUDE.md

Context for AI assistants working on this project.

## Project Overview

Art portfolio website for **Douglas Ferrin** (douglasferrin.com), a classical realist painter. Built with Astro for static site generation.

**Purpose:** Showcase artwork across categories, enable purchase inquiries, display artist bio and press coverage.

## Architecture

- **Framework:** Astro 4.x (static site generator)
- **Styling:** Tailwind CSS + custom CSS
- **Content:** Markdown files with Zod-validated frontmatter
- **Images:** Hosted on external CDN (`assets.douglasferrin.com`)
- **Deployment:** Cloudflare Pages (auto-deploys on push to main)

## Key Files by Task

### Adding/Editing Artwork
- `src/content/data/*.md` - Individual artwork entries
- `src/content/config.ts` - Content schema (Zod validation)

### Modifying Layout/Components
- `src/layouts/Layout.astro` - Master page wrapper
- `src/layouts/Menu.astro` - Navigation header
- `src/layouts/Footer.astro` - Page footer
- `src/layouts/SharedItem.astro` - Paginated gallery layout
- `src/components/Item.astro` - Single artwork display
- `src/components/Pagination.astro` - Pagination controls

### Styling
- `src/styles/index.css` - Custom CSS (image containers, etc.)
- `src/styles/fonts.css` - Font definitions
- `tailwind.config.mjs` - Tailwind configuration

### Site Configuration
- `src/consts.ts` - Menu items, email, pagination settings
- `astro.config.mjs` - Astro integrations and site URL

### Pages/Routes
- `src/pages/index.astro` - Homepage (self-portraits)
- `src/pages/[menuId]/[page].astro` - Category galleries (paginated)
- `src/pages/art/[id].astro` - Individual artwork detail
- `src/pages/about.astro` - Artist biography
- `src/pages/press.astro` - Press coverage
- `src/pages/work.astro` - All work redirect

## Content Schema

Each artwork in `src/content/data/` has this frontmatter:

```yaml
menuId: "figure-paintings"    # Category ID (required)
title: "Jamie"                # Display title (required)
year: 1999                    # Year created (required, number)
dimensions: "14 x 18 in"      # Physical size (required)
s3Url: "https://..."          # CDN image URL (required)
category: "Oil on Linen"      # Medium/technique (required)
forSale: true                 # Show purchase link (default: false)
draft: false                  # Hide from site (default: false)
id: "jamie"                   # URL slug, must match filename (required)
```

## Menu Categories

Defined in `src/consts.ts`:

| ID | Name |
|----|------|
| `self-protraits` | Self Portraits |
| `figure-paintings` | Figure Paintings |
| `still-lifes` | Still Lifes |
| `landscapes` | Landscapes |
| `drawings` | Drawings |
| `murals` | Murals |

Note: `self-protraits` has a typo (missing 'r') but is used throughout - maintain consistency.

## Common Tasks

### Add new artwork
1. Upload image to CDN (`assets.douglasferrin.com/works/{slug}-large.jpg`)
2. Create `src/content/data/{slug}.md` with frontmatter
3. Set `menuId` to appropriate category
4. Run `npm run build` to verify

### Add new category
1. Add entry to `menuItems` array in `src/consts.ts`
2. Create artwork entries with matching `menuId`
3. Category routes are auto-generated

### Change items per page
Edit `MAX_POST_PER_PAGE` in `src/consts.ts` (default: 5)

### Update contact email
Edit `email` in `src/consts.ts`

### Fix image display issues
Check `src/styles/index.css` for `.image-container` styles. Recent fixes addressed inconsistent sizing across different image resolutions.

## Build Commands

```bash
npm run dev      # Dev server at localhost:4321
npm run build    # Production build to ./dist
npm run preview  # Preview production build
```

## Notes

- The `site` URL in `astro.config.mjs` is set to a placeholder - update to `https://douglasferrin.com` for proper sitemap generation
- Images are not stored in repo - all artwork images live on CDN
- Homepage displays self-portraits category by default
