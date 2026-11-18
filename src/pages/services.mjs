/* Service landing pages. Titles, descriptions, H1s and body copy are carried
 * over from the original SEO pages; facts, callouts and CTAs are additions. */
import { SITE, SERVICES, RESOURCES, serviceUrl, resourceUrl } from '../site.mjs';
import { page, icon, inquiry, faqList, finalCta, breadcrumbs, orgSchema, breadcrumbSchema, faqSchema, ORG_ID } from '../layout.mjs';
import { serviceArt } from '../art.mjs';
import { abs } from '../site.mjs';

export const SERVICE_CONTENT = {
  'hemp-beverage-co-packing': {
    title: 'Hemp THC Beverage Co-Packing in Texas | Manufacturing Partners',
    description: 'Find Texas co-packing partners for hemp-derived THC seltzers, canned cocktails, shots and bottled beverages. Discuss format, formulation and production fit.',
    eyebrow: 'Hemp-derived THC · Beverage manufacturing',
    h1: 'Hemp THC beverage co-packing in Texas',
    lead: 'You have the brand. We help find a Texas production partner suited to the beverage you want to bring to market.',
    cta: 'Request a THC beverage quote',
    preset: { product: 'Hemp THC beverage' },
    quoteTitle: 'Get your hemp THC beverage <em>in front of the right line.</em>',
    facts: [['Formats discussed', '12 oz and slim cans, glass and PET bottles, 750 mL shareables'], ['Good fit for', 'Seltzers, RTD alcohol alternatives, mixers and shots'], ['Bring to the first call', 'Formula stage, ingredient plan, package and target run size']],
    intro: 'Hemp-derived THC beverages bring a different production brief to the table than a conventional soft drink. Ingredient selection, emulsion behavior, sensory experience, packaging, quality requirements and batch planning all need to be discussed early. Our role is to help route your project to a relevant manufacturing conversation rather than make you cold-call facilities that may not handle your format.',
    caps: [
      ['Ready-to-drink cans', 'Sparkling seltzers, flavored beverages and alcohol-alternative concepts in standard or specialty can formats.'],
      ['Bottled beverages', 'Single-serve glass or PET concepts, concentrate and mixer projects, and larger shareable bottles.'],
      ['Product development', 'Review of an existing formula or a discussion about creating one with the right specialists.'],
      ['Production planning', 'A realistic conversation around volumes, packaging components, sourcing responsibilities and schedule.']
    ],
    sections: [
      ['A production partner that fits the product', 'A canned sparkling seltzer and a shelf-stable bottled mixer may require very different equipment, production steps and packaging suppliers. Tell us your base liquid, carbonation preference, package size, flavor concept and desired run size. We can help narrow the conversation to partners relevant to your project.'],
      ['What to have ready before an introduction', 'Share whether you have a bench formula, commercial-ready formula or just a concept; the intended cannabinoid ingredients; the desired package; expected production volume; approximate timeline; and any packaging already purchased. A complete brief makes it easier to have a productive conversation with a co-manufacturer.'],
      ['From pilot concept to repeat production', 'Early brands often need help turning a product idea into a manufacturable specification. Established brands may simply need a different canning line, bottle format or more capacity. We help surface the practical requirements so facilities can determine fit and scope.'],
      ['Quality and documentation conversations', 'Exact ingredient, testing, labeling, and market requirements depend on the product and destination. These details should be reviewed with the selected manufacturing partner and appropriate advisers before production is agreed.']
    ],
    callout: ['Have a can or bottle spec in mind?', 'Send it with your formula stage and target run size. We’ll review partner fit for your hemp THC beverage.'],
    faqs: [
      ['Do you manufacture hemp THC beverages yourselves?', 'We coordinate introductions and inquiries with Texas manufacturing partners; we are not presenting the site as a single operating plant.'],
      ['Can you help with both cans and bottles?', 'Yes. Share your preferred format and we can determine which relevant capabilities to discuss with potential partners.'],
      ['What is the minimum production run?', 'Minimum quantities vary by line, format, formula and packaging. We request your target volume and discuss practical fit with partners.'],
      ['Can I bring my own emulsion or formula?', 'Mention your existing ingredients or formula in the brief. The manufacturing partner will confirm compatibility and any required development work.']
    ],
    guides: ['launching-hemp-beverage', 'cans-vs-bottles'],
    related: ['cbd-beverage-manufacturing', 'canned-beverage-co-packing', 'bottled-beverage-co-packing', 'beverage-formulation']
  },
  'cbd-beverage-manufacturing': {
    title: 'CBD Beverage Manufacturing Texas | Cans &amp; Bottles',
    description: 'Explore CBD beverage co-manufacturing for canned drinks, bottled tonics and functional RTD products in Texas. Submit your format, formula and volume.',
    eyebrow: 'CBD drinks · Production partner matching',
    h1: 'CBD beverage manufacturing partners in Texas',
    lead: 'From a CBD sparkling beverage to a premium bottled tonic, make the right manufacturing connection before committing to packaging or a production date.',
    cta: 'Request a CBD beverage quote',
    preset: { product: 'CBD beverage' },
    quoteTitle: 'Start your CBD beverage <em>production conversation.</em>',
    facts: [['Formats discussed', 'Sparkling cans, still bottled drinks, tonics and shots'], ['Good fit for', 'New CBD RTD launches and line extensions'], ['Bring to the first call', 'Ingredient system, flavor, target serving and volume']],
    intro: 'The most useful CBD beverage co-manufacturer is not always the closest facility. Formula characteristics, ingredient handling, beverage process, package choice and commercial scale all affect partner fit. We collect the relevant information and help get your brand in front of manufacturing partners working in the categories you need.',
    caps: [
      ['Sparkling CBD beverages', 'Canned seltzers and lightly flavored sparkling concepts with production questions addressed up front.'],
      ['Still CBD drinks', 'Bottled waters, functional tonics and still-ready-to-drink beverages with appropriate process planning.'],
      ['Flavors and formulas', 'Discussions around flavor goals, solubility, ingredient systems, stability planning and production transfer.'],
      ['Packaging selection', 'Compare labels, sleeves, printed cans, bottle closures, carton configurations and secondary packaging.']
    ],
    sections: [
      ['Why CBD beverages require a complete manufacturing brief', 'A formula that tastes great in a small sample may behave differently when batched, packaged or stored. A productive inquiry includes the carrier, flavor profile, target serving, intended shelf life, ingredient sourcing plan and packaging specification.'],
      ['Cans or bottles? Start with distribution', 'Cans can be attractive for ready-to-drink refreshment and multipacks; bottles can support concentrate, shot or premium mixer presentations. Consider shipping weight, merchandising, filling-line compatibility and component procurement before choosing. Our <a href="/resources/cans-vs-bottles.html">cans vs. bottles guide</a> walks through the tradeoffs.'],
      ['Work with existing formulas or early-stage concepts', 'Have a formula? Include its stage of readiness. Just have a product idea? Describe the sensory direction and product positioning. We can discuss where formulation support may be required and identify the right type of manufacturing relationship.'],
      ['Plan the business side', 'Lead times, minimums, available line formats and quotations are project-specific. Sharing your target volumes and release goals helps move discussions toward actionable proposals instead of generic price estimates.']
    ],
    callout: ['Already know your carrier and flavor?', 'Include them in a short brief with your preferred package. We’ll review fit before any introduction is made.'],
    faqs: [
      ['Can a CBD beverage include other functional ingredients?', 'Potential ingredient combinations and capabilities are evaluated individually by the manufacturing partner.'],
      ['Do partners support private-label CBD beverages?', 'Some manufacturing relationships may involve existing bases or formulas, while others are custom. Tell us which model you prefer.'],
      ['Do you promise a particular shelf life?', 'No. Shelf-life targets require product-specific evaluation and testing with qualified partners.'],
      ['How quickly can production begin?', 'Timing depends on formula readiness, components, scheduling and the facility; we do not quote an unverified standard turnaround.']
    ],
    guides: ['cans-vs-bottles', 'launching-hemp-beverage'],
    related: ['hemp-beverage-co-packing', 'functional-co-packing', 'bottled-beverage-co-packing', 'beverage-formulation']
  },
  'canned-beverage-co-packing': {
    title: 'Canned Beverage Co-Packing Texas | THC &amp; CBD RTD Cans',
    description: 'Find Texas canning and co-packing partners for hemp-derived THC and CBD ready-to-drink beverages. Compare can formats, carbonation and production needs.',
    eyebrow: 'Canned RTD beverages · Texas',
    h1: 'Canned beverage co-packing for hemp THC and CBD brands',
    lead: 'Bring a can-ready concept, a production formula or a new idea. We help build a useful manufacturing inquiry around it.',
    cta: 'Request a can co-packing quote',
    preset: { packaging: 'Aluminum cans' },
    quoteTitle: 'Tell us about your can. <em>We’ll start the right conversation.</em>',
    facts: [['Formats discussed', '8.4 oz slim, 12 oz standard and sleek, 16 oz tall'], ['Good fit for', 'Sparkling or still RTDs, seltzers and multipacks'], ['Bring to the first call', 'Can size, decoration plan, carbonation target and unit count']],
    intro: 'Can filling sounds simple until the details matter: product carbonation, liquid handling, can dimensions, decoration, date coding, secondary packaging and manufacturing scale. A clear brief helps eliminate mismatched production conversations early.',
    caps: [
      ['Standard RTD cans', 'Explore familiar ready-to-drink sizes for seltzers, teas and flavored beverages.'],
      ['Specialty can formats', 'Discuss slim, sleek or other sizes based on line availability rather than assuming universal compatibility.'],
      ['Decoration and packs', 'Pressure-sensitive labels, sleeves, printed cans, multipacks and case configurations.'],
      ['Still or sparkling', 'Outline carbonation goals and the process requirements that impact a facility match.']
    ],
    sections: [
      ['What canned beverage co-packers need to know', 'Can size, line style, carbonation level, formula characteristics and expected run volume can change how a facility assesses the project. Include your preferred can format, desired unit count and whether you have printed cans or another decoration method.'],
      ['Co-packing versus full co-manufacturing', 'Co-packing may mean filling an already-developed formula. Co-manufacturing can involve a broader scope, including scale-up, sourcing, production coordination and packaging. Define what you need the partner to own.'],
      ['Plan for the full finished-goods unit', 'The cost and timeline extend beyond liquid filling. Tray, carton, case, pallet pattern and other components can influence the scope. Include distribution plans and whether you want individual units, four-packs or other sellable configurations.'],
      ['Keep flexibility in the production plan', 'Equipment configuration and scheduling are specific to each facility. We help turn your preferred scenario into questions that a prospective co-packer can answer before you place component orders.']
    ],
    callout: ['Ordering cans soon?', 'Confirm the line before you commit to printed can quantities. Send your can size and decoration plan for a fit review.'],
    faqs: [
      ['Can you source a 12 oz canning partner?', 'We can assess inquiries for common ready-to-drink can formats, with exact availability confirmed by the facility.'],
      ['Can a co-packer handle both cans and bottles?', 'Some operators have multiple lines; others specialize. We assess fit based on your requirements.'],
      ['Do I need printed cans?', 'Not necessarily. Decoration strategies depend on your volumes, branding and facility capabilities.'],
      ['Do you guarantee carbonation or potency specifications?', 'No. Technical specifications are set and confirmed through the partner’s product-development and manufacturing process.']
    ],
    guides: ['cans-vs-bottles', 'choosing-a-beverage-copacker'],
    related: ['bottled-beverage-co-packing', 'hemp-beverage-co-packing', 'cbd-beverage-manufacturing', 'functional-co-packing']
  },
  'bottled-beverage-co-packing': {
    title: 'Bottled Beverage Co-Packing Texas | THC &amp; CBD Bottling',
    description: 'Connect with Texas bottled beverage manufacturing partners for hemp THC and CBD tonics, shots, mixers and RTD drinks. Glass and PET project inquiries.',
    eyebrow: 'Glass &amp; PET · Bottled beverage manufacturing',
    h1: 'Bottled beverage co-packing in Texas',
    lead: 'Small-format shots, single-serve beverages, and premium shareable bottles each bring distinct filling and packaging needs.',
    cta: 'Request a bottling quote',
    preset: {},
    quoteTitle: 'Glass, PET or 750 mL? <em>Start with your brief.</em>',
    facts: [['Formats discussed', 'Shots, single-serve glass and PET, 750 mL bottles'], ['Good fit for', 'Tonics, mixers and premium alcohol-alternative bottles'], ['Bring to the first call', 'Bottle spec or drawing, closure, label plan and volume']],
    intro: 'Choosing the right bottle isn’t only a design decision. The liquid, closure, filling process, packaging materials and final distribution plan influence equipment compatibility. We start by defining those details so you can talk with a potential manufacturing partner about a real project.',
    caps: [
      ['Single-serve bottles', 'RTD tonics, still beverages and bottled refreshment concepts for retail or hospitality.'],
      ['Shot formats', 'Compact functional or cannabinoid product concepts with closure and package considerations.'],
      ['Larger bottles', 'Shareable mixers and premium alcohol-alternative bottle presentations, including 750 mL concepts.'],
      ['Packaging components', 'Glass or PET, labels, tamper evidence, closures and case packing for review with the facility.']
    ],
    sections: [
      ['Glass or PET depends on the brief', 'Glass can create a premium shelf impression, while PET may offer weight and handling advantages. Either format has tradeoffs in barrier performance, process compatibility, supply and freight. The selected partner should confirm what the line can run.'],
      ['What the bottler needs before quoting', 'Provide bottle capacity and shape if known, closure style, liquid characteristics, target unit volume, labeling plan, finished-goods configuration and your desired launch window. If your bottle is already sourced, share its technical drawing.'],
      ['750 mL and multi-serve concepts', 'Premium mixers and shareable beverages often have different shelf presentation and fulfillment needs from single-serve cans. Discuss closures, neck finish, final case dimensions and retail presentation early.'],
      ['Don’t treat filling as the only stage', 'Formula readiness, ingredient staging, packaging procurement, quality requirements, storage and freight all affect a bottling project. We help organize those questions before an introduction.']
    ],
    callout: ['Already sourced a bottle?', 'Share its capacity, neck finish and closure with your brief so partners can check line compatibility early.'],
    faqs: [
      ['Can you help with 750 mL beverage bottling?', 'Yes, you can submit a 750 mL or other bottle brief; line compatibility and availability are confirmed with a potential partner.'],
      ['Do manufacturers provide bottles?', 'Sourcing responsibilities vary. The inquiry should identify whether the brand already has components.'],
      ['Can I move an existing beverage from cans to bottles?', 'Possibly, but the formula and process may need review for the new format.'],
      ['Is your site itself a bottling plant?', 'No. It helps brands start informed conversations with Texas manufacturing partners.']
    ],
    guides: ['cans-vs-bottles', 'choosing-a-beverage-copacker'],
    related: ['canned-beverage-co-packing', 'hemp-beverage-co-packing', 'cbd-beverage-manufacturing', 'beverage-formulation']
  },
  'hemp-gummy-co-packing': {
    title: 'Hemp THC &amp; CBD Gummy Co-Packing in Texas | Partner Search',
    description: 'Find Texas gummy co-manufacturing partners for hemp-derived THC and CBD edibles. Discuss pectin, gelatin, flavors, packaging, run sizes and formulation.',
    eyebrow: 'Hemp gummies · Texas manufacturing',
    h1: 'Hemp THC and CBD gummy co-packing in Texas',
    lead: 'Looking for gummy production for a new brand or an existing line? Start with the formula, piece format, packaging and realistic run size.',
    cta: 'Request a gummy manufacturing quote',
    preset: { product: 'Hemp THC/CBD gummies', packaging: 'Gummy pouches or jars' },
    quoteTitle: 'Piece, pack and run size. <em>Let’s scope your gummy.</em>',
    facts: [['Formats discussed', 'Pectin or gelatin bases; pouches, jars and counts'], ['Good fit for', 'Hemp THC and CBD gummy launches or line moves'], ['Bring to the first call', 'Piece weight, count, flavor, packaging and annual volume']],
    intro: 'Gummy manufacturing combines formulation, depositor capabilities, texture development, ingredient distribution, finishing and packaging. The right partner depends on your product, not just the number of units on the quote. We help organize a brief for a relevant gummy-manufacturing conversation.',
    caps: [
      ['Pectin or gelatin', 'Explore plant-based and traditional gummy base concepts based on product requirements.'],
      ['Flavor and texture', 'Share your sensory target, piece shape, size, color and finish.'],
      ['Package styles', 'Discuss jars, pouches, counts, closures, labeling and secondary packaging.'],
      ['Product development', 'Identify whether you need a new formula, scale-up help or a production-only relationship.']
    ],
    sections: [
      ['Start with the piece and the package', 'A useful gummy inquiry specifies intended piece weight, gummies per package, serving concept, count configuration, preferred packaging and target annual volume. If custom tooling is involved, surface that as early as possible.'],
      ['Gummy co-packing versus custom manufacturing', 'Filling branded pouches with existing gummies is different from developing and producing a custom infused gummy. Clearly describe whether you already have a formula, supplier and packaging or need a partner to scope the broader job.'],
      ['Ingredients and quality discussions', 'Ingredient compatibility, homogeneity, testing plans, packaging and destination-market requirements should be worked through with the selected partner. This site does not certify a formula, make market-access representations or substitute for professional review.'],
      ['Get a project-specific production conversation', 'No universal MOQ or price is meaningful without piece weight, recipe, packaging format and order size. Submit the information you have; missing details can be resolved during discovery.']
    ],
    callout: ['Know your piece weight and count?', 'That’s most of a gummy brief. Add your base preference and packaging and we’ll review fit.'],
    faqs: [
      ['Can I request vegan pectin gummies?', 'Yes. Include pectin or gelatin as your preferred base; the partner will assess manufacturing fit.'],
      ['Can I bring an established gummy recipe?', 'Yes. Share its readiness and what production documents are available.'],
      ['Do you have a standard minimum order quantity?', 'Minimums depend on the facility, packaging and production requirements; we do not post an unsupported blanket minimum.'],
      ['Do you provide white-label products?', 'State whether you want an existing base or a custom formula. Availability is discussed with the matching partner.']
    ],
    guides: ['choosing-a-beverage-copacker', 'launching-hemp-beverage'],
    related: ['beverage-formulation', 'hemp-beverage-co-packing', 'cbd-beverage-manufacturing', 'functional-co-packing']
  },
  'beverage-formulation': {
    title: 'Beverage Formulation &amp; Co-Manufacturing Texas | THC &amp; CBD',
    description: 'Need THC or CBD beverage formulation, scale-up or production transfer? Submit your concept and explore Texas partners for development and co-packing.',
    eyebrow: 'From product concept to production brief',
    h1: 'Beverage formulation and manufacturing planning in Texas',
    lead: 'Great beverage ideas still need a formula that fits the process, package and customer experience.',
    cta: 'Discuss formulation support',
    preset: { product: 'Formulation / product development' },
    quoteTitle: 'Bring the idea. <em>We’ll help scope the development.</em>',
    facts: [['Work discussed', 'Concept briefs, bench formulas and production transfer'], ['Good fit for', 'New concepts and formulas that need scale-up'], ['Bring to the first call', 'Flavor target, reference products, ingredients and budget']],
    intro: 'Whether you are starting with a concept or adapting an existing beverage, production planning works best when the development and manufacturing conversations happen together. We help define the scope before a potential partner makes claims about feasibility, timing or pricing.',
    caps: [
      ['Concept and flavor brief', 'Clarify taste profile, sweetness target, carbonation, intended usage and package presentation.'],
      ['Ingredient system', 'Discuss hemp-derived ingredients and whether a proposed emulsion or other delivery system needs review.'],
      ['Production transfer', 'Identify what documentation and technical work are needed to move a lab formula to the intended line.'],
      ['Packaging integration', 'Work backward from your can or bottle into formulation and filling constraints.']
    ],
    sections: [
      ['Formulation isn’t just a flavor exercise', 'Acidity, sweetness, mouthfeel, ingredient compatibility, packaging and process all influence the experience. An attractive bench sample is a starting point, not proof that a full commercial production run will behave identically.'],
      ['What to bring to the first conversation', 'A target flavor, competitive reference products, intended ingredients, package size, target retail channel and available development budget give partners useful context. If you already own the formula, describe the documentation and previous production history.'],
      ['Define the work before paying for production', 'Depending on the project’s maturity, the next step may be sampling, refinement, stability evaluation, ingredient sourcing or a production pilot. The partner should clearly outline scope, responsibilities and any technical milestones.'],
      ['Plan for a manufacturable and market-ready product', 'Any label, quality, ingredient or geographic-market review is product-specific and should be performed with qualified parties. We focus first on getting the manufacturing inquiry into the right hands.']
    ],
    callout: ['Only have a concept so far?', 'That’s a fine place to start. Describe the flavor direction, function and format, and we’ll look for a suitable development conversation.'],
    faqs: [
      ['Can you help if I only have an idea?', 'Yes. Describe the product concept and desired format; we can look for a suitable development conversation.'],
      ['Can a partner use my existing formula?', 'Potentially. Formulas and ingredients are assessed for compatibility and required scale-up work.'],
      ['Do you own the recipe?', 'Ownership and intellectual-property terms are determined between the brand and selected partner through their agreement.'],
      ['Can I request just co-packing without development?', 'Yes. Specify that your formula is production-ready and describe the required filling and packaging scope.']
    ],
    guides: ['launching-hemp-beverage', 'choosing-a-beverage-copacker'],
    related: ['hemp-beverage-co-packing', 'cbd-beverage-manufacturing', 'functional-co-packing', 'hemp-gummy-co-packing']
  },
  'functional-co-packing': {
    title: 'Functional Beverage Co-Packing Texas | Hemp &amp; Botanical RTDs',
    description: 'Explore Texas co-manufacturing for functional ready-to-drink beverages, including select hemp-derived cannabinoid concepts. Cans, bottles and product development.',
    eyebrow: 'Functional RTD beverages',
    h1: 'Functional beverage co-packing in Texas',
    lead: 'A functional beverage works when the consumer experience and manufacturing brief are aligned.',
    cta: 'Request a functional beverage quote',
    preset: { product: 'Functional beverage' },
    quoteTitle: 'Align the formula and the line. <em>Start your brief.</em>',
    facts: [['Formats discussed', 'Sparkling and still RTDs in cans or bottles'], ['Good fit for', 'Botanical and functional drinks, including select hemp-derived concepts'], ['Bring to the first call', 'Full ingredient list, sensory target, package and volume']],
    intro: 'Functional drinks may combine botanical ingredients, flavors and other specialty components. Those combinations can affect formulation, sensory quality, ingredient handling and the right production process. We help structure a discussion with relevant manufacturing partners without promising that any particular ingredient or product category is supported.',
    caps: [
      ['Ready-to-drink cans', 'Sparkling and still functional drink concepts with suitable can formats.'],
      ['Bottled formats', 'Single-serve tonics, mixers and other packaged drink formats for discussion.'],
      ['Formula evaluation', 'Consider the ingredient list, sensory targets, solubility and processing needs.'],
      ['Format matching', 'Clarify whether your primary requirement is formulation, filling or both.']
    ],
    sections: [
      ['Start with the complete ingredient brief', 'Provide a proposed ingredient list and any existing product-development notes. Compatibility, market requirements and the facility’s product acceptance criteria are evaluated separately during discovery.'],
      ['Match product claims to what you can support', 'Marketing positioning should be grounded in substantiated product characteristics. Avoid medical or therapeutic promises, and confirm any required review of labels, ingredients and advertising before release.'],
      ['Plan the commercial configuration', 'Describe your package size, carbonation, finished-goods configuration, planned distribution and production volume. These details matter just as much as the ingredient concept.'],
      ['Choose partners based on the actual process', 'Not every beverage facility runs every product type. A targeted inquiry helps narrow the search without suggesting blanket capabilities or approvals.']
    ],
    callout: ['Have a draft ingredient list?', 'Send it with your package and volume. Ingredient suitability is reviewed with each partner, not assumed.'],
    faqs: [
      ['Do all partners handle every functional ingredient?', 'No. Ingredient suitability is evaluated individually with the manufacturing partner.'],
      ['Can hemp ingredients be combined with other functional ingredients?', 'Submit the proposed formula and intended markets; the partner and qualified advisers can evaluate the specific proposal.'],
      ['Can I use a standard 12 oz can?', 'Describe your intended package. Exact sizes and line availability vary.'],
      ['Are you making health claims about these beverages?', 'No. This site provides manufacturing introductions and general production-planning information only.']
    ],
    guides: ['choosing-a-beverage-copacker', 'cans-vs-bottles'],
    related: ['cbd-beverage-manufacturing', 'hemp-beverage-co-packing', 'canned-beverage-co-packing', 'beverage-formulation']
  }
};

const findSvc = (slug) => SERVICES.find((s) => s.slug === slug);
const findRes = (slug) => RESOURCES.find((r) => r.slug === slug);

export function servicePage(slug, { assets, accessKey }) {
  const meta = findSvc(slug), c = SERVICE_CONTENT[slug];
  const path = serviceUrl(slug);
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Services', path: '/#capabilities' }, { name: meta.short, path }];

  const hero = `<section class="page-hero dark deep grid-bg" aria-labelledby="page-title">
<div class="container page-hero-grid">
<div class="page-hero-copy">
${breadcrumbs(crumbs)}
<p class="eyebrow">${c.eyebrow}</p>
<h1 id="page-title">${c.h1}</h1>
<p class="lead">${c.lead}</p>
<div class="actions"><a class="btn" href="#quote" data-cta="service_hero">${c.cta} ${icon.arrow}</a><a class="btn btn-ghost" href="/#process">How introductions work</a></div>
</div>
<div class="page-hero-art">${serviceArt(meta.art, 'sa', '#0D2722')}</div>
</div>
<dl class="facts container">${c.facts.map(([dt, dd]) => `<div><dt class="label">${dt}</dt><dd>${dd}</dd></div>`).join('')}</dl>
</section>`;

  const sec = c.sections.map(([h, p]) => `<h2>${h}</h2>\n<p>${p}</p>`);
  const callout = `<aside class="callout-box" aria-label="Request a quote"><div><h3>${c.callout[0]}</h3><p>${c.callout[1]}</p></div><a class="btn" href="#quote" data-cta="service_inline">${c.cta} ${icon.arrow}</a></aside>`;
  const article = `<article class="prose">
<p class="lead">${c.intro}</p>
<h2>Explore the manufacturing scope</h2>
<div class="cap-grid">${c.caps.map(([h, p]) => `<div><h3>${h}</h3><p>${p}</p></div>`).join('')}</div>
${sec[0]}
${sec[1]}
${callout}
${sec[2]}
${sec[3]}
<h2 id="questions">Common questions</h2>
${faqList(c.faqs)}
<p class="disclaimer">Independent introduction service. Manufacturing details are confirmed with partners; no blanket minimum or timeline guarantees.</p>
</article>`;

  const aside = `<aside class="aside" aria-label="Project planning and related services">
<div class="aside-card quote">
<p class="eyebrow">Start with the brief</p>
<h2>What to send us</h2>
<ul class="checks">
<li>${icon.check}<span>Product type and brand</span></li>
<li>${icon.check}<span>Packaging preference</span></li>
<li>${icon.check}<span>Formula stage</span></li>
<li>${icon.check}<span>Target volume and timeline</span></li>
</ul>
<a class="btn btn-block" href="#quote" data-cta="service_aside">${c.cta} ${icon.arrow}</a>
<div class="aside-contact"><span>Prefer to talk?</span><a href="tel:${SITE.phone}">${SITE.phoneDisplay}</a><a href="mailto:${SITE.email}">${SITE.email}</a></div>
</div>
<div class="aside-card">
<h2>Related capabilities</h2>
<ul class="aside-links">${c.related.map((r) => `<li><a href="${serviceUrl(r)}">${findSvc(r).label}${icon.right}</a></li>`).join('')}</ul>
</div>
</aside>`;

  const body = `${hero}
<section class="section"><div class="container content-layout">${article}${aside}</div></section>
${inquiry({ preset: c.preset, source: slug, title: c.quoteTitle, accessKey })}
<section class="section paper" aria-labelledby="keep-title">
<div class="container">
<div class="section-head"><div><p class="eyebrow">Keep planning</p><h2 id="keep-title">Guides for <em>this kind of project.</em></h2></div><p>Practical reading before you talk to a facility.</p></div>
<div class="related">
${c.guides.map((g) => { const r = findRes(g); return `<a href="${resourceUrl(g)}"><span class="label">Guide</span><h3>${r.label}</h3><p>${r.blurb}</p><span class="link-arrow">Read guide ${icon.arrow}</span></a>`; }).join('\n')}
<a href="/resources/"><span class="label">Library</span><h3>All production planning resources</h3><p>Every guide on co-packer selection, packaging and first production runs.</p><span class="link-arrow">Browse resources ${icon.arrow}</span></a>
</div>
</div>
</section>
${finalCta({ title: `Ready to turn your ${meta.short.toLowerCase().replace('thc', 'THC').replace('cbd', 'CBD')} project into a <em>real manufacturing conversation?</em>`, text: 'Share your format, formula stage, volume and timing. We review every brief before any introduction is made.', button: c.cta })}`;

  const schema = [
    orgSchema,
    {
      '@type': 'Service', '@id': abs(path) + '#service', name: plain(c.h1), serviceType: 'Manufacturing partner introduction',
      provider: { '@id': ORG_ID }, areaServed: { '@type': 'State', name: 'Texas' }, description: plain(c.description), url: abs(path)
    },
    breadcrumbSchema(crumbs.filter((x) => !x.path.includes('#'))),
    faqSchema(c.faqs, path)
  ];

  return page({ path, title: c.title, description: c.description, assets, hasForm: true, current: slug, schema, body });
}

function plain(s) { return String(s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&'); }
