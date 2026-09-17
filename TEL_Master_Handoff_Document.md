# Texas Electric and Light — Master Project Handoff Document
**Last Updated:** September 16, 2026  
**Prepared by:** Claude (Anthropic) via project session  
**For:** Joel Neland, Texas Electric and Light

---

## 2. CRITICAL CREDENTIALS & ACCESS

### GitHub
- **Account:** JoelerTel (business account)
- **Repo:** https://github.com/JoelerTel/tel-website
- **Repo visibility:** Public
- **Default branch:** main
- **GitHub Token:** [KEEP SECURE - USE IN CLAUDE SESSIONS]

### Hosting — VERCEL (current)
- **Platform:** Vercel (free hobby plan)
- **Live URL:** https://texaselectricandlight.com
- **Vercel URL:** https://tel-website-nine.vercel.app
- **Vercel Project:** texas-electric-and-light/tel-website
- **Auto-deploys:** Yes — every push to main branch deploys automatically
- **Previous hosts:** SiteGround (deleted), GitHub Pages (still active at joelertel.github.io/tel-website but not used for custom domain)

### DNS — CLOUDFLARE (current)
- **Nameservers:** evan.ns.cloudflare.com, melinda.ns.cloudflare.com (set in GoDaddy)
- **Registrar:** GoDaddy
- **Key DNS Records in Cloudflare:**
  - CNAME @ → cname.vercel-dns.com (DNS only)
  - CNAME www → cname.vercel-dns.com (DNS only)
  - MX records → Google Workspace (5 records, do not touch)
  - TXT _dmarc → existing record (do not touch)
  - TXT _github-pages-challenge-JoelerTel → 84c416e2494c82fc1c04dcfebf6af6 (keep for GitHub verification)

### Email
- **Provider:** Google Workspace
- **MX records:** In Cloudflare, pointing to Google (aspmx.l.google.com and alternates)
- **Status:** Working — can send and receive

### Tracking & Analytics
- **Google Tag Manager:** GTM-T6F5XM75
- **Hotjar:** hjid: 5349272
- **Google Ads Conversion:** AW-11469859729/bgd_CPXfgKYaEJHXoN0q

---

## 3. HOSTING & DEPLOYMENT

### How Vercel Works
- Every push to main branch in GitHub auto-deploys to Vercel
- Deployments take 30-60 seconds
- Check deployments: vercel.com → texas-electric-and-light/tel-website → Deployments
- Green = live

### How to Update the Site
**Via Claude (recommended):**
- Start new chat, paste GitHub token, tell Claude what to build
- Claude commits to GitHub → Vercel auto-deploys
- No manual steps needed

**Via GitHub Desktop:**
- Fetch origin → make changes → commit → push
- Vercel auto-deploys within 60 seconds

### Important URLs
- Live site: https://texaselectricandlight.com
- Vercel dashboard: https://vercel.com/texas-electric-and-light/tel-website
- Cloudflare DNS: https://dash.cloudflare.com
- GitHub repo: https://github.com/JoelerTel/tel-website
- GitHub Actions: https://github.com/JoelerTel/tel-website/actions
- Google Search Console: https://search.google.com/search-console
- Sitemap: https://texaselectricandlight.com/sitemap.xml

---

## PENDING — DO THESE NOW

- [ ] Submit sitemap to Google Search Console: https://texaselectricandlight.com/sitemap.xml
- [ ] Verify GTM firing on live site
- [ ] Verify Google Ads conversion tracking
- [ ] Build backend dashboard (next chat)
- [ ] Update project pages to Completed when jobs finish + add photos
- [ ] Continue blog posts (target 2/week)

---

## HOW TO START A NEW CLAUDE SESSION

Paste this at the start of every new chat:

"I am Joel Neland, owner of Texas Electric and Light (TECL #28315) in Dripping Springs TX. Our website is live at texaselectricandlight.com hosted on Vercel, with files in GitHub at github.com/JoelerTel/tel-website (public repo, main branch). GitHub token: [YOUR TOKEN]. The site has 52 neighborhood pages, 12 blog posts, 10 commercial project pages. DNS is managed by Cloudflare. Today I need to: [DESCRIBE WHAT YOU WANT]"

