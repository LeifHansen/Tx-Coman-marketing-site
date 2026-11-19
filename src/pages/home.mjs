import { SITE, SERVICES, RESOURCES, serviceUrl, resourceUrl } from '../site.mjs';
import { page, icon, inquiry, faqList, finalCta, orgSchema, websiteSchema, faqSchema } from '../layout.mjs';
import { heroArt, cansArt, bottlesArt, gummiesArt } from '../art.mjs';

const TAGS = {
  'hemp-beverage-co-packing': ['Cans', 'Glass & PET', '750 mL'],
  'cbd-beverage-manufacturing': ['Sparkling', 'Still', 'Tonics'],
  'canned-beverage-co-packing': ['Slim', 'Standard', 'Tall', 'Printed or labeled'],
  'bottled-beverage-co-packing': ['Glass', 'PET', 'Shots', '750 mL'],
  'hemp-gummy-co-packing': ['Pectin', 'Gelatin', 'Pouches & jars'],
  'beverage-formulation': ['Concept', 'Bench', 'Scale-up'],
  'functional-co-packing': ['Botanicals', 'Cans', 'Bottles']
};

export const HOME_FAQS = [
  ['Are you a beverage manufacturing facility?', 'No. Beverage Co-Packing Texas is an independent project inquiry and manufacturing introduction service that connects qualified brands with potential Texas manufacturing partners.'],
  ['Who is this service for?', 'Brands, founders and product teams planning commercial production of hemp-derived THC or CBD beverages, functional drinks or gummies. Inquiries are business-to-business only; we do not sell products to consumers.'],
  ['Can you help with hemp THC and CBD beverage production?', 'Yes. We accept project inquiries for hemp-derived THC and CBD beverage concepts. Specific product acceptance, capabilities and requirements are evaluated by each partner.'],
  ['Do you handle cans, bottles and gummies?', 'Those are our primary focus areas, including aluminum cans, glass and PET bottles, 750 mL bottles and gummies. Include your format, estimated volume and development stage in the project brief.'],
  ['What are the minimum order quantities?', 'Minimums vary significantly by formula, packaging, line and manufacturing partner. Share your target run size and we can discuss realistic fit.'],
  ['Can you help if I haven’t finalized my formula?', 'Yes. Describe your concept and your current development status so we can assess whether formulation or scale-up assistance is part of the conversation.'],
  ['Should I share my formula in the inquiry?', 'No. Share only what you’re comfortable with at the inquiry stage. Proprietary formulas and detailed technical documents should be exchanged with a selected partner under an appropriate agreement.'],
  ['What about documentation and regulations?', 'Requirements depend on the individual product and intended markets. Partners and qualified advisers should review ingredients, labeling, testing and other requirements before production.']
];

export function home({ assets, accessKey, heroPhoto }) {
  const path = '/index.html';
  const title = 'Hemp Beverage Co-Packing Texas | THC, CBD, Cans &amp; Gummies';
  const description = 'Connect with Texas co-manufacturing partners for hemp THC and CBD drinks, can filling, bottle filling and gummies. Submit your production brief.';

  const heroVisual = heroPhoto
    ? `<picture class="hero-photo">${heroPhoto.sources}<img src="${heroPhoto.src}" srcset="${heroPhoto.srcset}" sizes="100vw" width="${heroPhoto.width}" height="${heroPhoto.height}" alt="Orange, green and silver aluminum beverage cans, a glass bottle with a blank label and fruit gummies arranged on stone plinths" fetchpriority="high" decoding="async"></picture>`
    : '';

  const hero = `<section class="hero ${heroPhoto ? 'hero--photo' : 'hero--art'}" aria-labelledby="hero-title">
${heroVisual}
<div class="container hero-inner">
<div class="hero-copy">
<p class="eyebrow">Texas co-manufacturing partners · B2B</p>
<h1 id="hero-title"><span class="line">Hemp Beverage <span class="nowrap">Co-Packing</span> in Texas.</span> <span class="line accent">Better Fit. Better Launch<span class="period">.</span></span></h1>
<p class="hero-lead">Connect with Texas manufacturing partners for hemp-derived THC and CBD beverages in cans and bottles, plus gummies. From early-stage concepts to established brands, find the right partner for your production needs.</p>
<div class="actions">
<a class="btn" href="#quote" data-cta="hero_primary">Find a Manufacturing Partner ${icon.arrow}</a>
<a class="btn btn-ghost" href="#capabilities" data-cta="hero_secondary">Explore Manufacturing Capabilities</a>
</div>
<ul class="hero-assure">
<li>${icon.check}Two-minute project brief</li>
<li>${icon.check}No obligation</li>
<li>${icon.check}No confidential formulas needed</li>
</ul>
</div>
${heroPhoto ? '' : `<div class="hero-visual">${heroArt('h')}</div>`}
</div>
</section>
<div class="format-ticker" aria-hidden="true"><div class="ticker-track">${'<span>Aluminum cans</span><span>Glass bottles</span><span>PET bottles</span><span>750 mL</span><span>Hemp THC</span><span>CBD</span><span>Gummies</span><span>Formulation</span><span>Scale-up</span>'.repeat(2)}</div></div>`;

  const capabilities = `<section class="section" id="capabilities" aria-labelledby="cap-title">
<div class="container cap-layout">
<div class="cap-intro" data-reveal>
<p class="eyebrow">Manufacturing capabilities</p>
<h2 id="cap-title">One brief. <em>The right type of line.</em></h2>
<p>Different products need different partners. We focus on the formats that matter most to hemp-derived beverage and edible brands, from first concept to repeat production.</p>
<a class="link-arrow" href="#quote">Not sure where you fit? Send a brief ${icon.arrow}</a>
</div>
<ol class="cap-list">
${SERVICES.map((s, i) => `<li data-reveal><a class="cap-row" href="${serviceUrl(s.slug)}"><span class="cap-num">${String(i + 1).padStart(2, '0')}</span><span class="cap-body"><h3>${s.label}</h3><p>${s.blurb}</p><span class="cap-tags">${TAGS[s.slug].map((t) => `<span class="tag">${t}</span>`).join('')}</span></span><span class="cap-go" aria-hidden="true">${icon.right}</span></a></li>`).join('\n')}
</ol>
</div>
</section>`;

  const formats = `<section class="section paper" id="formats" aria-labelledby="formats-title">
<div class="container">
<div class="section-head" data-reveal>
<div><p class="eyebrow">Built around the package</p><h2 id="formats-title">Can. Bottle. <em>Gummy.</em></h2></div>
<p>The format affects the formula, the production process, component sourcing and final cost. Choose it deliberately, then find the line that runs it.</p>
</div>
<div class="formats">
<article class="format format--cans" data-reveal>
<div class="format-art">${cansArt('fc')}</div>
<div class="format-body">
<h3>Aluminum cans</h3>
<p>The workhorse for sparkling RTDs, seltzers and alcohol alternatives.</p>
<dl class="spec">
<div><dt>Sizes</dt><dd>8.4 oz slim · 12 oz standard &amp; sleek · 16 oz tall</dd></div>
<div><dt>Decoration</dt><dd>Printed cans, shrink sleeves or pressure-sensitive labels</dd></div>
<div><dt>Pack-out</dt><dd>4-packs, 6-packs, trays and cases</dd></div>
</dl>
<div class="format-actions"><a class="btn btn-sm" href="#quote" data-preset-packaging="Aluminum cans" data-cta="format_cans">Get a can quote ${icon.arrow}</a><a class="link-arrow" href="/canned-beverage-co-packing.html">Can co-packing</a></div>
</div>
</article>
<article class="format format--bottles" data-reveal data-reveal-delay="1">
<div class="format-art">${bottlesArt('fb')}</div>
<div class="format-body">
<h3>Glass &amp; PET bottles</h3>
<p>Premium single-serve, shots and 750 mL shareable presentations.</p>
<dl class="spec">
<div><dt>Formats</dt><dd>2 oz shots · 12 oz glass · 16.9 oz PET · 750 mL</dd></div>
<div><dt>Closures</dt><dd>Crown, screw cap, foil capsule, tamper-evident</dd></div>
<div><dt>Check early</dt><dd>Neck finish, label spec and case pack against the line</dd></div>
</dl>
<div class="format-actions"><a class="btn btn-sm btn-lime" href="#quote" data-preset-packaging="Glass bottles" data-cta="format_bottles">Get a bottle quote ${icon.arrow}</a><a class="link-arrow" href="/bottled-beverage-co-packing.html">Bottle co-packing</a></div>
</div>
</article>
<article class="format format--gummies" data-reveal data-reveal-delay="2">
<div class="format-art">${gummiesArt('fg')}</div>
<div class="format-body">
<h3>Gummies</h3>
<p>Hemp THC and CBD gummies built around piece, count and pack.</p>
<dl class="spec">
<div><dt>Base</dt><dd>Pectin (plant-based) or gelatin</dd></div>
<div><dt>Packaging</dt><dd>Stand-up pouches, jars and count configurations</dd></div>
<div><dt>Brief needs</dt><dd>Piece weight, flavor, texture and finish</dd></div>
</dl>
<div class="format-actions"><a class="btn btn-sm btn-dark" href="#quote" data-preset-product="Hemp THC/CBD gummies" data-preset-packaging="Gummy pouches or jars" data-cta="format_gummies">Get a gummy quote ${icon.arrow}</a><a class="link-arrow" href="/hemp-gummy-co-packing.html">Gummy manufacturing</a></div>
</div>
</article>
</div>
<p class="formats-note">Sizes shown are common industry formats for planning. Exact line compatibility, components and minimums are confirmed by each manufacturing partner.</p>
</div>
</section>`;

  const why = `<section class="section dark grid-bg" id="why" aria-labelledby="why-title">
<div class="container">
<div class="fit-layout">
<div data-reveal>
<p class="eyebrow">Why partner selection matters</p>
<h2 id="why-title">Manufacturing isn’t one-size-fits-all. <em>Neither is your brand.</em></h2>
<p class="lead">The right manufacturing relationship starts with specifics. A facility that’s great at high-volume cans may not be the right fit for a small bottled pilot.</p>
<p>A mismatch rarely shows up on the first quote. It shows up later as reformulation, packaging that doesn’t run on the line, or a pilot that can’t scale. We connect qualified inquiries with potential Texas manufacturing partners, so your first conversation can be about the actual project, not whether a plant runs your category.</p>
<div class="actions"><a class="btn btn-lime" href="#quote" data-cta="why_cta">Tell us what you need ${icon.arrow}</a></div>
</div>
<ol class="fit-list" aria-label="Five factors that decide partner fit">
<li data-reveal><span class="fit-num">01</span><div><h3>Format &amp; line</h3><p>A slim-can line, a 750 mL glass filler and a gummy depositor are different equipment, crews and minimums.</p></div></li>
<li data-reveal><span class="fit-num">02</span><div><h3>Formula readiness</h3><p>Idea, bench sample or production-ready recipe decides whether you need development, scale-up or filling only.</p></div></li>
<li data-reveal><span class="fit-num">03</span><div><h3>Ingredient system</h3><p>Hemp-derived ingredients, emulsions and botanicals are accepted and handled differently from plant to plant.</p></div></li>
<li data-reveal><span class="fit-num">04</span><div><h3>Run size &amp; growth</h3><p>A plant built for long runs may not prioritize a pilot; a small-batch partner may cap out as you scale.</p></div></li>
<li data-reveal><span class="fit-num">05</span><div><h3>Scope &amp; responsibility</h3><p>Who sources cans and ingredients, coordinates testing, packs out and ships changes the real cost.</p></div></li>
</ol>
</div>
<div class="principles"><span>No invented MOQ promises</span><span>No one-size-fits-all quotes</span><span>Product-specific conversations</span></div>
</div>
</section>`;

  const dev = `<section class="section" id="development" aria-labelledby="dev-title">
<div class="container dev-layout">
<div data-reveal>
<p class="eyebrow">Formulation &amp; product development</p>
<h2 id="dev-title">Not production-ready yet? <em>Start with development.</em></h2>
<p class="lead">Great beverage ideas still need a formula that fits the process, the package and the customer experience.</p>
<p>Whether you’re starting with a concept or adapting an existing beverage, production planning works best when development and manufacturing conversations happen together.</p>
<ul class="checks">
<li>${icon.check}<span>Flavor, sweetness, carbonation and mouthfeel targets</span></li>
<li>${icon.check}<span>Ingredient systems, including hemp-derived ingredient delivery</span></li>
<li>${icon.check}<span>Production transfer from bench sample to the intended line</span></li>
<li>${icon.check}<span>Packaging integration: work backward from the can or bottle</span></li>
</ul>
<div class="actions"><a class="btn" href="#quote" data-preset-product="Formulation / product development" data-cta="dev_cta">Discuss formulation support ${icon.arrow}</a><a class="link-arrow" href="/beverage-formulation.html">Formulation &amp; development</a></div>
</div>
<div class="sheet" data-reveal data-reveal-delay="1">
<div class="sheet-head"><span class="label">Development path</span><span class="label">Typical sequence</span></div>
<ol class="track">
<li><span class="track-dot">01</span><div><h3>Concept brief</h3><p>Taste profile, function, format and target retail channel.</p></div></li>
<li><span class="track-dot">02</span><div><h3>Bench formulation</h3><p>Sensory work and a proposed ingredient system.</p></div></li>
<li><span class="track-dot">03</span><div><h3>Stability &amp; scale-up</h3><p>How the formula behaves when batched, packaged and stored.</p></div></li>
<li><span class="track-dot">04</span><div><h3>Pilot run</h3><p>A line trial to confirm process, fill and pack-out.</p></div></li>
<li><span class="track-dot">05</span><div><h3>Commercial production</h3><p>Repeatable runs with agreed specs, scope and schedule.</p></div></li>
</ol>
</div>
</div>
</section>`;

  const process = `<section class="section sand" id="process" aria-labelledby="process-title">
<div class="container">
<div class="section-head" data-reveal>
<div><p class="eyebrow">How it works</p><h2 id="process-title">From idea to <em>introduction.</em></h2></div>
<p>Give us enough context to match the conversation to the project. The facility confirms scope and feasibility directly.</p>
</div>
<ol class="steps">
<li class="step" data-reveal><div class="step-num"><b>01</b><span class="label">Brief</span></div><h3>Send your brief</h3><p>Tell us whether you’re making cans, bottles or gummies, and what stage your product is in.</p></li>
<li class="step" data-reveal data-reveal-delay="1"><div class="step-num"><b>02</b><span class="label">Define</span></div><h3>Define the requirements</h3><p>We clarify formula readiness, ingredient system, packaging and estimated volume.</p></li>
<li class="step" data-reveal data-reveal-delay="2"><div class="step-num"><b>03</b><span class="label">Match</span></div><h3>Explore partner fit</h3><p>Relevant Texas manufacturing partners evaluate whether the brief matches their capabilities.</p></li>
<li class="step" data-reveal data-reveal-delay="3"><div class="step-num"><b>04</b><span class="label">Discuss</span></div><h3>Discuss the project</h3><p>Scope, minimums, testing, timelines and commercial terms are confirmed with the selected partner.</p></li>
</ol>
<div class="steps-foot"><p>Step 01 takes about two minutes. No confidential formulas required.</p><a class="btn btn-dark" href="#quote" data-cta="process_cta">Start step 01 ${icon.arrow}</a></div>
</div>
</section>`;

  const faq = `<section class="section" id="faq" aria-labelledby="faq-title">
<div class="container faq-layout">
<div data-reveal>
<p class="eyebrow">Questions we hear</p>
<h2 id="faq-title">Practical answers. <em>Less guesswork.</em></h2>
<p class="muted">We keep production answers specific to the project and avoid blanket claims about every partner.</p>
<a class="link-arrow" href="#quote">Ask about your project ${icon.arrow}</a>
</div>
${faqList(HOME_FAQS)}
</div>
</section>`;

  const resources = `<section class="section paper" id="resources" aria-labelledby="res-title">
<div class="container">
<div class="section-head" data-reveal>
<div><p class="eyebrow">Production know-how</p><h2 id="res-title">Make a smarter <em>first move.</em></h2></div>
<p>Useful planning guides for founders and beverage teams. <a href="/resources/">Browse all resources</a>.</p>
</div>
<ul class="guide-list">
${RESOURCES.map((r, i) => `<li data-reveal${i ? ` data-reveal-delay="${i}"` : ''}><a class="guide-link" href="${resourceUrl(r.slug)}"><span class="guide-meta label"><span>Guide ${String(i + 1).padStart(2, '0')}</span><span>${r.minutes} min read</span></span><h3>${r.label}</h3><p>${r.blurb}</p><span class="link-arrow">Read guide ${icon.arrow}</span></a></li>`).join('\n')}
</ul>
</div>
</section>`;

  const body = [hero, capabilities, formats, why, dev, process, inquiry({ source: 'home', accessKey }), faq, resources, finalCta()].join('\n');

  return page({
    path, title, description, assets, hasForm: true, current: 'home',
    preload: heroPhoto ? `<link rel="preload" as="image" href="${heroPhoto.src}" imagesrcset="${heroPhoto.preloadSrcset}" imagesizes="100vw" fetchpriority="high">\n` : '',
    schema: [orgSchema, websiteSchema, faqSchema(HOME_FAQS, '/')],
    body
  });
}
