
import React from 'react'
import AdminNews from '@/components/Admin/AdminNews'
import './news.css'
export default function page() {
  return (
    <div className='admin-news-container'>
        <AdminNews title="title" description="description" image="/news/new1.jpeg" />
        <AdminNews title="title" description="description" image="/news/new2.jpeg" />
        <AdminNews title="title" description="description" image="/news/new3.jpg" />
        <AdminNews title="title" description="description" image="/news/new4.jpeg" />
        <AdminNews title="title" description="description" image="/news/new5.jpeg" />
        <AdminNews title="title" description="description" image="/news/new6.jpeg" />

    </div>
  )
}
