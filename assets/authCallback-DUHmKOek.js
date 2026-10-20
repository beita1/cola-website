import"./sentry-BO41r49E.js";import{k as e,m as t}from"./analytics-DKd8AOaQ.js";import{f as n,i as r,u as i}from"./layout-CdhOWl4g.js";import{t as a}from"./skill-download-CiAwbHTJ.js";document.querySelector(`#app`).innerHTML=`
${r()}
<main class="auth-callback-page">
  <div class="auth-callback-card" id="auth-callback-card">
    <p class="auth-callback-status" data-i18n="auth.callback.signing_in">${e(`auth.callback.signing_in`)}</p>
  </div>
</main>
`;var o=document.getElementById(`auth-callback-card`),s=i();function c(){o.innerHTML=`
    <p class="auth-callback-status auth-callback-status--error" data-i18n="auth.callback.failed">${e(`auth.callback.failed`)}</p>
    <a class="credits-upgrade-button" href="${s}" data-i18n="auth.callback.retry">${e(`auth.callback.retry`)}</a>
  `}async function l(){let e=new URLSearchParams(window.location.search).get(`grant_token`);if(history.replaceState(null,``,window.location.pathname),!e){c();return}if(await n(e)){let e=new URL(s,location.origin),n=e.origin===location.origin&&e.pathname===`/download.html`?a(e.search):null;if(n)try{await t(`skill_download_login_success`,{source:n.source,method:`google`})}catch{}window.location.replace(s);return}c()}l();