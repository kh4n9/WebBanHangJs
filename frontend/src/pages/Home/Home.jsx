import React from 'react';
import { Button, Col, Input, Row, Typography } from 'antd';
import DefaultComponent from '../../components/DafaultComponent/DefaultComponent';

const { Title } = Typography;

const Home = () => {
    return (
        <DefaultComponent>
            <Col span={24} style={{ padding: '10px', minHeight: '80vh', paddingTop: '20vh' }}>
                <Row>
                    <Col
                        style={{ textAlign: 'center' }}
                        span={24}
                    >
                        <Title level={1}>Bạn có thể tra cứu giấy chứng nhận tại đây!</Title>
                    </Col>
                </Row>
                <Row>
                    <Col span={16} style={{ minWidth: '300px', maxWidth: '500px' }}>
                        <Input placeholder='Nhập mã số giấy chứng nhận' />
                    </Col>
                    <Col>
                        <Button type='primary'>Tra cứu</Button>
                    </Col>
                </Row>
            </Col>
        </DefaultComponent>
    )
}

export default Home;