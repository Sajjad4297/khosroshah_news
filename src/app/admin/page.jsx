'use client'
import React, { useEffect, useState } from 'react'
import AdminNews from '@/components/Admin/AdminNews'
import './news.css'
export default function page() {
    const [news , setNews] = useState()
        useEffect(() => {
            fetch("https://backend.navayetabriz.ir/api/news-over-view", {
                method: "GET",
            })
            .then((res) => res.json())
            .then(res => {setNews(res.data);})
            .catch(err => console.error('Error fetching tags:', err));
        }, []);

  return (
    <div className='admin-news-container'>
        {news?.map((item,i) => <AdminNews key={i} title={item.title} description={item.description} image={"https://backend.navayetabriz.ir/uploads/"+item.image} />)}
    </div>
  )
}
