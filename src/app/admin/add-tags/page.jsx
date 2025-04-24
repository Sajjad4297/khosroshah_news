'use client';
import '@ant-design/v5-patch-for-react-19';
import React, { useState } from 'react';
import { PoweroffOutlined, SendOutlined, SyncOutlined } from '@ant-design/icons';
import { Flex, Input, Button } from 'antd';
const { TextArea } = Input;

export default function page() {
    const [loadings, setLoadings] = useState([]);
    const enterLoading = index => {
        setLoadings(prevLoadings => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings(prevLoadings => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 3000);
    };

    const onChange = e => {
        const { name, value } = e.target;
        setInputData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }
    const [inputData, setInputData] = useState({})
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('title', inputData.title);
        formData.append('name', inputData.name);
        console.log(inputData.title)
        const res = await fetch("https://news.sajy.ir/api/tags", {
            method: "POST",
            body: formData,
        }).then((res) => res.json()).then((res) => console.log(res));

    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} >
            <Flex vertical gap={32} style={{ width: '80%', fontSize: 25 }}>
                <Input name='title' showCount placeholder="نام برچسب" maxLength={30} onChange={onChange} style={{ height: 50, fontSize: 20 }} />
                <Input name='name' showCount placeholder="لینک به صورت انگلیسی" maxLength={30} onChange={onChange} style={{ height: 50, fontSize: 20 }} />

                {/* <TextArea
                name='description'
                showCount
                onChange={onChange}
                placeholder="متن خبر"
                style={{ height: 200, fontSize: 20 }}
            /> */}
                <Button
                    dir='ltr'
                    type="primary"
                    icon={<SendOutlined rotate={180} />}
                    loading={loadings[1]}
                    onClick={() => { enterLoading(1); handleSubmit() }}
                    style={{ padding: '25px 30px', fontSize: 20, }}
                >
                    ثبت برچسب
                </Button>

            </Flex>
        </div>

    )
}
