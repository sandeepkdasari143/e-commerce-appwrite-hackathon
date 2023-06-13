import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isDataPosting: false,
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        SET_DATA_POSTING: (state, action) => {
            state.isDataPosting = action.payload;
        }
    }
})

export const {SET_DATA_POSTING} = globalSlice.actions;

export default globalSlice.reducer;