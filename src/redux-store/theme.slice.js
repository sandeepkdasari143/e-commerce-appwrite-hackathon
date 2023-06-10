import { createSlice } from "@reduxjs/toolkit";
import { darkTheme } from "../lib/MUIThemeObjects/darkTheme";

export const initialState = {
    mode: 'dark',
    theme: darkTheme,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        SET_THEME: (state, action) => {
            if(state.mode && action.payload && (typeof action.payload === 'string'))
                state.mode = action.payload.toLowerCase();
        },
        
        SWITCH_THEME: (state, action) => {
            if (state.mode && action.payload) {
                state.mode = state.mode.toLowerCase() === 'dark' ? 'light' : 'dark';
                state.theme = state.mode === 'dark' ? action.payload.darkTheme : action.payload.lightTheme 
            }
        }
    }
})

export const {SET_THEME, SWITCH_THEME} = themeSlice.actions;

export default themeSlice.reducer;