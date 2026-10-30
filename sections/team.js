// Person C: build the Team section in this file. Don't edit any other file.
// Everything between the backticks is HTML. You can use ${SITE.name}, ${SITE.tagline} and ${SITE.color}.
// Put a <style> block inside and start every selector with #team so your CSS only affects your section.
section("team", () => `
  <style>
    #team .team-wrap { padding: 40px 0 8px; text-align: center; }
    #team .team-eyebrow { margin: 0; font-size: .8rem; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; color: color-mix(in srgb, ${SITE.color} 45%, #fff); }
    #team h2 { margin: 6px 0 8px; font-size: 1.9rem; line-height: 1.2; }
    #team .team-intro { margin: 0 auto 32px; max-width: 520px; color: #98a6bc; }
    #team .team-grid { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 16px; }
    #team .team-card { padding: 24px 18px; border: 1px solid #1f2d47; border-radius: 14px; background: #0f1a2e; }
    #team .team-avatar { width: 56px; height: 56px; margin: 0 auto 14px; border-radius: 50%; display: grid; place-items: center; font-weight: 700; color: #fff; background: ${SITE.color}; }
    #team .team-name { margin: 0; font-size: 1.05rem; font-weight: 600; }
    #team .team-role { margin: 2px 0 0; font-size: .9rem; color: #98a6bc; }
  </style>
  <div class="team-wrap">
    <p class="team-eyebrow">The team</p>
    <h2>The people behind ${SITE.name}</h2>
    <p class="team-intro">${SITE.tagline} We're building the easiest way to match every item on your shopping list with a coupon.</p>
    <ul class="team-grid">
      <li class="team-card">
        <div class="team-avatar">A</div>
        <p class="team-name">Person A</p>
        <p class="team-role">Product &amp; design</p>
      </li>
      <li class="team-card">
        <div class="team-avatar">B</div>
        <p class="team-name">Person B</p>
        <p class="team-role">Coupon search</p>
      </li>
      <li class="team-card">
        <div class="team-avatar">C</div>
        <p class="team-name">Person C</p>
        <p class="team-role">Shopping lists</p>
      </li>
      <li class="team-card">
        <div class="team-avatar">D</div>
        <p class="team-name">Person D</p>
        <p class="team-role">Growth &amp; partnerships</p>
      </li>
    </ul>
  </div>
`);
