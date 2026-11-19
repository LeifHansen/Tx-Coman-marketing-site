#!/usr/bin/env node
/* Post-build sanity checks (no dependencies): internal links and anchors resolve,
 * every indexable page has one H1, a title, a meta description, a canonical on
 * the official domain and valid JSON-LD; sitemap URLs exist.
 * Usage: node scripts/check.mjs */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DOMAIN = 'https://beveragecopackingtx.com';
const SKIP = new Set(['node_modules', '.git', 'src', 'scripts', 'marketing']);
const files = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (SKIP.has(f)) continue;
    if (statSync(p).isDirectory()) walk(p); else if (f.endsWith('.html')) files.push(p);
  }
})(ROOT);

let errors = 0;
const fail = (file, msg) => { errors++; console.error(`✗ ${relative(ROOT, file)}: ${msg}`); };
const idsOf = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
const resolve = (from, href) => {
  let path = href.split('#')[0].split('?')[0];
  if (!path) return from;
  const abs = path.startsWith('/') ? join(ROOT, path) : join(dirname(from), path);
  if (abs.endsWith('/')) return join(abs, 'index.html');
  return existsSync(abs) && statSync(abs).isDirectory() ? join(abs, 'index.html') : abs;
};

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const noindex = /name="robots" content="noindex/.test(html);
  const refresh = /http-equiv="refresh"/.test(html);
  if (!refresh) {
    const h1 = (html.match(/<h1[\s>]/g) || []).length;
    if (h1 !== 1) fail(file, `expected 1 <h1>, found ${h1}`);
    if (!/<title>[^<]{10,}<\/title>/.test(html)) fail(file, 'missing <title>');
    if (!noindex) {
      if (!/<meta name="description" content="[^"]{50,}"/.test(html)) fail(file, 'missing/short meta description');
      const canon = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
      if (!canon || !canon.startsWith(DOMAIN)) fail(file, `canonical not on ${DOMAIN}: ${canon}`);
    }
  }
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { fail(file, 'invalid JSON-LD: ' + e.message); }
  }
  const ids = idsOf(html);
  for (const m of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const href = m[1];
    if (/^(https?:|mailto:|tel:|data:|javascript:)/.test(href)) {
      if (href.startsWith('http://')) fail(file, `insecure URL ${href}`);
      continue;
    }
    const target = resolve(file, href);
    if (!existsSync(target)) { fail(file, `broken link ${href}`); continue; }
    const hash = href.includes('#') ? href.split('#')[1] : '';
    if (hash) {
      const tHtml = target === file ? html : readFileSync(target, 'utf8');
      if (!idsOf(tHtml).has(hash)) fail(file, `missing anchor ${href}`);
    }
  }
  for (const m of html.matchAll(/aria-(?:controls|describedby|labelledby)="([^"]+)"/g)) {
    for (const id of m[1].split(/\s+/)) if (!ids.has(id)) fail(file, `aria reference to missing id "${id}"`);
  }
  const dup = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]).filter((id, i, a) => a.indexOf(id) !== i);
  if (dup.length) fail(file, `duplicate ids: ${[...new Set(dup)].join(', ')}`);
}

const sitemap = readFileSync(join(ROOT, 'sitemap.xml'), 'utf8');
for (const m of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const path = m[1].replace(DOMAIN, '');
  if (!existsSync(resolve(join(ROOT, 'index.html'), path))) fail(join(ROOT, 'sitemap.xml'), `sitemap URL has no file: ${m[1]}`);
}

console.log(errors ? `\n${errors} problem(s) across ${files.length} HTML files.` : `✓ ${files.length} HTML files passed link, anchor, metadata and JSON-LD checks.`);
process.exit(errors ? 1 : 0);
