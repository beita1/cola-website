import{t as e}from"./cola-mascot-bjmXPSui.js";var t=`/cola-website/redesign/v4/`,n={zh:{about:`关于我们`,privacy:`隐私政策`,terms:`服务条款`,legal:`网站与法律信息`,switchTo:`en`,switchLabel:`English`},en:{about:`About us`,privacy:`Privacy`,terms:`Terms`,legal:`Site and legal information`,switchTo:`zh`,switchLabel:`中文`}};function r(r){let i=n[r];return`<header class="minimal-header">
    <a class="minimal-brand" href="${t}?lang=${r}" aria-label="Cola">
      ${e({className:`minimal-brand-mascot`,variant:`full`,motion:`none`})}
      <span class="minimal-wordmark">Cola</span>
    </a>
    <div class="minimal-header-actions">
      <nav aria-label="${i.about}">
        <a class="minimal-about" href="${t}about?lang=${r}">${i.about}<span aria-hidden="true">↗</span></a>
      </nav>
      <button class="minimal-language" type="button" data-locale-option="${i.switchTo}" lang="${i.switchTo}">${i.switchLabel}</button>
    </div>
  </header>`}function i(e){let r=n[e];return`<footer class="minimal-footer">
    <span class="minimal-copyright">© 2026 MARSWAVE PTE. LTD.</span>
    <nav aria-label="${r.legal}">
      <a href="${t}privacy?lang=${e}">${r.privacy}</a>
      <a href="${t}terms?lang=${e}">${r.terms}</a>
      <a href="mailto:support@marswave.ai">support@marswave.ai</a>
    </nav>
  </footer>`}export{r as n,i as t};