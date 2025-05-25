'use client'
import '@/Styles/Font/font.css';
import '@/components/Admin/customStyle.css';
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  PlusCircleOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Toaster } from 'react-hot-toast';
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('News', '/admin', <PieChartOutlined />),
  getItem('Add News', '/admin/add-news', <PlusCircleOutlined style={{ fontSize: 17 }} />),
  getItem('Add Tags', '/admin/add-tags', <PlusCircleOutlined style={{ fontSize: 17 }} />),
  getItem('Add News', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
];

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathName = usePathname()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Add this breadcrumb items array
  const breadcrumbItems = [
    //   { title: 'User' },
    //   { title: 'Bill' },
    //   { title: 'Sajy' }
  ];
  const handleMenuClick = ({ key }) => {
    router.push(key);
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} reverseArrow={true} onCollapse={value => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={pathName} mode="inline" items={items} onClick={handleMenuClick} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} items={breadcrumbItems} />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Toaster position="top-center" reverseOrder={false} />

            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
