// Person D: build the Sign up section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #signup so your CSS only affects your section.
section("signup", () => `
  <style>
    #signup .signup-card { border: 1px solid #1f2b42; border-radius: 16px; padding: 48px 24px; text-align: center; }
    #signup .signup-eyebrow { margin: 0 0 8px; font-size: .8rem; letter-spacing: .12em; text-transform: uppercase; color: #98a6bc; }
    #signup .signup-eyebrow::before { content: ""; display: inline-block; width: 8px; height: 8px; margin-right: 8px; border-radius: 50%; background: ${SITE.color}; vertical-align: middle; }
    #signup h2 { margin: 0 0 8px; font-size: clamp(1.6rem, 4vw, 2.2rem); font-weight: 600; line-height: 1.2; }
    #signup .signup-lede { margin: 0 auto 28px; max-width: 460px; color: #98a6bc; }
    #signup form { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; max-width: 440px; margin: 0 auto; }
    #signup form button { grid-column: 1 / -1; }
    #signup input { min-width: 0; padding: 12px 14px; border: 1px solid #2a3852; border-radius: 10px; background: #0f1829; color: #eef3fa; font: inherit; }
    #signup input::placeholder { color: #6b7a92; }
    #signup input:focus { outline: none; border-color: ${SITE.color}; box-shadow: 0 0 0 3px ${SITE.color}55; }
    #signup button { padding: 12px 20px; border: 0; border-radius: 10px; background: ${SITE.color}; color: #fff; font: inherit; font-weight: 600; cursor: pointer; }
    #signup button:hover { filter: brightness(1.15); }
    #signup .signup-note { margin: 14px 0 0; font-size: .8rem; color: #6b7a92; }
    #signup .signup-thanks { margin: 0 auto; max-width: 440px; padding: 14px; border: 1px solid #2a3852; border-radius: 10px; }
    #signup [hidden] { display: none; }
    @media (max-width: 480px) {
      #signup form { grid-template-columns: 1fr; }
    }
  </style>
  <div class="signup-card">
    <p class="signup-eyebrow">Free trial</p>
    <h2>Never pay full price again.</h2>
    <p class="signup-lede">Make your shopping list, and ${SITE.name} uses AI to find coupons and deals on every item before you shop. ${SITE.tagline}</p>
    <form onsubmit="event.preventDefault(); this.hidden = true; this.parentNode.querySelector('.signup-thanks').hidden = false;">
      <input type="text" required placeholder="First name" aria-label="First name" autocomplete="given-name">
      <input type="email" required placeholder="you@example.com" aria-label="Email address" autocomplete="email">
      <button type="submit">Start free</button>
    </form>
    <p class="signup-thanks" hidden>You're in! Check your inbox to start your free ${SITE.name} trial.</p>
    <p class="signup-note">No credit card needed. Cancel anytime.</p>
  </div>
`);
