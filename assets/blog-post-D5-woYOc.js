const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mermaid.core-DJc3vZP2.js","assets/preload-helper-1VF55O3O.js","assets/chunk-O5CBEL6O-Cu6ExnQ0.js","assets/src-C84h95Ko.js","assets/chunk-DHfXtvq1.js","assets/chunk-5ZQYHXKU-Cq4KrdIg.js","assets/dist-7hoY51f_.js","assets/chunk-CSCIHK7Q-BLyt6deo.js","assets/chunk-3OPIFGDE-Df_19KfO.js","assets/chunk-L5ZTLDWV-CNBOtG5U.js","assets/chunk-NZK2D7GU-DzEOwpnl.js","assets/rough.esm-CUaa1Rbe.js","assets/chunk-BSJP7CBP-CL4f1fRV.js","assets/chunk-KSCS5N6A-CtK334x6.js","assets/line-DqULIN_S.js","assets/path-BEKmwDdT.js","assets/array-BTPJb1L2.js","assets/chunk-LZXEDZCA-BxH6_Z8V.js","assets/chunk-WU5MYG2G-Cz2osZJ4.js","assets/chunk-XPW4576I-DuRPGycp.js"])))=>i.map(i=>d[i]);
import{w as e}from"./analytics-BxwlRI5H.js";import{t}from"./preload-helper-1VF55O3O.js";import{a as n,i as r,r as i,s as a}from"./layout-BqCmoxiI.js";import{n as o,r as s,t as c}from"./content-CqOySdX4.js";var l=[[`path`,{d:`M12 2v13`}],[`path`,{d:`m16 6-4-4-4 4`}],[`path`,{d:`M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8`}]],u=2200,d={en:{blog:`Blog`,back:`Back to blog`,notFoundTitle:`Post not found`,notFoundBody:`The post may still be a draft or the URL may be wrong.`,previous:`Previous`,next:`Next`,updated:`Updated`,share:`Share`,copied:`Link copied`,copyFailed:`Copy failed`},zh:{blog:`博客`,back:`返回博客`,notFoundTitle:`文章不存在`,notFoundBody:`这篇文章可能仍是草稿，或当前 URL 不正确。`,previous:`上一篇`,next:`下一篇`,updated:`更新于`,share:`分享`,copied:`链接已复制`,copyFailed:`复制失败`}};function f(e){return`<svg class="blog-share-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${e.map(([e,t])=>`<${e} ${Object.entries(t).filter(([,e])=>e!==void 0).map(([e,t])=>`${e}="${t}"`).join(` `)}></${e}>`).join(``)}</svg>`}var p=f(l);function m(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function h(){let e=new URLSearchParams(window.location.search).get(`slug`);if(e)return e;let t=decodeURIComponent(window.location.pathname).split(`/`).filter(Boolean),n=t.lastIndexOf(`blog`);return n>=0&&t[n+1]?t[n+1]:document.body.dataset.blogSlug??``}function g(){return`/cola-website/blog/`}function _(e){return`<span class="blog-tag">${m(e)}</span>`}function v(e){return new URL(e.href,window.location.origin).href}function y(e){let t=document.createElement(`textarea`);t.value=e,t.className=`blog-share-copy-source`,t.setAttribute(`readonly`,``),document.body.append(t),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand(`copy`)}catch{return!1}finally{t.remove()}}async function b(e){try{if(navigator.clipboard)return await navigator.clipboard.writeText(e),!0}catch{}return y(e)}function x(e){return e instanceof DOMException&&e.name===`AbortError`}function S(e,t){let n=document.querySelector(`[data-blog-share]`),r=document.querySelector(`[data-blog-share-status]`);if(!n||!r)return;let i,a=(e,t)=>{window.clearTimeout(i),r.textContent=e,r.dataset.state=t,i=window.setTimeout(()=>{r.textContent=``,delete r.dataset.state},u)};n.addEventListener(`click`,async()=>{let r=v(e),i={title:e.title,text:e.description,url:r};n.disabled=!0;try{if(navigator.share)try{await navigator.share(i);return}catch(e){if(x(e))return}let e=await b(r);a(e?t.copied:t.copyFailed,e?`success`:`error`)}finally{n.disabled=!1}})}function C(e){if(!e.author)return``;let t=`${e.authorAvatar?`<img class="blog-author-avatar" src="${m(e.authorAvatar)}" alt="" loading="lazy" referrerpolicy="no-referrer" />`:``}<span>${m(e.author)}</span>`;return e.authorUrl?`<a class="blog-author blog-author-link" href="${m(e.authorUrl)}" target="_blank" rel="noopener">${t}</a>`:`<span class="blog-author">${t}</span>`}function w(e){document.title=`${e.title} - ColaOS / Cola Blog`;let t=document.querySelector(`meta[name="description"]`);t||(t=document.createElement(`meta`),t.name=`description`,document.head.append(t)),t.content=e.description}function T(e,t){let{previous:n,next:r}=o(e);if(!n&&!r)return``;let i=d[t];return`<nav class="blog-post-nav" aria-label="Blog post navigation">
    ${n?`<a href="${n.href}">
            <span>${i.previous}</span>
            <strong>${m(n.title)}</strong>
          </a>`:`<span></span>`}
    ${r?`<a href="${r.href}">
            <span>${i.next}</span>
            <strong>${m(r.title)}</strong>
          </a>`:`<span></span>`}
  </nav>`}async function E(){let e=document.querySelectorAll(`.blog-prose .mermaid`);if(!e.length)return;let{default:n}=await t(async()=>{let{default:e}=await import(`./mermaid.core-DJc3vZP2.js`);return{default:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]));n.initialize({startOnLoad:!1,securityLevel:`strict`,theme:document.documentElement.classList.contains(`dark`)?`dark`:`default`}),await n.run({nodes:e,suppressErrors:!0})}function D(t){let o=d[t];document.documentElement.lang=t,document.title=`${o.notFoundTitle} - ColaOS / Cola Blog`,document.querySelector(`#app`).innerHTML=`
${r()}
${a()}
<main class="blog-page blog-page--narrow">
  <section class="blog-empty">
    <h1>${m(o.notFoundTitle)}</h1>
    <p>${m(o.notFoundBody)}</p>
    <a class="blog-back-link" href="${g()}">${m(o.back)}</a>
  </section>
</main>
${n()}
  `,i(),window.addEventListener(`cola-locale-change`,()=>k(e()),{once:!0})}function O(t,o){let s=d[o],l=t.cover?`<img class="blog-post-cover" src="${m(t.cover)}" alt="" loading="eager" />`:``,u=t.tags.length?`<div class="blog-post-tags">${t.tags.map(_).join(``)}</div>`:``,f=t.updated&&t.updated!==t.date?`<span>${m(s.updated)} ${c(t.updated,t.locale)}</span>`:``;document.documentElement.lang=t.locale,w(t),document.querySelector(`#app`).innerHTML=`
${r()}
${a()}
<main class="blog-page blog-page--narrow">
  <article class="blog-post">
    <div class="blog-post-topbar">
      <a class="blog-back-link" href="${g()}">${m(s.back)}</a>
      <div class="blog-post-actions">
        <span class="blog-share-status" data-blog-share-status aria-live="polite"></span>
        <button class="blog-share-button" type="button" data-blog-share aria-label="${m(s.share)}">
          ${p}
          <span>${m(s.share)}</span>
        </button>
      </div>
    </div>
    <header class="blog-post-header">
      <div class="blog-post-meta">
        <time datetime="${m(t.date)}">${c(t.date,t.locale)}</time>
        <span>${m(t.readingTime)}</span>
        ${C(t)}
        ${f}
      </div>
      <h1>${m(t.title)}</h1>
      <p>${m(t.description)}</p>
      ${u}
    </header>
    ${l}
    <div class="blog-prose">
      ${t.html}
    </div>
  </article>
  ${T(t,o)}
</main>
${n()}
  `,i(),window.addEventListener(`cola-locale-change`,()=>k(e()),{once:!0}),S(t,s),E()}function k(e){let t=s(h(),e);if(!t){D(e);return}O(t,e)}k(e());