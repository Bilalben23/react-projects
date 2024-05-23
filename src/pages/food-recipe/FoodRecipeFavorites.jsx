import React from 'react'
import { useSelector } from "react-redux";

import { RecipeCard } from './FoodRecipe';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

export default function FoodRecipeFavorites() {
    const favRecipes = useSelector((state) => state.favRecipesReducer)



    return (
        <div>
            <div className='w-[90%] mx-auto'>
                <Link to="/food-recipe/" className='px-2 py-1.5 bg-blue-500 rounded font-semibold shadow text-white flex items-center justify-center w-fit text-xs space-x-1.5'>
                    <span><FaChevronLeft /></span>
                    <span>Go Home Page</span>
                </Link>
            </div>
            {
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4  gap-x-6 gap-y-10 w-[90%] mx-auto'>
                    {
                        (favRecipes && favRecipes?.length > 0)
                            ? favRecipes?.map(recipe => {
                                return (
                                    <RecipeCard key={recipe?.recipe_id} recipe={recipe} />
                                )

                            })
                            : <div className='font-semibold col-span-full text-center'>No favorite recipes to show !</div>
                    }
                </div>
            }
        </div>
    )
}
