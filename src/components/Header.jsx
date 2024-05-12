import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"


export default function Header() {
    const navLinks = useRef()


    function handleScrollRight() {
        const navWidth = navLinks.current.clientWidth;
        const navItems = navLinks.current.querySelectorAll("li")
        const scrollAmount = navWidth / navItems.length

        navLinks.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        })
    }

    function handleScrollLeft() {
        const navWidth = navLinks.current.clientWidth;
        const navItems = navLinks.current.querySelectorAll("li")
        const scrollAmount = navWidth / navItems.length

        navLinks.current.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        })
    }

    return (
        <header className='bg-blue-900 text-white shadow-lg flex justify-between items-center px-4 py-2 fixed top-0 w-full z-50'>
            <NavLink to="/" className='w-[55px] cursor-pointer rounded-full shadow-lg'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ErDiTzx-ghinRk8bkuk2tklQdH2c7ueDANmSAYvobQ&s" alt="projects-logo" className='rounded-full w-full h-full' />
            </NavLink>
            <nav className='w-2/3 flex items-center justify-center space-x-2'>
                <BsChevronLeft size={50} className='cursor-pointer p-1 select-none' onClick={handleScrollLeft} />
                <ul className='flex justify-evenly items-center overflow-x-auto text-nowrap' ref={navLinks} >
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
                    <li>
                        <NavLink to="load-more-products" className='p-2 text-xs font-bold' style={({ isActive }) => {
                            return { color: isActive ? "#FF407D" : "#fff" }
                        }} >Load More Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="nested-menu" className='p-2 text-xs font-bold' style={({ isActive }) => {
                            return { color: isActive ? "#FF407D" : "#fff" }
                        }} >Nested Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="qr-code-generator" className='p-2 text-xs font-bold' style={({ isActive }) => {
                            return { color: isActive ? "#FF407D" : "#fff" }
                        }} >QR Code Generator</NavLink>
                    </li>
                    <li>
                        <NavLink to="light-dark-mode" className='p-2 text-xs font-bold' style={({ isActive }) => {
                            return { color: isActive ? "#FF407D" : "#fff" }
                        }} >Light Dark Mode</NavLink>
                    </li>
                </ul>
                <BsChevronRight size={50} className='cursor-pointer p-1 select-none' onClick={handleScrollRight} />
            </nav>
        </header>
    )
}
