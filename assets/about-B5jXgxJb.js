import"./sentry-BO41r49E.js";import{w as e}from"./analytics-DKd8AOaQ.js";import{a as t,r as n,s as r}from"./layout-CdhOWl4g.js";var i={en:`
    <h1>About Us</h1>
    <p>
      We are <strong>MarsWave</strong>, the company behind
      <strong>Cola</strong> — the first Agent Operating System.
    </p>

    <h2>Our Mission</h2>
    <p>
      We believe the next computing paradigm is not about better apps. It is about an
      intelligent agent layer that operates your computer for you. Cola is that layer:
      one AI that understands you, remembers you, and gets things done.
    </p>

    <h2>What We Build</h2>
    <p>
      Cola is a desktop application for macOS and Windows: a personal agent that lives
      on your computer. Instead of clicking through apps, you speak, and Cola executes. File
      operations, code, emails, scheduling, research, and deployments can all be handled
      by a single intelligent agent.
    </p>

    <h2>Our Values</h2>
    <p><strong>Privacy first.</strong> Cola runs locally on your machine. Your data stays yours.</p>
    <p><strong>Open ecosystem.</strong> Mods let anyone extend Cola's capabilities.</p>
    <p>
      <strong>Human-centered AI.</strong> Technology should feel personal, not mechanical.
      Cola has awareness, memory, and care.
    </p>

    <h2>Contact</h2>
    <p>Visit us at <a href="https://colaos.ai">colaos.ai</a> or email <a href="mailto:support@marswave.ai">support@marswave.ai</a>.</p>
  `,zh:`
    <h1>关于我们</h1>
    <p>
      我们是 <strong>火星回响</strong>，也是
      <strong>Cola</strong> 背后的团队。Cola 是首个 Agent 操作系统。
    </p>

    <h2>我们的使命</h2>
    <p>
      我们相信，下一个计算范式不是更好的 App，而是一个能替你操作电脑的智能 Agent 层。
      Cola 就是这一层：一个理解你、记住你，并真正把事情完成的 AI。
    </p>

    <h2>我们在做什么</h2>
    <p>
      Cola 是面向 macOS 和 Windows 的桌面应用，一个住在你电脑里的 Personal Agent。
      你不再需要在一个个应用里点击操作，只要开口，Cola 就能执行：文件、代码、邮件、
      日程、调研、部署，都可以交给同一个智能体完成。
    </p>

    <h2>我们的价值观</h2>
    <p><strong>隐私优先。</strong>Cola 在你的设备本地运行，你的数据属于你自己。</p>
    <p><strong>开放生态。</strong>Mod 让任何人都能扩展 Cola 的能力。</p>
    <p>
      <strong>以人为中心的 AI。</strong>技术不应该只是机械工具，也可以是有感知、记忆和关怀的陪伴。
    </p>

    <h2>联系我们</h2>
    <p>访问 <a href="https://colaos.ai">colaos.ai</a>，或发邮件至 <a href="mailto:support@marswave.ai">support@marswave.ai</a>。</p>
  `};function a(e){return{title:e===`zh`?`关于我们`:`About Us`}}function o(e){let n=a(e);document.documentElement.lang=e,document.title=`${n.title} — Cola`,document.querySelector(`#app`).innerHTML=`
${r()}
<main class="legal-page">
  <article class="legal-content" id="about-content">
    ${i[e]}
  </article>
</main>
${t()}
  `}o(e()),n(),window.addEventListener(`cola-locale-change`,()=>{let t=e();document.documentElement.lang=t,document.title=`${a(t).title} — Cola`,document.getElementById(`about-content`).innerHTML=i[t]});