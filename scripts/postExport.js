const dbSitemap = require('../db/sitemap.json')
const fs = require('fs')

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(
  dbSitemap
)
  .map(
    path => `
  <url>
    <loc>https://stupid-simple-blog.com${path}</loc>
    <lastmod>${dbSitemap[path].publishedSitemap}</lastmod>
  </url>`
  )
  .join('')}
</urlset>`

fs.writeFileSync('public/sitemap.xml', sitemapXml)

const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <atom:link href="https://stupid-simple-blog.com/rss.xml" rel="self" type="application/rss+xml" />
      <title>Stupid Simple Blog.</title>
      <link>https://stupid-simple-blog.com</link>
      <description>A Stupid Simple Blog demo witn next.js.</description>
      <image>
          <url>https://stupid-simple-blog.com/apple-touch-icon-152x152.png</url>
          <title>Stupid Simple Blog.</title>
          <link>https://stupid-simple-blog.com</link>
          <description>Stupid Simple Blog. Logo</description>
      </image>${Object.keys(dbSitemap)
        .map(
          path => `
        <item>
            <title>${dbSitemap[path].title}</title>
            <guid>https://stupid-simple-blog.com${path}</guid>
            <description>${dbSitemap[path].description}</description>
            <pubDate>${dbSitemap[path].publishedRSS}</pubDate>
        </item>`
        )
        .join('')}
    </channel>
</rss>`
fs.writeFileSync('public/rss.xml', rssXml)
