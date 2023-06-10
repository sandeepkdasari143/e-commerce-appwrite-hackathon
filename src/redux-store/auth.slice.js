import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    jwtToken: "hsdkjfhsjdfdsa",
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SET_JWT_TOKEN: (state, action) => {
            state.jwtToken = action.payload;
        }
    }
})

export const {SET_JWT_TOKEN} = authSlice.actions;

export default authSlice.reducer;