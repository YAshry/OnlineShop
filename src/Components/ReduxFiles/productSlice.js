import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [],
    category: "",
    currency: "EGP",
    singleItem: [],
    showProductModal: false,
}

export const productSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtocart: (state,action) => {
            state.items.push(action.payload)
        },
        removefromcart: (state,action) => {
            const newarray = state.items.filter((items)=> items.id !== action.payload.id)
            state.items = newarray
        },
        viewProduct: (state,action) => {
            state.singleItem = action.payload
        },
        showModal: (state,action) => {
            state.showProductModal = action.payload
        },
        setCategory: (state,action) => {
            state.category = action.payload
        },
        changeCurrency: (state,action) => {
            state.currency = action.payload
        }
    },

})