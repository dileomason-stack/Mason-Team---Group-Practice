// Person B: build the Features section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #features so your CSS only affects your section.
section("features", () => `
  <style>
    #features { --features-brand: ${SITE.color}; padding: 96px 24px; background: #f8f8f6; color: #171717; font-family: Arial, sans-serif; }
    #features .features-wrap { max-width: 1080px; margin: 0 auto; }
    #features .features-kicker { margin: 0 0 14px; color: var(--features-brand); font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
    #features h2 { max-width: 640px; margin: 0; font-size: clamp(32px, 5vw, 56px); line-height: 1.02; letter-spacing: -.045em; }
    #features .features-intro { max-width: 510px; margin: 20px 0 48px; color: #5c5c5c; font-size: 18px; line-height: 1.55; }
    #features .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid #d9d9d5; border-left: 1px solid #d9d9d5; }
    #features .feature-card { min-height: 218px; padding: 28px; border-right: 1px solid #d9d9d5; border-bottom: 1px solid #d9d9d5; background: #fff; }
    #features .feature-number { display: block; margin-bottom: 42px; color: var(--features-brand); font-size: 13px; font-weight: 700; }
    #features h3 { margin: 0 0 10px; font-size: 20px; letter-spacing: -.02em; }
    #features .feature-card p { margin: 0; color: #666; font-size: 15px; line-height: 1.55; }
    #features .features-note { margin: 24px 0 0; color: #777; font-size: 13px; }
    @media (max-width: 700px) {
      #features { padding: 64px 20px; }
      #features .features-grid { grid-template-columns: 1fr; }
      #features .feature-card { min-height: 0; }
    }
  </style>

  <div class="features-wrap">
    <p class="features-kicker">${SITE.name}</p>
    <h2>Shop your list for less.</h2>
    <p class="features-intro">${SITE.tagline} Add your groceries once and we’ll surface the offers worth using before you check out.</p>
    <div class="features-grid">
      <article class="feature-card"><span class="feature-number">01</span><h3>Build your list</h3><p>Type, scan, or paste the staples you need this week.</p></article>
      <article class="feature-card"><span class="feature-number">02</span><h3>Match live offers</h3><p>See relevant coupons from the supermarkets you already use.</p></article>
      <article class="feature-card"><span class="feature-number">03</span><h3>Save at checkout</h3><p>Keep every offer in one simple place, ready when you shop.</p></article>
    </div>
    <p class="features-note">Less searching. More savings on the things you actually buy.</p>
  </div>
`);
