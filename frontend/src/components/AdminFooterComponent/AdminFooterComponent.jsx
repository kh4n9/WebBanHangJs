import { Footer } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

const AdminFooterComponent = () => {
    return (
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Hutech Event ©{new Date().getFullYear()} Created by {' '}
            <Link to='https://fb.com/mkhoang.vip'>Khang Hoang</Link>
        </Footer>
    );
};

export default AdminFooterComponent;