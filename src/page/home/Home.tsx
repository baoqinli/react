import React, { useState } from 'react';
// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// type MenuItem = {
//     key: React.Key;
//     icon?: React.ReactNode;
//     children?: MenuItem[];
//     label: React.ReactNode;
// }


type items = {
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],

}
const items: items[] = [
    { label: "首页", key: 1 },
    { label: "关于", key: 2 },
    {
        label: "我的", key: 3,
        children: [
            { label: "1", key: 31 },
            { label: "1", key: 32 },
            { label: "1", key: 33 }
        ]
    },
    { label: "1", key: 4 },
    { label: "1", key: 5 },
    { label: "1", key: 6 }
]

// const items: MenuItem[] = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   getItem('Option 2', '2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];
const Home: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <div style={{ height: '64px' }}>

                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={onClick} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        Bill is a cat.
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default Home;