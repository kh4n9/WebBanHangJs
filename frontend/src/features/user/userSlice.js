import { createSlice } from '@reduxjs/toolkit';

// fake data
const users = [
    {
        username: 'admin',
        email: 'admin@gmail.com',
        role: 'admin',
    },
    {
        username: 'user',
        email: 'user@gmail.com',
        role: 'user',
    },
];

const initialState = {
    users: users,
    status: 'idle',
    error: null,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUsers: (state) => {
            state.users = users;
        },
    },
});

// export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
//     const response = await axios.get('http://localhost:5000/api/users');
//     return response.data;
// });

// const userSlice = createSlice({
//     name: 'users',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchUsers.pending, (state) => {
//                 state.status = 'loading';
//             })
//             .addCase(fetchUsers.fulfilled, (state, action) => {
//                 state.status = 'succeeded';
//                 state.users = action.payload;
//             })
//             .addCase(fetchUsers.rejected, (state, action) => {
//                 state.status = 'failed';
//                 state.error = action.error.message;
//             });
//     },
// });

export default userSlice.reducer;