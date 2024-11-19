import { useSelector } from "react-redux";
import React from "react";
import { Button, Table } from "antd";

const AdminAccountComponent = () => {
    const users = useSelector((state) => state.user?.users || []);
    const columns = [
        {
            title: "Username",
            dataIndex: "username",
            key: "username",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <span>
                    <Button type="primary" style={{ marginRight: 16 }}>Edit</Button>
                    <Button type="primary" danger >Delete</Button>
                </span>
            ),
        }
    ];

    return (
        <div>
            <h1>Admin Account</h1>
            <Table dataSource={users} columns={columns} 
            size="large"
            pagination={{ pageSize: 5 }} 
            />
        </div>
    )
};

export default AdminAccountComponent;