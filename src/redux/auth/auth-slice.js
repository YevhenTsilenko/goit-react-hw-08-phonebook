import { createSlice } from "@reduxjs/toolkit";
import { registration, logIn, logOut, getCurrentUser } from './authOperations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshingUser: false,
    errorMessage: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [registration.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.errorMessage = null;
        },
        [registration.rejected](state, action) {
            state.errorMessage = action.payload;
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.errorMessage = null;
        },
        [logIn.rejected](state, action) {
            state.errorMessage = action.payload;
        },
        [logOut.fulfilled](state, _) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [getCurrentUser.pending](state) {
            state.isRefreshingUser = true;
        },
        [getCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshingUser = false;
        },
        [getCurrentUser.rejected](state) {
            state.isRefreshingUser = false;
        },
    },
});

export default authSlice.reducer;