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
            <Input name='top_title' showCount placeholder="رو تیتر" maxLength={30} onChange={onChange} style={{ height: 50, fontSize: 20 }} />
            <Input name='title' showCount placeholder="عنوان خبر" maxLength={30} onChange={onChange} style={{ height: 50, fontSize: 20 }} />
            <Input name='lead' showCount placeholder="لید" maxLength={30} onChange={onChange} style={{ height: 50, fontSize: 20 }} />
            <Input name='writer' showCount placeholder="نویسنده" maxLength={30} onChange={onChange} style={{ height: 50, fontSize: 20 }} />
            <Input name='source' showCount placeholder="منبع" maxLength={30} onChange={onChange} style={{ height: 50, fontSize: 20,marginBottom: 50 }} />

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
