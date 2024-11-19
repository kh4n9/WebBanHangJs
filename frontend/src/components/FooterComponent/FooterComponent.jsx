import { Footer } from 'antd/es/layout/layout';
import React from 'react';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
    return (
        <Footer style={{ textAlign: 'center', padding: '10px' }}>
            Hutech Event ©2024 Created by {' '} 
            <Link to='https://fb.com/mkhoang.vip'>
                Khang Hoang
            </Link>
        </Footer>
    );
}

export default FooterComponent;