import"./sentry-UPn_sU5S.js";import{d as e,i as t,m as n,u as r}from"./layout-DIDSpWdm.js";import{k as i,m as a}from"./analytics-BU9dly3m.js";import{t as o}from"./skill-download-Cz8Baqjn.js";document.querySelector(`#app`).innerHTML=`
${t()}
<main class="auth-callback-page">
  <div class="auth-callback-card" id="auth-callback-card">
    <p class="auth-callback-status" data-i18n="auth.callback.signing_in">${i(`auth.callback.signing_in`)}</p>
  </div>
</main>
`;var s=document.getElementById(`auth-callback-card`),c=e(),l=r();function u(){s.innerHTML=`
    <p class="auth-callback-status auth-callback-status--error" data-i18n="auth.callback.failed">${i(`auth.callback.failed`)}</p>
    <a class="credits-upgrade-button" href="${c}" data-i18n="auth.callback.retry">${i(`auth.callback.retry`)}</a>
  `}async function d(){let e=new URLSearchParams(window.location.search).get(`grant_token`);if(history.replaceState(null,``,window.location.pathname),!e){u();return}if(await n(e)){let e=new URL(c,location.origin),t=e.origin===location.origin&&e.pathname===`/download.html`?o(e.search):null;if(t)try{await a(`skill_download_login_success`,{source:t.source,method:l})}catch{}window.location.replace(c);return}u()}d();