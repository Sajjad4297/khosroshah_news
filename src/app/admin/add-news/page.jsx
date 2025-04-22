'use client'
import '@ant-design/v5-patch-for-react-19';
import React, { useState } from 'react'
import FileInput from "@/components/Admin/FileInput";
import TextInputs from "@/components/Admin/TextInputs";
import Button from "@/components/Admin/Button";
import './addNews.css'
import Tiptap from '@/components/Tiptap/Tiptap';
export default function page() {
    const [inputData , setInputData] = useState({})
    const [image , setImage] = useState({})
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("image", image , image.name);
        formData.append('title', inputData.title);
        formData.append('content', inputData.content);
        console.log(inputData)
        console.log(image)
        const res = await fetch("https://news.sajy.ir/api/news", {
            method: "POST",
            body: formData,
          }).then((res) =>res.json()).then((res) => console.log(res));

        // Handle form submission logic here
    }
  return (
    <div className='add-news-container'>
        <FileInput setImage={setImage} setInputData={setInputData} />
        <br />
        <TextInputs  setInputData={setInputData}  />
        <br />
        <Tiptap setInputData={setInputData} />
        <br />
        <Button handleSubmit={handleSubmit} />
    </div>
  )
}
