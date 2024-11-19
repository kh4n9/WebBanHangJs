import { Button, Form, Input } from "antd";
import Title from "antd/es/typography/Title";


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const LoginComponent = () => {
    return (
        <Form
            size="Large"
            style={{
                maxWidth: 600,
                margin: 'auto',
                marginTop: 100,
                padding: 20,

            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Title style={{ marginInline: '35vh', minWidth: 200 }} level={1}>Login</Title>
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item label={null}>
                <Button style={{ padding: '10px 10vh', maxWidth: '10vh' }} type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
}

export default LoginComponent;