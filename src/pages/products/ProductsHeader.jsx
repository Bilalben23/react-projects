import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom"

export default function ProductsHeader() {
    const productsAddedToCart = useSelector(state => state.productShopCartReducer)

    return (
        <header className='flex items-center justify-between px-5 py-1.5 bg-slate-200 mb-4'>
            <h1 className='font-bold text-amber-600 text-sm'>REACT REDUX SHOPPING CART</h1>
            <nav>
                <ul className='flex items-center justify-center space-x-5'>
                    <li className='font-semibold tracking-wider'>
                        <NavLink end to="." style={({ isActive }) => {
                            return { color: isActive ? "#FF407D" : "#000" }
                        }}>Home</NavLink>
                    </li>
                    <li className='relative font-semibold tracking-wide'>
                        <NavLink to="shop-cart" style={({ isActive }) => {
                            return { color: isActive ? "#FF407D" : "#000" }
                        }}>Cart <span className='absolute border flex items-center justify-center text-[0.5rem] font-black -top-[5px] -right-[15px] bg-red-500 w-[20px] h-[20px] rounded-full text-white'>{productsAddedToCart.length}</span></NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
