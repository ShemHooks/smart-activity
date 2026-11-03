# Smart Activity V5 — Riyadh Cinematic Edition

Built with Next.js, React, TypeScript and GSAP. Includes the uploaded Riyadh corporate skyline footage as the hero video, optimized for web, a fallback poster image, refined responsive typography, and all V4 partner logos and bilingual content.

## Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Hero video

`public/videos/riyadh-corporate-hero.mp4` is an optimized muted version of the user-supplied video; `public/images/riyadh-hero-poster.jpg` is its fallback. The video loops without audio. Replace these assets to update the footage.

## Notes

Contact form opens the visitor's email application; no backend is included. Verify commercial rights to the source video before deploying.


## V5.2 service videos
Five supplied AI-generated service clips are located in `public/videos/services/`. The active service tab switches the muted, looping video. The video panel is styled in `src/app/globals.css` and configured in `src/components/Site.tsx`.

## V5.3 About video
The About Us visual now uses `public/videos/about-company.mp4` with poster `public/images/about-company-poster.jpg`. The previous SA artwork was replaced; all other sections remain as in V5.2.
