import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"


const navItems = [
    {
        id: 1,
        to: 'accordion',
        label: "Accordion"
    }, {
        id: 2,
        to: 'generate-colors',
        label: "Generate Colors"
    }, {
        id: 3,
        to: 'rating-stars',
        label: "Rating Stars"
    }, {
        id: 4,
        to: 'images-slider',
        label: "Images Slider"
    }, {
        id: 5,
        to: 'load-more-products',
        label: "Load More Products"
    }, {
        id: 6,
        to: 'qr-code-generator',
        label: "QR Code Generator"
    }, {
        id: 7,
        to: 'nested-menu',
        label: "Nested Menu"
    }, {
        id: 8,
        to: 'light-dark-mode',
        label: "Light Dark Mode"
    }, {
        id: 9,
        to: 'custom-scroll-indicator',
        label: "Custom Scroll Indicator"
    }, {
        id: 10,
        to: 'tabs?tab=tab1',
        label: "Tabs"
    }, {
        id: 11,
        to: 'modal',
        label: "Modal"
    }, {
        id: 12,
        to: 'github-profile-finder',
        label: "Github Profile Finder"
    }, {
        id: 13,
        to: 'search-suggestions?username=?',
        label: "Search Suggestions"
    }, {
        id: 14,
        to: 'tic-tac-toe',
        label: "Tic Tac Toe Game"
    }, {
        id: 15,
        to: 'test-custom-hooks',
        label: "Test Custom Hooks"
    }, {
        id: 16,
        to: 'scroll-to-section',
        label: "Scroll To Section"
    }, {
        id: 17,
        to: 'weather',
        label: "Weather"
    },
    // {
    //     to: "tailwind",
    //     label: 'Tailwind'
    // }
];




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
                    {
                        navItems.map(navItem => {
                            return <li key={navItem.id}>
                                <NavLink to={navItem.to} className='p-2 text-xs font-bold' style={({ isActive }) => {
                                    return { color: isActive ? "#FF407D" : "#fff" }
                                }} >{navItem.label}</NavLink>
                            </li>
                        })
                    }
                </ul>
                <BsChevronRight size={50} className='p-1 cursor-pointer select-none' onClick={handleScrollRight} />
            </nav>
        </header>
    )
}
