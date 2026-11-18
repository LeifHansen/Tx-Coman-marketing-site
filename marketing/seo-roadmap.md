# SEO plan — Beverage Co-Packing Texas
Official production host: https://beveragecopackingtx.com (no www unless redirected).
Audience: commercial buyers looking for manufacturing services, not consumers looking to purchase THC or CBD.

## Keyword → page map
| Primary intent | Primary keyword | Page |
|--|--|--|
| Texas co-packing / discovery | hemp beverage co-packing Texas | / |
| THC RTD manufacturer | hemp THC beverage co-packing Texas | /hemp-beverage-co-packing.html |
| CBD drink manufacturing | CBD beverage manufacturing Texas | /cbd-beverage-manufacturing.html |
| Can filling | canned beverage co-packing Texas | /canned-beverage-co-packing.html |
| Bottle filling | bottled beverage co-packing Texas | /bottled-beverage-co-packing.html |
| Gummies | hemp gummy co-packing Texas | /hemp-gummy-co-packing.html |
| Formulation | hemp beverage formulation Texas | /beverage-formulation.html |
| Functional RTD | functional beverage co-packing Texas | /functional-co-packing.html |
| Commercial research | how to choose a beverage co-packer | /resources/choosing-a-beverage-copacker.html |
| Packaging comparison | cans vs bottles for beverages | /resources/cans-vs-bottles.html |
| First-run planning | hemp beverage production checklist | /resources/launching-hemp-beverage.html |

## Launch priorities
1. Verify domain, canonical tags and redirects on Netlify; ensure only one production hostname.
2. Confirm Web3Forms key delivery and anti-spam settings with a real test lead; instrument lead events.
3. Add PNG social preview at `assets/og-image.png` (1200 × 630) from the SVG source.
4. Submit `/sitemap.xml` in Google Search Console; verify indexing and noindex only for thank-you/404/legacy capsule.
5. Add first-party real production images **only with partner permission**, alt text and correct attribution.
6. Collect real partner capability details (formats, size ranges, locations, commercial process) before adding claims or geo-specific location pages.
7. Publish helpful long-tail pages built on firsthand expertise, not thin variations of city names.
8. Add an editorial byline and review date to substantive future resource content.
9. Use internal links from guide pages to relevant service pages and the main conversion form.
10. Monitor queries, CTR, page engagement, qualified-lead rate and form submission issues.

## Content calendar
- Month 1: launch guides: choosing a co-packer; cans vs bottles; first-run checklist.
- Month 2: production-readiness checklist for canned beverages; what impacts co-packing cost; formulation transfer documentation.
- Month 3: beverage packaging supplier questions; commercial scale-up challenges; gummy co-manufacturing project brief.
- Then improve pages based on actual Search Console queries and lead quality, not synthetic keyword density.

## Measurement
Event: `generate_lead` fires after confirmed form provider success when gtag is configured.
Recommended funnel: organic landing page → service page → `#quote` → confirmed lead.
Fields for CRM enrichment: name, company, email, phone, website, product_type, packaging, volume, stage, message, page_url, timestamp.
Only capture necessary B2B details. Avoid collecting confidential formulas.

## Structured data
Organization, WebSite, Service, BreadcrumbList, and Article as appropriate. Avoid declaring a fake operating location or using LocalBusiness as if this independent site runs one factory. Do not assume FAQ rich results are available to commercial sites.
