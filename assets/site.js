/* Beverage Co-Packing Texas — navigation, lead form, analytics.
 * No dependencies. Progressive enhancement: every page works without JS. */
(function () {
  'use strict';

  var cfg = window.SITE_CONFIG || {};
  var doc = document;
  var $ = function (sel, ctx) { return (ctx || doc).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); };
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var CONTACT_EMAIL = 'hello@beveragecopackingtx.com';

  /* ------------------------------------------------------------------ */
  /* Analytics: GA4 (optional) + dataLayer for GTM users                */
  /* ------------------------------------------------------------------ */
  window.dataLayer = window.dataLayer || [];
  if (cfg.ga4MeasurementId && typeof window.gtag !== 'function') {
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', cfg.ga4MeasurementId);
    var s = doc.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(cfg.ga4MeasurementId);
    doc.head.appendChild(s);
  }
  function track(name, params) {
    params = params || {};
    params.page_path = location.pathname;
    try {
      if (typeof window.gtag === 'function') window.gtag('event', name, params);
      else window.dataLayer.push(Object.assign({ event: name }, params));
    } catch (e) { /* analytics must never break the page */ }
  }
  doc.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('[data-cta]');
    if (el) track('cta_click', { cta_id: el.getAttribute('data-cta'), link_url: el.getAttribute('href') || '' });
  });

  /* Attribution captured once per session and attached to the lead. */
  var ATTR_KEY = 'bcpt_attribution';
  try {
    if (!sessionStorage.getItem(ATTR_KEY)) {
      var q = new URLSearchParams(location.search), a = { landing_page: location.pathname + location.search, referrer: doc.referrer || '' };
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'].forEach(function (k) { if (q.get(k)) a[k] = q.get(k).slice(0, 200); });
      sessionStorage.setItem(ATTR_KEY, JSON.stringify(a));
    }
  } catch (e) { /* storage blocked */ }
  function attribution() { try { return JSON.parse(sessionStorage.getItem(ATTR_KEY) || '{}'); } catch (e) { return {}; } }

  /* ------------------------------------------------------------------ */
  /* Basics                                                             */
  /* ------------------------------------------------------------------ */
  $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  var header = $('.site-header');
  function onScrollHeader() { if (header) header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  /* ------------------------------------------------------------------ */
  /* Desktop dropdowns (disclosure pattern)                             */
  /* ------------------------------------------------------------------ */
  var dropdowns = $$('[data-dropdown]');
  function closeDropdown(item, focusButton) {
    var btn = $('button', item), panel = $('.dropdown', item);
    if (!btn || btn.getAttribute('aria-expanded') !== 'true') return;
    btn.setAttribute('aria-expanded', 'false');
    panel.hidden = true;
    if (focusButton) btn.focus();
  }
  function openDropdown(item) {
    dropdowns.forEach(function (other) { if (other !== item) closeDropdown(other); });
    $('button', item).setAttribute('aria-expanded', 'true');
    $('.dropdown', item).hidden = false;
  }
  var canHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  dropdowns.forEach(function (item) {
    var btn = $('button', item), timer;
    btn.addEventListener('click', function () {
      if (btn.getAttribute('aria-expanded') === 'true') closeDropdown(item); else openDropdown(item);
    });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeDropdown(item, true); }
      if (e.key === 'ArrowDown' && e.target === btn) { e.preventDefault(); openDropdown(item); var first = $('.dropdown a', item); if (first) first.focus(); }
    });
    item.addEventListener('focusout', function (e) { if (!item.contains(e.relatedTarget)) closeDropdown(item); });
    if (canHover) {
      item.addEventListener('mouseenter', function () { clearTimeout(timer); openDropdown(item); });
      item.addEventListener('mouseleave', function () { timer = setTimeout(function () { closeDropdown(item); }, 180); });
    }
  });
  doc.addEventListener('click', function (e) { dropdowns.forEach(function (item) { if (!item.contains(e.target)) closeDropdown(item); }); });

  /* ------------------------------------------------------------------ */
  /* Mobile drawer (modal dialog with focus trap)                       */
  /* ------------------------------------------------------------------ */
  var drawer = $('#drawer'), toggle = $('.menu-toggle'), lastFocus = null;
  var FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
  function drawerFocusables() { return $$(FOCUSABLE, drawer).filter(function (el) { return el.offsetParent !== null; }); }
  function openDrawer() {
    lastFocus = doc.activeElement;
    drawer.hidden = false;
    doc.body.classList.add('drawer-open');
    toggle.setAttribute('aria-expanded', 'true');
    requestAnimationFrame(function () { drawer.classList.add('is-open'); var c = $('.drawer-close', drawer); if (c) c.focus(); });
    track('menu_open', {});
  }
  function closeDrawer(restore) {
    if (!drawer || drawer.hidden) return;
    drawer.classList.remove('is-open');
    doc.body.classList.remove('drawer-open');
    toggle.setAttribute('aria-expanded', 'false');
    var done = function () { drawer.hidden = true; };
    if (reduceMotion) done(); else setTimeout(done, 280);
    if (restore !== false && lastFocus) lastFocus.focus();
  }
  if (drawer && toggle) {
    toggle.addEventListener('click', openDrawer);
    $$('[data-drawer-close]', drawer).forEach(function (el) { el.addEventListener('click', function () { closeDrawer(); }); });
    drawer.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); closeDrawer(); return; }
      if (e.key !== 'Tab') return;
      var f = drawerFocusables(); if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && doc.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && doc.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    $$('.drawer-toggle', drawer).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
        doc.getElementById(btn.getAttribute('aria-controls')).hidden = open;
      });
    });
    $$('a', drawer).forEach(function (a) { a.addEventListener('click', function () { closeDrawer(false); }); });
    window.addEventListener('resize', function () { if (window.innerWidth > 1060) closeDrawer(false); });
  }

  /* ------------------------------------------------------------------ */
  /* Scroll effects: reveal, sticky mobile CTA, reading progress, TOC   */
  /* ------------------------------------------------------------------ */
  var revealEls = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-visible'); ro.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { ro.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  var mobileCta = $('[data-mobile-cta]'), quoteSection = $('#quote'), footerEl = $('.footer');
  var quoteInView = false, footerInView = false;
  function updateMobileCta() {
    if (!mobileCta) return;
    var show = window.scrollY > 520 && !quoteInView && !footerInView;
    if (show === mobileCta.classList.contains('is-visible')) return;
    mobileCta.classList.toggle('is-visible', show);
    mobileCta.setAttribute('aria-hidden', String(!show));
    $$('a', mobileCta).forEach(function (a) { a.tabIndex = show ? 0 : -1; });
  }
  if (mobileCta && 'IntersectionObserver' in window) {
    var mo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.target === quoteSection) quoteInView = en.isIntersecting; else footerInView = en.isIntersecting; });
      updateMobileCta();
    });
    if (quoteSection) mo.observe(quoteSection);
    if (footerEl) mo.observe(footerEl);
  }
  window.addEventListener('scroll', updateMobileCta, { passive: true });

  var progress = $('[data-reading-progress]'), article = $('[data-article]');
  var tocLinks = $$('.toc a');
  if (progress && article) {
    var onRead = function () {
      var r = article.getBoundingClientRect(), total = r.height - window.innerHeight * 0.6;
      var p = Math.min(1, Math.max(0, -r.top / (total || 1)));
      progress.style.transform = 'scaleX(' + p.toFixed(3) + ')';
    };
    window.addEventListener('scroll', onRead, { passive: true });
    onRead();
  }
  if (tocLinks.length && 'IntersectionObserver' in window) {
    var heads = tocLinks.map(function (a) { return doc.getElementById(a.getAttribute('href').slice(1)); }).filter(Boolean);
    var to = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) tocLinks.forEach(function (a) { a.classList.toggle('is-current', a.getAttribute('href') === '#' + en.target.id); });
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    heads.forEach(function (h) { to.observe(h); });
  }

  /* ------------------------------------------------------------------ */
  /* Lead form                                                          */
  /* ------------------------------------------------------------------ */
  var form = $('#lead-form');
  if (!form) return;
  form.noValidate = true;

  var card = form.closest('.form-card');
  var steps = $$('.form-step', form);
  var alertBox = $('[data-form-alert]', form);
  var success = card && $('[data-form-success]', card);
  var submitBtn = $('[data-submit]', form);
  var submitLabel = $('[data-submit-label]', form);
  var stepStatus = $('[data-step-status]', form);
  var startedAt = Date.now();
  var started = false, submitting = false, currentStep = 1;

  var MESSAGES = {
    product_type: 'Choose the product category closest to your project.',
    packaging: 'Choose a packaging format, or “Not decided”.',
    volume: 'Choose an estimated first-run range (“Need guidance” is fine).',
    stage: 'Choose your development stage.',
    timeline: 'Choose a desired launch window.',
    name: 'Enter your full name.',
    company: 'Enter your company or brand name.',
    email: 'Enter your business email address.',
    emailFormat: 'Enter a valid email address, like you@company.com.',
    phoneFormat: 'Enter a valid phone number (digits, spaces, + ( ) - only).',
    websiteFormat: 'Enter a valid website, like yourbrand.com.'
  };

  function errorEl(field) {
    var id = field.type === 'radio' ? field.name : field.id;
    return doc.getElementById(id + '-err');
  }
  function groupOf(field) { return field.type === 'radio' ? form.querySelector('[data-group="' + field.name + '"]') : null; }
  function setError(field, msg) {
    var err = errorEl(field), target = groupOf(field) || field;
    if (msg) {
      target.setAttribute('aria-invalid', 'true');
      if (err) { err.textContent = msg; err.hidden = false; }
    } else {
      target.removeAttribute('aria-invalid');
      if (err) { err.textContent = ''; err.hidden = true; }
    }
  }
  function validate(field) {
    var v = (field.value || '').trim();
    if (field.type === 'radio') {
      var checked = form.querySelector('input[name="' + field.name + '"]:checked');
      return checked ? '' : MESSAGES[field.name];
    }
    if (field.required && !v) return MESSAGES[field.name] || 'This field is required.';
    if (!v) return '';
    if (field.name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return MESSAGES.emailFormat;
    if (field.name === 'phone' && (!/^[0-9+().\-\s]+$/.test(v) || v.replace(/\D/g, '').length < 7)) return MESSAGES.phoneFormat;
    if (field.name === 'website' && !/^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(:\d+)?(\/\S*)?$/i.test(v)) return MESSAGES.websiteFormat;
    return '';
  }
  function fieldsIn(step) {
    var seen = {};
    return $$('input:not([type=hidden]):not([name=botcheck]), select, textarea', step).filter(function (f) {
      if (f.type !== 'radio') return true;
      if (seen[f.name]) return false;
      seen[f.name] = true; return true;
    });
  }
  function validateStep(step) {
    var firstBad = null, count = 0;
    fieldsIn(step).forEach(function (f) {
      var msg = validate(f);
      setError(f, msg);
      if (msg) { count++; if (!firstBad) firstBad = f.type === 'radio' ? (form.querySelector('input[name="' + f.name + '"]:checked') || form.querySelector('input[name="' + f.name + '"]')) : f; }
    });
    if (firstBad) {
      firstBad.focus();
      announce(count === 1 ? 'One field needs attention.' : count + ' fields need attention.');
    }
    return !firstBad;
  }
  function announce(msg) { if (stepStatus) { stepStatus.textContent = ''; setTimeout(function () { stepStatus.textContent = msg; }, 30); } }

  // Live validation: validate on blur once a value exists, clear as soon as fixed.
  form.addEventListener('focusout', function (e) {
    var f = e.target;
    if (!f.name || f.type === 'radio' || f.type === 'hidden' || f.name === 'botcheck') return;
    if ((f.value || '').trim() || f.getAttribute('aria-invalid') === 'true') setError(f, validate(f));
  });
  form.addEventListener('input', function (e) {
    var f = e.target, target = groupOf(f) || f;
    if (!started) { started = true; track('form_start', { form_source: form.getAttribute('data-source') || '' }); }
    if (target.getAttribute('aria-invalid') === 'true' && !validate(f)) setError(f, '');
    if (alertBox && !alertBox.hidden && !submitting) alertBox.hidden = true;
  });
  form.addEventListener('change', function (e) { if (e.target.type === 'radio') setError(e.target, ''); });

  function showStep(n, focus) {
    currentStep = n;
    steps.forEach(function (s) { s.setAttribute('data-active', String(Number(s.getAttribute('data-step')) === n)); });
    $$('[data-progress]', card).forEach(function (p) {
      var k = Number(p.getAttribute('data-progress'));
      p.classList.toggle('is-active', k === n);
      p.classList.toggle('is-done', k < n);
    });
    if (focus) {
      var legend = $('.form-step[data-step="' + n + '"] .step-legend', form);
      if (legend) legend.focus({ preventScroll: true });
      var top = card.getBoundingClientRect().top;
      if (top < 0 || top > window.innerHeight * 0.6) card.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      announce('Step ' + n + ' of 2');
    }
  }
  var nextBtn = $('[data-next]', form), backBtn = $('[data-back]', form);
  if (nextBtn) nextBtn.addEventListener('click', function () {
    if (!validateStep(steps[0])) return;
    showStep(2, true);
    track('form_step_complete', { step: 1, product_type: val('product_type'), packaging: val('packaging') });
  });
  if (backBtn) backBtn.addEventListener('click', function () { showStep(1, true); });
  // Enter inside step 1 advances instead of submitting.
  form.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && currentStep === 1 && e.target.tagName !== 'TEXTAREA' && e.target.type !== 'submit') { e.preventDefault(); if (nextBtn) nextBtn.click(); }
  });

  function val(name) {
    var el = form.elements[name];
    if (!el) return '';
    if (el.length && el[0] && el[0].type === 'radio') { var c = form.querySelector('input[name="' + name + '"]:checked'); return c ? c.value : ''; }
    return (el.value || '').trim();
  }
  function setRadio(name, value) {
    var r = value && form.querySelector('input[name="' + name + '"][value="' + value.replace(/"/g, '\\"') + '"]');
    if (r) { r.checked = true; setError(r, ''); }
  }
  // Contextual CTAs can pre-select product/packaging (data attributes or ?product=&packaging=).
  doc.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('[data-preset-product], [data-preset-packaging]');
    if (!el) return;
    setRadio('product_type', el.getAttribute('data-preset-product'));
    setRadio('packaging', el.getAttribute('data-preset-packaging'));
  });
  (function () {
    var q = new URLSearchParams(location.search);
    setRadio('product_type', q.get('product'));
    setRadio('packaging', q.get('packaging'));
  })();

  function setBusy(busy) {
    submitting = busy;
    form.setAttribute('aria-busy', String(busy));
    if (!submitBtn) return;
    submitBtn.disabled = busy;
    if (busy) {
      submitLabel.textContent = 'Sending your brief…';
      if (!$('.spinner', submitBtn)) { var sp = doc.createElement('span'); sp.className = 'spinner'; sp.setAttribute('aria-hidden', 'true'); submitBtn.appendChild(sp); }
      $$('svg', submitBtn).forEach(function (s) { s.style.display = 'none'; });
    } else {
      submitLabel.textContent = 'Send project brief';
      var spn = $('.spinner', submitBtn); if (spn) spn.remove();
      $$('svg', submitBtn).forEach(function (s) { s.style.display = ''; });
    }
  }

  function mailtoFallback(values) {
    var lines = ['Project brief from ' + (values.name || '') + ' (' + (values.company || '') + ')', '',
      'Product: ' + (values.product_type || ''), 'Packaging: ' + (values.packaging || ''), 'First run: ' + (values.volume || ''),
      'Stage: ' + (values.stage || ''), 'Launch: ' + (values.timeline || ''), 'Phone: ' + (values.phone || ''), 'Website: ' + (values.website || ''), '', values.message || ''];
    return 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent('Manufacturing inquiry: ' + (values.company || 'new project')) + '&body=' + encodeURIComponent(lines.join('\n'));
  }
  function showFailure(kind, values) {
    var msg = {
      offline: 'You appear to be offline, so your brief was not sent. Reconnect and try again.',
      timeout: 'The form service took too long to respond, so we can’t confirm your brief was delivered.',
      config: 'The inquiry form is temporarily unavailable.',
      spam: 'That was quicker than we expected. Please review your details and press send again.',
      rejected: 'Our form service did not confirm delivery of your brief.'
    }[kind] || 'We couldn’t confirm your brief was delivered.';
    alertBox.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7v6.5M12 16.6v.4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg><div><p><strong>Not sent.</strong> ' + msg + '</p><p>Your answers are still here. Try again, or <a href="' + mailtoFallback(values) + '">email your brief to ' + CONTACT_EMAIL + '</a>.</p></div>';
    alertBox.hidden = false;
    track('form_submit_error', { reason: kind, form_source: form.getAttribute('data-source') || '' });
  }

  function renderSummary(values) {
    var box = $('[data-summary]', card); if (!box) return;
    var rows = [['Company', values.company], ['Product', values.product_type], ['Packaging', values.packaging], ['First run', values.volume], ['Launch', values.timeline], ['Reply to', values.email]];
    var dl = doc.createElement('dl');
    rows.forEach(function (r) { if (!r[1]) return; var dt = doc.createElement('dt'), dd = doc.createElement('dd'); dt.textContent = r[0]; dd.textContent = r[1]; dl.appendChild(dt); dl.appendChild(dd); });
    box.innerHTML = ''; box.appendChild(dl);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (submitting) return;
    alertBox.hidden = true;

    if (!validateStep(steps[0])) { showStep(1, false); validateStep(steps[0]); return; }
    if (!validateStep(steps[1])) return;

    var values = {};
    new FormData(form).forEach(function (v, k) { values[k] = typeof v === 'string' ? v.trim() : v; });

    // Spam traps: honeypot checkbox + minimum human fill time. Never fake success.
    if (form.elements.botcheck && form.elements.botcheck.checked) { track('form_blocked', { reason: 'honeypot' }); return; }
    if (Date.now() - startedAt < 4000) { showFailure('spam', values); startedAt = Date.now() - 2500; return; }

    var accessKey = cfg.accessKey || values.access_key;
    if (!cfg.formEndpoint || !accessKey) { showFailure('config', values); return; }
    if (navigator.onLine === false) { showFailure('offline', values); return; }

    delete values.botcheck; delete values.redirect;
    values.access_key = accessKey;
    values.subject = 'New inquiry: ' + values.product_type + ' · ' + values.packaging + ' — ' + values.company;
    values.from_name = 'Beverage Co-Packing Texas website';
    values.page_url = location.href.split('#')[0];
    values.page_title = doc.title;
    values.submitted_at = new Date().toISOString();
    var attr = attribution();
    Object.keys(attr).forEach(function (k) { if (attr[k]) values[k] = attr[k]; });
    Object.keys(values).forEach(function (k) { if (values[k] === '') delete values[k]; });

    setBusy(true);
    var controller = 'AbortController' in window ? new AbortController() : null;
    var timeout = setTimeout(function () { if (controller) controller.abort(); }, 20000);

    fetch(cfg.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(values),
      signal: controller ? controller.signal : undefined
    }).then(function (res) {
      return res.text().then(function (text) {
        var body = null;
        try { body = JSON.parse(text); } catch (err) { body = null; }
        // Only a 2xx response whose JSON explicitly says success:true counts as delivered.
        if (!res.ok || !body || body.success !== true) { var er = new Error('rejected'); er.kind = 'rejected'; er.status = res.status; throw er; }
        return body;
      });
    }).then(function () {
      clearTimeout(timeout);
      setBusy(false);
      renderSummary(values);
      form.hidden = true;
      var prog = $('.progress', card); if (prog) prog.hidden = true;
      success.hidden = false;
      var h = $('h3', success); if (h) h.focus({ preventScroll: true });
      success.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
      track('generate_lead', {
        form_name: 'manufacturing_inquiry', form_source: form.getAttribute('data-source') || '',
        product_type: values.product_type, packaging: values.packaging, volume: values.volume, stage: values.stage, timeline: values.timeline
      });
      if (cfg.webhookUrl) {
        try {
          var hook = Object.assign({}, values); delete hook.access_key;
          fetch(cfg.webhookUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(hook), keepalive: true }).catch(function () {});
        } catch (err) { /* optional */ }
      }
    }).catch(function (err) {
      clearTimeout(timeout);
      setBusy(false);
      var kind = err && err.name === 'AbortError' ? 'timeout' : err && err.kind === 'rejected' ? 'rejected' : (navigator.onLine === false ? 'offline' : 'network');
      showFailure(kind, values);
    });
  });
})();
