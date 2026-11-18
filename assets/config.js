/* Website lead configuration — the only file most launches need to edit.
 * The Web3Forms access key is public client-side by design. In the Web3Forms
 * dashboard: verify the destination inbox, enable spam filtering and restrict
 * submissions to beveragecopackingtx.com. Never place CRM API secrets here.
 * After editing, run `node scripts/build.mjs` so the no-JS fallback form and
 * cache-busting hashes pick up the change. */
window.SITE_CONFIG = {
  formEndpoint: "https://api.web3forms.com/submit",
  accessKey: "a5dfcbbe-ee86-4558-9092-451ed52d85f4",
  emailSubject: "New Beverage Co-Packing Texas manufacturing inquiry",
  ga4MeasurementId: "", // e.g. "G-XXXXXXXXXX". Blank = no GA4 script is loaded.
  calendarUrl: "", // Optional real booking URL only; blank hides booking CTA
  webhookUrl: "" // Optional browser-safe endpoint (Zapier/Make); never a private token
};
