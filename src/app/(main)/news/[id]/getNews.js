// lib/getNews.js
export async function getNews(id) {
  const res = await fetch(`https://backend.navayetabriz.ir/api/news/${id}`);
  const json = await res.json();
  return json.data;
}
