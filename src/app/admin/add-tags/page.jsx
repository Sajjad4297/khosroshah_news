'use client';
import '@ant-design/v5-patch-for-react-19';
import React, { useState } from 'react';
import { SendOutlined } from '@ant-design/icons';
import { Flex, Input, Button, message } from 'antd'; // ✅ اینجا message رو ایمپورت کن
const { TextArea } = Input;

export default function Page() {
    const [loadings, setLoadings] = useState([]);
    const [inputData, setInputData] = useState({});

    const enterLoading = (index) => {
        setLoadings(prev => {
            const newLoadings = [...prev];
            newLoadings[index] = true;
            return newLoadings;
        });
    };

    const endLoading = (index) => {
        setLoadings(prev => {
            const newLoadings = [...prev];
            newLoadings[index] = false;
            return newLoadings;
        });
    };

    const onChange = e => {
        const { name, value } = e.target;
        setInputData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('title', inputData.title || '');
        formData.append('name', inputData.name || '');

        try {
            const res = await fetch("https://backend.navayetabriz.ir/api/tags", {
                method: "POST",
                body: formData,
            });

            const result = await res.json();

            if (res.ok) {
                message.success("برچسب با موفقیت ثبت شد ✅");
                setInputData({});
            } else {
                message.error("خطا در ثبت برچسب ❌");
            }
        } catch (err) {
            message.error("مشکل در ارتباط با سرور ❌");
        } finally {
            endLoading(1);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Flex vertical gap={32} style={{ width: '80%', fontSize: 25 }}>
                <Input
                    name='title'
                    value={inputData.title || ''}
                    placeholder="نام برچسب"
                    onChange={onChange}
                    style={{ height: 50, fontSize: 20 }}
                    showCount
                    maxLength={30}
                />
                <Input
                    name='name'
                    value={inputData.name || ''}
                    placeholder="لینک به صورت انگلیسی"
                    onChange={onChange}
                    style={{ height: 50, fontSize: 20 }}
                    showCount
                    maxLength={30}
                />

                <Button
                    dir='ltr'
                    type="primary"
                    icon={<SendOutlined rotate={180} />}
                    loading={loadings[1]}
                    onClick={() => { enterLoading(1); handleSubmit(); }}
                    style={{ padding: '25px 30px', fontSize: 20 }}
                >
                    ثبت برچسب
                </Button>
            </Flex>
        </div>
    );
}
