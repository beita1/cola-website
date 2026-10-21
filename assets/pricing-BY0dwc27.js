import{C as e,_ as t,c as n,d as r,g as i,h as a,i as o,k as s,m as c,n as l,p as u,r as ee}from"./analytics-CZeFDEzo.js";import{C as te,S as ne,_ as re,a as ie,b as ae,c as oe,d as se,g as d,h as ce,i as le,n as f,p as ue,r as de,s as fe,v as p}from"./layout-CK2TuDYe.js";import{n as pe,r as me,t as he}from"./login-methods-CR70Ffft.js";import{a as ge,c as m,d as _e,f as ve,i as ye,l as be,n as xe,o as Se,r as h,s as Ce,t as we,u as Te}from"./pricing-cards-DbQI6qIe.js";import{n as g}from"./vip-invite-DKA2dilv.js";var Ee=[[`path`,{d:`M10 12h4`}],[`path`,{d:`M10 8h4`}],[`path`,{d:`M14 21v-3a2 2 0 0 0-4 0v3`}],[`path`,{d:`M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2`}],[`path`,{d:`M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16`}]],De=[[`path`,{d:`M5 12h14`}],[`path`,{d:`M12 5v14`}]],Oe=[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`}],[`path`,{d:`m15 9-6 6`}],[`path`,{d:`m9 9 6 6`}]],ke=Date.parse(`2026-10-07T00:00:00+08:00`);function Ae(){return Date.now()<ke}function je(e){let t=ke-Date.now();t<=0||setTimeout(e,t)}function _(e){return s(e).replace(`{min}`,m(1e3)).replace(`{max}`,m(500*100))}function Me(){return _(`tp.credits.minimum`)}function Ne(e){let t=Number(e);return!e.trim()||!Number.isFinite(t)?s(`tp.credits.invalid`):t<10?_(`tp.credits.too_low`):t>500?_(`tp.credits.too_high`):null}var v=o(window.location.hash);function Pe(e){return/\/credits(?:\.html)?\/?$/.test(e)}function Fe(){let e=new URLSearchParams(window.location.search).get(`tab`);return e===`credits`?`credits`:e===`plans`?`plans`:Pe(window.location.pathname)?`credits`:`plans`}var y=Fe();n({pageTitle:y===`credits`?`Top up Credits — ColaOS / Cola`:`Pricing — ColaOS / Cola`,pagePath:Pe(window.location.pathname)?`/credits`:`/pricing`,params:{entry_source:v,site_locale:e()}});var Ie=[10,50,100],Le=1e3;document.querySelector(`#app`).innerHTML=`
${le()}
${fe()}

<main class="pricing-page">
  <div class="pricing-header">
    <h1 class="pricing-title" data-i18n="membership.title">${s(`membership.title`)}</h1>
    <div class="pricing-segmented-control" role="tablist" aria-label="${s(`pricing.billing_type`)}">
      <button class="pricing-segmented-option" id="pricing-tab-plans" type="button" role="tab" aria-controls="pricing-panel-plans" data-pricing-tab="plans">
        <span data-i18n="membership.tab">${s(`membership.tab`)}</span>
      </button>
      <button class="pricing-segmented-option" id="pricing-tab-credits" type="button" role="tab" aria-controls="pricing-panel-credits" data-pricing-tab="credits">
        <span data-i18n="pricing.tab.credits">${s(`pricing.tab.credits`)}</span>
        ${Ae()?`<span class="pricing-segmented-badge" data-national-day-offer data-i18n="pricing.tab.limited_offer">${s(`pricing.tab.limited_offer`)}</span>`:``}
      </button>
    </div>
    <p class="pricing-subtitle" data-i18n="membership.subtitle">${s(`membership.subtitle`)}</p>
  </div>
  <section id="pricing-panel-plans" role="tabpanel" aria-labelledby="pricing-tab-plans">
    <div id="pricing-sections"></div>
    ${et()}
    ${rt()}
  </section>
  <section class="credits-content" id="pricing-panel-credits" role="tabpanel" aria-labelledby="pricing-tab-credits" hidden>
    ${$e()}
  </section>
</main>

${ie()}

${tt()}

<!-- Login Modal -->
<div class="modal-overlay" id="login-modal">
  <div class="modal login-modal" role="dialog" aria-modal="true" aria-labelledby="login-title">
    <button class="modal-close" id="close-login" type="button" aria-label="Close">&times;</button>

    <!-- Method selection and input steps -->
    <div id="login-email-step">
      <h2 class="modal-title" id="login-title" data-i18n="login.title">${s(`login.title`)}</h2>
      <p class="modal-subtitle" data-i18n="login.choose_subtitle">${s(`login.choose_subtitle`)}</p>
      ${pe(`login`,`
      <div class="form-field">
        <label class="login-method-label" for="login-email" data-i18n="login.email_sign_in">${s(`login.email_sign_in`)}</label>
        <input class="form-input" id="login-email" type="email" autocomplete="email" placeholder="${s(`login.email_placeholder`)}" data-i18n-placeholder="login.email_placeholder" />
        <div class="form-error" id="login-email-error"></div>
      </div>
      <button class="btn-submit" id="btn-send-otp" type="button">
        <span class="btn-submit-text" data-i18n="login.send_code">${s(`login.send_code`)}</span>
        <span class="btn-submit-loading" data-i18n="login.sending">${s(`login.sending`)}</span>
      </button>
      `)}
    </div>

    <!-- OTP step -->
    <div id="login-otp-step" style="display:none">
      <h2 class="modal-title" data-i18n="login.otp_title">${s(`login.otp_title`)}</h2>
      <p class="modal-subtitle"><span data-i18n="login.otp_subtitle">${s(`login.otp_subtitle`)}</span> <strong id="login-otp-email"></strong></p>
      <div class="form-error" id="login-otp-error"></div>
      <div class="otp-inputs" id="otp-inputs">
        <input class="otp-input" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]" />
        <input class="otp-input" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]" />
        <input class="otp-input" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]" />
        <input class="otp-input" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]" />
        <input class="otp-input" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]" />
        <input class="otp-input" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]" />
      </div>
      <button class="btn-submit" id="btn-verify-otp" type="button">
        <span class="btn-submit-text" data-i18n="login.verify">${s(`login.verify`)}</span>
        <span class="btn-submit-loading" data-i18n="login.verifying">${s(`login.verifying`)}</span>
      </button>
      <div class="login-actions">
        <button class="login-link-btn" id="btn-resend" type="button" data-i18n="login.resend">${s(`login.resend`)}</button>
        <button class="login-link-btn" id="btn-back-email" type="button" data-i18n="login.back">${s(`login.back`)}</button>
      </div>
    </div>
  </div>
</div>
`,de(),nt();var b=null,x=``,S=null,C=[],w=`loading`,T=!1,E=!1,D=document.getElementById(`pricing-sections`),O=document.querySelector(`.pricing-page`),k=document.querySelector(`.pricing-title`),A=document.querySelector(`.pricing-subtitle`),j=document.querySelector(`.pricing-segmented-control`),M=Array.from(document.querySelectorAll(`[data-pricing-tab]`)),Re=document.getElementById(`pricing-panel-plans`),ze=document.getElementById(`pricing-panel-credits`),N=document.getElementById(`tp-custom-trigger`),Be=document.getElementById(`tp-custom-panel`),P=document.getElementById(`tp-custom-input`),Ve=document.getElementById(`tp-custom-preview`);function He(){let e=Te(Number(P.value))/100;Ve.textContent=Number.isFinite(e)&&e>0?`${(e*Le).toLocaleString()} ${s(`tp.credits.unit`)}`:``}function Ue(e){return m(e*100)}function We(){document.querySelectorAll(`[data-topup-price-usd]`).forEach(e=>{e.textContent=Ue(Number(e.dataset.topupPriceUsd))}),document.querySelector(`.tp-topup-prefix`).textContent=be(),P.min=`10`,P.max=`500`,P.placeholder=P.min,document.getElementById(`tp-custom-hint`).textContent=Me(),P.value=``}function Ge(e){let t=new URL(window.location.href);return t.pathname=new URL(`/cola-website/pricing`,window.location.origin).pathname,t.searchParams.set(`tab`,e),t}function Ke(e){let t=Ge(e);t.href!==window.location.href&&history.pushState(null,``,t)}function F(e,t=!1){y=e,O.classList.toggle(`pricing-page--credits`,e===`credits`);let n=document.querySelector(`#pricing-tab-plans span`);n.dataset.i18n=`membership.tab`,n.textContent=s(n.dataset.i18n),M.forEach(t=>{let n=t.dataset.pricingTab===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-selected`,String(n)),t.tabIndex=n?0:-1}),Re.hidden=e!==`plans`,ze.hidden=e!==`credits`,e===`plans`&&z();let r=e===`credits`?`tp.credits.title`:`membership.title`,i=e===`credits`?`tp.credits.description`:`membership.subtitle`;k.dataset.i18n=r,k.textContent=s(r),A.dataset.i18n=i,A.textContent=s(i),j.setAttribute(`aria-label`,s(`pricing.billing_type`)),document.title=e===`credits`?s(`tp.credits.page_title`):`Pricing — ColaOS / Cola`,t&&Ke(e),Ze(),Qe()}function qe(t,n){let r=y;F(t,!0),u(`select_pricing_tab`,{tab:t,previous_tab:r,source:n,entry_source:v,site_locale:e()})}M.forEach(e=>{e.addEventListener(`click`,()=>{qe(e.dataset.pricingTab===`credits`?`credits`:`plans`,`segmented_control`)})}),O.addEventListener(`click`,e=>{let t=e.target.closest(`[data-switch-tab]`);t&&(qe(t.dataset.switchTab===`credits`?`credits`:`plans`,`shortcut_card`),window.scrollTo({top:0,behavior:`smooth`}))}),j.addEventListener(`keydown`,e=>{let t=M.findIndex(e=>e.dataset.pricingTab===y),n=t;if(e.key===`ArrowRight`||e.key===`ArrowDown`)n=(t+1)%M.length;else if(e.key===`ArrowLeft`||e.key===`ArrowUp`)n=(t-1+M.length)%M.length;else if(e.key===`Home`)n=0;else if(e.key===`End`)n=M.length-1;else return;e.preventDefault(),M[n].click(),M[n].focus()}),window.addEventListener(`popstate`,()=>F(Fe())),N.addEventListener(`click`,()=>{let e=Be.hasAttribute(`hidden`);Be.hidden=!e,N.setAttribute(`aria-expanded`,String(e)),N.classList.toggle(`is-active`,e),e&&P.focus()}),P.addEventListener(`input`,He);function Je(e){return xe(C,e)}function Ye(e,t){return Ce(e,!!t,t?.token_plan?.sale,S)}function I(t,n){let r=h(t);return r?{billing_action:n,entry_source:v,site_locale:e(),auth_state:d()?`logged_in`:`logged_out`,currency:t.currency.toUpperCase(),value:t.amount_cents/100,item:l({id:t.id,name:t.name,tier:r,amountCents:t.amount_cents}),created_at:Date.now()}:null}function L(t){let n=t.amountCents/100;return{billing_action:`topup`,entry_source:v,site_locale:e(),auth_state:d()?`logged_in`:`logged_out`,currency:`USD`,value:n,item:ee(n,t.variant),created_at:Date.now()}}function Xe(){return[...Ie.map(e=>ee(e,`preset_${e}`)),{item_id:`credits_topup`,item_name:`Credits Top-up`,item_category:`credits`,item_variant:`custom`,quantity:1}]}function Ze(){if(y!==`plans`||T)return;let t=ge.flatMap(e=>{let t=xe(C,e),n=h(t);return!t||!n?[]:[l({id:t.id,name:t.name,tier:n,amountCents:t.amount_cents})]});t.length!==0&&(T=!0,u(`view_item_list`,{item_list_id:`token_plans`,item_list_name:`Token Plans`,entry_source:v,site_locale:e(),items:t}))}function Qe(){y!==`credits`||E||(E=!0,u(`view_item_list`,{item_list_id:`credits_topup_options`,item_list_name:`Credits Top-up Options`,entry_source:v,site_locale:e(),items:Xe()}))}function R(t=!0){return e()===`zh`?`<div class="tp-payment-note">
    <span class="tp-payment-item tp-payment-item--alipay">
      <svg class="tp-payment-alipay" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#${me.hex}" d="${me.path}"></path></svg>
      <span>${s(`tp.payment.alipay`)}</span>
    </span>
    ${t?`<span class="tp-payment-divider" aria-hidden="true"></span>
    <span class="tp-payment-item">
      ${f(Oe,`tp-payment-cancel-icon`)}
      <span>${s(`tp.payment.cancel_anytime`)}</span>
    </span>`:``}
  </div>`:``}function $e(){let e=Ie.map(e=>`
      <button class="tp-topup-option" data-topup-usd="${e}" type="button">
        <span class="tp-topup-credit-summary">
          ${f(ve,`tp-topup-credit-icon`)}
          <strong class="tp-topup-credit-amount">${(e*Le).toLocaleString()}</strong>
        </span>
        <span class="tp-topup-credit-kind" data-i18n="tp.credits.permanent">${s(`tp.credits.permanent`)}</span>
        <span class="tp-topup-option-action">
          <span class="tp-topup-price" data-topup-price-usd="${e}">${Ue(e)}</span>
          <span data-i18n="tp.credits.action">${s(`tp.credits.action`)}</span>
        </span>
      </button>`).join(``);return`
    <div class="credits-purchase-card">
      ${Ae()?`<div class="credits-limited-offer" data-national-day-offer>
              ${f(ve,`credits-limited-offer-icon`)}
              <span data-i18n="tp.credits.national_day_offer">${s(`tp.credits.national_day_offer`)}</span>
            </div>`:``}
      <div class="tp-topup-options">
        ${e}
        <button class="tp-topup-option tp-topup-option--custom" id="tp-custom-trigger" type="button" aria-expanded="false" aria-controls="tp-custom-panel">
          <strong data-i18n="tp.credits.custom">${s(`tp.credits.custom`)}</strong>
        </button>
      </div>
      <div class="tp-custom-panel" id="tp-custom-panel" hidden>
        <label class="tp-custom-label" for="tp-custom-input" data-i18n="tp.credits.custom">${s(`tp.credits.custom`)}</label>
        <p class="tp-custom-label" id="tp-custom-hint">${Me()}</p>
        <div class="tp-custom-controls">
          <div class="tp-topup-input-wrap">
            <span class="tp-topup-prefix">${be()}</span>
            <input class="tp-topup-input" id="tp-custom-input" aria-describedby="tp-custom-hint" type="number" inputmode="decimal" min="10" max="500" step="0.01" placeholder="10" />
            <span class="tp-custom-preview" id="tp-custom-preview"></span>
          </div>
          <button class="pricing-card-btn tp-custom-buy" id="tp-custom-buy" type="button" data-i18n="tp.credits.action">${s(`tp.credits.action`)}</button>
        </div>
      </div>
      <div class="credits-pricing-entry">
        <p data-i18n="tp.credits.pricing_prompt">${s(`tp.credits.pricing_prompt`)}</p>
        <button class="credits-upgrade-button" type="button" data-switch-tab="plans" data-i18n="tp.credits.upgrade">${s(`tp.credits.upgrade`)}</button>
      </div>
      <div id="credits-payment-note">${R(!1)}</div>
    </div>`}function et(){return`
    <div class="pricing-enterprise">
      <button class="pricing-enterprise-open" id="pricing-enterprise-open" type="button" aria-haspopup="dialog" aria-controls="pricing-enterprise-dialog">
        <span class="pricing-enterprise-intro">
          ${f(Ee,`pricing-enterprise-icon`)}
          <span class="pricing-enterprise-copy">
            <span class="pricing-enterprise-title" data-i18n="pricing.enterprise.title">${s(`pricing.enterprise.title`)}</span>
            <span class="pricing-enterprise-subtitle" data-i18n="pricing.enterprise.subtitle">${s(`pricing.enterprise.subtitle`)}</span>
          </span>
        </span>
      </button>
      <a class="pricing-enterprise-action" href="mailto:k@marswave.ai" data-i18n="pricing.enterprise.learn_more">${s(`pricing.enterprise.learn_more`)}</a>
    </div>`}function tt(){return`
    <dialog class="pricing-enterprise-dialog" id="pricing-enterprise-dialog" aria-labelledby="pricing-enterprise-dialog-title" aria-describedby="pricing-enterprise-description">
      <button class="pricing-enterprise-close" id="pricing-enterprise-close" type="button" aria-label="${s(`pricing.enterprise.close`)}">
        ${f(_e,`pricing-enterprise-close-icon`)}
      </button>
      ${f(Ee,`pricing-enterprise-icon`)}
      <h2 id="pricing-enterprise-dialog-title" data-i18n="pricing.enterprise.title">${s(`pricing.enterprise.title`)}</h2>
      <p id="pricing-enterprise-description" data-i18n="pricing.enterprise.description">${s(`pricing.enterprise.description`)}</p>
      <a class="pricing-enterprise-contact" href="mailto:k@marswave.ai" data-i18n="pricing.enterprise.contact">${s(`pricing.enterprise.contact`)}</a>
      <a class="pricing-enterprise-email" href="mailto:k@marswave.ai">k@marswave.ai</a>
    </dialog>`}function nt(){let e=document.querySelector(`#pricing-enterprise-dialog`);if(!e)return;let t=``;document.getElementById(`pricing-enterprise-open`).addEventListener(`click`,()=>{t=document.body.style.overflow,e.showModal(),document.body.style.overflow=`hidden`}),document.getElementById(`pricing-enterprise-close`).addEventListener(`click`,()=>e.close()),e.addEventListener(`click`,t=>{if(t.target!==e)return;let n=e.getBoundingClientRect();(t.clientX<n.left||t.clientX>n.right||t.clientY<n.top||t.clientY>n.bottom)&&e.close()}),e.addEventListener(`close`,()=>{document.body.style.overflow=t})}function rt(){let e=(e,t)=>[3,9].includes(e)?`tp.faq.${e}.${t}`:`membership.faq.${e}.${t}`,t=[1,11,10,2,3,4,5,6,9].map(t=>`
        <details class="pricing-faq-item">
          <summary>
            <span data-i18n="${e(t,`q`)}">${s(e(t,`q`))}</span>
            ${f(De,`pricing-faq-icon`)}
          </summary>
          <p data-i18n="${e(t,`a`)}">${s(e(t,`a`))}</p>
        </details>`).join(``);return`
    <section class="pricing-faq" aria-labelledby="pricing-faq-title">
      <h2 id="pricing-faq-title" data-i18n="tp.faq.title">${s(`tp.faq.title`)}</h2>
      <div class="pricing-faq-list">
        ${t}
      </div>
      <p class="pricing-faq-contact">
        <span data-i18n="tp.faq.contact">${s(`tp.faq.contact`)}</span>
        <a href="mailto:support@marswave.ai">support@marswave.ai</a>
      </p>
    </section>`}function z(){let e=D.querySelector(`.tp-grid`);e&&we(e)}var it=0;new ResizeObserver(()=>{let e=D.getBoundingClientRect().width;e!==it&&(it=e,z())}).observe(D);function B(){D.innerHTML=`
    <section class="pricing-section">
      <div class="pricing-grid tp-grid">
        ${ye({packages:C,loadState:w,planStatus:S})}
      </div>
      ${w===`error`?`<p class="pricing-inline-error" role="alert">${s(`pricing.load_error`)}</p>`:``}
      ${R()}
    </section>`,z()}window.addEventListener(`cola-locale-change`,()=>{document.getElementById(`pricing-enterprise-close`)?.setAttribute(`aria-label`,s(`pricing.enterprise.close`)),B(),document.getElementById(`credits-payment-note`).innerHTML=R(!1),We(),He(),F(y)});async function V(){if(!d()){S=null;return}try{let e=await ce();S=e.ok&&e.data?e.data:null}catch{S=null}}async function at(){try{let[e]=await Promise.all([re(),V()]);if(!e.ok||!e.data||e.data.items.length===0){w=`error`,B();return}C=e.data.items,w=`loaded`,B(),Ze()}catch{w=`error`,B()}}B(),F(y),je(()=>{document.querySelectorAll(`[data-national-day-offer]`).forEach(e=>e.remove())}),D.addEventListener(`click`,e=>{let t=e.target.closest(`[data-plan-tier]`);if(t&&!t.disabled){let e=Je(t.dataset.planTier);if(!e)return;let n=I(e,t.dataset.action===`upgrade`?`upgrade`:`subscribe`);u(`click_buy`,{product_id:e.id}),n&&a(`select_item`,n,{item_list_id:`token_plans`,item_list_name:`Token Plans`}),ct(e.id)}});async function H(n){if(!d()){b={kind:`topup`,selection:n},pt();return}let a=L(n);try{let o=await se(n.amountCents,e());if(o.ok&&o.data?.checkout_url){g({checkoutSessionId:o.data.session_id,purchaseKind:`credits`,amountUsdCents:o.data.amount_cents,createdAt:Date.now()}),r(a),await i(`begin_checkout`,a),window.location.href=o.data.checkout_url;return}t(`billing_checkout_error`,a,{error_code:o.error?.code||`topup_failed`}),alert(s(`pricing.checkout_error`))}catch{t(`billing_checkout_error`,a,{error_code:`network_error`}),alert(s(`pricing.checkout_error`))}}ze.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`[data-topup-usd]`);if(n){let e=Number(n.dataset.topupUsd),t={amountCents:e*100,variant:`preset_${e}`},r=L(t);u(`click_topup`,{amount_usd:e}),a(`select_item`,r,{item_list_id:`credits_topup_options`,item_list_name:`Credits Top-up Options`}),H(t);return}if(t.closest(`#tp-custom-buy`)){let e=Ne(P.value);if(e){alert(e);return}let t={amountCents:Te(Number(P.value)),variant:`custom`},n=L(t);u(`click_topup`,{amount_usd:t.amountCents/100}),a(`select_item`,n,{item_list_id:`credits_topup_options`,item_list_name:`Credits Top-up Options`}),H(t)}});async function ot(){let e=/[#&]handoff_token=([a-f0-9]{64})/.exec(window.location.hash);return e?(history.replaceState(null,``,window.location.pathname+window.location.search),await ue(e[1])?`ok`:`failed`):`none`}function st(){let e=document.createElement(`div`);e.className=`pricing-notice`,e.setAttribute(`role`,`alert`),e.innerHTML=`
    <span data-i18n="pricing.handoff_expired">${s(`pricing.handoff_expired`)}</span>
    <button class="pricing-notice-close" type="button" aria-label="close">&times;</button>`,e.querySelector(`.pricing-notice-close`)?.addEventListener(`click`,()=>e.remove()),document.querySelector(`.pricing-header`)?.after(e)}ot().then(t=>(t===`failed`&&(st(),u(`billing_handoff_error`,{entry_source:v,site_locale:e(),page_type:y===`credits`?`credits`:`pricing`,error_code:`handoff_exchange_failed`})),at()));async function ct(e){if(!d()){b={kind:`plan`,productId:e},pt();return}await V(),B();let t=C.find(t=>t.id===e),n=h(t);if(!(!t||!n))switch(Ye(n,t)){case`current`:case`included`:alert(s(`pricing.already_active`));return;case`sold_out`:alert(s(`tp.sold_out`));return;case`unavailable`:alert(s(`tp.unavailable`));return;case`upgrade`:await ut(t);return;case`checkout`:await lt(t)}}async function lt(n,a=I(n,`subscribe`)){try{let o=await oe(n.id,{locale:e()});if(!o.ok&&o.error?.code===`PLAN_PURCHASE_PENDING`){if(!window.confirm(s(`pricing.switch_checkout_confirm`)))return;o=await oe(n.id,{replacePendingPlanCheckout:!0,locale:e()})}if(o.ok&&o.data?.checkout_url){n.currency.toUpperCase()===`USD`&&g({checkoutSessionId:o.data.session_id,purchaseKind:`plan`,amountUsdCents:n.amount_cents,createdAt:Date.now()}),a&&(r(a),await i(`begin_checkout`,a)),window.location.href=o.data.checkout_url;return}let c=o.error?.code??``;a&&t(`billing_checkout_error`,a,{error_code:c||`checkout_failed`}),alert(s(c===`PLAN_ALREADY_ACTIVE`?`pricing.already_active`:c===`PLAN_SOLD_OUT`?`tp.sold_out`:c===`PLAN_PURCHASE_PENDING`?`pricing.checkout_pending`:`pricing.checkout_error`))}catch{a&&t(`billing_checkout_error`,a,{error_code:`network_error`}),alert(s(`pricing.checkout_error`))}}async function ut(n){let a=I(n,`upgrade`);try{let o=await ne(n.id,e());if(o.ok&&o.data?.checkout_url){if(n.currency.toUpperCase()===`USD`&&g({checkoutSessionId:o.data.session_id,purchaseKind:`plan`,amountUsdCents:n.amount_cents,createdAt:Date.now()}),a){let e={...a,value:o.data.amount_cents/100,item:{...a.item,price:o.data.amount_cents/100}};r(e),await i(`begin_checkout`,e)}window.location.href=o.data.checkout_url;return}let c=o.error?.code??``;if(Se({code:c,message:o.error?.message})){await lt(n,a);return}a&&t(`billing_checkout_error`,a,{error_code:c||`upgrade_failed`}),alert(s(c===`PLAN_ALREADY_ACTIVE`?`pricing.already_active`:c===`PLAN_SOLD_OUT`?`tp.sold_out`:c===`PLAN_UPGRADE_TOO_LATE`?`pricing.upgrade_too_late`:`pricing.upgrade_error`))}catch{a&&t(`billing_checkout_error`,a,{error_code:`network_error`}),alert(s(`pricing.upgrade_error`))}}var U=document.getElementById(`login-modal`),W=document.getElementById(`login-email-step`),G=document.getElementById(`login-otp-step`),K=document.getElementById(`login-email`),q=document.getElementById(`login-email-error`),J=document.getElementById(`btn-send-otp`),Y=document.getElementById(`login-otp-error`),X=document.getElementById(`btn-verify-otp`),dt=document.getElementById(`login-otp-email`),Z=document.querySelectorAll(`.otp-input`),Q=he(U,ft);async function ft(){let e=b;$(),e?.kind===`plan`?(await V(),B(),await ct(e.productId)):e?.kind===`topup`&&await H(e.selection)}function pt(){W.style.display=``,G.style.display=`none`,q.textContent=``,Y.textContent=``,K.value=``,Z.forEach(e=>e.value=``),J.disabled=!1,J.classList.remove(`is-loading`),U.classList.add(`is-open`),Q.reset(),document.body.style.overflow=`hidden`}function $(){U.classList.remove(`is-open`),Q.restoreFocus(),document.body.style.overflow=``,b=null}document.getElementById(`close-login`).addEventListener(`click`,$),U.addEventListener(`click`,e=>{e.target===U&&$()}),document.getElementById(`btn-google-login`).addEventListener(`click`,async()=>{try{await c(`click_google_login`),await ae(window.location.pathname+window.location.search)}catch{Q.showError(s(`error.generic`))}});function mt(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}J.addEventListener(`click`,async()=>{if(q.textContent=``,x=K.value.trim(),!x){q.textContent=s(`login.email_required`);return}if(!mt(x)){q.textContent=s(`login.email_invalid`);return}J.disabled=!0,J.classList.add(`is-loading`);try{let e=await p(x);if(e.ok)W.style.display=`none`,G.style.display=``,dt.textContent=x,Z[0].focus();else{let t=`error.${e.error?.code??``}`;q.textContent=s(t)===t?e.error?.message??s(`error.generic`):s(t)}}catch{q.textContent=s(`error.network`)}finally{J.disabled=!1,J.classList.remove(`is-loading`)}}),K.addEventListener(`keydown`,e=>{e.key===`Enter`&&J.click()}),Z.forEach((e,t)=>{e.addEventListener(`input`,()=>{e.value=e.value.replace(/\D/g,``),e.value&&t<Z.length-1&&Z[t+1].focus(),t===Z.length-1&&e.value&&X.click()}),e.addEventListener(`keydown`,n=>{n.key===`Backspace`&&!e.value&&t>0&&Z[t-1].focus()}),e.addEventListener(`paste`,e=>{let t=e.clipboardData?.getData(`text`).replace(/\D/g,``)??``;if(t.length>=6){e.preventDefault();for(let e=0;e<6;e++)Z[e].value=t[e]??``;Z[5].focus(),X.click()}})}),X.addEventListener(`click`,async()=>{Y.textContent=``;let e=Array.from(Z).map(e=>e.value).join(``);if(e.length!==6){Y.textContent=s(`login.otp_required`);return}X.disabled=!0,X.classList.add(`is-loading`);try{(await te(x,e)).ok?await ft():(Y.textContent=s(`login.otp_invalid`),Z.forEach(e=>e.value=``),Z[0].focus())}catch{Y.textContent=s(`error.network`)}finally{X.disabled=!1,X.classList.remove(`is-loading`)}}),document.getElementById(`btn-resend`).addEventListener(`click`,async()=>{Y.textContent=``,Z.forEach(e=>e.value=``),await p(x),Z[0].focus()}),document.getElementById(`btn-back-email`).addEventListener(`click`,()=>{G.style.display=`none`,W.style.display=``,q.textContent=``}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&U.classList.contains(`is-open`)&&$()});