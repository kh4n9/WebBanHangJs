import { useState } from "react";
import AdminDefaultComponent from "../../components/AdminDefaultComponent/AdminDefaultComponent";
import AdminUsersComponent from "../../components/AdminUsersComponent/AdminUsersComponent";

const Admin = () => {
    const [page, setPage] = useState('users');

    return (
        <AdminDefaultComponent setPage={setPage}>
            {page === 'users' && <AdminUsersComponent />}
            {page !== 'users' && <div>hehehe</div>}
        </AdminDefaultComponent>
    );
}

export default Admin;