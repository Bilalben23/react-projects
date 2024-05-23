import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../../utils/useFetch'
import { toggleFavRecipe } from '../../components/store/recipe/favRecipeSlice';
import { FaChevronLeft } from "react-icons/fa"

export default function FoodRecipeDetails() {
    const { recipeId } = useParams()
    const { data: recipe, isLoading, error } = useFetch(`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`)

    const dispatch = useDispatch();
    const favRecipes = useSelector((state) => state.favRecipesReducer)
    const isFavoriteRecipe = !!favRecipes.find(recipe => recipe.recipe_id === recipeId);


    if (error) {
        return <div className='text-center text-red-500 font-bold'>
            <h2>{error}</h2>
        </div>
    }
    return (
        <div>
            <div className='w-[90%] mx-auto'>
                <Link to="/food-recipe/" className='px-2 py-1.5 bg-blue-500 rounded font-semibold shadow text-white flex items-center justify-center w-fit text-xs space-x-1.5'>
                    <span><FaChevronLeft /></span>
                    <span>Go Home Page</span>
                </Link>
            </div>
            {
                isLoading && <RecipeDetailsSkelton />
            }
            {
                (!isLoading && recipe && recipe?.recipe) && <div div className='flex w-[90%] mx-auto mt-5 space-x-8 mb-5'>
                    <div className='w-1/2 ' >
                        <img src={recipe?.recipe?.image_url} alt={recipe?.recipe?.title} className='w-full border-2 contrast-125 h-auto rounded min-h-[350px] object-cover transition hover:scale-105' />
                    </div>
                    <div className='w-1/2' >
                        <p className='text-xs font-black text-blue-900 mb-2'>{recipe?.recipe?.publisher}</p>
                        <p className='mb-2 font-bold'>{recipe?.recipe?.title}</p>
                        <button type='button' className='px-3 py-2 transition rounded shadow-lg text-xs font-bold bg-black text-white hover:opacity-85 hover:shadow-none' onClick={() => dispatch(toggleFavRecipe(recipe?.recipe))}>{isFavoriteRecipe ? "Remove From" : "Add To"} Favorites</button>
                        <p className='mt-2 font-semibold'>Ingredients:</p>
                        <ul className='ml-4 list-disc'>
                            {
                                recipe?.recipe?.ingredients.map((ingredient, index) => {
                                    return <li key={`ingredient-${index}`} className='text-xs my-1'>{ingredient}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

function RecipeDetailsSkelton() {
    return (
        <div className='flex w-[90%] mx-auto mt-5 space-x-8 mb-5'>
            <div className='w-1/2 bg-slate-500 animate-pulse rounded h-[350px]'>

            </div>
            <div className='w-1/2'>
                <p className='w-2/6 h-[20px] rounded bg-slate-500 animate-pulse mb-2'></p>
                <p className='w-1/2 h-[25px] rounded bg-slate-500 animate-pulse mb-4'></p>
                <button className='w-2/6 h-[45px] bg-slate-500 animate-pulse rounded'></button>
                <p className='w-2/6 h-[20px] rounded bg-slate-500 animate-pulse my-4'></p>
                <ul className='ml-3 flex justify-center flex-col space-y-3'>
                    {
                        [...Array(6)].map((_, index) => {
                            return <li key={index} className='relative before:-translate-y-1/2 before:w-[10px] before:h-[10px] before:absolute before:top-1/2 before:-left-3 before:rounded-full before:bg-slate-500 w-3/4 h-[15px] rounded bg-slate-500 animate-pulse'></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}