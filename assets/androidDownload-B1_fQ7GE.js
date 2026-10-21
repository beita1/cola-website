import"./sentry-BO41r49E.js";import{d as e,f as t,h as n,l as r,p as i,r as a,u as o}from"./download-router-Cl16uwgv.js";import{t as s,w as c}from"./analytics-CZeFDEzo.js";import{r as l,t as u}from"./downloads-BgOuwNI9.js";import{t as d}from"./assets-Dg8SH1yK.js";var f=c(),p={zh:{pageTitle:`下载 Cola 安卓版`,description:`下载 Cola 安卓版。微信内请在默认浏览器中打开此页面，继续下载与安装。`,iosHint:`这是 Android 安装包，请使用 iOS 下载入口`,ready:`已准备好，随时可以下载`,eyebrow:`你的 AI 伙伴，随身同行`,title:`把 <span>Cola</span><br />装进口袋里。`,caption:`离开电脑，和 Cola 继续。`,hello:`手机里见！`,download:`下载安卓版`,iosDownload:`在 App Store 下载`,manualCopy:`长按下方链接，选择复制`,footer:`Cola，和你一起。`,help:`下载没开始？`,helpNote:`先查看浏览器的下载列表，也可以重试或复制安装包链接。`,retry:`再试一次`,copyLink:`复制安装包链接`,install:`下载后如何安装？`,requested:`请在浏览器的下载列表中查看文件。`,browserSteps:[[`下载安装包`,`点击下载按钮，获取 Cola 安卓版`],[`打开文件`,`在浏览器的下载列表中找到安装包`],[`完成安装`,`按手机提示允许本次安装，然后打开 Cola`]]},en:{pageTitle:`Download Cola for Android`,description:`Download Cola for Android. In WeChat, open this page in your default browser to download and install.`,iosHint:`This is an Android installer. Use the iOS download instead.`,ready:`Ready when you are`,eyebrow:`Your AI partner, on the go`,title:`Take <span>Cola</span><br />with you.`,caption:`Away from your desk. Still with Cola.`,hello:`See you there!`,download:`Download for Android`,iosDownload:`Download on the App Store`,manualCopy:`Press and hold the link below to copy`,footer:`Cola, by your side.`,help:`Download didn’t start?`,helpNote:`Check your browser’s downloads, or retry or copy the installer link.`,retry:`Try again`,copyLink:`Copy installer link`,install:`How do I install it?`,requested:`Check your browser’s downloads for the file.`,browserSteps:[[`Download the installer`,`Tap the download button to get Cola for Android`],[`Open the file`,`Find the installer in your browser’s downloads`],[`Install Cola`,`Follow your phone’s prompts to allow this installation, then open Cola`]]}}[f];document.documentElement.lang=f===`zh`?`zh-CN`:`en`,document.title=p.pageTitle,document.querySelector(`meta[name="description"]`)?.setAttribute(`content`,p.description);var m=null,h=m===`wechat`||m!==`browser`&&e(),g=a()===`ios`?`ios`:`android`,_=g===`ios`,v=_?l.ios:u,y=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M5 16v4h14v-4"/></svg>`;document.querySelector(`#app`).innerHTML=`
  <main class="download-poster">
    <header class="poster-header">
      <img class="cola-logo" src="${d(`Cola_Landscape_Lockup_Black.svg`)}" width="94" height="38" alt="Cola" />
      <span class="edition">FOR ANDROID <span class="edition-dot"></span></span>
    </header>
    <div class="browser-hint"><span></span> ${_?p.iosHint:p.ready}</div>
    <section class="poster-hero" aria-labelledby="download-title">
      <div class="hero-copy">
        <p class="eyebrow">${p.eyebrow}</p>
        <h1 id="download-title">${p.title}</h1>
        <p class="hero-caption">${p.caption}</p>
      </div>
      <div class="mascot-scene" aria-hidden="true">
        <div class="sun-disc"></div><span class="scene-spark spark-one">✳</span><span class="scene-spark spark-two">+</span><span class="hello-note">${p.hello}</span>
        ${n({variant:`full`,motion:`none`,className:`download-mascot`})}
        <span class="ground-line"></span>
      </div>
    </section>
    <div class="download-actions">
      <a class="primary-button" id="${_?`download-ios`:`download-apk`}" data-installer-link href="${v}">${y}${_?p.iosDownload:p.download}</a>
      <p class="action-status" id="action-status" role="status" aria-live="polite"></p>
    </div>
    ${_?``:`
      <details class="download-help"><summary>${p.help}</summary>
        <p>${p.helpNote}</p>
        <a class="secondary-button" data-installer-link href="${u}">${p.retry}</a>
        <div id="installer-copy"><button type="button" class="secondary-button" data-copy-download-link>${p.copyLink}</button>
          <p class="action-status" data-copy-feedback role="status" aria-live="polite"></p>
          <div class="manual-copy" data-copy-manual hidden><label for="installer-link">${p.manualCopy}</label><input id="installer-link" type="text" readonly /></div>
        </div>
      </details>
      <details class="install-guide"><summary>${p.install}</summary>
        <ol class="steps">${p.browserSteps.map(([e,t],n)=>`<li><span class="step-number">${n+1}</span><div><h3>${e}</h3><p>${t}</p></div></li>`).join(``)}</ol>
      </details>`}
    <footer class="poster-footer"><span>${p.footer}</span><span>colaos.ai</span></footer>
  </main>
  `;var b=`android_download_guide`;document.querySelectorAll(`[data-installer-link]`).forEach(e=>{e.addEventListener(`click`,e=>{e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||o(g,b,e,{isWechat:h,locale:f})||_||(document.querySelector(`#action-status`).textContent=p.requested)})});var x=document.querySelector(`#installer-copy`);x&&(h?x.hidden=!0:r(x,u,{platform:g,source:b,isWechat:h,locale:f})),i(`view_download_guide`,{platform:`android`,arch:`apk`,source:b,is_wechat:h}),h&&t({platform:g,source:b,locale:f,trigger:document.querySelector(`[data-installer-link]`)}),Promise.resolve().then(()=>s()).catch(()=>{});