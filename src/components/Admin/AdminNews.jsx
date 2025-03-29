'use client'
import React from 'react';
import { Card } from 'antd';
import Image from 'next/image';

const { Meta } = Card;

const AdminNews = ({ title, description, image }) => (
    <Card
        hoverable
        style={{ width: 320 }}
        cover={<Image alt={title} src={image} width= {320} height={180} />}
    >
        <Meta title={title} description={description} />
    </Card>
);

export default AdminNews;
