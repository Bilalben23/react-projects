import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className='bg-blue-900 text-white shadow-lg flex justify-between items-center px-4 py-2 fixed top-0 w-full z-50'>
            <NavLink to="/" className='w-[55px] cursor-pointer rounded-full shadow-lg '>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ErDiTzx-ghinRk8bkuk2tklQdH2c7ueDANmSAYvobQ&s" alt="projects-logo" className='rounded-full w-full h-full' />
            </NavLink>
            <nav className='w-2/3 overflow-x-auto text-nowrap'>
                <ul className='flex justify-evenly'>
                    <li>
                        <NavLink to="accordion" className='p-2 text-xs font-bold' style={({ isActive }) => {
                            return { color: isActive ? "#FF407D" : "#fff" }
                        }} >Accordion</NavLink>
                    </li>
                    <li>
                        <NavLink to="generate-colors" className='p-2 text-xs font-bold' style={({ isActive }) => {
                            return { color: isActive ? "#FF407D" : "#fff" }
                        }} >Generate Colors</NavLink>
                    </li>
                    <li>
                        <NavLink to="rating-stars" className='p-2 text-xs font-bold' style={({ isActive }) => {
                            return { color: isActive ? "#FF407D" : "#fff" }
                        }} >Rating Stars</NavLink>
                    </li>
                    <li>
                        <NavLink to="images-slider" className='p-2 text-xs font-bold' style={({ isActive }) => {
                            return { color: isActive ? "#FF407D" : "#fff" }
                        }} >Images Slider</NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}
