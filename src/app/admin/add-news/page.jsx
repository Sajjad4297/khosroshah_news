'use client'
import '@ant-design/v5-patch-for-react-19';
import React, { useState } from 'react'
import FileInput from "@/components/Admin/FileInput";
import TextInputs from "@/components/Admin/TextInputs";
import Button from "@/components/Admin/Button";
import './addNews.css'
import Tiptap from '@/components/Tiptap/Tiptap';
import TagSelector from '@/components/Admin/TagSelector/TagSelector';
import TopicSelector from '@/components/Admin/TopicSelector/TopicSelector';
export default function page() {
    const [inputData, setInputData] = useState({})
    const [image, setImage] = useState({})
    const [tags, setTags] = useState([]);
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("image", image, image.name);
        formData.append('title', inputData.title);
        formData.append('content', inputData.content);
        formData.append('top_title', inputData.top_title);
        formData.append('lead', inputData.lead);
        formData.append('writer', inputData.writer);
        formData.append('source', inputData.source);
        console.log(inputData)
        const res = await fetch("https://news.sajy.ir/api/news", {
            method: "POST",
            body: formData,
        }).then((res) => res.json()).then((res) => console.log(res));

        // Handle form submission logic here
    }
    return (
        <div className='add-news-container'>
            <FileInput setImage={setImage} setInputData={setInputData} />
            <br />
            <TextInputs setInputData={setInputData} />
            <br />
            <Tiptap setInputData={setInputData} />
            <br />
            <div style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-around',width: '100%' }}>
                <TagSelector selected={tags} onChange={setTags} />
                <br />
                <TopicSelector />
                <br />
            </div>
            <Button handleSubmit={handleSubmit} />
        </div>
    )
}
