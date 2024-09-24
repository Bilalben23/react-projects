import { configureStore } from "@reduxjs/toolkit"
import favRecipesReducer from "./recipe/favRecipeSlice"
import productShopCartReducer from "./product/productShopCartSlice"

export const store = configureStore({
    reducer: {
        favRecipesReducer,
        productShopCartReducer
    }
})