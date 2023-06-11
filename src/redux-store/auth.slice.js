import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    jwtToken: "",
    currentUser: null
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
        }
    }
})

export const {SET_JWT_TOKEN, SET_USER_DETAILS, LOG_OUT} = authSlice.actions;

export default authSlice.reducer;