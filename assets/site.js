/* Lead form: validate → POST to form provider (emails you) → show calendar link. */
(function () {
  var cfg = window.SITE_CONFIG || {};
  var form = document.getElementById("lead-form");
  if (!form) return;

  var submitBtn = document.getElementById("lead-submit");
  var errorEl = document.getElementById("lead-error");
  var successEl = document.getElementById("lead-success");
  var calLink = document.getElementById("calendar-link");
  var configured = !!(cfg.accessKey || (cfg.formEndpoint && cfg.formEndpoint.indexOf("web3forms") === -1));

  if (calLink && cfg.calendarUrl) calLink.href = cfg.calendarUrl;
  document.querySelectorAll("[data-calendar]").forEach(function (a) { if (cfg.calendarUrl) a.href = cfg.calendarUrl; });

  function showError(msg) { errorEl.textContent = msg; errorEl.hidden = false; }

  function normalizeWebsite(v) {
    v = (v || "").trim();
    if (v && !/^https?:\/\//i.test(v)) v = "https://" + v;
    return v;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    errorEl.hidden = true;

    if (form.querySelector('[name="_gotcha"]').value) return; // bot

    var website = form.elements.website;
    website.value = normalizeWebsite(website.value);
    if (!form.checkValidity()) { form.reportValidity(); return; }

    var data = {};
    new FormData(form).forEach(function (v, k) { if (k !== "_gotcha") data[k] = v; });
    data.subject = cfg.emailSubject || "New co-packing lead";
    data.from_name = "Website lead form";
    data.page = location.href;
    data.submitted_at = new Date().toISOString();
    if (cfg.accessKey) data.access_key = cfg.accessKey;

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

    var done = function () {
      form.hidden = true;
      successEl.hidden = false;
      successEl.scrollIntoView({ behavior: "smooth", block: "center" });
      var h = successEl.querySelector("h3"); if (h) h.focus();
      if (window.gtag) gtag("event", "generate_lead", { form: "copack_lead" });
      if (cfg.webhookUrl) {
        try { fetch(cfg.webhookUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data), keepalive: true }).catch(function () {}); } catch (_) {}
      }
    };
    var fail = function () {
      submitBtn.disabled = false;
      submitBtn.textContent = "Request a quote";
      showError("Something went wrong sending your request. Please try again, or book a call directly using the calendar link below.");
    };

    if (!configured) {
      // Demo mode: no provider configured yet. Show the success state so the flow can be previewed.
      console.warn("Lead form: no form endpoint configured in assets/config.js — running in demo mode.");
      setTimeout(done, 500);
      return;
    }

    fetch(cfg.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(data)
    }).then(function (r) { return r.ok ? done() : fail(); }).catch(fail);
  });

  // Footer year
  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
})();
