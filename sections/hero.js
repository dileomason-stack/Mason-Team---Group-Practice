// Person A: build the Hero section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #hero so your CSS only affects your section.
section("hero", () => `
  <style>
    #hero .hero-wrap { padding: 72px 16px 56px; text-align: center; }
    #hero .hero-eyebrow { display: inline-block; margin: 0 0 20px; padding: 4px 12px; border: 1px solid #2a3a56; border-radius: 999px; font-size: .8rem; letter-spacing: .08em; text-transform: uppercase; color: #98a6bc; }
    #hero .hero-name { margin: 0; font-size: clamp(2.4rem, 7vw, 4rem); font-weight: 800; letter-spacing: -.03em; line-height: 1.05; color: #eef3fa; }
    #hero .hero-tagline { margin: 16px auto 32px; max-width: 32ch; font-size: clamp(1.1rem, 2.6vw, 1.35rem); color: #98a6bc; }
    #hero .hero-search { display: flex; gap: 8px; max-width: 480px; margin: 0 auto; }
    #hero .hero-input { flex: 1; min-width: 0; padding: 14px 16px; font: inherit; color: #eef3fa; background: #12203a; border: 1px solid #2a3a56; border-radius: 12px; outline: none; }
    #hero .hero-input::placeholder { color: #6b7a92; }
    #hero .hero-input:focus { border-color: ${SITE.color}; }
    #hero .hero-button { padding: 14px 24px; font: inherit; font-weight: 700; color: #fff; background: ${SITE.color}; border: 0; border-radius: 12px; cursor: pointer; transition: transform .15s, opacity .15s; }
    #hero .hero-button:hover { opacity: .9; transform: translateY(-1px); }
    #hero .hero-note { margin: 14px 0 0; font-size: .85rem; color: #6b7a92; }
    @media (max-width: 480px) {
      #hero .hero-wrap { padding: 48px 0 40px; }
      #hero .hero-search { flex-direction: column; }
    }
  </style>
  <div class="hero-wrap">
    <p class="hero-eyebrow">Save before you pay</p>
    <h1 class="hero-name">${SITE.name}</h1>
    <p class="hero-tagline">${SITE.tagline}</p>
    <form class="hero-search" onsubmit="event.preventDefault(); document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });">
      <input class="hero-input" type="text" placeholder="What are you buying?" aria-label="What are you buying?">
      <button class="hero-button" type="submit">Find a coupon</button>
    </form>
    <p class="hero-note">Free. No account needed to search.</p>
  </div>
`);
