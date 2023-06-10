import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme.slice";
import modalReducer from "./modal.slice";
import adminStoreReducer from "./adminStore.slice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        modal: modalReducer,
        adminStore: adminStoreReducer
    }
})