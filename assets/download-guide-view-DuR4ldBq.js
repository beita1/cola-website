import{t as e}from"./assets-Dg8SH1yK.js";var t={zh:{pageTitle:`在 Mac 上安装 Cola`,title:`Cola 正在来到你的 Mac`,subtitle:`再花半分钟，完成安装。`,retryQuestion:`没有看到下载？`,retry:`重新下载`,sectionTitle:`三步完成安装`,step1Title:`打开安装包`,step1Body:`在右上角“下载”中打开 Cola.dmg。`,step2Title:`拖入应用程序`,step2Body:`将 Cola 拖入“应用程序”。`,step3Title:`打开 Cola`,step3Body:`在“应用程序”中打开 Cola，开始对话。`},en:{pageTitle:`Install Cola on your Mac`,title:`Cola is on the way to your Mac`,subtitle:`Just half a minute more to finish the setup.`,retryQuestion:`Didn't see the download?`,retry:`Download again`,sectionTitle:`Install in three steps`,step1Title:`Open the installer`,step1Body:`Open Cola.dmg from Downloads in the top-right corner.`,step2Title:`Move Cola to Applications`,step2Body:`Drag Cola into Applications.`,step3Title:`Open Cola`,step3Body:`Open Cola from Applications and start chatting.`}};function n(t,n){let r=`download-guide-step-${t}${t===`02`?``:`-${n}`}`;return`<img
    class="guide-visual-image"
    data-lazy-src="${e(`${r}.avif`)}"
    data-fallback-src="${e(`${r}.png`)}"
    width="900"
    height="600"
    alt=""
    loading="lazy"
    decoding="async"
  />`}function r(e,t){return`<div class="guide-visual guide-visual--${e===`01`?`downloads`:e===`02`?`drag`:`launch`}" aria-hidden="true">
    ${n(e,t)}
  </div>`}function i(e){return t[e].pageTitle}function a(e,t){return t!==`zh`||!e.endsWith(`。`)?e:`${e.slice(0,-1)}<span class="download-guide-terminal-punctuation">。</span>`}function o(e){let n=t[e],i=[{title:n.step1Title,body:a(n.step1Body,e),visual:r(`01`,e)},{title:n.step2Title,body:a(n.step2Body,e),visual:r(`02`,e)},{title:n.step3Title,body:a(n.step3Body,e),visual:r(`03`,e)}];return`<main class="download-guide-page" id="download-guide-main">
    <section class="download-guide-hero">
      <div class="download-guide-hero-inner">
        <p class="download-guide-arrival">${n.title}</p>
        <h1 id="download-guide-title" tabindex="-1">${n.subtitle}</h1>
        <p class="download-guide-retry">
          <span>${n.retryQuestion}</span>
          <button type="button" data-download-guide-retry>${n.retry}</button>
        </p>
      </div>
    </section>

    <section class="download-guide-steps" aria-labelledby="download-guide-steps-title">
      <h2 id="download-guide-steps-title">${n.sectionTitle}</h2>
      <ol class="download-guide-step-grid">
        ${i.map((e,t)=>`<li class="download-guide-step">
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
  </main>`}function s(e){let t=document.createElement(`iframe`);t.className=`download-guide-frame`,t.title=``,t.setAttribute(`aria-hidden`,`true`),t.src=e,document.body.append(t),window.setTimeout(()=>t.remove(),6e4)}export{o as n,s as r,i as t};