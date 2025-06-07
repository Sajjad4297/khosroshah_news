import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "./archive.css"
import Pagination from '../../components/Pagination';

export const dynamic = 'force-dynamic'; 

const ITEMS_PER_PAGE = 7;

async function getNews() {
    const res = await fetch('https://backend.navayetabriz.ir/api/news-over-view', {
        cache: 'no-store',
    });
    const result = await res.json();
    return result.data;
}

export default async function EditorChoicePage({ searchParams }) {
    const page = parseInt(searchParams?.page || '1', 10);
    
    const news = await getNews();

    const editorNews = news.filter(n =>
        n.topics?.some(t => t.name === 'editorChoiceNews')
    );

    const totalItems = editorNews.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    const paginatedNews = editorNews.slice(start, end);

    return (
        <div>
            {paginatedNews.map((item) => (
                <Link href={`/news/${item.id}`} className='archive-link' key={item.id}>
                    <div className='archive-container'>
                        <Image
                            src={`https://backend.navayetabriz.ir/uploads/${item.image}`}
                            width={140}
                            height={100}
                            alt={item.title}
                        />
                        <div className='archive-text'>
                            <h5>{item.top_title}</h5>
                            <h4>{item.title}</h4>
                            <p className='archive-text2'>{item.news_lead}</p>
                        </div>
                    </div>
                </Link>
            ))}
            <Pagination currentPage={page} totalPages={totalPages} />
        </div>
    );
}
