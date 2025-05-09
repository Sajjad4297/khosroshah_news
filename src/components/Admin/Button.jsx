'use client';
import React, { useState } from 'react';
import { PoweroffOutlined, SendOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
const App = ({handleSubmit}) => {
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


    return (
        <Button
            dir='ltr'
            type="primary"
            icon={<SendOutlined rotate={180} />}
            loading={loadings[1]}
            onClick={() => {enterLoading(1);handleSubmit()}}
            style={{padding:'25px 30px',fontSize:20,}}
        >
            ثبت خبر
        </Button>
    );
};
export default App;
