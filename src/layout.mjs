/* Shared page chrome and reusable sections. Pure string templates, no dependencies. */
import { SITE, SERVICES, RESOURCES, FORM, abs, serviceUrl, resourceUrl } from './site.mjs';

export const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = esc;
/** Text with existing entities left intact (content strings may already contain &amp; etc.) */
const plain = (s = '') => String(s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&#39;/g, "'").replace(/&quot;/g, '"');

/* ---------- icons ---------- */
export const icon = {
  arrow: '<svg viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M5 15 15 5M7 5h8v8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  right: '<svg viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M4 10h12M11 5l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  left: '<svg viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M16 10H4M9 5l-5 5 5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  chev: '<svg class="chev" viewBox="0 0 12 8" aria-hidden="true" focusable="false"><path d="M1 1.5 6 6.5l5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m7.5 12.3 3 3 6-6.4" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  tick: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m5 12.5 4.5 4.5L19 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6.6 3.5h3l1.5 4.2-2 1.4a12 12 0 0 0 5.8 5.8l1.4-2 4.2 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg>',
  close: '<svg viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="m4 4 12 12M16 4 4 16" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  alert: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7v6.5M12 16.6v.4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',
  lock: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4.5" y="10.5" width="15" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" stroke-width="1.9"/></svg>',
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>',
  doc: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20Z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M10 12h5M10 15.5h5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>'
};

const two = (n) => String(n).padStart(2, '0');

/* ---------- JSON-LD ---------- */
export const ORG_ID = abs('/#organization');
export const orgSchema = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.name,
  url: abs('/'),
  logo: { '@type': 'ImageObject', url: SITE.logoPng, width: 512, height: 512 },
  image: SITE.ogImage,
  description: 'Independent business-to-business introduction service connecting beverage and gummy brands with potential manufacturing partners in Texas.',
  email: SITE.email,
  telephone: SITE.phone,
  areaServed: { '@type': 'State', name: 'Texas' },
  knowsAbout: ['Hemp beverage co-packing', 'CBD beverage manufacturing', 'Canned beverage co-packing', 'Bottled beverage co-packing', 'Gummy manufacturing', 'Beverage formulation']
};
export const websiteSchema = { '@type': 'WebSite', '@id': abs('/#website'), name: SITE.name, url: abs('/'), publisher: { '@id': ORG_ID }, inLanguage: 'en-US' };
export const breadcrumbSchema = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) }))
});
export const faqSchema = (faqs, path) => ({
  '@type': 'FAQPage',
  '@id': abs(path) + '#faq',
  mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: plain(q), acceptedAnswer: { '@type': 'Answer', text: plain(a) } }))
});
const ld = (graph) => `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>`;

/* ---------- document ---------- */
export function page({ path, title, description, ogType = 'website', ogTitle, schema = [], robots = 'index,follow,max-image-preview:large', body, hasForm = false, current = '', assets, preload = '', article = null }) {
  const url = abs(path === '/index.html' ? '/' : path);
  const t = ogTitle || title;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${url}">
<meta name="robots" content="${robots}">
<meta name="theme-color" content="${SITE.themeColor}">
<meta property="og:type" content="${ogType}">
<meta property="og:locale" content="en_US">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${t}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE.ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Beverage Co-Packing Texas: hemp THC, CBD, cans, bottles and gummies">
${article ? `<meta property="article:published_time" content="${article.published}">\n<meta property="article:modified_time" content="${article.modified}">\n` : ''}<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${t}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${SITE.ogImage}">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..125,600..900&amp;family=DM+Sans:opsz,wght@9..40,400..700&amp;display=swap">
<link rel="stylesheet" href="/assets/style.css?v=${assets.css}">
${preload}<script>document.documentElement.classList.add('js')</script>
${ld(schema)}
</head>
<body>
<a class="skip-link" href="#main">Skip to main content</a>
${header({ current, hasForm })}
<main id="main">
${body}
</main>
${footer({ hasForm })}
${drawer({ current, hasForm })}
${mobileCta({ hasForm })}
<script src="/assets/config.js?v=${assets.config}"></script>
<script src="/assets/site.js?v=${assets.js}" defer></script>
</body>
</html>
`;
}

const quoteHref = (hasForm) => (hasForm ? '#quote' : '/#quote');

function brand(extra = '') {
  return `<a class="brand" href="/" aria-label="${SITE.name} home"${extra}><img src="/assets/brand-mark.svg" alt="" width="42" height="42"><span class="brand-word" aria-hidden="true"><span>Beverage</span><span>Co-Packing <b>Texas</b></span></span></a>`;
}

export function header({ current, hasForm }) {
  const svc = SERVICES.map((s, i) => `<a class="dd-link" href="${serviceUrl(s.slug)}"${current === s.slug ? ' aria-current="page"' : ''}><span class="dd-num" aria-hidden="true">${two(i + 1)}</span><span class="dd-title">${s.label}</span><span class="dd-desc">${s.blurb}</span></a>`).join('');
  const res = RESOURCES.map((r, i) => `<a class="dd-link" href="${resourceUrl(r.slug)}"${current === r.slug ? ' aria-current="page"' : ''}><span class="dd-num" aria-hidden="true">G${i + 1}</span><span class="dd-title">${r.label}</span><span class="dd-desc">${r.blurb}</span></a>`).join('');
  return `<header class="site-header" id="top">
<div class="container header-inner">
${brand()}
<nav class="nav" aria-label="Primary">
<div class="nav-item" data-dropdown>
<button class="nav-link" type="button" aria-expanded="false" aria-controls="dd-services">Services ${icon.chev}</button>
<div class="dropdown" id="dd-services" hidden>
<div class="dropdown-grid">${svc}</div>
<div class="dropdown-foot"><span>Not sure which fits? A brief is enough to start.</span><a href="${quoteHref(hasForm)}">Request a quote →</a></div>
</div>
</div>
<div class="nav-item" data-dropdown>
<button class="nav-link" type="button" aria-expanded="false" aria-controls="dd-resources">Resources ${icon.chev}</button>
<div class="dropdown" id="dd-resources" hidden>
<div class="dropdown-grid one">${res}</div>
<div class="dropdown-foot"><span>Production planning guides</span><a href="/resources/"${current === 'resources' ? ' aria-current="page"' : ''}>All resources →</a></div>
</div>
</div>
<a class="nav-link" href="/#process">How It Works</a>
<a class="nav-phone" href="tel:${SITE.phone}">${icon.phone}${SITE.phoneDisplay}</a>
<a class="btn btn-sm nav-cta" href="${quoteHref(hasForm)}" data-cta="header_quote">Request a Quote ${icon.arrow}</a>
</nav>
<a class="btn btn-sm header-quote" href="${quoteHref(hasForm)}" data-cta="header_quote_mobile">Get a Quote</a>
<button class="menu-toggle" type="button" aria-label="Menu" aria-expanded="false" aria-controls="drawer" aria-haspopup="dialog"><span class="menu-toggle-bars" aria-hidden="true"><span></span><span></span><span></span></span><span class="menu-word">Menu</span></button>
</div>
</header>`;
}

function drawer({ current, hasForm }) {
  const svc = SERVICES.map((s) => `<a href="${serviceUrl(s.slug)}"${current === s.slug ? ' aria-current="page"' : ''}>${s.label}</a>`).join('');
  const res = RESOURCES.map((r) => `<a href="${resourceUrl(r.slug)}"${current === r.slug ? ' aria-current="page"' : ''}>${r.short}</a>`).join('') + `<a href="/resources/"${current === 'resources' ? ' aria-current="page"' : ''}>All resources</a>`;
  return `<div class="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Site menu" hidden>
<div class="drawer-backdrop" data-drawer-close></div>
<div class="drawer-panel">
<div class="drawer-head">${brand(' tabindex="-1"')}<button class="drawer-close" type="button" data-drawer-close aria-label="Close menu">${icon.close}</button></div>
<div class="drawer-body">
<div class="drawer-section"><button class="drawer-toggle" type="button" aria-expanded="${SERVICES.some((s) => s.slug === current) ? 'true' : 'false'}" aria-controls="dr-services">Services ${icon.chev}</button><div class="drawer-sub" id="dr-services"${SERVICES.some((s) => s.slug === current) ? '' : ' hidden'}>${svc}</div></div>
<div class="drawer-section"><button class="drawer-toggle" type="button" aria-expanded="${RESOURCES.some((r) => r.slug === current) || current === 'resources' ? 'true' : 'false'}" aria-controls="dr-resources">Resources ${icon.chev}</button><div class="drawer-sub" id="dr-resources"${RESOURCES.some((r) => r.slug === current) || current === 'resources' ? '' : ' hidden'}>${res}</div></div>
<div class="drawer-section"><a class="drawer-link" href="/#process">How It Works</a></div>
<div class="drawer-section"><a class="drawer-link" href="/#faq">FAQ</a></div>
</div>
<div class="drawer-foot">
<a class="btn btn-block" href="${quoteHref(hasForm)}" data-cta="drawer_quote">Request a Quote ${icon.arrow}</a>
<a href="tel:${SITE.phone}">${SITE.phoneDisplay}</a>
<a href="mailto:${SITE.email}">${SITE.email}</a>
</div>
</div>
</div>`;
}

function mobileCta({ hasForm }) {
  return `<div class="mobile-cta" data-mobile-cta aria-hidden="true"><a class="btn" href="${quoteHref(hasForm)}" tabindex="-1" data-cta="sticky_quote">Request a Quote ${icon.arrow}</a><a class="call" href="tel:${SITE.phone}" tabindex="-1" aria-label="Call ${SITE.phoneDisplay}">${icon.phone}</a></div>`;
}

export function footer({ hasForm }) {
  return `<footer class="footer">
<div class="container footer-top">
<div>${brand()}<p class="footer-intro">Connecting beverage and edible brands with manufacturing partners in Texas. Cans. Bottles. Gummies. Built around your brief.</p></div>
<div><h2>Manufacturing</h2><ul>${SERVICES.map((s) => `<li><a href="${serviceUrl(s.slug)}">${s.short}</a></li>`).join('')}</ul></div>
<div><h2>Resources</h2><ul>${RESOURCES.map((r) => `<li><a href="${resourceUrl(r.slug)}">${r.short}</a></li>`).join('')}<li><a href="/resources/">All resources</a></li><li><a href="/#process">How it works</a></li><li><a href="/#faq">FAQ</a></li></ul></div>
<div><h2>Start a conversation</h2><ul><li><a href="${quoteHref(hasForm)}">Submit your production brief</a></li><li><a href="mailto:${SITE.email}">${SITE.email}</a></li><li><a href="tel:${SITE.phone}">${SITE.phoneDisplay}</a></li></ul></div>
</div>
<div class="container footer-bottom">
<p>© <span data-year>2026</span> ${SITE.name}. An independent manufacturing introduction and project inquiry service, not an individual production facility. Actual capabilities, timing, minimums and project acceptance are confirmed directly with partners.</p>
<p>Information on this site is for commercial planning, not regulatory or legal advice. B2B inquiries only; we do not sell products to consumers.</p>
</div>
</footer>`;
}

/* ---------- reusable sections ---------- */
export function breadcrumbs(items) {
  return `<nav class="breadcrumb" aria-label="Breadcrumb"><ol>${items.map((it, i) => (i === items.length - 1 ? `<li><span aria-current="page">${it.name}</span></li>` : `<li><a href="${it.path}">${it.name}</a></li>`)).join('')}</ol></nav>`;
}

export function faqList(faqs) {
  return `<div class="faq-list">${faqs.map(([q, a]) => `<details><summary>${q}</summary><div><p>${a}</p></div></details>`).join('')}</div>`;
}

export function finalCta({ title = 'Your beverage. <em>The right production partner.</em>', text = 'Send the brief once. We review format, formula stage, volume and timing, then start the right manufacturing conversation.', hasForm = true, button = 'Find a Manufacturing Partner' } = {}) {
  return `<section class="final-cta" aria-labelledby="final-cta-title">
<div class="container final-inner" data-reveal>
<h2 id="final-cta-title">${title}</h2>
<p>${text}</p>
<div class="actions"><a class="btn" href="${quoteHref(hasForm)}" data-cta="final_cta">${button} ${icon.arrow}</a><a class="link-arrow" href="tel:${SITE.phone}">Or call ${SITE.phoneDisplay}</a></div>
</div>
</section>`;
}

const radios = (name, opts, preset, labelledBy) => `<div class="choices">${opts.map((o, i) => `<label class="choice"><input type="radio" name="${name}" value="${attr(o.value)}"${i === 0 ? ' required' : ''}${preset === o.value ? ' checked' : ''} aria-describedby="${labelledBy}-err"><span>${o.label}</span></label>`).join('')}</div>`;
const select = (name, id, opts, placeholder) => `<select id="${id}" name="${name}" required aria-describedby="${id}-err"><option value="">${placeholder}</option>${opts.map((o) => `<option>${o}</option>`).join('')}</select>`;
const err = (id) => `<p class="field-error" id="${id}-err" hidden></p>`;

/**
 * Production inquiry section. `preset` pre-selects product/packaging for
 * contextual service pages; `source` is passed along as form_source.
 */
export function inquiry({ preset = {}, source = 'home', title = 'Let\u2019s make your next production conversation <em>count.</em>', intro = 'Tell us what you\u2019re making. We review every brief for potential manufacturing partner fit. No production slot, minimum or quote is guaranteed until a facility confirms.', accessKey = '' } = {}) {
  return `<section class="section inquiry dark deep grid-bg" id="quote" aria-labelledby="quote-title">
<div class="container inquiry-layout">
<div class="inquiry-copy" data-reveal>
<p class="eyebrow">Production inquiry</p>
<h2 id="quote-title">${title}</h2>
<p class="lead">${intro}</p>
<ol class="next-steps">
<li><b>1</b><div><strong>Send a two-minute brief</strong><span>Format, formula stage, volume and timing. No confidential formulas needed.</span></div></li>
<li><b>2</b><div><strong>We review fit and follow up</strong><span>Clarifying questions on packaging, ingredients and scope, if needed.</span></div></li>
<li><b>3</b><div><strong>Start the right conversation</strong><span>Relevant Texas partners evaluate the project and confirm scope directly.</span></div></li>
</ol>
<div class="contact-alt"><a href="mailto:${SITE.email}">${icon.mail}${SITE.email}</a><a href="tel:${SITE.phone}">${icon.phone}${SITE.phoneDisplay}</a></div>
</div>
<div class="form-card" data-reveal data-reveal-delay="1">
<div class="form-top"><span class="label">Project inquiry</span><div class="progress no-js-hide" aria-hidden="true"><span class="progress-step is-active" data-progress="1"><i>1</i><b>Project</b></span><span class="progress-bar"></span><span class="progress-step" data-progress="2"><i>2</i><b>Contact</b></span></div></div>
<form class="lead-form" id="lead-form" action="https://api.web3forms.com/submit" method="POST" data-source="${attr(source)}">
<input type="hidden" name="access_key" value="${attr(accessKey)}">
<input type="hidden" name="subject" value="New ${SITE.name} manufacturing inquiry">
<input type="hidden" name="from_name" value="${SITE.name} website">
<input type="hidden" name="redirect" value="${abs('/thank-you.html')}">
<input type="hidden" name="form_source" value="${attr(source)}">
<div class="hp" aria-hidden="true"><label>Leave this box unchecked <input type="checkbox" name="botcheck" tabindex="-1" autocomplete="off"></label></div>
<p class="sr-only" aria-live="polite" data-step-status></p>

<fieldset class="form-step" data-step="1" data-active="true">
<legend class="step-legend" tabindex="-1">About your product</legend>
<p class="step-intro">Step 1 of 2. Quick choices; you can refine everything later.</p>
<fieldset class="choice-group" data-group="product_type" aria-describedby="product_type-err">
<legend class="group-label">Product category <span class="req" aria-hidden="true">*</span><span class="sr-only">(required)</span></legend>
${radios('product_type', FORM.products, preset.product, 'product_type')}
${err('product_type')}
</fieldset>
<fieldset class="choice-group" data-group="packaging" aria-describedby="packaging-err">
<legend class="group-label">Preferred packaging format <span class="req" aria-hidden="true">*</span><span class="sr-only">(required)</span></legend>
${radios('packaging', FORM.packaging, preset.packaging, 'packaging')}
${err('packaging')}
</fieldset>
<div class="field-row three">
<div class="field"><label for="f-volume">Estimated first run <span class="req" aria-hidden="true">*</span></label>${select('volume', 'f-volume', FORM.volume, 'Choose a range')}${err('f-volume')}</div>
<div class="field"><label for="f-stage">Development stage <span class="req" aria-hidden="true">*</span></label>${select('stage', 'f-stage', FORM.stage, 'Choose a stage')}${err('f-stage')}</div>
<div class="field"><label for="f-timeline">Desired launch <span class="req" aria-hidden="true">*</span></label>${select('timeline', 'f-timeline', FORM.timeline, 'Choose a window')}${err('f-timeline')}</div>
</div>
<div class="form-nav no-js-hide"><button class="btn btn-block" type="button" data-next>Continue to contact details ${icon.right}</button></div>
</fieldset>

<fieldset class="form-step" data-step="2" data-active="false">
<legend class="step-legend" tabindex="-1">Where should we reply?</legend>
<p class="step-intro">Step 2 of 2. We use these details only to follow up on this inquiry.</p>
<div class="field-row">
<div class="field"><label for="f-name">Full name <span class="req" aria-hidden="true">*</span></label><input id="f-name" name="name" autocomplete="name" required maxlength="120" aria-describedby="f-name-err">${err('f-name')}</div>
<div class="field"><label for="f-company">Company or brand <span class="req" aria-hidden="true">*</span></label><input id="f-company" name="company" autocomplete="organization" required maxlength="150" aria-describedby="f-company-err">${err('f-company')}</div>
</div>
<div class="field-row">
<div class="field"><label for="f-email">Business email <span class="req" aria-hidden="true">*</span></label><input id="f-email" type="email" name="email" autocomplete="email" inputmode="email" required maxlength="200" spellcheck="false" placeholder="you@company.com" aria-describedby="f-email-hint f-email-err"><p class="hint" id="f-email-hint">We reply here. A company domain helps us route your brief.</p>${err('f-email')}</div>
<div class="field"><label for="f-phone">Phone <span class="opt">(optional)</span></label><input id="f-phone" type="tel" name="phone" autocomplete="tel" inputmode="tel" maxlength="35" placeholder="(555) 555-0123" aria-describedby="f-phone-hint f-phone-err"><p class="hint" id="f-phone-hint">For a quicker follow-up call, if you prefer.</p>${err('f-phone')}</div>
</div>
<div class="field"><label for="f-website">Company website <span class="opt">(optional)</span></label><input id="f-website" type="text" name="website" autocomplete="url" inputmode="url" spellcheck="false" maxlength="255" placeholder="yourbrand.com" aria-describedby="f-website-err">${err('f-website')}</div>
<div class="field"><label for="f-message">Project details <span class="opt">(optional)</span></label><textarea id="f-message" name="message" rows="4" maxlength="2500" placeholder="Flavor direction, ingredients, formula ownership, target channels, packaging you already have…" aria-describedby="f-message-hint f-message-err"></textarea><p class="hint" id="f-message-hint">Please don’t include confidential formulas at this stage.</p>${err('f-message')}</div>
<p class="consent">By submitting, you agree we may contact you about this inquiry and share relevant project details with potential manufacturing partners.</p>
<div class="form-nav"><button class="btn-back no-js-hide" type="button" data-back>${icon.left}Back</button><button class="btn" type="submit" data-submit><span data-submit-label>Send project brief</span> ${icon.arrow}</button></div>
</fieldset>
<div class="form-alert" role="alert" data-form-alert hidden></div>
</form>
<div class="form-success" data-form-success hidden>
<div class="success-badge">${icon.tick}</div>
<h3 tabindex="-1">Brief received. Thank you.</h3>
<p>Our form provider confirmed delivery of your project brief. We’ll review it for manufacturing partner fit and follow up at the email you provided.</p>
<div class="summary" data-summary></div>
<p class="small muted">While you wait: <a href="/resources/choosing-a-beverage-copacker.html">How to choose a beverage co-packer in Texas</a>.</p>
</div>
<div class="form-foot">${icon.lock}<span>Sent securely via our form provider. Business inquiries only.</span></div>
</div>
</div>
</section>`;
}
