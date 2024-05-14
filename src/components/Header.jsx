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
        <header className='fixed top-0 z-50 flex items-center justify-between w-full px-4 py-2 text-white bg-blue-900 shadow-lg'>
            <NavLink to="/" className='w-[55px] cursor-pointer rounded-full shadow-lg'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ErDiTzx-ghinRk8bkuk2tklQdH2c7ueDANmSAYvobQ&s" alt="projects-logo" className='w-full h-full rounded-full' />
            </NavLink>
            <nav className='flex items-center justify-center w-2/3 space-x-2'>
                <BsChevronLeft size={50} className='p-1 cursor-pointer select-none' onClick={handleScrollLeft} />
                <ul className='flex items-center overflow-x-auto justify-evenly text-nowrap' ref={navLinks} >
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
                    <li>
                        <NavLink to="custom-scroll-indicator" className='p-2 text-xs font-bold' style={({ isActive }) => {
                            return { color: isActive ? "#FF407D" : "#fff" }
                        }} >Custom Scroll Indicator</NavLink>
                    </li>
                    <li>
                        <NavLink to="tabs?tab=tab1" className='p-2 text-xs font-bold' style={({ isActive }) => {
                            return { color: isActive ? "#FF407D" : "#fff" }
                        }} >Tabs</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="tailwind" className='p-2 text-xs font-bold' style={({ isActive }) => {
                            return { color: isActive ? "#FF407D" : "#fff" }
                        }} >Tailwind</NavLink>
                    </li> */}
                </ul>
                <BsChevronRight size={50} className='p-1 cursor-pointer select-none' onClick={handleScrollRight} />
            </nav>
        </header>
    )
}
