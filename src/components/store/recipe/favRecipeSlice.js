import { createSlice } from "@reduxjs/toolkit"





const favRecipeSlice = createSlice({
    name: "fav-recipes",
    initialState: [],
    reducers: {
        toggleFavRecipe: (state, { payload }) => {
            const recipeIndex = state.findIndex(recipe => recipe.recipe_id === payload.recipe_id);

            if (recipeIndex === -1) {
                state.push(payload);  // Add the recipe if it's not already in the favorites
            } else {
                state.splice(recipeIndex, 1);  // Remove the recipe if it is already in the favorites
            }
        }
    }
})

export const { toggleFavRecipe } = favRecipeSlice.actions;
export default favRecipeSlice.reducer