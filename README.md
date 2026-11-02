# Smart Activity — Cinematic Corporate Website

A bilingual English/Arabic (RTL), responsive corporate website for **Smart Activity for Business Solutions**.

## Getting started

Requires Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm run start
```

## Structure

```text
src/
  app/
    globals.css        # Site styles, layout, responsive design
    layout.tsx         # Root layout and SEO metadata
    page.tsx           # Homepage
  components/
    Site.tsx           # Sections, animations, interactions, language switcher
  lib/
    content.ts         # English and Arabic content
public/
  images/
    smart-activity-logo.png  # Supplied official brand artwork
```

## Included

- Hero with ambient CSS geometry and GSAP entrance/parallax animations
- About, mission, vision, five service areas, twelve sectors, five values, why us, partners, and contact
- English/Arabic content switching with document `dir` and `lang` updates
- Responsive mobile navigation and reduced-motion accessibility
- Click-to-call, click-to-email, and a validated `mailto:` contact form
- SEO metadata

## Important implementation notes

- The contact form opens the visitor's default email client; it **does not send messages from a server**. For production server-side delivery, connect a verified transactional email provider and add spam protection.
- The company profile explicitly identifies **Zain and Mobily** as telecommunications partners. Other logos visible in the profile are not reproduced or asserted as endorsements here without approval and brand assets.
- The profile lists project management as a service but provides little service-specific detail. The project management copy is intentionally conservative.
- The source logo is available at `/images/smart-activity-logo.png`. The site header uses a CSS/text lockup to fit the navigation; for exact brand reproduction, consider replacing that header lockup with a professionally prepared transparent or SVG version of the official logo.
- No stock photographs or PDF-extracted imagery are used; the cinematic art is built with CSS and text.
- Verify the physical mailing address before production launch; it is copied from the company profile, which does not give a city or postal code.

## Content provenance

Content is adapted from the supplied 17-page Smart Activity company profile (2026), including company overview (p.2), vision/mission (pp.3–4), values (p.5), services (pp.6–11), sectors (p.8), differentiators (pp.13–14), partners (p.15), and contact (p.17).


## V2 visual enhancements
- Transparent official logo: `public/images/smart-activity-logo-transparent.png`
- Transparent SA symbol: `public/images/sa-mark.png`
- Browser favicon: `src/app/icon.png` (generated from official mark)
- GSAP navigation entrance, hover treatments, animated hero particles, floating logo, animated core values.
- The hero includes a lightweight, code-generated cinematic motion sequence rather than a rendered video file. A production video can be placed at `public/videos/hero.mp4` and integrated later.


## V3 cinematic video

The hero includes an original **procedurally generated** looping MP4 at `public/videos/smart-activity-cinematic.mp4`, featuring a stylized business skyline, connected network nodes and orange light accents. This is motion-graphics footage, **not AI-generated photorealistic video of Riyadh**. The video is muted, loops automatically, plays inline and is hidden for reduced-motion users. Replace the MP4 with licensed or approved real footage later if desired.


## Version 4: Partners in Success
The Partners section now displays the 20 organizations shown on the old website, using cropped logo artwork from page 15 of the supplied company profile. These are raster crops, not official standalone vector files. Replace `public/images/partners/*.png` with high-resolution assets when available. GSAP scroll reveals and hover effects are retained; mobile grid is responsive.
