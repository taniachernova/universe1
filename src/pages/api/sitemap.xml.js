// pages/api/sitemap.xml.js
import { format } from "date-fns";
import { useContext } from "react";
import products from "@data/products";

export default async function handler(req, res) {
  // Base URL
  const baseUrl = "https://www.universeescort.com";

  const sitemapContent = generateSitemap(products, baseUrl);

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemapContent);
  res.end();
}

function generateSitemap(products, baseUrl) {
  const currentDate = format(new Date(), "yyyy-MM-dd");

  // Sitemap içeriğini oluştur
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Ana sayfa URL'i
  sitemap += `
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`;

  // Tüm escortların listelendiği sayfa URL'ini ekle
  sitemap += `
  <url>
    <loc>${baseUrl}/escorts</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;

  // Escort detay sayfaları için URL'leri ekle
  products.forEach((product) => {
    const slug = product.name.toLowerCase().split(" ").join("-");
    const lastmod = format(new Date(), "yyyy-MM-dd");
    const priority = 0.8;

    sitemap += `
    <url>
        <loc>${baseUrl}/escorts/${slug}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${priority}</priority>
    </url>`;
  });

  // Sitemap etiketini kapat
  sitemap += `
</urlset>`;

  return sitemap;
}
