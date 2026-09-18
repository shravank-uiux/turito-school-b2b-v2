# TuritoSchools marketing website

Homepage and solution pages for Teacher Tools, Academics, School Performance, and College Readiness, including animated HTML product walkthroughs and a demo-request preview.

## Vercel deployment

Import `venkateshj-product/turitoschools` and set **Root Directory** to `turito-schools-marketing`.

- Framework: Next.js
- Install: `npm ci`
- Build: `npm run build`
- Output directory: leave the framework default
- No environment variables are required for the current review website.

This folder uses standard Next.js for Vercel. The original local Sites/Vinext checkout remains separate. Existing Angular code at the repository root is unchanged.

## Local development

Use Node.js 22 or newer, run `npm ci`, then `npm run dev`. Run `npm run build` to verify production output.

## Assets and review

All bundled images, fonts, and media are tracked inside `public/` and referenced from the URL root (for example `/turito-logo.svg`). Keep `public/` in deployments. Secrets, dependencies, caches, and build output are excluded by `.gitignore`.

The demo form is a frontend review flow; it does not send or store submissions. Animated product screens use demonstration data. After deploying, share the Vercel deployment URL with stakeholders; adjust Vercel deployment protection if reviewers need access without signing in.

## Page metadata

Each page has its own title, description, Open Graph and Twitter sharing metadata. Image alt text is included. Sharing URLs use Vercel's deployment environment variables. No robots directives, custom indexing headers, crawler restrictions, canonical domain, or sitemap are configured. At custom-domain launch, set the final metadata base and add canonical URLs and a sitemap.
