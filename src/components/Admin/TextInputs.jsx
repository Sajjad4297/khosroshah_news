'use client';
import React from 'react';
import { Flex, Input } from 'antd';
const { TextArea } = Input;
const TextInputs = ({ setInputData }) => {
    const onChange = e => {
        const { name, value } = e.target;
        setInputData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };
    return (
        <Flex vertical gap={32} style={{ width: '80%', fontSize: 25 }}>
            <Input name='top_title'  placeholder="رو تیتر"  onChange={onChange} style={{ height: 50, fontSize: 20 }} />
            <Input name='title'  placeholder="عنوان خبر"  onChange={onChange} style={{ height: 50, fontSize: 20 }} />
            <Input name='lead'  placeholder="لید"  onChange={onChange} style={{ height: 50, fontSize: 20 }} />
            <Input name='writer'  placeholder="نویسنده"  onChange={onChange} style={{ height: 50, fontSize: 20 }} />
            <Input name='source'  placeholder="منبع"  onChange={onChange} style={{ height: 50, fontSize: 20,marginBottom: 50 }} />

            {/* <TextArea
                name='description'
                showCount
                onChange={onChange}
                placeholder="متن خبر"
                style={{ height: 200, fontSize: 20 }}
            /> */}
        </Flex>

    );
}
export default TextInputs;
