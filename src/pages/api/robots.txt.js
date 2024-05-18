export default function handler(req, res) {
  const robotsTxt = `
        User-agent: *
        Disallow: /404
        Allow: /
        Sitemap: https://www.universeescort.com/sitemap.xml
        
        User-agent: Googlebot
        Disallow: /private/
        Allow: /
        
        User-agent: Bingbot
        Disallow: /secret/
        Allow: /
    `;

  res.setHeader("Content-Type", "text/plain");
  res.write(robotsTxt);
  res.end();
}
