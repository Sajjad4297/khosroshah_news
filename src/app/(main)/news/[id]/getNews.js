// lib/getNews.js
export async function getNews(id) {
  const res = await fetch(`https://backend.navayetabriz.ir/api/news/${id}`, {
    cache: 'no-store' // or 'force-cache' if okay to cache
  });
  const json = await res.json();
  return json.data;
}
