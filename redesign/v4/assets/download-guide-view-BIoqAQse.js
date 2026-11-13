import{t as e}from"./assets-B0RWCbAc.js";var t=`/cola-website/redesign/v4/assets/download-guide-install-BHVbrPdh.png`,n={zh:{pageTitle:`在 Mac 上安装 Cola`,title:`Cola 正在来到你的 Mac`,subtitle:`再花半分钟，完成安装。`,retryQuestion:`没有看到下载？`,retry:`重新下载`,sectionTitle:`三步完成安装`,step1Title:`打开安装包`,step1Body:`在右上角“下载”中打开 Cola.dmg。`,step2Title:`双击图标安装`,step2Body:`双击 Cola 图标，完成安装。`,step3Title:`打开 Cola`,step3Body:`在“应用程序”中打开 Cola，开始对话。`},en:{pageTitle:`Install Cola on your Mac`,title:`Cola is on the way to your Mac`,subtitle:`Just half a minute more to finish the setup.`,retryQuestion:`Didn't see the download?`,retry:`Download again`,sectionTitle:`Install in three steps`,step1Title:`Open the installer`,step1Body:`Open Cola.dmg from Downloads in the top-right corner.`,step2Title:`Double-click to install`,step2Body:`Double-click the Cola icon to finish installing.`,step3Title:`Open Cola`,step3Body:`Open Cola from Applications and start chatting.`}};function r(n,r){if(n===`02`)return`<div class="guide-install-art"><img
      class="guide-visual-image"
      src="${t}"
      width="1664"
      height="1194"
      alt=""
      loading="lazy"
      decoding="async"
    /></div>`;let i=`download-guide-step-${n}${`-${r}`}`;return`<img
    class="guide-visual-image"
    data-lazy-src="${e(`${i}.avif`)}"
    data-fallback-src="${e(`${i}.png`)}"
    width="900"
    height="600"
    alt=""
    loading="lazy"
    decoding="async"
  />`}function i(e,t){return`<div class="guide-visual guide-visual--${e===`01`?`downloads`:e===`02`?`install`:`launch`}" aria-hidden="true">
    ${r(e,t)}
  </div>`}function a(e){return n[e].pageTitle}function o(e,t){return t!==`zh`||!e.endsWith(`。`)?e:`${e.slice(0,-1)}<span class="download-guide-terminal-punctuation">。</span>`}function s(e){let t=n[e],r=[{title:t.step1Title,body:o(t.step1Body,e),visual:i(`01`,e)},{title:t.step2Title,body:o(t.step2Body,e),visual:i(`02`,e)},{title:t.step3Title,body:o(t.step3Body,e),visual:i(`03`,e)}];return`<main class="download-guide-page" id="download-guide-main">
    <section class="download-guide-hero">
      <div class="download-guide-hero-inner">
        <p class="download-guide-arrival">${t.title}</p>
        <h1 id="download-guide-title" tabindex="-1">${t.subtitle}</h1>
        <p class="download-guide-retry">
          <span>${t.retryQuestion}</span>
          <button type="button" data-download-guide-retry>${t.retry}</button>
        </p>
      </div>
    </section>

    <section class="download-guide-steps" aria-labelledby="download-guide-steps-title">
      <h2 id="download-guide-steps-title">${t.sectionTitle}</h2>
      <ol class="download-guide-step-grid">
        ${r.map((e,t)=>`<li class="download-guide-step">
              ${e.visual}
              <div class="download-guide-step-copy">
                <div class="download-guide-step-heading">
                  <span class="download-guide-step-number">0${t+1}</span>
                  <h3>${e.title}</h3>
                </div>
                <p>${e.body}</p>
              </div>
            </li>`).join(``)}
      </ol>
    </section>
  </main>`}function c(e){let t=document.createElement(`iframe`);t.className=`download-guide-frame`,t.title=``,t.setAttribute(`aria-hidden`,`true`),t.src=e,document.body.append(t),window.setTimeout(()=>t.remove(),6e4)}export{s as n,c as r,a as t};