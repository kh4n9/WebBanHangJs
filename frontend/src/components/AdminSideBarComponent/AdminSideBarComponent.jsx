import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import {
    FileOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import hutechLogo from '../../assets/hutech-logo.png';

const getItem = (label, key, icon, children) => {
    return {
        label,
        key,
        icon,
        children,
    };
}

const items = [
    getItem('HỆ THỐNG', 'sub1', <UserOutlined />, [
        getItem('Tài khoản', 'users'),
        getItem('Thiết lập', '2'),
        getItem('Mẫu chứng nhận', '3'),
        getItem('Chủ đề', '4'),
    ]),
    getItem('DỮ LIỆU', 'sub2', <FileOutlined />, [
        getItem('Sự kiện', '5'),
        getItem('Sinh viên', '6'),
        getItem('Ban cán sự', '7'),
        getItem('Chứng nhận', '8'),
    ]),
    getItem('TRA CỨU', 'sub3', <PieChartOutlined />, [
        getItem('DS SV tham gia', '9'),
        getItem('DS BCS tham gia', '10'),
        getItem('DS lớp tham gia', '11'),
    ]),
];

const AdminSideBar = ({ setPage }) => {
    const [collapsed, setCollapsed] = useState(false);
    const onMenuClick = (e) => {
        setPage(e.key);
    }

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <img src={hutechLogo} alt="hutech-logo" style={{ width: '50px', margin: '15px'}} />
            <Menu 
                theme='dark'
                defaultSelectedKeys={['users']} 
                mode="inline" 
                items={items} 
                onClick={onMenuClick}
            />
        </Sider>
    );
}

export default AdminSideBar;