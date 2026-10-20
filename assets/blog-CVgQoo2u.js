import"./sentry-BO41r49E.js";import{w as e}from"./analytics-BxwlRI5H.js";import{a as t,i as n,r,s as i}from"./layout-BqCmoxiI.js";import{a,i as o,t as s}from"./content-CqOySdX4.js";var c={en:{title:`Blog`,subtitle:`Product notes, engineering updates, and essays from the Cola team.`,all:`All`,emptyTitle:`No posts yet`,emptyBody:`Add Markdown files to src/content/blog/en or src/content/blog/zh.`,tagged:e=>`Posts tagged ${e}`},zh:{title:`博客`,subtitle:`来自 Cola 团队的产品记录、工程更新和思考。`,all:`全部`,emptyTitle:`还没有文章`,emptyBody:`把 Markdown 文件放到 src/content/blog/zh 或 src/content/blog/en。`,tagged:e=>`标签：${e}`}},l=new URLSearchParams(window.location.search).get(`tag`)??``;function u(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function d(e){return`<span class="blog-tag">${u(e)}</span>`}function f(e){return e.author?`<span class="blog-author">${e.authorAvatar?`<img class="blog-author-avatar" src="${u(e.authorAvatar)}" alt="" loading="lazy" referrerpolicy="no-referrer" />`:``}<span>${u(e.author)}</span></span>`:``}function p(e){let t=e.cover?`<img class="blog-card-cover" src="${u(e.cover)}" alt="" loading="lazy" />`:``,n=e.tags.length?`<div class="blog-card-tags">${e.tags.map(d).join(``)}</div>`:``;return`<article class="blog-card">
    <a class="blog-card-link" href="${e.href}">
      ${t}
      <div class="blog-card-body">
        <div class="blog-card-meta">
          <time datetime="${u(e.date)}">${s(e.date,e.locale)}</time>
          <span>${u(e.readingTime)}</span>
          ${f(e)}
        </div>
        <h2>${u(e.title)}</h2>
        <p>${u(e.description)}</p>
        ${n}
      </div>
    </a>
  </article>`}function m(e,t){if(!t.length)return``;let n=c[e];return`<div class="blog-filters" aria-label="Blog tags">
    <button class="blog-filter${l?``:` is-active`}" data-tag="" type="button">${n.all}</button>
    ${t.map(e=>`<button class="blog-filter${e===l?` is-active`:``}" data-tag="${u(e)}" type="button">${u(e)}</button>`).join(``)}
  </div>`}function h(e){let t=new URL(window.location.href);e?t.searchParams.set(`tag`,e):t.searchParams.delete(`tag`),history.replaceState(null,``,`${t.pathname}${t.search}${t.hash}`)}function g(){document.querySelectorAll(`.blog-filter`).forEach(t=>{t.addEventListener(`click`,()=>{l=t.dataset.tag??``,h(l),_(e())})})}function _(s){let d=c[s],f=a(s);l&&!f.includes(l)&&(l=``);let v=o(s).filter(e=>!l||e.tags.includes(l)),y=l?d.tagged(l):d.title;document.documentElement.lang=s,document.title=`${y} - ColaOS / Cola`,document.querySelector(`#app`).innerHTML=`
${n()}
${i()}
<main class="blog-page">
  <header class="blog-header">
    <h1>${u(y)}</h1>
    <p>${u(d.subtitle)}</p>
  </header>
  ${m(s,f)}
  ${v.length?`<section class="blog-grid">${v.map(p).join(``)}</section>`:`<section class="blog-empty">
          <h2>${u(d.emptyTitle)}</h2>
          <p>${u(d.emptyBody)}</p>
        </section>`}
</main>
${t()}
  `,r(),window.addEventListener(`cola-locale-change`,()=>{l=``,h(``),_(e())},{once:!0}),g()}_(e());