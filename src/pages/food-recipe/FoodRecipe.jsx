import React from 'react'
import { useOutletContext, Link } from "react-router-dom"

export default function FoodRecipe() {
    const { recipes, isLoading, error, search } = useOutletContext();

    if (error) {
        return <div className='text-center text-red-500'>
            <h1>Error Occurred: {error} </h1>
        </div>
    }

    return (
        <div className='mt-4 p-3'>
            {
                isLoading && <FoodRecipeSkelton />
            }


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-6 gap-y-10 w-[90%] mx-auto'>
                {
                    (!isLoading && recipes && recipes?.recipes?.length > 0 && search !== '')
                        ? recipes?.recipes?.map(recipe => {
                            return <RecipeCard key={recipe?.recipe_id} recipe={recipe} />
                        })
                        : <div className='font-semibold col-span-full text-center'>Nothing to show, Please search something!</div>
                }
            </div>
        </div>
    )
}



function FoodRecipeSkelton() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-7 gap-y-10 w-[90%] mx-auto'>
            {
                [...Array(50)].map((_, index) => {
                    return <div key={index} className="">
                        <div className='w-full rounded h-[250px] bg-slate-400 animate-pulse'></div>
                        <p className='w-2/3 animate-pulse h-[20px] mt-2 mb-3 bg-slate-400 rounded'></p>
                        <button className='rounded-lg animate-pulse shadow w-1/3 h-[40px] bg-slate-400'></button>
                    </div>
                })
            }
        </div>
    )
}


export function RecipeCard({ recipe: { image_url, title, publisher, recipe_id } }) {

    return (
        <div className='rounded-lg overflow-hidden shadow-lg p-3 py-4 min-h-[350px]'>
            <div className='h-[230px] mb-2'>
                <img
                    src={image_url}
                    alt={title}
                    loading='lazy'
                    className='w-full h-full rounded object-cover transition hover:scale-105'
                />
            </div>
            <p className='text-xs font-black text-blue-900 mb-1'>{publisher}</p>
            <p className='mb-4 font-bold text-sm'>{title}</p>
            <Link to={`/food-recipe/${recipe_id}`} className='px-3 text-xs font-semibold py-1.5 rounded-lg shadow-lg hover:shadow-none bg-black text-white transition hover:opacity-80 '>Recipe Details</Link>
        </div >
    )
}