import React from 'react';
import { topics } from '@/app/(main)/data/topics'; // مسیر دیتای تو
import Title from '../../(main)/components/Title';
import DynamicPage from '../../(main)/components/DynamicPage';
import "./sub-topic.css";

export async function getNews(slug) {
  const res = await fetch(`https://backend.navayetabriz.ir/api/news/byTopic/${slug}`);
  const json = await res.json();
  return json.data;
}

export default async function SubTopicPage({ params }) {
    const { slug } = await params;
  const data = await getNews(slug);
  if (data == [])
    return <p>خبری وجود ندارد</p>



  return (
    <div className="sub-topic-page">
      <Title title={data?.title} />
      <DynamicPage news={data.news} />
    </div>
  );
}
