import"./sentry-BO41r49E.js";import{t as e}from"./assets-Dg8SH1yK.js";import{n as t,t as n}from"./redesign-CZXbk5U6.js";var r=t.zh;function i(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function a(e){return e.map(e=>`<article class="doc-card">
        <h3>${i(e.title)}</h3>
        <p>${i(e.description)}</p>
        <span>${i(e.implication)}</span>
      </article>`).join(``)}function o(){return n.principles.map((e,t)=>`<li><span>${String(t+1).padStart(2,`0`)}</span>${i(e)}</li>`).join(``)}function s(){return r.chapters.map(e=>`<article class="chapter-row">
        <div>
          <span>${i(e.marker)}</span>
          <h3>${i(e.title)}</h3>
        </div>
        <p>${i(e.body)}</p>
        <small>${i(e.proof)}</small>
      </article>`).join(``)}document.querySelector(`#story-doc`).innerHTML=`
  <main class="doc-shell">
    <section class="doc-hero">
      <nav class="doc-nav">
        <img src="${e(`ColaLogoWordMark.svg`)}" alt="Cola" decoding="async" />
        <a href="/">Open live preview</a>
      </nav>
      <div class="doc-hero-grid">
        <div class="doc-hero-copy">
          <span class="doc-kicker">Website Redesign / Storytelling Data</span>
          <h1>把官网做成一次相遇，而不是一次产品介绍。</h1>
          <p>${i(n.thesis)}</p>
        </div>
        <div class="doc-orbit" aria-hidden="true">
          <img src="${e(`ColaLogoSymbol.svg`)}" alt="" loading="lazy" decoding="async" />
          <span>2026</span>
          <span>2030</span>
        </div>
      </div>
    </section>

    <section class="doc-section">
      <div class="doc-section-heading">
        <span class="doc-kicker">01 / Shared Sources</span>
        <h2>底层判断来自三层输入。</h2>
      </div>
      <div class="doc-card-grid">${a(n.sourceMap)}</div>
    </section>

    <section class="doc-section doc-section--story">
      <div class="doc-section-heading">
        <span class="doc-kicker">02 / Scroll Story</span>
        <h2>${i(r.title)}</h2>
        <p>${i(r.subtitle)}</p>
      </div>
      <div class="chapter-flow">${s()}</div>
    </section>

    <section class="doc-section">
      <div class="doc-section-heading">
        <span class="doc-kicker">03 / Product Evidence</span>
        <h2>故事里的能力必须能落回工程事实。</h2>
      </div>
      <div class="doc-card-grid doc-card-grid--wide">${a(n.capabilityEvidence)}</div>
    </section>

    <section class="doc-section">
      <div class="doc-section-heading">
        <span class="doc-kicker">04 / Rules</span>
        <h2>后续探索要遵守这些设计原则。</h2>
      </div>
      <ol class="principle-list">${o()}</ol>
    </section>
  </main>
`;