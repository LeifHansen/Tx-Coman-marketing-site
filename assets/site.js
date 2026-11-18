/* Accessible navigation, form submission and lead tracking. */
(function(){
  "use strict";
  var y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();
  var toggle=document.querySelector(".menu-toggle"),menu=document.getElementById("mobile-menu");
  if(toggle&&menu){toggle.addEventListener("click",function(){var expanded=toggle.getAttribute("aria-expanded")==="true";toggle.setAttribute("aria-expanded",String(!expanded));menu.hidden=expanded;});menu.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){menu.hidden=true;toggle.setAttribute("aria-expanded","false");});});}
  var form=document.getElementById("lead-form");if(!form)return;
  var cfg=window.SITE_CONFIG||{},button=document.getElementById("lead-submit"),error=document.getElementById("lead-error"),success=document.getElementById("lead-success");
  function fail(message){button.disabled=false;button.textContent="Send project brief ↗";error.textContent=message;error.hidden=false;}
  form.addEventListener("submit",function(event){
    event.preventDefault();
    error.hidden=true;
    if(form.elements["_gotcha"]&&form.elements["_gotcha"].value)return;
    if(!form.checkValidity()){form.reportValidity();return;}
    if(!cfg.formEndpoint||!cfg.accessKey){fail("The inquiry form is temporarily unavailable. Please email hello@beveragecopackingtx.com.");return;}
    var values={};new FormData(form).forEach(function(v,k){if(k!=="_gotcha")values[k]=String(v).trim();});
    values.access_key=cfg.accessKey;
    values.subject=cfg.emailSubject||"New manufacturing inquiry";
    values.from_name="Beverage Co-Packing Texas website";
    values.page_url=location.href;
    values.submitted_at=new Date().toISOString();
    button.disabled=true;button.textContent="Submitting…";
    fetch(cfg.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify(values)}).then(function(response){return response.json().catch(function(){return {};}).then(function(body){if(!response.ok||body.success===false)throw Error("Not accepted");return body;});}).then(function(){
      form.hidden=true;success.hidden=false;success.scrollIntoView({behavior:"smooth",block:"center"});
      var focusTarget=success.querySelector("h3");if(focusTarget)focusTarget.focus();
      if(typeof window.gtag==="function")window.gtag("event","generate_lead",{event_category:"lead",form_name:"manufacturing_inquiry",product_type:values.product_type,packaging:values.packaging});
      if(cfg.webhookUrl){try{fetch(cfg.webhookUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(values),keepalive:true}).catch(function(){});}catch(e){}}
    }).catch(function(){fail("We could not confirm your inquiry was delivered. Please try again or email hello@beveragecopackingtx.com.");});
  });
})();