import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    collections: [],
    products: [],
}

const adminStoreSlice = createSlice({
    name: "adminStore",
    initialState,
    reducers: {
        SET_COLLECTIONS: (state, action) => {
            const sortedCollections = [...action.payload].sort((a, b) =>
                b.updatedAt.toLocaleString().localeCompare(a.updatedAt.toLocaleString())
            );
            state.collections = sortedCollections;
        },
        ADD_COLLECTION: (state, action) => {
            const sortedCollections = [...state.collections, action.payload].sort((a, b) =>
                b.updatedAt.toLocaleString().localeCompare(a.updatedAt.toLocaleString())
            );
            state.collections = sortedCollections;
        },
        SET_PRODUCTS: (state, action) => {
            const sortedProducts = [...action.payload].sort((a, b) =>
                b.updatedAt.toLocaleString().localeCompare(a.updatedAt.toLocaleString())
            );
            state.products = sortedProducts;
        },
        ADD_PRODUCT: (state, action) => {
            const sortedProducts = [...state.products, action.payload].sort((a, b) =>
                b.updatedAt.toLocaleString().localeCompare(a.updatedAt.toLocaleString())
            );
            state.products = sortedProducts;
        }
    }
})


export const { SET_COLLECTIONS, ADD_COLLECTION, SET_PRODUCTS, ADD_PRODUCT} = adminStoreSlice.actions;

export default adminStoreSlice.reducer;