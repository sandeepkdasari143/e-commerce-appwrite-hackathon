import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    modalTitle: "Untitled",
    isModalOpen: false,
    isProductFormOpen: false,
    isCompanyFormOpen: false,
    isProductsGridOpen: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        CLOSE_MODAL: (state) => {
            if(state.isModalOpen === true)
                state.isModalOpen = false;
            return;
        },
        OPEN_MODAL: (state) => {
            if(state.isModalOpen === false)
                state.isModalOpen = true;
            return;
        },
        SET_MODAL_TITLE: (state, action) => {
            state.modalTitle = action.payload;
        },
        OPEN_PRODUCT_FORM: (state) => {
            state.modalTitle = `Add New Product in `;
            state.isProductsGridOpen = false;
            state.isCompanyFormOpen = false;
            state.isProductFormOpen = true;
            return;
        },
        OPEN_COLLECTION_FORM: (state) => {
            state.modalTitle = `Adding New Collection`;
            state.isProductsGridOpen = false;
            state.isProductFormOpen = false;
            state.isCompanyFormOpen = true;
            return;
        },
        OPEN_PRODUCTS_GRID: (state, action) => {
            state.modalTitle = `All Products`;
            state.isCompanyFormOpen = false;
            state.isProductFormOpen = false;
            state.isProductsGridOpen = true;
            return;
        },
    }
});

export const {CLOSE_MODAL, OPEN_MODAL, SET_MODAL_TITLE, OPEN_PRODUCT_FORM, OPEN_COLLECTION_FORM, OPEN_PRODUCTS_GRID} = modalSlice.actions;

export default modalSlice.reducer;