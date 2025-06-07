'use client'
import '@ant-design/v5-patch-for-react-19';
import React, { useState } from 'react'
import FileInput from "@/components/Admin/FileInput";
import TextInputs from "@/components/Admin/TextInputs";
import SubmitButton from "@/components/Admin/Button";
import './addNews.css'
import Tiptap from '@/components/Tiptap/Tiptap';
import TagSelector from '@/components/Admin/TagSelector/TagSelector';
import TopicSelector from '@/components/Admin/TopicSelector/TopicSelector';
import PersianDatePicker from '@/components/Admin/DatePicker/PersianDatePicker';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { DateObject } from "react-multi-date-picker"
import toast from 'react-hot-toast'

export default function page() {
    const [inputData, setInputData] = useState({})
    const [selectedTopics, setSelectedTopics] = useState({});
    const [selectedSubTopics, setSelectedSubTopics] = useState({});
    const [image, setImage] = useState({})
    const [tags, setTags] = useState([]);
    const [imageUrl, setImageUrl] = useState();
    const [editorInstance, setEditorInstance] = useState(null);
    const [publishDate, setPublishDate] = useState(new DateObject({ calendar: persian, locale: persian_fa }))
    const handleSubmit = async () => {
        // const data = {
        //     image: image,
        //     title: inputData.title,
        //     content: inputData.content,
        //     top_title: inputData.top_title,
        //     lead: inputData.lead,
        //     writer: inputData.writer,
        //     source: inputData.source,
        //     tags: tags.map(tag => tag.id),
        //     topics: Object.keys(selectedTopics).map(id=>id),
        //     subTopics :Object.keys(selectedSubTopics).map(id=>id) ,
        // }
        const formData = new FormData();
        formData.append("image", image, image.name);
        formData.append('title', inputData.title);
        formData.append('content', inputData.content);
        formData.append('top_title', inputData.top_title);
        formData.append('lead', inputData.lead);
        formData.append('writer', inputData.writer);
        formData.append('source', inputData.source);
        formData.append('date', publishDate.unix);
        formData.append('tags', JSON.stringify(tags.map(tag => tag.id)))
        formData.append('topics', JSON.stringify(Object.keys(selectedTopics)))
        formData.append('subTopics', JSON.stringify(Object.keys(selectedSubTopics)))

        try {
            const res = await fetch("https://backend.navayetabriz.ir/api/news", {
                method: "POST",
                body: formData,
            });

            const result = await res.json();

            if (res.ok) {
                toast.success("✅ خبر با موفقیت ثبت شد");
                setInputData({});
                setImage({});
                setImageUrl(undefined); 
                setTags([]);
                setSelectedTopics({});
                setSelectedSubTopics({});
                setPublishDate(new DateObject({ calendar: persian, locale: persian_fa }));
                if (editorInstance) {
                    editorInstance.commands.clearContent();
                  }
            } else {
                toast.error(`❌ خطا در ثبت خبر: ${result?.message || "خطای نامشخص"}`);
            }

        } catch (error) {
            toast.error("⛔ خطا در اتصال به سرور");
            console.error(error);
        }
    };

    return (
        <div className='add-news-container'>
            <FileInput setImage={setImage} imageUrl={imageUrl} setImageUrl={setImageUrl} />
            <br />
            <TextInputs inputData={inputData} setInputData={setInputData} />
            <br />
            <Tiptap setInputData={setInputData} onEditorReady={setEditorInstance} />
            <br />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                <TagSelector selected={tags} onChange={setTags} />
                <br />
                <TopicSelector selectedTopics={selectedTopics} setSelectedTopics={setSelectedTopics} selectedSubTopics={selectedSubTopics} setSelectedSubTopics={setSelectedSubTopics} />
                <br />
                <PersianDatePicker value={publishDate} onChange={setPublishDate} />
            </div>
            <SubmitButton handleSubmit={handleSubmit} />
        </div>
    )
}
