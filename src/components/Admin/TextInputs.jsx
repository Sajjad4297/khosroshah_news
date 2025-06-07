'use client';
import React from 'react';
import { Flex, Input } from 'antd';
const { TextArea } = Input;

const TextInputs = ({ inputData, setInputData }) => {
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <Flex vertical gap={32} style={{ width: '80%', fontSize: 25 }}>
            <Input
                name="top_title"
                value={inputData.top_title || ''}
                placeholder="رو تیتر"
                onChange={onChange}
                style={{ height: 50, fontSize: 20 }}
            />
            <Input
                name="title"
                value={inputData.title || ''}
                placeholder="عنوان خبر"
                onChange={onChange}
                style={{ height: 50, fontSize: 20 }}
            />
            <Input
                name="lead"
                value={inputData.lead || ''}
                placeholder="لید"
                onChange={onChange}
                style={{ height: 50, fontSize: 20 }}
            />
            <Input
                name="writer"
                value={inputData.writer || ''}
                placeholder="نویسنده"
                onChange={onChange}
                style={{ height: 50, fontSize: 20 }}
            />
            <Input
                name="source"
                value={inputData.source || ''}
                placeholder="منبع"
                onChange={onChange}
                style={{ height: 50, fontSize: 20, marginBottom: 50 }}
            />
        </Flex>
    );
};

export default TextInputs;
