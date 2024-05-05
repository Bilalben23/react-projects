import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className='bg-blue-900 text-white shadow-lg flex justify-between items-center px-4 py-2 fixed top-0 w-full z-50'>
            <NavLink to="/" className='w-[55px] cursor-pointer rounded-full shadow-lg '>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ErDiTzx-ghinRk8bkuk2tklQdH2c7ueDANmSAYvobQ&s" alt="projects-logo" className='rounded-full w-full h-full' />
            </NavLink>
            <nav className='w-2/3'>
                <ul className='flex justify-evenly items-center'>
                    <li>
                        <NavLink to="accordion" className='p-2' style={({ isActive }) => {
                            return { color: isActive ? "#FF407D" : "#fff" }
                        }} >Accordion</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
