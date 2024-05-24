import { createSlice } from "@reduxjs/toolkit";


const productShopCartSlice = createSlice({
    name: "product-shop-cart",
    initialState: [],
    reducers: {
        toggleAddProductToCart(state, { payload }) {
            const productIndex = state.findIndex(product => product.id === payload.id);

            if (productIndex === -1) {
                // Add the product if it's not already in the cart:
                state.push(payload);
            } else {
                // Remove the product if it is already in the cart:
                state.splice(productIndex, 1);
            }
        }
    }
})


export const { toggleAddProductToCart } = productShopCartSlice.actions
export default productShopCartSlice.reducer;