import { configureStore } from "@reduxjs/toolkit"
import favRecipesReducer from "./recipe/favRecipeSlice"

export const store = configureStore({
    reducer: {
        favRecipesReducer
    }
})