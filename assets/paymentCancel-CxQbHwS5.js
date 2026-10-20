import"./sentry-BO41r49E.js";import{C as e,c as t,k as n}from"./analytics-DKd8AOaQ.js";import{a as r,i,r as a,s as o}from"./layout-CdhOWl4g.js";var s=`/cola-website/`;t({pageTitle:`Payment Cancelled - ColaOS / Cola`,pagePath:`/payment-cancel`,params:{site_locale:e()}}),document.querySelector(`#app`).innerHTML=`
${i()}
${o()}

<main class="payment-result-page">
  <div class="payment-result-card">
    <div class="payment-result-icon payment-result-icon--cancel">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </div>
    <h1 class="payment-result-title" data-i18n="payment.cancel.title">${n(`payment.cancel.title`)}</h1>
    <p class="payment-result-subtitle" data-i18n="payment.cancel.subtitle">${n(`payment.cancel.subtitle`)}</p>
    <a class="btn-submit payment-result-btn" href="${s}pricing" data-i18n="payment.cancel.back">${n(`payment.cancel.back`)}</a>
  </div>
</main>

${r()}
`,a();