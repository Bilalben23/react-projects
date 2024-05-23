import { NavLink } from "react-router-dom";
import { availableSearchedItems } from "../../components/data"
export default function FoodRecipeHeader({ setSearch, handleKeyDown }) {



    function handleOnChange(e) {
        setSearch(e.target.value.trimStart())
    }



    return <header className='flex items-center justify-between px-4 py-2'>
        <div>
            <h1 className='text-lg font-bold text-slate-700'>FoodRecipe</h1>
        </div>
        <div>
            <input
                placeholder="Search your recipe..."
                className='px-2 py-1.5 border-2 border-slate-100 rounded-lg shadow-xl'
                list="available-recipes"
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
            />
            <datalist id="available-recipes">
                {
                    availableSearchedItems.map(availableSearchedItem => {
                        return <option key={availableSearchedItem.id} value={availableSearchedItem.item}>{availableSearchedItem.item}</option>
                    })
                }
            </datalist>
        </div>
        <nav>
            <ul className='flex items-center justify-center space-x-5'>
                <li>
                    <NavLink end to="." style={({ isActive }) => {
                        return { color: isActive ? "#FF407D" : "#000" }
                    }}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="favorites" style={({ isActive }) => {
                        return { color: isActive ? "#FF407D" : "#000" }
                    }}>Favorites</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}