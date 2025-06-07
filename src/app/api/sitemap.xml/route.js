export async function GET() {
  const baseUrl = 'https://navayetabriz.ir'; // ← Change this to your real domain

  // Fetch news data from your backend
  const res = await fetch('https://backend.navayetabriz.ir/api/news/all', {
    next: { revalidate: 60 } // optional: cache revalidation
  });

  const json = await res.json();
  const newsData = json.data || [];

  const staticRoutes = [
    { loc: '/', lastmod: '2025-06-01' },
    { loc: '/about', lastmod: '2025-05-20' }
  ];

  const newsRoutes = newsData.map((item) => ({
    loc: `/news/${item.id}`,
    lastmod:item.createdAt.split('T')[0] // convert Unix timestamp to YYYY-MM-DD
  }));

  const allRoutes = [...staticRoutes, ...newsRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map((page) => `
  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
