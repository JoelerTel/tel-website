# Texas Electric and Light — Master Project Handoff Document
**Last Updated:** September 14, 2026  
**Prepared by:** Claude (Anthropic) via project session  
**For:** Joel Neland, Texas Electric and Light

---

## 1. BUSINESS INFORMATION

| Field | Value |
|-------|-------|
| Company | Texas Electric and Light LLC |
| Owner | Joel Neland |
| License | TECL #28315 |
| Phone | (512) 547-4130 |
| Email | joel@texaselectricandlight.com |
| Address | 1111 Trail Ridge Dr, Dripping Springs, TX 78620 |
| Website | https://texaselectricandlight.com |
| Founded | 2004 |

---

## 2. CRITICAL CREDENTIALS & ACCESS

### GitHub
- **Account:** JoelerTel (business account)
- **Repo:** https://github.com/JoelerTel/tel-website
- **Repo visibility:** Public (required for GitHub Pages free tier)
- **Default branch:** main
- **GitHub Token:** [GITHUB-TOKEN-REDACTED]
  - ⚠️ This token is used by Claude to commit files via API
  - ⚠️ Keep this private — do not share publicly
  - If compromised: GitHub → Settings → Developer Settings → Personal Access Tokens → Revoke and regenerate

### Hosting
- **Platform:** GitHub Pages (free)
- **Live URL:** https://texaselectricandlight.com
- **GitHub Pages URL:** https://joelertel.github.io/tel-website/
- **SSL:** Enforced via GitHub Pages (Let's Encrypt)
- **Deploy method:** Auto-deploys on every push to main branch
- **Previous host:** SiteGround (no longer in use)

### DNS
- **Registrar:** GoDaddy
- **DNS managed by:** GoDaddy (switched from SiteGround September 14, 2026)
- **A Records (4):** All pointing to GitHub Pages IPs
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- **CNAME:** www → joelertel.github.io
- **Email DNS:** Google Workspace (MX records — do not touch)

### Tracking & Analytics
- **Google Tag Manager:** GTM-T6F5XM75
- **Hotjar:** hjid: 5349272
- **Google Ads Conversion:** AW-11469859729/bgd_CPXfgKYaEJHXoN0q
- **Google Search Console:** https://search.google.com/search-console (submit sitemap after going live)

---

## 3. HOSTING & DEPLOYMENT

### How GitHub Pages Works
- Every file committed to the `main` branch is automatically deployed
- Deployments take 30-60 seconds
- Check deployment status: GitHub repo → Actions tab → "pages build and deployment"
- Green checkmark = live. Orange spinner = building. Red X = error.

### How to Update the Site
**Option A — Via Claude (recommended for content):**
- Start a new chat, paste the GitHub token, tell Claude what to build
- Claude commits directly via GitHub API — no local tools needed

**Option B — Via GitHub Desktop:**
1. Open GitHub Desktop
2. Fetch origin (pulls latest changes)
3. Make changes to files locally
4. Commit with a message
5. Push origin
6. Check Actions tab to confirm deployment

**Option C — Edit directly on GitHub.com:**
1. Navigate to any file in the repo
2. Click pencil (Edit) icon
3. Make changes
4. Click "Commit changes"

### To Trigger a Manual Rebuild
Edit any file (even add a space to sitemap.xml) and commit. This triggers a new build.

---

## 4. REPO STRUCTURE

```
tel-website/
├── index.html                          ← Homepage
├── sitemap.xml                         ← 85 URLs — submit to Search Console
├── robot.txt                           ← Robots file
├── CNAME                               ← texaselectricandlight.com
├── assets/
│   ├── images/
│   │   ├── logos/Logo.png              ← Main logo
│   │   ├── services/                   ← Service images (see list below)
│   │   ├── neighborhoods/              ← Neighborhood hero images
│   │   └── projects/                   ← Project photos (add here)
├── pages/
│   ├── about.html
│   ├── services.html
│   ├── areas.html
│   ├── contact.html
│   ├── scheduling.html
│   ├── privacy-policy.html
│   ├── terms.html
│   ├── areas-we-serve/
│   │   └── austin/                     ← 52 neighborhood pages
│   ├── blog/
│   │   ├── index.html                  ← Blog homepage
│   │   ├── [12 blog posts].html
│   │   └── categories/
│   │       ├── electrical-safety/
│   │       └── home-improvement/
│   ├── projects/
│   │   ├── index.html                  ← Projects homepage (random featured)
│   │   └── commercial/
│   │       └── [10 project pages].html
│   └── services/                       ← Individual service pages
└── Strategy/                           ← Strategy documents (PDFs)
    └── Website Strategy for Pages/
        ├── Blogs/
        ├── Neighborhoods/
        │   └── Neighborhood Strategies/ ← 37 strategy PDFs
        └── Projects/
```

### Confirmed Service Images in assets/images/services/
- electrical-panel.jpg
- electric-panel-replacement.jpeg
- ev-charger.png
- outdoor_living.jpeg
- electrical-safety.jpeg
- electrical-wiring.jpeg
- electrical-wiring2.jpeg
- energy-efficiency.jpg
- energy-efficiency2.jpg
- exterior-lighting.jpg
- home-generator.jpeg
- home-office1.png
- kitchen-lighting.jpg / kitchen-lighting2.jpg / kitchen-lighting3.jpg
- luxury-lighting.jpg
- outdoor_living.jpeg
- restaurant-lighting1.jpg / restaurant-lighting2.jpg
- smart-home.jpeg
- working1.jpg
- bathroom-lighting1.jpg
- dock_power.jpg

---

## 5. PAGES BUILT

### Core Pages (5)
- Homepage (index.html)
- About Us
- Services
- Areas We Serve
- Contact

### Neighborhood Pages (52)
All at `pages/areas-we-serve/austin/[slug].html`

allandale, anderson-mill, barton-creek, bee-cave, bouldin-creek, buda, cedar-park, central-austin, cherrywood, circle-c, clarksville, crestview, domain, downtown, dripping-springs, east-austin, east-cesar-chavez, georgetown, govalle, holly, hyde-park, jollyville, kyle, lake-travis, lakeway, leander, liberty-hill, lost-creek, montopolis, mueller, mueller-east, north-austin, north-lamar, northwest-austin, oak-hill, pflugerville, river-place, rollingwood, round-rock, san-marcos, south-austin, south-congress, spicewood, steiner-ranch, sunset-valley, tarrytown, the-hills, travis-heights, university-of-texas, west-lake-hills, westlake, zilker

**Every neighborhood page includes:**
- Title tag, meta description, keywords (from strategy docs)
- Canonical URL
- LocalBusiness + Electrician schema with geo coordinates
- FAQPage schema
- BreadcrumbList schema
- GTM, Hotjar, Google Ads conversion tracking
- 3 service sections with correct image paths
- 4 area sub-cards
- 4 FAQ accordion items
- Mobile CTA bar with click-to-call
- Black text throughout (no lime green body text)
- onerror on images hides image only (not parent div)

### Blog Posts (12)
All at `pages/blog/[slug].html`

**Electrical Safety (6):**
- summer-electrical-safety-austin-homes
- electrical-panel-warning-signs
- gfci-outlet-testing-guide
- child-electrical-safety-austin
- storm-electrical-preparation-austin
- electrical-safety-inspection-checklist

**Home Improvement (6):**
- panel-upgrade-planning-guide
- ev-charger-installation-guide-austin
- smart-home-electrical-requirements
- energy-efficient-electrical-upgrades-austin
- kitchen-renovation-electrical-planning
- home-automation-wiring-basics

**Every blog post includes:**
- Article schema, BreadcrumbList schema
- Author: Texas Electric and Light (TECL #28315)
- GTM, Hotjar, conversion tracking
- Related posts section
- CTA banner
- Mobile CTA bar

### Commercial Project Pages (10)
All at `pages/projects/commercial/[slug].html`

| Project | Location | Status |
|---------|----------|--------|
| 44 East Condos EV Infrastructure | Downtown Austin | Completed |
| Indoor Golf Club | Georgetown | Completed |
| WeWork Office Renovation | Downtown Austin | Completed |
| Warehouse Electrical | Dripping Springs | In Progress |
| Bonfire Yoga Studio | Bee Cave | Completed |
| Hop Doddy's Burger Bar | Pflugerville | In Progress — Sept 2026 |
| Buckle — Round Rock Premium Outlets | Round Rock | In Progress — Oct 2026 |
| Comet Cleaners | Cedar Park | In Progress — Oct 2026 |
| Gil's Orthodontics | Dripping Springs | In Progress — Oct 2026 |
| GHWB Office Space Remodel | Austin | In Progress — Nov 2026 |

**Projects index features:**
- All 10 projects in card grid
- Random rotating featured project (JavaScript picks on every page load)
- In Progress = amber badge, Completed = lime green badge
- To add new project: add entry to PROJECTS array in index.html JS

**To update a project from In Progress to Completed:**
1. Change status badge from amber "In Progress" to lime green
2. Add photos to `assets/images/projects/[slug]/hero.jpg`
3. Update page text removing photo placeholder

---

## 6. SEO SETUP

### Sitemap
- **File:** sitemap.xml (repo root)
- **Total URLs:** 85
- **Submit to:** https://search.google.com/search-console → Sitemaps
- **URL:** https://texaselectricandlight.com/sitemap.xml

### URL Structure
```
Homepage:           texaselectricandlight.com/
Neighborhoods:      texaselectricandlight.com/areas-we-serve/austin/[slug].html
Blog posts:         texaselectricandlight.com/pages/blog/[slug].html
Blog categories:    texaselectricandlight.com/pages/blog/categories/[cat]/[cat].html
Projects:           texaselectricandlight.com/pages/projects/index.html
Project pages:      texaselectricandlight.com/pages/projects/commercial/[slug].html
```

### Schema Markup on Every Page
- LocalBusiness + Electrician (neighborhood pages)
- Article (blog posts and project pages)
- FAQPage (neighborhood pages)
- BreadcrumbList (all pages)
- Place + GeoCoordinates (project pages)

---

## 7. STRATEGY DOCUMENTS

Stored in `Strategy/Website Strategy for Pages/`

### Neighborhood Strategies (37 PDFs)
All at `Strategy/Website Strategy for Pages/Neighborhoods/Neighborhood Strategies/`

Built for: Travis Heights, Zilker, Oak Hill, Sunset Valley, Allandale, Crestview, East Cesar Chavez, Holly, Cherrywood, Govalle, Montopolis, Anderson Mill, Jollyville, North Lamar, Mueller East, and 22 others already in the repo from original setup.

### Blog Strategy
`Strategy/Website Strategy for Pages/Blogs/TEL Blog Strategy.pdf`
- 2 posts per week target
- 5 categories: Electrical Safety, Home Improvement, Seasonal, Commercial, DIY vs Professional
- Austin-specific content focus

### Projects Strategy
`Strategy/Website Strategy for Pages/Projects/TEL Projects Portfolio Strategy.pdf`
- Project pages as geographic proof points for Google
- Format: overview, scope of work (6 cards), challenges, stats bar, sticky sidebar

---

## 8. PENDING WORK

### Immediate (do now)
- [ ] Wait for GitHub DNS check to complete (may take up to 24 hours after nameserver switch)
- [ ] Once DNS clears — check "Enforce HTTPS" in GitHub Pages settings
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Verify GTM/Analytics firing on live site
- [ ] Verify Google Ads conversion tracking on live site

### Projects — Update When Complete
- [ ] Hop Doddy's Pflugerville → change to Completed September 2026, add photos
- [ ] Buckle Round Rock → change to Completed October 2026, add photos
- [ ] Comet Cleaners Cedar Park → change to Completed October 2026, add photos
- [ ] Gil's Orthodontics Dripping Springs → change to Completed October 2026, add photos
- [ ] GHWB Austin → change to Completed November 2026, add photos

### Photos Needed (drop in assets/images/projects/[slug]/)
- hop-doddys-pflugerville/hero.jpg
- buckle-round-rock/hero.jpg
- comet-cleaners-cedar-park/hero.jpg
- gils-orthodontics-dripping-springs/hero.jpg
- ghwb-office-space-remodel/hero.jpg

### Projects to Build (need details from Joel)
- [ ] Warehouses — need location, scope, completion date

### Blog — Continue Writing
- Target: 2 posts per week
- Next categories needed: Seasonal, Commercial & Business, DIY vs Professional
- Start new chat and say: "Write the next batch of TEL blog posts" — Claude has strategy doc

### Backend Dashboard (next major project)
**Vision:** Private page on the site that pulls from Google Search Console, Analytics, and Ads to show what's working and generate weekly content (blog + GBP posts + social captions) in one monthly session.

**Start new chat with:**
"We are building a private backend dashboard page for texaselectricandlight.com hosted on GitHub at JoelerTel/tel-website. It needs to pull from Google Search Console, Google Analytics, and Google Ads to show what's working and generate weekly content — blog posts, GBP posts, and social captions. Start simple and clean. GitHub token: [SEE SEPARATE TOKEN NOTE]"

### GBP Weekly Posting
- Not yet built
- Roadmap item #2
- Requires Google Business Profile API or manual workflow

---

## 9. ROADMAP (Original Priority Order)

1. ✅ Website migration + content build-out
2. ⏳ GBP weekly posting workflow
3. 🔲 Change order capture → QuickBooks integration
4. 🔲 Permit monitoring Austin
5. 🔲 Scheduling/dispatch sync
6. 🔲 Commercial job/labor tracking
7. 🔲 Backend dashboard (analytics + content generation)

---

## 10. HOW TO START A NEW CLAUDE SESSION

Paste this at the start of every new chat:

---
*"I am Joel Neland, owner of Texas Electric and Light (TECL #28315) in Dripping Springs TX. We are building and maintaining our website at texaselectricandlight.com. The site is hosted on GitHub Pages at github.com/JoelerTel/tel-website (public repo, main branch). GitHub token: [SEE SEPARATE TOKEN NOTE]. The site has 52 neighborhood pages, 12 blog posts, 10 commercial project pages, and a sitemap with 85 URLs. All tracking is set up: GTM-T6F5XM75, Hotjar hjid:5349272, Google Ads AW-11469859729. Today I need to: [DESCRIBE WHAT YOU WANT TO DO]"*

---

## 11. DESIGN STANDARDS

### Colors
- Lime Green (primary): #BFC921
- Powder Blue (accent): #B0E0E6
- Text dark: #111827
- Body text: #374151
- Background: white / #f9fafb (gray)

### Typography
- Font: Raleway (Google Fonts)
- Weights: 300, 400, 500, 600, 700

### Key Design Rules (never break these)
- Phone number in nav: black (#000000) — never lime green
- Body/paragraph text: #374151
- Service card "Learn more" links: #111827
- No testimonials on neighborhood pages
- onerror on images: hides image only (`this.style.display='none'`) — never hides parent div
- Mobile CTA bar: fixed bottom, lime green background, click-to-call
- Every phone number link has: `onclick="return gtag_report_conversion('tel:5125474130')"`

### Image Mapping (correct filenames)
| Referenced as | Actual filename |
|--------------|-----------------|
| ev-charger.jpg | ev-charger.png |
| outdoor-living.jpg | outdoor_living.jpeg |
| safety-inspection.jpg | electrical-safety.jpeg |
| wiring.jpg | electrical-wiring.jpeg |
| generator.jpg | home-generator.jpeg |
| lighting2.jpg | luxury-lighting.jpg |
| new-construction.jpg | working1.jpg |
| commercial.jpg | restaurant-lighting1.jpg |
| outdoor-lighting.jpg | exterior-lighting.jpg |

---

## 12. CONTACT & SUPPORT

| Resource | URL |
|----------|-----|
| GitHub Repo | https://github.com/JoelerTel/tel-website |
| GitHub Pages Settings | https://github.com/JoelerTel/tel-website/settings/pages |
| GitHub Actions | https://github.com/JoelerTel/tel-website/actions |
| Google Search Console | https://search.google.com/search-console |
| Google Analytics | https://analytics.google.com |
| Google Ads | https://ads.google.com |
| GoDaddy DNS | https://dcc.godaddy.com/control/portfolio/texaselectricandlight.com/settings |
| DNS Checker | https://dnschecker.org/#A/texaselectricandlight.com |
| Sitemap | https://texaselectricandlight.com/sitemap.xml |

