# Texas Hemp Co-Pack — marketing site

Static, framework-free lead-generation site for hemp-derived THC, CBD and functional (kava, kratom, ashwagandha) co-packing in Texas. Hemp-only facility, low MOQs.
No build step. Upload the folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, cPanel).

## Files

| File | Purpose |
|---|---|
| `index.html` | Main landing page: hero, formats, functional ingredients, low MOQs, why, process, service area, FAQ, lead form |
| `hemp-beverage-co-packing.html` | SEO landing page: hemp THC beverages (cans, bottles, 750 ml) |
| `hemp-gummy-co-packing.html` | SEO landing page: hemp THC gummies |
| `hemp-capsule-co-packing.html` | SEO landing page: capsules and softgels |
| `functional-co-packing.html` | SEO landing page: kava, kratom, ashwagandha, functional ingredients |
| `thank-you.html` | Optional post-submit page with calendar button (noindex) |
| `assets/config.js` | **The only file you must edit**: form key, calendar URL, optional webhook |
| `assets/style.css`, `assets/site.js` | Styles and lead-form logic |
| `sitemap.xml`, `robots.txt` | Search engine files |

## 1. Launch checklist (10 minutes)

1. **Email notifications** — create a free account at <https://web3forms.com> using the inbox that should receive leads. Copy the access key into `accessKey` in `assets/config.js`. Every submission is emailed to you with all fields (name, company, email, phone, website, format, product type, volume, stage, message, page URL, timestamp).
   *Prefer Formspree?* Set `formEndpoint` to your Formspree form URL and leave `accessKey` empty.
2. **Calendar** — paste your Calendly / Google appointment / Cal.com / HubSpot booking link into `calendarUrl`. It appears on the success screen after submit, in the "Book a call" link, and on `thank-you.html`.
3. **Domain** — find-and-replace `https://www.yourdomain.com` with your real domain in all `.html` files, `sitemap.xml` and `robots.txt`. Also replace `hello@yourdomain.com` and `+1-512-000-0000`.
4. **Social image** — add a 1200×630 PNG at `assets/og-image.png` (referenced by Open Graph / Twitter tags).
5. Deploy, then submit `sitemap.xml` in Google Search Console and create a Google Business Profile for the local listing.

Optional: `webhookUrl` fires each lead to Zapier / Make / n8n as JSON (for a CRM or Google Sheet) in addition to the email.

## 2. Re-branding for another co-manufacturer

The brand name appears as plain text so it is indexable. To re-skin for a new client:

```bash
# run inside the site folder
sed -i 's/Texas Hemp Co-Pack/NEW BRAND NAME/g; s#https://www.yourdomain.com#https://newdomain.com#g' *.html sitemap.xml robots.txt
```

Then change the accent color in `assets/style.css` (`--accent`), swap `assets/favicon.svg`, and update `assets/config.js`. Hero copy, FAQ answers and the formats cards live in `index.html`.

## 3. SEO notes

- Target keywords are in page titles, H1/H2s, meta descriptions, body copy, FAQ and schema:
  hemp co-packing Texas, hemp THC co-packing, hemp beverage co-packing, Texas hemp beverages, THC gummy co-packing, capsule co-packing, kava co-packing, kratom co-packing, functional beverage co-packing, low MOQ co-packer.
- Structured data: `LocalBusiness` (with `areaServed` Texas/Austin/Dallas/Houston/San Antonio and an offer catalog), `WebSite`, `FAQPage`, `Service` and `BreadcrumbList` on subpages. Validate at <https://validator.schema.org> after you replace the domain.
- One H1 per page, semantic sections, descriptive link text, canonical URLs, Open Graph/Twitter cards, sitemap and robots.
- Performance: no frameworks, two web fonts (`display=swap`), inline SVG art, ~30 KB total before fonts.
- Add Google Analytics / Tag Manager in `<head>` if you want; the form already fires a `generate_lead` event when `gtag` is present.

## 4. Compliance note

Texas consumable hemp and kratom rules have changed several times and may change again. The copy keeps regulatory claims general (federal hemp limits, Texas DSHS licensing, kratom labeling). Have counsel review the site and labels before launch, and update the MOQ and timeline numbers in `index.html` and the service pages to match the facility's real figures.

## 5. Local preview

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>. With no form key set, the form runs in demo mode (shows the success screen without sending) so you can check the flow.
