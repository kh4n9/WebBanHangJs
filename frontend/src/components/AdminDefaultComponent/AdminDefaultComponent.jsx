import React from 'react';
import { Layout, theme } from 'antd';
import AdminSideBarComponent from '../AdminSideBarComponent/AdminSideBarComponent';
import AdminFooterComponent from '../AdminFooterComponent/AdminFooterComponent';
const { Header, Content } = Layout;


const AdminDefaultComponent = ({setPage, children}) => {
    
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <AdminSideBarComponent setPage={setPage} />
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    {children}
                </Content>
                <AdminFooterComponent />
            </Layout>
        </Layout>
    );
};
export default AdminDefaultComponent;