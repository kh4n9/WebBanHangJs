import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './userSlice';
import React from 'react';

const User = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.users || []);

    return (
        <div>
            <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
}

export default User;