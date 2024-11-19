import Title from 'antd/es/typography/Title';
import hutechLogo from '../../assets/hutech-logo.png';
import React from 'react';
import { Avatar, Row } from 'antd';

const HeaderComponent = () => {
    return (
        <div>
            <Row 
                justify='left'
                style={{ padding: '10px' }}
            >
                <Avatar src={hutechLogo} alt='Hutech Event' 
                    size={64}
                />
                <Title 
                    style={{ margin: 'auto 0' }}
                    level={3}>Hutech Event
                </Title>
            </Row>
        </div>
    )
}

export default HeaderComponent;