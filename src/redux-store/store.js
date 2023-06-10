import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme.slice";
import modalReducer from "./modal.slice";
import adminStoreReducer from "./adminStore.slice";
import authReducer from "./auth.slice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        auth: authReducer,
        modal: modalReducer,
        adminStore: adminStoreReducer,
    }
})