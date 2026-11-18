/* Website lead configuration.
 * web3forms access key is public client-side by design: verify the
 * destination inbox, enable spam controls and restrict accepted domains
 * in your form provider dashboard. Never place CRM API secrets here. */
window.SITE_CONFIG = {
  formEndpoint: "https://api.web3forms.com/submit",
  accessKey: "a5dfcbbe-ee86-4558-9092-451ed52d85f4",
  emailSubject: "New Beverage Co-Packing Texas manufacturing inquiry",
  calendarUrl: "", // Optional real booking URL only; blank hides booking CTA
  webhookUrl: "" // Optional browser-safe endpoint; do not put private tokens here
};