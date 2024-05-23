import React, { useState } from 'react'
import FoodRecipeHeader from './FoodRecipeHeader'
import { Outlet, useNavigate } from 'react-router-dom'

export default function FoodRecipeLayout() {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const [recipes, setRecipes] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchRecipes(url) {
        try {
            setIsLoading(true)
            const res = await fetch(url);
            const data = await res.json();
            if (data) {
                setRecipes(data)
            }

        } catch (err) {
            setError(err.message || err.name)
            console.error(err.message || err.name)
        } finally {
            setIsLoading(false)
        }
    }



    function handleKeyDown(e) {
        if (e.key === "Enter") {
            fetchRecipes(`https://forkify-api.herokuapp.com/api/search?q=${search}`);
            navigate(".")
        }
    }


    return (
        <div>
            <FoodRecipeHeader
                search={search}
                setSearch={setSearch}
                handleKeyDown={handleKeyDown}
            />
            <section>
                <Outlet context={{
                    recipes: recipes,
                    isLoading: isLoading,
                    error: error,
                    search: search,
                }} />
            </section>
        </div>
    )
}
