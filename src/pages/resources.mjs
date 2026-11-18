/* Educational resources: three guides (copy preserved) + a resources hub. */
import { SITE, SERVICES, RESOURCES, serviceUrl, resourceUrl, abs } from '../site.mjs';
import { page, icon, inquiry, finalCta, breadcrumbs, orgSchema, breadcrumbSchema, ORG_ID } from '../layout.mjs';

export const GUIDES = {
  'choosing-a-beverage-copacker': {
    title: 'How to Choose a Beverage Co-Packer in Texas | Beverage Co-Packing Texas',
    description: 'A practical buyer’s guide to evaluating beverage co-packers in Texas for can and bottle projects: production fit, formula ownership, cost scope and readiness.',
    eyebrow: 'Manufacturing buyer’s guide',
    h1: 'How to Choose a Beverage Co-Packer in Texas',
    lead: 'Before you compare quotes, make sure the facilities are quoting the same project.',
    intro: 'The cheapest line item on a co-packing estimate is not automatically the lowest-cost production partner. A strong decision compares format compatibility, formula readiness, responsibilities, finished-goods scope and whether the manufacturer can support your operational stage.',
    sections: [
      ['1. Start with a complete product description', 'List the intended beverage type, liquid characteristics, package material, container size, whether the product is still or sparkling, and any specialty ingredients. Without those details, initial quotes tend to be so conditional that they are hard to compare.'],
      ['2. Identify what the manufacturer is responsible for', 'There is a meaningful difference between filling an established formula supplied by the brand and building a commercial process around a new concept. Clarify who sources ingredients and packaging, owns development work, orders testing, handles finished goods and organizes freight.'],
      ['3. Ask what the filling line actually handles', 'Determine which can or bottle sizes are supported, how closures and labels are applied, whether secondary packaging is included and how date coding is managed. Do not assume that a facility offering ‘beverage co-packing’ supports every SKU type.'],
      ['4. Compare total landed scope', 'Break quotes into formulation or transfer, ingredients, liquid processing, filling, containers, labels or sleeves, cartons, quality activities, storage and logistics. Confirm how line setup costs, waste allowances and volume tiers are handled.'],
      ['5. Understand project risk and scheduling', 'Ask about ingredient lead times, approval steps, packaging purchase deadlines and what happens if a run is delayed. Get the agreed specifications and responsibilities documented before money is committed.'],
      ['6. Use partner fit as the decision criterion', 'A smaller facility may align better with a development-stage concept; another operation may fit repeat high-volume production. Your best choice depends on what stage you are at and what the next run needs to accomplish.']
    ],
    checklist: ['Product description and target customer', 'Package type, size and decoration', 'Formula status and existing technical documents', 'Ingredient sourcing and production responsibilities', 'First-run and annual unit forecasts', 'Target production and distribution timing', 'Finished-goods packaging requirements', 'Budget range and approval process'],
    services: ['canned-beverage-co-packing', 'bottled-beverage-co-packing', 'beverage-formulation']
  },
  'cans-vs-bottles': {
    title: 'Cans vs. Bottles for Hemp THC and CBD Beverages | Beverage Co-Packing Texas',
    description: 'Compare aluminum cans, glass bottles and PET bottles for hemp-derived THC and CBD beverage concepts from a manufacturing and packaging perspective.',
    eyebrow: 'Format decision guide',
    h1: 'Cans vs. Bottles for Hemp THC and CBD Beverages',
    lead: 'Packaging affects the line, the formula, the shelf experience and the economics, not just the label design.',
    intro: 'A brand’s package is part of the commercial production specification. Cans, glass and PET each create different choices around handling, component procurement, decoration, freight and the desired customer experience. Treat the decision as part of manufacturing planning.',
    sections: [
      ['Aluminum cans: ready-to-drink simplicity', 'Cans are familiar to beverage buyers and work well for many sparkling RTD concepts. Key planning points include standard versus specialty dimensions, printed cans or applied decoration, carbonation process compatibility, secondary packaging and finished-goods configuration.'],
      ['Glass bottles: premium presentation and tradeoffs', 'Glass can support premium mixers, tonics and larger shareable presentations. It also introduces breakage, weight and closure considerations. Check the desired bottle shape and neck finish against the exact bottling line before purchasing components.'],
      ['PET bottles: lightweight but process-specific', 'PET can provide weight advantages and practical versatility, but suitability depends on the formula, intended handling, process and shelf-life targets. Technical evaluation is still essential.'],
      ['Which format fits a THC or CBD beverage?', 'Start with the liquid: still or sparkling, single-serve or shareable, ready-to-drink or concentrate, existing commercial recipe or concept. Then assess required equipment, packaging costs, desired retail price and distribution handling.'],
      ['Avoid ordering components before confirmation', 'A bottle or can that works in a mockup may not fit the selected line. Match the technical spec with the actual manufacturer before committing to significant printed packaging quantities.'],
      ['Ask for a like-for-like production quote', 'Quotes should specify container dimensions, fill volume, decoration, secondary packaging, finished-goods counts and the responsibilities included. Without that consistency, format comparisons can be misleading.']
    ],
    table: {
      caption: 'At-a-glance comparison for planning (confirm specifics with your partner)',
      head: ['', 'Aluminum cans', 'Glass bottles', 'PET bottles'],
      rows: [
        ['Typical use', 'Sparkling RTDs, seltzers, multipacks', 'Premium tonics, mixers, 750 mL shareables', 'Still RTDs, larger single-serve'],
        ['Weight &amp; freight', 'Light, stackable', 'Heaviest; breakage risk', 'Light'],
        ['Decoration', 'Printed, sleeve or label', 'Label; premium closures', 'Label or sleeve'],
        ['Check early', 'Can size, end, carbonation', 'Neck finish, closure, line fit', 'Formula, process, shelf-life targets']
      ]
    },
    checklist: ['Desired serving and presentation', 'Still or sparkling formula', 'Intended sales channels and shipping', 'Preferred material and closure', 'Available production volume', 'Packaging vendor and component lead times'],
    services: ['canned-beverage-co-packing', 'bottled-beverage-co-packing', 'hemp-beverage-co-packing']
  },
  'launching-hemp-beverage': {
    title: 'Planning Your First Hemp Beverage Production Run | Beverage Co-Packing Texas',
    description: 'Build a useful hemp THC or CBD beverage production brief with this practical checklist of formula, packaging, volume, process and manufacturer questions.',
    eyebrow: 'Hemp beverage launch planning',
    h1: 'Planning Your First Hemp Beverage Production Run',
    lead: 'A production-ready brief makes every manufacturer conversation faster and more useful.',
    intro: 'A new hemp-derived THC or CBD beverage launch involves multiple workstreams. The formula, ingredients, package, production volume, vendor responsibilities and destination markets all influence the commercial plan. The following steps help organize the discussion without relying on invented manufacturing promises.',
    sections: [
      ['Step 1: Define the product experience', 'Write a concise description of flavor, sweetness, carbonation, package, intended serving and intended audience. If you have a reference beverage, share what you want to borrow from its sensory experience without assuming its formula is transferable.'],
      ['Step 2: Clarify formula readiness', 'State whether the product is an idea, a bench sample, a pilot formula or a commercially produced recipe. Include who owns the technical documents and whether any ingredient or delivery systems are already sourced.'],
      ['Step 3: Decide which packaging questions are open', 'For cans, describe preferred size and decoration. For bottles, include material, capacity, neck finish and closure if known. Think through cases, multipacks, labels and storage needs.'],
      ['Step 4: Give a real volume range', 'An initial volume estimate can be a range rather than a firm commitment. Include a rough annual forecast if available. A facility can then assess whether the commercial scale aligns with its operation.'],
      ['Step 5: Map what the facility will own', 'Ask whether the proposed scope includes sourcing, batching, filling, testing coordination, packing and freight. Avoid treating all those services as automatically included under ‘co-packing.’'],
      ['Step 6: Review requirements before production', 'Ingredients, labels, documentation and intended markets require product-specific evaluation. The manufacturing partner and relevant professional advisers should address these requirements before a project is approved.'],
      ['Step 7: Convert the brief into a partner conversation', 'Once you can clearly communicate the product, stage, package, volume and target schedule, you are ready for a much more productive introduction to a potential co-manufacturer.']
    ],
    checklist: ['Brand and company contact', 'Product and intended serving description', 'Cannabinoid / ingredient concept', 'Formula status and ownership', 'Can or bottle specifications', 'Target run volume and annual estimate', 'Primary distribution or destination markets', 'Packaging procurement status', 'Target schedule and budget expectations'],
    services: ['hemp-beverage-co-packing', 'cbd-beverage-manufacturing', 'beverage-formulation']
  }
};

const PUBLISHED = '2026-11-18';
const slugify = (s) => s.toLowerCase().replace(/&amp;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const words = (g) => [g.intro, ...g.sections.flat(), ...g.checklist].join(' ').split(/\s+/).length;
export const minutesFor = (slug) => Math.max(3, Math.round(words(GUIDES[slug]) / 200) + 1);
const fmtDate = (d) => new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

export function guidePage(slug, { assets, accessKey }) {
  const g = GUIDES[slug];
  const meta = RESOURCES.find((r) => r.slug === slug);
  const idx = RESOURCES.findIndex((r) => r.slug === slug);
  const path = resourceUrl(slug);
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Resources', path: '/resources/' }, { name: meta.short, path }];
  const ids = g.sections.map(([h]) => slugify(h.replace(/^(\d+\.|Step \d+:)\s*/, '')));
  const mins = minutesFor(slug);

  const hero = `<section class="page-hero dark deep grid-bg" aria-labelledby="page-title">
<div class="container guide-hero-grid"><div class="page-hero-copy" style="max-width:900px">
${breadcrumbs(crumbs)}
<p class="eyebrow">${g.eyebrow}</p>
<h1 id="page-title">${g.h1}</h1>
<p class="lead">${g.lead}</p>
<ul class="guide-info"><li>${icon.doc}Commercial planning resource</li><li>${icon.clock}${mins} min read</li><li>Published <time datetime="${PUBLISHED}">${fmtDate(PUBLISHED)}</time></li></ul>
</div><div class="guide-num" aria-hidden="true">${String(idx + 1).padStart(2, '0')}<span>.</span></div></div>
</section>`;

  let sections = g.sections.map(([h, p], i) => `<h2 id="${ids[i]}">${h}</h2>\n<p>${p}</p>`);
  if (g.table) {
    const t = g.table;
    const table = `<div class="table-wrap" role="region" aria-label="Format comparison" tabindex="0"><table class="compare"><caption>${t.caption}</caption><thead><tr>${t.head.map((h, i) => (i ? `<th scope="col">${h}</th>` : '<td></td>')).join('')}</tr></thead><tbody>${t.rows.map((r) => `<tr><th scope="row">${r[0]}</th>${r.slice(1).map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    sections.splice(3, 0, table);
  }
  const mid = Math.min(4, sections.length - 1);
  sections.splice(mid, 0, `<aside class="callout-box" aria-label="Request a quote"><div><h3>Have a project in motion?</h3><p>Outline your formula readiness, package preference, first-run size and target timeline. We can help frame a relevant Texas manufacturing inquiry.</p></div><a class="btn" href="#quote" data-cta="guide_inline">Start the brief ${icon.arrow}</a></aside>`);

  const prev = RESOURCES[idx - 1], next = RESOURCES[idx + 1];
  const article = `<article class="prose" data-article>
<p class="lead">${g.intro}</p>
${sections.join('\n')}
<div class="checklist"><div class="checklist-head"><h2 id="checklist">Quick project checklist</h2><span class="label">Use it in your brief</span></div><ul>${g.checklist.map((c) => `<li>${c}</li>`).join('')}</ul></div>
<h2 id="continue-planning">Continue planning</h2>
<p>Ready to discuss your actual product? <a href="#quote">Submit your manufacturing brief</a>, or explore the capabilities most relevant to this guide:</p>
<ul>${g.services.map((s) => `<li><a href="${serviceUrl(s)}">${SERVICES.find((x) => x.slug === s).label}</a></li>`).join('')}</ul>
<p class="disclaimer">Manufacturing suitability and any product-specific requirements are confirmed directly with partners and qualified advisers. This guide is for commercial planning, not regulatory or legal advice.</p>
<nav class="pager" aria-label="More guides">${prev ? `<a class="prev" href="${resourceUrl(prev.slug)}"><span class="label">← Previous guide</span><strong>${prev.label}</strong></a>` : ''}${next ? `<a class="next" href="${resourceUrl(next.slug)}"><span class="label">Next guide →</span><strong>${next.label}</strong></a>` : `<a class="next" href="${resourceUrl(RESOURCES[0].slug)}"><span class="label">Start from guide 1 →</span><strong>${RESOURCES[0].label}</strong></a>`}</nav>
</article>`;

  const toc = [...g.sections.map(([h], i) => [ids[i], h.replace(/^(\d+\.|Step \d+:)\s*/, '')]), ['checklist', 'Quick project checklist']];
  const aside = `<aside class="aside" aria-label="Guide navigation and next steps">
<nav class="aside-card toc-card" aria-label="On this page"><h2 class="label" style="color:var(--jade)">On this page</h2><div class="toc">${toc.map(([id, h]) => `<a href="#${id}">${h}</a>`).join('')}</div></nav>
<div class="aside-card quote"><p class="eyebrow">Manufacturing fit</p><h2>Have a project in motion?</h2><p>Send a short brief and we’ll review partner fit.</p><a class="btn btn-block" href="#quote" data-cta="guide_aside">Start the brief ${icon.arrow}</a></div>
</aside>`;

  const body = `<div class="reading-progress" data-reading-progress aria-hidden="true"></div>
${hero}
<section class="section"><div class="container content-layout">${article}${aside}</div></section>
${inquiry({ source: 'guide-' + slug, accessKey, title: 'Turn this plan into a <em>production conversation.</em>' })}
${finalCta()}`;

  const schema = [
    orgSchema,
    {
      '@type': 'Article', '@id': abs(path) + '#article', headline: g.h1, description: g.description.replace(/&amp;/g, '&'),
      mainEntityOfPage: abs(path), image: SITE.ogImage, author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID },
      datePublished: PUBLISHED, dateModified: SITE.updated, inLanguage: 'en-US', articleSection: 'Production planning', wordCount: words(g)
    },
    breadcrumbSchema(crumbs)
  ];
  return page({ path, title: g.title, description: g.description, ogType: 'article', ogTitle: g.h1, assets, hasForm: true, current: slug, schema, body, article: { published: PUBLISHED, modified: SITE.updated } });
}

export function resourcesHub({ assets }) {
  const path = '/resources/';
  const title = 'Beverage Co-Packing Resources &amp; Production Guides | Beverage Co-Packing Texas';
  const description = 'Practical planning guides for hemp THC and CBD beverage brands: choosing a co-packer, cans vs. bottles, and planning your first production run.';
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Resources', path }];
  const body = `<section class="page-hero dark deep grid-bg" aria-labelledby="page-title">
<div class="container"><div class="page-hero-copy" style="max-width:860px">
${breadcrumbs(crumbs)}
<p class="eyebrow">Production know-how</p>
<h1 id="page-title">Resources for beverage &amp; gummy brands</h1>
<p class="lead">Useful planning guides for founders and beverage teams, written to make your first manufacturer conversation faster and more specific.</p>
</div></div>
</section>
<section class="section"><div class="container">
<ul class="hub-list">
${RESOURCES.map((r, i) => `<li data-reveal><a href="${resourceUrl(r.slug)}"><span class="label">Guide ${String(i + 1).padStart(2, '0')} · ${minutesFor(r.slug)} min</span><span><h2>${r.label}</h2><p>${GUIDES[r.slug].description}</p></span><span class="cap-go" aria-hidden="true">${icon.right}</span></a></li>`).join('\n')}
</ul>
</div></section>
<section class="section paper" aria-labelledby="by-cap"><div class="container">
<div class="section-head"><div><p class="eyebrow">Explore by capability</p><h2 id="by-cap">Ready for specifics? <em>Pick your format.</em></h2></div><p>Each capability page lists what partners need to know and what to bring.</p></div>
<div class="related">${SERVICES.slice(0, 6).map((s) => `<a href="${serviceUrl(s.slug)}"><span class="label">Capability</span><h3>${s.label}</h3><p>${s.blurb}</p><span class="link-arrow">Explore ${icon.arrow}</span></a>`).join('')}</div>
</div></section>
${finalCta({ hasForm: false })}`;
  const schema = [
    orgSchema,
    { '@type': 'CollectionPage', '@id': abs(path) + '#page', name: 'Resources', url: abs(path), description, isPartOf: { '@id': abs('/#website') }, hasPart: RESOURCES.map((r) => ({ '@type': 'Article', headline: r.label, url: abs(resourceUrl(r.slug)) })) },
    breadcrumbSchema(crumbs)
  ];
  return page({ path, title, description, assets, hasForm: false, current: 'resources', schema, body });
}
