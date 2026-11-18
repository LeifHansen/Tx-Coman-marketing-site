#!/usr/bin/env node
/* Static site generator for beveragecopackingtx.com.
 * Usage: node scripts/build.mjs
 * Writes the HTML pages + sitemap.xml at the repo root (the Netlify publish dir).
 * No dependencies; requires Node 18+. */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, SERVICES, RESOURCES, serviceUrl, resourceUrl, abs } from '../src/site.mjs';
import { page, icon, orgSchema } from '../src/layout.mjs';
import { home } from '../src/pages/home.mjs';
import { servicePage } from '../src/pages/services.mjs';
import { guidePage, resourcesHub, minutesFor } from '../src/pages/resources.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(join(ROOT, p), 'utf8');
const hash = (p) => createHash('sha256').update(readFileSync(join(ROOT, p))).digest('hex').slice(0, 10);
const write = (p, s) => { const f = join(ROOT, p); mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, s); console.log('  wrote', p); };

const assets = { css: hash('assets/style.css'), js: hash('assets/site.js'), config: hash('assets/config.js') };
const accessKey = (read('assets/config.js').match(/accessKey:\s*"([^"]*)"/) || [])[1] || '';

/* Optional hero photograph. Run `python3 scripts/images.py <photo>` to create
 * the responsive sizes + manifest; without it the illustrated hero is used. */
let heroPhoto = null;
const manifestPath = 'assets/hero/manifest.json';
if (existsSync(join(ROOT, manifestPath))) {
  const m = JSON.parse(read(manifestPath));
  const set = (fmt) => m.sizes.map((w) => `/assets/hero/${m.name}-${w}.${fmt} ${w}w`).join(', ');
  heroPhoto = {
    width: m.width, height: m.height,
    src: `/assets/hero/${m.name}-${m.fallback}.jpg`,
    srcset: set('jpg'),
    preloadSrcset: set('webp'),
    sources: `<source type="image/webp" srcset="${set('webp')}" sizes="100vw">`
  };
}

RESOURCES.forEach((r) => (r.minutes = minutesFor(r.slug)));

console.log('Building pages…');
write('index.html', home({ assets, accessKey, heroPhoto }));
SERVICES.forEach((s) => write(`${s.slug}.html`, servicePage(s.slug, { assets, accessKey })));
RESOURCES.forEach((r) => write(`resources/${r.slug}.html`, guidePage(r.slug, { assets, accessKey })));
write('resources/index.html', resourcesHub({ assets }));

write('thank-you.html', page({
  path: '/thank-you.html', title: 'Thanks | Beverage Co-Packing Texas', description: 'Your manufacturing inquiry was received.',
  robots: 'noindex,nofollow', assets, schema: [orgSchema],
  body: `<section class="simple sand"><div class="narrow"><p class="eyebrow">Project inquiry</p><h1>Brief received. <em>Thank you.</em></h1><p class="lead">We’ll review your project for manufacturing partner fit and follow up at the email you provided.</p><div class="actions"><a class="btn" href="/resources/">Read the planning guides ${icon.arrow}</a><a class="link-arrow" href="/">Back to the homepage</a></div></div></section>`
}));

write('404.html', page({
  path: '/404.html', title: 'Page not found | Beverage Co-Packing Texas', description: 'The page you requested could not be found.',
  robots: 'noindex', assets, schema: [orgSchema],
  body: `<section class="simple sand"><div class="narrow"><p class="eyebrow">404 · Page not found</p><h1>Wrong turn. <em>Right starting point.</em></h1><p class="lead">The page you’re looking for has moved or doesn’t exist. Explore Texas co-packing connections for beverage and gummy brands:</p><ul class="checks">${SERVICES.slice(0, 5).map((s) => `<li>${icon.check}<a href="${serviceUrl(s.slug)}">${s.label}</a></li>`).join('')}</ul><div class="actions"><a class="btn" href="/#quote">Request a Quote ${icon.arrow}</a><a class="link-arrow" href="/">Return home</a></div></div></section>`
}));

/* sitemap */
const urls = ['/', ...SERVICES.map((s) => serviceUrl(s.slug)), '/resources/', ...RESOURCES.map((r) => resourceUrl(r.slug))];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${abs(u)}</loc><lastmod>${SITE.updated}</lastmod></url>`).join('\n')}
</urlset>
`);
console.log(`Done. ${urls.length} indexable URLs. Hero: ${heroPhoto ? 'photo' : 'illustration'}. Form key: ${accessKey ? 'set' : 'MISSING'}.`);
