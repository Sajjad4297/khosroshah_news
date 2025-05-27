'use client'
import React from 'react';
import { Card } from 'antd';
import Image from 'next/image';
import deleteIcon from '@/img/delete.svg'
const { Meta } = Card;

const AdminNews = ({ title, description, image,id,setNews }) =>{

    const handleDelete = () => {
        if (!window.confirm("برای حذف این خبر مطمئن هستید؟")) {
            return;
        }
        fetch(`https://backend.navayetabriz.ir/api/news/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            setNews((prevNews) => prevNews.filter((item) => item.id != id));
        })
        .catch((error) => {
            console.error('Error deleting news:', error);
        });
    };

    return(
    <div style={{position: 'relative'}}>
        <Card
            hoverable
            style={{ width: 320}}
            cover={<Image alt={title} src={image} width={320} height={180} />}
        >
            <Meta title={title} description={description} />
        </Card>
        <Image id='delete-icon' alt={'delete'} src={deleteIcon} width={40} height={40} onClick={handleDelete} />

    </div>
);
}
export default AdminNews;
