import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    modalTitle: "Untitled",
    isModalOpen: false,
    isProductFormOpen: false,
    isCompanyFormOpen: false,
    isProductsGridOpen: false,

    isSellerRegistrationFormOpen: false,
    isSellerLogInFormOpen: false,
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
            state.isSellerRegistrationFormOpen = false;
            state.isSellerLogInFormOpen = false;
            state.isProductFormOpen = true;
            return;
        },
        OPEN_COLLECTION_FORM: (state) => {
            state.modalTitle = `Adding New Collection`;
            state.isProductsGridOpen = false;
            state.isProductFormOpen = false;
            state.isSellerRegistrationFormOpen = false;
            state.isSellerLogInFormOpen = false;
            state.isCompanyFormOpen = true;
            return;
        },
        OPEN_PRODUCTS_GRID: (state) => {
            state.modalTitle = `All Products`;
            state.isCompanyFormOpen = false;
            state.isProductFormOpen = false;
            state.isSellerRegistrationFormOpen = false;
            state.isSellerLogInFormOpen = false;
            state.isProductsGridOpen = true;
            return;
        },
        OPEN_SELLER_REGISTRATION_FORM: (state) => {
            state.modalTitle = `Become A Seller`;
            state.isCompanyFormOpen = false;
            state.isProductFormOpen = false;
            state.isProductsGridOpen = false;
            state.isSellerLogInFormOpen = false;
            state.isSellerRegistrationFormOpen = true;
            return;
        },
        OPEN_SELLER_LOGIN_FORM: (state) => {
            state.modalTitle = `LogIn to Seller Dashboard`;
            state.isCompanyFormOpen = false;
            state.isProductFormOpen = false;
            state.isProductsGridOpen = false;
            state.isSellerRegistrationFormOpen = false;
            state.isSellerLogInFormOpen = true;
            return;
        },
    }
});

export const {CLOSE_MODAL, OPEN_MODAL, SET_MODAL_TITLE, OPEN_PRODUCT_FORM, OPEN_COLLECTION_FORM, OPEN_PRODUCTS_GRID, OPEN_SELLER_REGISTRATION_FORM, OPEN_SELLER_LOGIN_FORM} = modalSlice.actions;

export default modalSlice.reducer;