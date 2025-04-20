
import React from 'react'
import AdminNews from '@/components/Admin/AdminNews'
import './news.css'
const news = await fetch("https://news.sajy.ir/api/news").then((res) => res.json()).then((res) => res.data);
export default async function page() {
  return (
    <div className='admin-news-container'>
        {news.map((item,i) => <AdminNews key={i} title={item.title} description={item.description} image={"https://news.sajy.ir/uploads/"+item.image} />)}
    </div>
  )
}
