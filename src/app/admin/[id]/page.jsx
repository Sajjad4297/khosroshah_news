// app/news/[news_id]/page.tsx

// Function to fetch a single news item
async function getNews(id) {
    const res = await fetch(`https://backend.navayetabriz.ir/api/news/${id}`);
    const data = await res.json();
    return data;
}

// Page component
export default async function NewsPage({ params }) {
    const { id } = await params;
    const { data: news } = await getNews(id);


    return (
        <div>
            <h1>{news.title}</h1>
            <p>{news.content}</p>
        </div>
    );
}
