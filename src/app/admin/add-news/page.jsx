'use client'
import '@ant-design/v5-patch-for-react-19';
import React, { useState } from 'react'
import FileInput from "@/components/Admin/FileInput";
import TextInputs from "@/components/Admin/TextInputs";
import Button from "@/components/Admin/Button";
import './addNews.css'
export default function page() {
    const [inputData , setInputData] = useState()
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("image", inputData.image);
        formData.append('title', inputData.title);
        formData.append('description', inputData.description);

        const res = await fetch("/api/add-news", {
            method: "POST",
            body: formData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
          }).then((res) =>res.json()).then((data) => console.log(data));

        // Handle form submission logic here
    }
  return (
    <div className='add-news-container'>
        <FileInput inputData={inputData} setInputData={setInputData} />
        <br />
        <TextInputs inputData={inputData} setInputData={setInputData}  />
        <br />
        <Button handleSubmit={handleSubmit} />
    </div>
  )
}
