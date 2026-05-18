# Clearance Warehouse Company — Static Site
Generated: 2026-05-18

## UPLOAD INSTRUCTIONS

### GitHub Pages
1. Create a new repo named: `clearancewarehouse.company` (or your custom name)
2. Unzip this folder
3. Upload ALL files to the root of the repository
4. Go to Settings > Pages > Source: Deploy from branch > main / root
5. Add your CNAME in GitHub Pages settings (already in the CNAME file)

### Cloudflare Pages
1. Create a Cloudflare Pages project
2. Connect to your GitHub repo OR use Direct Upload
3. Upload all files — no build command needed (it's already static HTML)
4. Set custom domain: clearancewarehouse.company

### Vercel
1. Install Vercel CLI: npm i -g vercel
2. From the unzipped folder, run: vercel
3. Follow prompts, set domain to clearancewarehouse.company

## GOOGLE ANALYTICS
Find this comment in index.html and replace G-XXXXXXXXXX with your real ID:
<!-- Google Analytics Placeholder -->

## URL STRUCTURE CONFIRMED
- Homepage: /
- Blog Archive: /blog/
- Blog Posts: /post-slug/ (each stored as /post-slug/index.html)
- Legal Pages: /privacy-policy/, /terms-conditions/, /shipping-returns/

## POST COUNT
Total blog posts: 99

## SITEMAP
sitemap.xml includes:
- Homepage
- Blog archive
- All 99 blog post URLs
- 3 legal pages

## FILE STRUCTURE
/index.html          — Homepage
/style.css           — Homepage stylesheet
/assets/
  site.js            — Shared JavaScript
  style.css          — (copy of root for subpages via /assets/ path)
  *.jpg / *.png      — Hero and Fifi images
/blog/
  index.html         — Blog archive with search
/[post-slug]/
  index.html         — Individual blog posts (99 pages)
/privacy-policy/index.html
/terms-conditions/index.html
/shipping-returns/index.html
/sitemap.xml
/robots.txt
/CNAME
