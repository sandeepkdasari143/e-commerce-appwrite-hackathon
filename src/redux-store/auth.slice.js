import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    jwtToken: "",
    currentUser: null,
    isSeller: false,
    currentSeller: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SET_JWT_TOKEN: (state, action) => {
            state.jwtToken = action.payload;
        },
        SET_USER_DETAILS: (state, action) => {
            state.currentUser = action.payload;
        },
        LOG_OUT: (state) => {
            state.currentUser = null;
        },
        SET_SELLER_DETAILS: (state, action) => {
            state.currentSeller = action.payload;
        },
        SET_IS_SELLER: (state, action) => {
            state.isSeller = action.payload;
        }
    }
})

export const {SET_JWT_TOKEN, SET_USER_DETAILS, LOG_OUT, SET_SELLER_DETAILS, SET_IS_SELLER} = authSlice.actions;

export default authSlice.reducer;