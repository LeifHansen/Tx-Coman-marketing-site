/* Original vector illustrations for Beverage Co-Packing Texas.
 * Everything is drawn from primitives so it can be inlined (inheriting
 * the page's web fonts), themed, animated and kept tiny. Every composite
 * takes an `id` prefix so gradient/clip ids never collide on a page. */

const C = {
  forest: '#153B34', deep: '#0D2722', jade: '#2B7869', cream: '#F5F2EA',
  paper: '#FFFEF8', orange: '#F18A54', lime: '#D4E277', peach: '#F6B892'
};
const r1 = (n) => Math.round(n * 10) / 10;
const HEAD = "font-family=\"Archivo, 'Arial Narrow', Arial, sans-serif\"";

/* ---------- shared gradient defs ---------- */
function defs(p) {
  return `<defs>
<linearGradient id="${p}-cyl" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity=".34"/><stop offset=".09" stop-color="#000" stop-opacity=".1"/><stop offset=".2" stop-color="#fff" stop-opacity=".42"/><stop offset=".29" stop-color="#fff" stop-opacity=".06"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/><stop offset=".8" stop-color="#000" stop-opacity=".1"/><stop offset=".93" stop-color="#000" stop-opacity=".28"/><stop offset="1" stop-color="#000" stop-opacity=".42"/></linearGradient>
<linearGradient id="${p}-metal" x1="0" x2="1"><stop offset="0" stop-color="#7F8C86"/><stop offset=".22" stop-color="#F3F5EF"/><stop offset=".42" stop-color="#C3CCC6"/><stop offset=".68" stop-color="#EDF1EA"/><stop offset="1" stop-color="#76837D"/></linearGradient>
<linearGradient id="${p}-lid" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#EEF2EC"/><stop offset="1" stop-color="#A3AFA8"/></linearGradient>
<linearGradient id="${p}-green" x1="0" x2="1"><stop offset="0" stop-color="#0B2A23"/><stop offset=".16" stop-color="#245F51"/><stop offset=".25" stop-color="#7DBBA7"/><stop offset=".33" stop-color="#2E7C69"/><stop offset=".72" stop-color="#1C574A"/><stop offset=".9" stop-color="#103B32"/><stop offset="1" stop-color="#08201B"/></linearGradient>
<linearGradient id="${p}-amber" x1="0" x2="1"><stop offset="0" stop-color="#4B210B"/><stop offset=".16" stop-color="#A9551F"/><stop offset=".25" stop-color="#F4B07A"/><stop offset=".33" stop-color="#C4672C"/><stop offset=".75" stop-color="#8E4418"/><stop offset="1" stop-color="#40190A"/></linearGradient>
<linearGradient id="${p}-clear" x1="0" x2="1"><stop offset="0" stop-color="#C9D6CF" stop-opacity=".9"/><stop offset=".22" stop-color="#fff" stop-opacity=".95"/><stop offset=".34" stop-color="#E8EFEA" stop-opacity=".7"/><stop offset=".8" stop-color="#DCE6E0" stop-opacity=".75"/><stop offset="1" stop-color="#AFC0B7" stop-opacity=".95"/></linearGradient>
<filter id="${p}-blur" x="-50%" y="-200%" width="200%" height="500%"><feGaussianBlur stdDeviation="6"/></filter>
</defs>`;
}

/* ---------- primitives ---------- */
function shadow(p, cx, y, rx, op = 0.28) {
  return `<ellipse cx="${r1(cx)}" cy="${r1(y)}" rx="${r1(rx)}" ry="${r1(rx * 0.12 + 2)}" fill="${C.deep}" opacity="${op}" filter="url(#${p}-blur)"/>`;
}

function canPath(x, top, w, h) {
  const n = w * 0.08, nh = h * 0.07, bh = h * 0.04, b = top + h;
  return `M${r1(x + n)} ${r1(top)}H${r1(x + w - n)}L${r1(x + w)} ${r1(top + nh)}V${r1(b - bh)}Q${r1(x + w)} ${r1(b)} ${r1(x + w - n)} ${r1(b)}H${r1(x + n)}Q${r1(x)} ${r1(b)} ${r1(x)} ${r1(b - bh)}V${r1(top + nh)}Z`;
}

/** Aluminum can standing on `bottom`. `art` draws the printed design inside a clip. */
export function can(p, key, { x, bottom, w, h, body, art = '' }) {
  const top = bottom - h, n = w * 0.08, nh = h * 0.07, cx = x + w / 2;
  const d = canPath(x, top, w, h);
  const lidRx = w / 2 - n, lidRy = Math.max(3, lidRx * 0.17);
  return `<g>
${shadow(p, cx, bottom + 2, w * 0.62)}
<clipPath id="${p}-${key}"><path d="${d}"/></clipPath>
<g clip-path="url(#${p}-${key})">
<rect x="${r1(x)}" y="${r1(top)}" width="${r1(w)}" height="${r1(h)}" fill="${body}"/>
${art}
<rect x="${r1(x)}" y="${r1(top)}" width="${r1(w)}" height="${r1(nh + 5)}" fill="url(#${p}-metal)"/>
<rect x="${r1(x)}" y="${r1(bottom - h * 0.035)}" width="${r1(w)}" height="${r1(h * 0.035)}" fill="url(#${p}-metal)"/>
<rect x="${r1(x)}" y="${r1(top)}" width="${r1(w)}" height="${r1(h)}" fill="url(#${p}-cyl)"/>
</g>
<ellipse cx="${r1(cx)}" cy="${r1(top)}" rx="${r1(lidRx)}" ry="${r1(lidRy)}" fill="url(#${p}-lid)" stroke="#7E8B85" stroke-width="1"/>
<ellipse cx="${r1(cx)}" cy="${r1(top + 0.5)}" rx="${r1(lidRx * 0.72)}" ry="${r1(lidRy * 0.62)}" fill="none" stroke="#8D9993" stroke-width="1"/>
<rect x="${r1(cx - lidRx * 0.18)}" y="${r1(top - lidRy * 0.35)}" width="${r1(lidRx * 0.5)}" height="${r1(lidRy * 0.7)}" rx="${r1(lidRy * 0.35)}" fill="#BAC4BE" stroke="#7E8B85" stroke-width=".8"/>
</g>`;
}

function bottlePath(cx, bottom, w, h, shoulder, neck, neckW) {
  const bw = w / 2, nw = (w * neckW) / 2, sY = bottom - h * shoulder, nY = bottom - h * neck, top = bottom - h, r = Math.min(10, w * 0.12);
  return {
    d: `M${r1(cx - bw)} ${r1(bottom - r)}Q${r1(cx - bw)} ${r1(bottom)} ${r1(cx - bw + r)} ${r1(bottom)}H${r1(cx + bw - r)}Q${r1(cx + bw)} ${r1(bottom)} ${r1(cx + bw)} ${r1(bottom - r)}V${r1(sY)}C${r1(cx + bw)} ${r1(sY - (sY - nY) * 0.55)} ${r1(cx + nw)} ${r1(nY + (sY - nY) * 0.32)} ${r1(cx + nw)} ${r1(nY)}V${r1(top)}H${r1(cx - nw)}V${r1(nY)}C${r1(cx - nw)} ${r1(nY + (sY - nY) * 0.32)} ${r1(cx - bw)} ${r1(sY - (sY - nY) * 0.55)} ${r1(cx - bw)} ${r1(sY)}Z`,
    bw, nw, sY, nY, top
  };
}

/** Glass or PET bottle. glass: green | amber | clear. cap: foil | crown | screw */
export function bottle(p, key, { cx, bottom, w, h, glass = 'green', shoulder = 0.55, neck = 0.8, neckW = 0.3, cap = 'screw', capColor = C.deep, capH, label = null, liquid = null }) {
  const g = bottlePath(cx, bottom, w, h, shoulder, neck, neckW);
  const fill = glass === 'clear' ? `url(#${p}-clear)` : `url(#${p}-${glass})`;
  let out = `<g>${shadow(p, cx, bottom + 2, w * 0.6)}<clipPath id="${p}-${key}"><path d="${g.d}"/></clipPath>`;
  out += `<path d="${g.d}" fill="${fill}"/>`;
  if (liquid) {
    const ly = bottom - h * liquid.level;
    out += `<g clip-path="url(#${p}-${key})"><rect x="${r1(cx - g.bw)}" y="${r1(ly)}" width="${r1(w)}" height="${r1(bottom - ly)}" fill="${liquid.color}" opacity=".88"/><rect x="${r1(cx - g.bw)}" y="${r1(ly)}" width="${r1(w)}" height="${r1(bottom - ly)}" fill="url(#${p}-cyl)" opacity=".7"/><path d="M${r1(cx - g.bw)} ${r1(ly)}h${r1(w)}" stroke="#fff" stroke-opacity=".6" stroke-width="1.4"/></g>`;
    if (glass === 'clear') {
      for (let i = 1; i <= 3; i++) {
        const ry = g.sY + ((bottom - g.sY) * i) / 4.3;
        out += `<path d="M${r1(cx - g.bw)} ${r1(ry)}h${r1(w)}" stroke="#fff" stroke-opacity=".55" stroke-width="2"/>`;
      }
    }
  }
  if (label) {
    const ly1 = bottom - h * label.top, ly2 = bottom - h * label.bottom;
    out += `<g clip-path="url(#${p}-${key})"><rect x="${r1(cx - g.bw)}" y="${r1(ly1)}" width="${r1(w)}" height="${r1(ly2 - ly1)}" fill="${label.color}"/>${label.art || ''}<rect x="${r1(cx - g.bw)}" y="${r1(ly1)}" width="${r1(w)}" height="${r1(ly2 - ly1)}" fill="url(#${p}-cyl)" opacity=".75"/></g>`;
  }
  // glass highlights
  out += `<rect x="${r1(cx - g.bw + w * 0.13)}" y="${r1(g.sY + 8)}" width="${r1(Math.max(2.5, w * 0.06))}" height="${r1(Math.max(0, (label ? bottom - h * label.top - 6 : bottom - 12) - g.sY - 8))}" rx="2" fill="#fff" opacity=".32"/>`;
  out += `<rect x="${r1(cx - g.nw + g.nw * 0.35)}" y="${r1(g.top + h * 0.06)}" width="${r1(Math.max(1.6, g.nw * 0.3))}" height="${r1((g.nY - g.top) * 0.75)}" rx="1" fill="#fff" opacity=".3"/>`;
  // lip
  out += `<rect x="${r1(cx - g.nw - 1.6)}" y="${r1(g.top + 2)}" width="${r1(g.nw * 2 + 3.2)}" height="5" rx="2" fill="${glass === 'clear' ? '#C9D6CF' : '#0B2A23'}" opacity=".85"/>`;
  // closure
  const ch = capH ?? (cap === 'foil' ? h * 0.13 : cap === 'crown' ? 9 : 14);
  if (cap === 'foil') {
    out += `<rect x="${r1(cx - g.nw - 2)}" y="${r1(g.top - 3)}" width="${r1(g.nw * 2 + 4)}" height="${r1(ch)}" rx="2.5" fill="${capColor}"/><rect x="${r1(cx - g.nw - 2)}" y="${r1(g.top - 3)}" width="${r1(g.nw * 2 + 4)}" height="${r1(ch)}" rx="2.5" fill="url(#${p}-cyl)"/><path d="M${r1(cx - g.nw - 2)} ${r1(g.top - 3 + ch - 6)}h${r1(g.nw * 2 + 4)}" stroke="${C.cream}" stroke-opacity=".6" stroke-width="1.5"/>`;
  } else if (cap === 'crown') {
    const cw = g.nw * 2 + 6;
    let teeth = '';
    for (let i = 0; i < 7; i++) teeth += `<rect x="${r1(cx - cw / 2 + (i * cw) / 7 + 0.6)}" y="${r1(g.top + ch - 5)}" width="${r1(cw / 7 - 1.2)}" height="4" fill="${capColor}"/>`;
    out += `<rect x="${r1(cx - cw / 2)}" y="${r1(g.top - 4)}" width="${r1(cw)}" height="${r1(ch - 3)}" rx="2" fill="${capColor}"/>${teeth}<rect x="${r1(cx - cw / 2)}" y="${r1(g.top - 4)}" width="${r1(cw)}" height="${r1(ch)}" fill="url(#${p}-cyl)"/>`;
  } else {
    const cw = g.nw * 2 + 5;
    let ribs = '';
    for (let i = 1; i < 6; i++) ribs += `<path d="M${r1(cx - cw / 2 + (i * cw) / 6)} ${r1(g.top - 4)}v${r1(ch - 2)}" stroke="#000" stroke-opacity=".18" stroke-width="1"/>`;
    out += `<rect x="${r1(cx - cw / 2)}" y="${r1(g.top - 6)}" width="${r1(cw)}" height="${r1(ch)}" rx="3" fill="${capColor}"/>${ribs}<rect x="${r1(cx - cw / 2)}" y="${r1(g.top - 6)}" width="${r1(cw)}" height="${r1(ch)}" rx="3" fill="url(#${p}-cyl)"/>`;
  }
  return out + '</g>';
}

/** Translucent cube gummy centered on (x, y). */
export function gummy(x, y, s, color, rot = 0) {
  const tone = {
    [C.orange]: '#C8603A', [C.lime]: '#A3B447', [C.jade]: '#1C574A', [C.peach]: '#D98767', '#3E9A86': '#1F6355'
  }[color] || '#00000055';
  const r = s * 0.3;
  return `<g transform="translate(${r1(x)} ${r1(y)}) rotate(${rot})"><rect x="${r1(-s / 2)}" y="${r1(-s / 2 + s * 0.14)}" width="${r1(s)}" height="${r1(s)}" rx="${r1(r)}" fill="${tone}"/><rect x="${r1(-s / 2)}" y="${r1(-s / 2)}" width="${r1(s)}" height="${r1(s)}" rx="${r1(r)}" fill="${color}"/><rect x="${r1(-s / 2 + s * 0.16)}" y="${r1(-s / 2 + s * 0.13)}" width="${r1(s * 0.42)}" height="${r1(s * 0.2)}" rx="${r1(s * 0.1)}" fill="#fff" opacity=".5"/><circle cx="${r1(s * 0.22)}" cy="${r1(s * 0.2)}" r="${r1(s * 0.05)}" fill="#fff" opacity=".55"/><circle cx="${r1(-s * 0.12)}" cy="${r1(s * 0.26)}" r="${r1(s * 0.04)}" fill="#fff" opacity=".45"/></g>`;
}

/** Stand-up pouch with a product window. */
export function pouch(p, key, { cx, bottom, w, h, color = C.deep, labelColor = C.lime, ink = C.deep, title = 'GUMMIES', sub = '' }) {
  const x0 = cx - w / 2, x1 = cx + w / 2, top = bottom - h;
  const d = `M${r1(x0 + 2)} ${r1(top)}H${r1(x1 - 2)}L${r1(x1 + 3)} ${r1(bottom - 14)}Q${r1(x1 + 4)} ${r1(bottom)} ${r1(x1 - 10)} ${r1(bottom)}H${r1(x0 + 10)}Q${r1(x0 - 4)} ${r1(bottom)} ${r1(x0 - 3)} ${r1(bottom - 14)}Z`;
  const wy = top + h * 0.5, ww = w * 0.56, wh = h * 0.24;
  return `<g>${shadow(p, cx, bottom + 2, w * 0.62)}
<clipPath id="${p}-${key}"><path d="${d}"/></clipPath>
<path d="${d}" fill="${color}"/>
<g clip-path="url(#${p}-${key})">
<rect x="${r1(x0 - 4)}" y="${r1(top)}" width="${r1(w + 8)}" height="${r1(h * 0.1)}" fill="#000" opacity=".22"/>
<path d="M${r1(x0)} ${r1(top + h * 0.16)}H${r1(x1)}" stroke="#fff" stroke-opacity=".28" stroke-width="1.4" stroke-dasharray="3 3"/>
<rect x="${r1(x0 - 4)}" y="${r1(top + h * 0.22)}" width="${r1(w + 8)}" height="${r1(h * 0.2)}" fill="${labelColor}"/>
<text x="${r1(cx)}" y="${r1(top + h * 0.34)}" text-anchor="middle" ${HEAD} font-weight="800" font-size="${r1(w * 0.15)}" letter-spacing=".5" fill="${ink}">${title}</text>
${sub ? `<text x="${r1(cx)}" y="${r1(top + h * 0.395)}" text-anchor="middle" ${HEAD} font-weight="700" font-size="${r1(w * 0.075)}" letter-spacing="1" fill="${ink}">${sub}</text>` : ''}
<rect x="${r1(cx - ww / 2)}" y="${r1(wy)}" width="${r1(ww)}" height="${r1(wh)}" rx="${r1(wh / 2)}" fill="${C.cream}" opacity=".95"/>
<g clip-path="url(#${p}-${key}w)">${gummy(cx - ww * 0.22, wy + wh * 0.62, wh * 0.5, C.orange, -10)}${gummy(cx + ww * 0.04, wy + wh * 0.66, wh * 0.48, C.lime, 12)}${gummy(cx + ww * 0.28, wy + wh * 0.6, wh * 0.46, C.peach, -4)}</g>
<path d="M${r1(x0 - 2)} ${r1(bottom - 15)}Q${r1(cx)} ${r1(bottom - 27)} ${r1(x1 + 2)} ${r1(bottom - 15)}" fill="none" stroke="#000" stroke-opacity=".25" stroke-width="1.5"/>
<rect x="${r1(x0 - 4)}" y="${r1(top)}" width="${r1(w + 8)}" height="${r1(h)}" fill="url(#${p}-cyl)" opacity=".7"/>
</g>
<clipPath id="${p}-${key}w"><rect x="${r1(cx - ww / 2)}" y="${r1(wy)}" width="${r1(ww)}" height="${r1(wh)}" rx="${r1(wh / 2)}"/></clipPath>
</g>`;
}

/** Wide-mouth jar */
export function jar(p, key, { cx, bottom, w, h, body = C.paper, lid = C.orange, labelColor = C.forest, ink = C.lime, title = 'GUMMIES' }) {
  const x = cx - w / 2, top = bottom - h, lh = h * 0.2;
  let ribs = '';
  for (let i = 1; i < 10; i++) ribs += `<path d="M${r1(x + 2 + (i * (w - 4)) / 10)} ${r1(top)}v${r1(lh)}" stroke="#000" stroke-opacity=".16"/>`;
  return `<g>${shadow(p, cx, bottom + 2, w * 0.6)}
<rect x="${r1(x)}" y="${r1(top + lh - 2)}" width="${r1(w)}" height="${r1(h - lh + 2)}" rx="${r1(w * 0.12)}" fill="${body}"/>
<rect x="${r1(x)}" y="${r1(top + h * 0.38)}" width="${r1(w)}" height="${r1(h * 0.36)}" fill="${labelColor}"/>
<text x="${r1(cx)}" y="${r1(top + h * 0.6)}" text-anchor="middle" ${HEAD} font-weight="800" font-size="${r1(w * 0.14)}" letter-spacing=".5" fill="${ink}">${title}</text>
<rect x="${r1(x)}" y="${r1(top + lh - 2)}" width="${r1(w)}" height="${r1(h - lh + 2)}" rx="${r1(w * 0.12)}" fill="url(#${p}-cyl)" opacity=".6"/>
<rect x="${r1(x + 2)}" y="${r1(top)}" width="${r1(w - 4)}" height="${r1(lh)}" rx="4" fill="${lid}"/>${ribs}
<rect x="${r1(x + 2)}" y="${r1(top)}" width="${r1(w - 4)}" height="${r1(lh)}" rx="4" fill="url(#${p}-cyl)"/>
</g>`;
}

export function star(cx, cy, R, fill, rot = -90) {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const a = ((rot + i * 36) * Math.PI) / 180, rr = i % 2 ? R * 0.42 : R;
    pts.push(`${r1(cx + rr * Math.cos(a))},${r1(cy + rr * Math.sin(a))}`);
  }
  return `<polygon points="${pts.join(' ')}" fill="${fill}"/>`;
}

function txt(x, y, s, { size = 12, weight = 800, fill = C.deep, anchor = 'middle', ls = 0, stretch = '' } = {}) {
  return `<text x="${r1(x)}" y="${r1(y)}" text-anchor="${anchor}" ${HEAD} font-weight="${weight}" font-size="${size}"${ls ? ` letter-spacing="${ls}"` : ''}${stretch ? ` font-stretch="${stretch}"` : ''} fill="${fill}">${s}</text>`;
}

/* ---------- can label designs ---------- */
function canArtGoodStuff(x, top, w, h) {
  const cx = x + w / 2;
  return `<rect x="${r1(x)}" y="${r1(top + h * 0.3)}" width="${r1(w)}" height="${r1(h * 0.46)}" fill="${C.cream}"/>
<rect x="${r1(x)}" y="${r1(top + h * 0.3)}" width="${r1(w)}" height="${r1(h * 0.035)}" fill="${C.forest}"/>
${txt(cx, top + h * 0.47, 'GOOD', { size: r1(w * 0.25), fill: C.forest, ls: -0.5 })}
${txt(cx, top + h * 0.6, 'STUFF.', { size: r1(w * 0.25), fill: C.forest, ls: -0.5 })}
<rect x="${r1(cx - w * 0.22)}" y="${r1(top + h * 0.645)}" width="${r1(w * 0.44)}" height="${r1(h * 0.02)}" rx="2" fill="${C.orange}"/>
${txt(cx, top + h * 0.72, 'SPARKLING &#183; 12 FL OZ', { size: r1(w * 0.068), weight: 700, fill: C.jade, ls: 0.8 })}
${star(cx, top + h * 0.2, w * 0.07, C.cream)}
${txt(cx, top + h * 0.88, 'TEXAS-MADE', { size: r1(w * 0.07), weight: 800, fill: C.deep, ls: 1.4 })}`;
}

function canArtSlim(x, top, w, h, { body = C.jade, ink = C.lime, word = 'NEXT LEVEL' } = {}) {
  const cx = x + w / 2, cy = top + h * 0.53;
  return `<rect x="${r1(x)}" y="${r1(top + h * 0.12)}" width="${r1(w)}" height="${r1(h * 0.05)}" fill="${C.orange}"/>
<g transform="translate(${r1(cx + w * 0.12)} ${r1(cy)}) rotate(-90)">${txt(0, 0, word, { size: r1(w * 0.29), fill: ink, ls: -0.3 })}</g>
<path d="M${r1(x)} ${r1(top + h * 0.86)}h${r1(w)}" stroke="${C.cream}" stroke-width="${r1(h * 0.012)}"/>
${txt(cx, top + h * 0.925, '8.4 OZ', { size: r1(w * 0.12), weight: 700, fill: C.cream, ls: 0.6 })}`;
}

function canArtStripes(x, top, w, h, { stripe = C.orange, ink = C.cream, word = 'TALL', sub = '16 FL OZ' } = {}) {
  const cx = x + w / 2;
  let s = '';
  [0.2, 0.25, 0.3].forEach((t, i) => (s += `<rect x="${r1(x)}" y="${r1(top + h * t)}" width="${r1(w)}" height="${r1(h * (0.025 - i * 0.004))}" fill="${stripe}"/>`));
  return `${s}${txt(cx, top + h * 0.56, word, { size: r1(w * 0.24), fill: ink })}${txt(cx, top + h * 0.64, sub, { size: r1(w * 0.075), weight: 700, fill: C.lime, ls: 0.8 })}<circle cx="${r1(cx)}" cy="${r1(top + h * 0.8)}" r="${r1(w * 0.09)}" fill="${stripe}"/>`;
}

/* ---------- hero ---------- */
export function heroArt(p = 'h') {
  const ground = 528;
  const ARCH = 'M130 612V280A250 250 0 0 1 630 280V612Z';
  let grid = '';
  for (let gx = 130; gx <= 630; gx += 25) grid += `<path d="M${gx} 20V612"/>`;
  for (let gy = 30; gy <= 612; gy += 25) grid += `<path d="M120 ${gy}H640"/>`;
  let stripes = '';
  [[392, 4], [414, 6], [438, 8], [464, 10], [492, 12]].forEach(([y, hh]) => (stripes += `<rect x="190" y="${y}" width="380" height="${hh}" fill="${C.cream}"/>`));
  let rollers = '';
  for (let rx = 150; rx <= 612; rx += 33) rollers += `<g class="roller" style="transform-origin:${rx}px 553px"><circle cx="${rx}" cy="553" r="8.5" fill="${C.deep}"/><path d="M${rx - 5} 553h10" stroke="#5E7C74" stroke-width="2"/></g>`;

  const callout = (ax, ay, bx, by, lx, anchor, t1, t2) =>
    `<g class="callout"><path d="M${ax} ${ay}L${bx} ${by}H${lx}" fill="none" stroke="${C.lime}" stroke-width="1.2" stroke-opacity=".75"/><circle cx="${ax}" cy="${ay}" r="4" fill="${C.deep}" stroke="${C.lime}" stroke-width="2"/>${txt(lx, by - 9, t1, { size: 15, fill: C.cream, anchor, ls: 0.4 })}${txt(lx, by + 15, t2, { size: 9.5, weight: 700, fill: C.lime, anchor, ls: 1.6 })}</g>`;

  // Products
  const amber = bottle(p, 'amb', {
    cx: 202, bottom: ground, w: 62, h: 196, glass: 'amber', shoulder: 0.5, neck: 0.76, neckW: 0.38, cap: 'crown', capColor: C.deep,
    label: { top: 0.42, bottom: 0.14, color: C.cream, art: `${txt(202, ground - 196 * 0.315, 'PUSH', { size: 12.5, fill: C.deep, ls: 0.4 })}${txt(202, ground - 196 * 0.25, 'PLAY', { size: 12.5, fill: C.deep, ls: 0.4 })}${txt(202, ground - 196 * 0.19, '12 FL OZ', { size: 6.5, weight: 700, fill: C.jade, ls: 1.2 })}` }
  });
  const big = bottle(p, 'b750', {
    cx: 290, bottom: ground, w: 94, h: 338, glass: 'green', shoulder: 0.56, neck: 0.8, neckW: 0.3, cap: 'foil', capColor: C.orange,
    label: {
      top: 0.46, bottom: 0.12, color: C.cream,
      art: `<rect x="243" y="${r1(ground - 338 * 0.46)}" width="94" height="6" fill="${C.forest}"/>${txt(290, ground - 338 * 0.385, 'SPARKLING', { size: 8.5, weight: 700, fill: C.jade, ls: 1.6 })}${txt(290, ground - 338 * 0.275, '750', { size: 34, fill: C.forest, ls: -1 })}${txt(290, ground - 338 * 0.225, 'mL &#183; SHAREABLE', { size: 8, weight: 700, fill: C.forest, ls: 1 })}${star(290, ground - 338 * 0.165, 5.5, C.orange)}`
    }
  });
  const canX = 350, canW = 112, canH = 198;
  const can12 = can(p, 'c12', { x: canX, bottom: ground, w: canW, h: canH, body: C.orange, art: canArtGoodStuff(canX, ground - canH, canW, canH) });
  const slimX = 472, slimW = 64, slimH = 218;
  const slim = can(p, 'cs', { x: slimX, bottom: ground, w: slimW, h: slimH, body: C.forest, art: canArtSlim(slimX, ground - slimH, slimW, slimH) });
  const bag = pouch(p, 'pch', { cx: 584, bottom: ground, w: 74, h: 136, color: C.deep, labelColor: C.lime, ink: C.deep, title: 'GUMMIES', sub: 'PECTIN &#183; 20 CT' });

  const gummies = [
    gummy(338, 516, 20, C.lime, -12), gummy(361, 518, 18, C.peach, 10), gummy(452, 515, 22, '#3E9A86', 14),
    gummy(476, 518, 18, C.orange, -8), gummy(548, 517, 20, C.orange, 18), gummy(624, 518, 17, C.lime, -16)
  ].join('');

  const badge = `<g class="badge" transform="translate(626 104)"><circle r="58" fill="${C.orange}"/><circle r="58" fill="none" stroke="${C.deep}" stroke-width="2"/><g class="badge-ring"><path id="${p}-ring" d="M0 0m-45 0a45 45 0 1 1 90 0a45 45 0 1 1 -90 0" fill="none"/><text ${HEAD} font-weight="800" font-size="10.5" letter-spacing="1.5" fill="${C.deep}"><textPath href="#${p}-ring" textLength="278" lengthAdjust="spacing">BUILT TO SPEC &#8226; MADE IN TEXAS &#8226;</textPath></text></g><circle r="33" fill="${C.deep}"/>${star(0, 0, 18, C.lime)}</g>`;

  return `<svg class="hero-art" viewBox="-30 0 820 640" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="${p}-title">
<title id="${p}-title">Branded aluminum cans, a 750 mL glass bottle, an amber glass bottle and a pouch of gummies moving along a production conveyor</title>
${defs(p)}
<clipPath id="${p}-arch"><path d="${ARCH}"/></clipPath>
<clipPath id="${p}-sun"><circle cx="380" cy="320" r="178"/></clipPath>
<path d="${ARCH}" fill="${C.cream}"/>
<g clip-path="url(#${p}-arch)">
<g stroke="${C.jade}" stroke-opacity=".13" stroke-width="1">${grid}</g>
<circle cx="380" cy="320" r="178" fill="${C.lime}"/>
<g clip-path="url(#${p}-sun)">${stripes}</g>
<circle cx="380" cy="320" r="214" fill="none" stroke="${C.jade}" stroke-opacity=".28" stroke-width="1.2" stroke-dasharray="2 7"/>
</g>
<g class="belt">
<rect x="128" y="${ground}" width="504" height="16" rx="3" fill="${C.deep}"/>
<path class="belt-dash" d="M134 ${ground + 8}H626" stroke="#3D5E56" stroke-width="3" stroke-dasharray="16 12"/>
<rect x="128" y="${ground}" width="504" height="3" fill="${C.jade}"/>
${rollers}
<rect x="124" y="563" width="512" height="10" rx="2" fill="${C.deep}"/>
<rect x="176" y="573" width="10" height="39" fill="${C.deep}"/><rect x="375" y="573" width="10" height="39" fill="${C.deep}"/><rect x="574" y="573" width="10" height="39" fill="${C.deep}"/><path d="M130 611H630" stroke="${C.deep}" stroke-width="2"/>
</g>
<g class="products">${amber}${big}${can12}${slim}${bag}${gummies}</g>
${callout(290, 222, 150, 150, -22, 'start', '750 ML', 'GLASS BOTTLE')}
${callout(202, 400, 110, 456, -22, 'start', 'AMBER GLASS', 'SINGLE-SERVE')}
${callout(258, 553, 110, 600, -22, 'start', 'FILL &#183; CAP &#183; PACK', 'PRODUCTION LINE')}
${callout(462, 378, 640, 300, 782, 'end', '12 OZ CAN', '355 ML ALUMINUM')}
${callout(620, 470, 660, 452, 782, 'end', 'GUMMIES', 'POUCH &#183; JAR')}
${badge}
</svg>`;
}

/* ---------- format showcase art ---------- */
function dimLine(x, y1, y2, label, color = C.jade) {
  return `<g class="dim"><path d="M${x} ${y1}V${y2}M${x - 5} ${y1}h10M${x - 5} ${y2}h10" stroke="${color}" stroke-width="1.2"/>${txt(x - 8, (y1 + y2) / 2 + 4, label, { size: 10, weight: 700, fill: color, anchor: 'end', ls: 1 })}</g>`;
}
function baseline(y, x1, x2, color = C.deep) {
  return `<path d="M${x1} ${y}H${x2}" stroke="${color}" stroke-width="2"/><g stroke="${color}" stroke-opacity=".4">${Array.from({ length: Math.floor((x2 - x1) / 20) + 1 }, (_, i) => `<path d="M${x1 + i * 20} ${y}v6"/>`).join('')}</g>`;
}
function caption(x, y, a, b, color = C.deep) {
  return `${txt(x, y, a, { size: 13, fill: color, ls: 0.4 })}${txt(x, y + 15, b, { size: 9, weight: 700, fill: color === C.deep ? C.jade : C.lime, ls: 1.4 })}`;
}

export function cansArt(p = 'fc') {
  const g = 250;
  const s = can(p, 's', { x: 70, bottom: g, w: 50, h: 170, body: C.jade, art: canArtSlim(70, g - 170, 50, 170, { word: 'SLIM' }) });
  const m = can(p, 'm', { x: 148, bottom: g, w: 84, h: 150, body: C.orange, art: canArtGoodStuff(148, g - 150, 84, 150) });
  const t = can(p, 't', { x: 262, bottom: g, w: 84, h: 196, body: C.forest, art: canArtStripes(262, g - 196, 84, 196) });
  return `<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Slim, standard and tall aluminum beverage cans">${defs(p)}${baseline(g + 1, 20, 370)}${s}${m}${t}${dimLine(30, g - 196, g, '')}${caption(95, 280, '8.4 OZ', 'SLIM')}${caption(190, 280, '12 OZ', 'STANDARD')}${caption(304, 280, '16 OZ', 'TALL')}</svg>`;
}

export function bottlesArt(p = 'fb') {
  const g = 250;
  const shot = bottle(p, 'sh', { cx: 58, bottom: g, w: 34, h: 82, glass: 'amber', shoulder: 0.55, neck: 0.74, neckW: 0.46, cap: 'screw', capColor: C.deep, capH: 11, label: { top: 0.5, bottom: 0.14, color: C.lime } });
  const pet = bottle(p, 'pt', { cx: 128, bottom: g, w: 58, h: 170, glass: 'clear', shoulder: 0.66, neck: 0.84, neckW: 0.42, cap: 'screw', capColor: C.orange, liquid: { level: 0.7, color: C.lime }, label: { top: 0.5, bottom: 0.3, color: C.forest, art: txt(128, g - 170 * 0.37, 'PET', { size: 13, fill: C.lime }) } });
  const amb = bottle(p, 'am', { cx: 204, bottom: g, w: 56, h: 176, glass: 'amber', shoulder: 0.5, neck: 0.76, neckW: 0.38, cap: 'crown', capColor: C.forest, label: { top: 0.42, bottom: 0.14, color: C.cream, art: txt(204, g - 176 * 0.25, 'GLASS', { size: 11, fill: C.deep }) } });
  const big = bottle(p, 'bg', { cx: 300, bottom: g, w: 76, h: 236, glass: 'green', shoulder: 0.56, neck: 0.8, neckW: 0.3, cap: 'foil', capColor: C.orange, label: { top: 0.46, bottom: 0.12, color: C.cream, art: `${txt(300, g - 236 * 0.25, '750', { size: 24, fill: C.forest, ls: -0.5 })}${txt(300, g - 236 * 0.19, 'mL', { size: 9, weight: 700, fill: C.jade, ls: 1 })}` } });
  return `<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A shot bottle, a PET bottle, an amber glass bottle and a 750 mL glass bottle">${defs(p)}${baseline(g + 1, 20, 370, C.cream)}${shot}${pet}${amb}${big}${caption(58, 280, '2 OZ', 'SHOT', C.cream)}${caption(128, 280, '16.9 OZ', 'PET', C.cream)}${caption(204, 280, '12 OZ', 'GLASS', C.cream)}${caption(300, 280, '750 ML', 'SHAREABLE', C.cream)}</svg>`;
}

export function gummiesArt(p = 'fg') {
  const g = 250;
  const bag = pouch(p, 'pc', { cx: 110, bottom: g, w: 104, h: 176, color: C.forest, labelColor: C.orange, ink: C.deep, title: 'GUMMIES', sub: 'PECTIN &#183; 30 CT' });
  const j = jar(p, 'jr', { cx: 238, bottom: g, w: 92, h: 112, body: C.paper, lid: C.jade, labelColor: C.forest, ink: C.lime, title: 'DAILY' });
  const pcs = [gummy(310, 238, 24, C.orange, -12), gummy(338, 240, 22, C.lime, 8), gummy(324, 214, 22, C.peach, 18), gummy(352, 216, 18, '#3E9A86', -6)].join('');
  return `<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A stand-up gummy pouch, a gummy jar and individual gummy pieces">${defs(p)}${baseline(g + 1, 20, 370)}${bag}${j}${pcs}${caption(110, 280, 'POUCH', 'STAND-UP &#183; ZIP')}${caption(238, 280, 'JAR', 'WIDE-MOUTH')}${caption(330, 280, 'PIECES', 'WEIGHT &#183; SHAPE')}</svg>`;
}

/* ---------- service hero art (compact) ---------- */
export function serviceArt(kind, p = 's', bg = C.forest) {
  const g = 300;
  const back = `<circle cx="200" cy="170" r="138" fill="${C.lime}"/><g clip-path="url(#${p}-sun)">${[[210, 4], [232, 6], [256, 8], [282, 10]].map(([y, h]) => `<rect x="40" y="${y}" width="320" height="${h}" fill="${bg}"/>`).join('')}</g><clipPath id="${p}-sun"><circle cx="200" cy="170" r="138"/></clipPath>`;
  const floor = `<rect x="20" y="${g}" width="360" height="10" rx="3" fill="${C.deep}"/><rect x="20" y="${g}" width="360" height="2.5" fill="${C.jade}"/>`;
  let items = '';
  const c12 = (x, body = C.orange) => can(p, 'c' + x, { x, bottom: g, w: 92, h: 162, body, art: canArtGoodStuff(x, g - 162, 92, 162) });
  const cSlim = (x) => can(p, 's' + x, { x, bottom: g, w: 54, h: 182, body: C.jade, art: canArtSlim(x, g - 182, 54, 182) });
  const cTall = (x) => can(p, 't' + x, { x, bottom: g, w: 84, h: 206, body: C.deep, art: canArtStripes(x, g - 206, 84, 206) });
  const b750 = (cx) => bottle(p, 'b' + cx, { cx, bottom: g, w: 80, h: 262, glass: 'green', shoulder: 0.56, neck: 0.8, neckW: 0.3, cap: 'foil', capColor: C.orange, label: { top: 0.46, bottom: 0.12, color: C.cream, art: `${txt(cx, g - 262 * 0.26, '750', { size: 26, fill: C.forest, ls: -0.5 })}${txt(cx, g - 262 * 0.2, 'mL', { size: 9, weight: 700, fill: C.jade, ls: 1 })}` } });
  const bAmb = (cx) => bottle(p, 'a' + cx, { cx, bottom: g, w: 58, h: 180, glass: 'amber', shoulder: 0.5, neck: 0.76, neckW: 0.38, cap: 'crown', capColor: C.deep, label: { top: 0.42, bottom: 0.14, color: C.cream, art: txt(cx, g - 180 * 0.25, 'TONIC', { size: 11, fill: C.deep }) } });
  const bPet = (cx) => bottle(p, 'p' + cx, { cx, bottom: g, w: 60, h: 176, glass: 'clear', shoulder: 0.66, neck: 0.84, neckW: 0.42, cap: 'screw', capColor: C.orange, liquid: { level: 0.7, color: C.orange }, label: { top: 0.5, bottom: 0.3, color: C.forest, art: txt(cx, g - 176 * 0.37, 'CBD', { size: 12, fill: C.lime }) } });
  const bag = (cx) => pouch(p, 'g' + cx, { cx, bottom: g, w: 110, h: 184, color: C.forest, labelColor: C.orange, ink: C.deep, title: 'GUMMIES', sub: 'PECTIN &#183; 30 CT' });
  const jr = (cx) => jar(p, 'j' + cx, { cx, bottom: g, w: 92, h: 112, body: C.paper, lid: C.jade, labelColor: C.forest, ink: C.lime, title: 'DAILY' });
  const flask = (cx) => `<g>${shadow(p, cx, g + 2, 50)}<path d="M${cx - 16} ${g - 190}h32v62l48 108c6 14-3 20-16 20H${cx - 52}c-13 0-22-6-16-20l48-108Z" fill="${C.paper}" fill-opacity=".9" stroke="${C.deep}" stroke-width="3"/><path d="M${cx - 42} ${g - 60}h84l14 32c4 9-2 14-12 14H${cx - 56}c-10 0-16-5-12-14Z" fill="${C.orange}"/><path d="M${cx - 22} ${g - 196}h44" stroke="${C.deep}" stroke-width="5" stroke-linecap="round"/>${[0, 1, 2].map((i) => `<path d="M${cx - 16} ${g - 170 + i * 16}h12" stroke="${C.jade}" stroke-width="2"/>`).join('')}<circle cx="${cx + 8}" cy="${g - 44}" r="4" fill="#fff" opacity=".6"/><circle cx="${cx - 14}" cy="${g - 34}" r="3" fill="#fff" opacity=".5"/></g>`;
  switch (kind) {
    case 'thc': items = b750(130) + c12(186) + cSlim(292); break;
    case 'cbd': items = bPet(110) + bAmb(186) + c12(232, C.jade); break;
    case 'cans': items = cSlim(50) + c12(124) + cTall(236); break;
    case 'bottles': items = bPet(90) + bAmb(170) + b750(270); break;
    case 'gummies': items = bag(130) + jr(268) + gummy(320, 288, 22, C.orange, -12) + gummy(346, 290, 18, C.lime, 10); break;
    case 'formulation': items = flask(140) + c12(232); break;
    default: items = c12(150);
  }
  if (kind === 'functional') items = cSlim(56) + bPet(156) + can(p, 'cf', { x: 210, bottom: g, w: 92, h: 162, body: C.forest, art: canArtStripes(210, g - 162, 92, 162, { word: 'CALM', sub: 'BOTANICAL' }) });
  return `<svg class="service-art" viewBox="0 0 400 330" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">${defs(p)}${back}${floor}${items}</svg>`;
}

export const C_COLORS = C;
