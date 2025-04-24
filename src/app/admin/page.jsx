'use client'
import React, { useEffect, useState } from 'react'
import AdminNews from '@/components/Admin/AdminNews'
import './news.css'
export default function page() {
    const [news , setNews] = useState()
        useEffect(() => {
            fetch("https://news.sajy.ir/api/news", {
                method: "GET",
            })
            .then((res) => res.json())
            .then(res => {setNews(res.data);console.log(res)})
            .catch(err => console.error('Error fetching tags:', err));
            console.log(news)
        }, []);

  return (
    <div className='admin-news-container'>
        {news?.map((item,i) => <AdminNews key={i} title={item.title} description={item.description} image={"https://news.sajy.ir/uploads/"+item.image} />)}
    </div>
  )
}
