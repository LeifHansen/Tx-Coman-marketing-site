/* =====================================================================
   SITE CONFIG — the only file you need to edit to launch (or re-brand)
   ===================================================================== */
window.SITE_CONFIG = {
  /* ---- Lead form → email notification -----------------------------
     Default provider is Web3Forms (free, no backend). Sign up at
     https://web3forms.com with the inbox that should receive leads,
     paste the access key below, done. Every submission is emailed to
     that inbox.
     Alternative: Formspree. Set formEndpoint to your Formspree URL
     (https://formspree.io/f/XXXXXXXX) and leave accessKey empty.     */
  formEndpoint: "https://api.web3forms.com/submit",
  accessKey: "a5dfcbbe-ee86-4558-9092-451ed52d85f4",
  emailSubject: "New co-packing lead from the website",

  /* ---- Calendar (shown after a successful submit) -----------------
     Calendly / Google Calendar appointment page / HubSpot meetings /
     Cal.com — any public booking URL works.                         */
  calendarUrl: "https://calendly.com/your-handle/intro-call",

  /* ---- Optional: send leads somewhere else too --------------------
     A Zapier / Make / n8n webhook URL. Fired in parallel; failures
     are ignored so the visitor never sees an error.                 */
  webhookUrl: ""
};
