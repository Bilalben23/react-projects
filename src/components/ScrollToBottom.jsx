import React, { useEffect, useRef } from 'react'
import { FaChevronDown } from "react-icons/fa"


export default function ScrollToBottom() {

    const button = useRef();
    function handleClick() {
        window.scrollTo({
            left: 0,
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.addEventListener("scroll", () => {
                if (window.innerHeight <= window.scrollY) {
                    button.current.style.display = "none";
                } else {
                    button.current.style.display = "block";
                }
            })
        })


        return () => {
            window.removeEventListener("scroll", () => { })
        }
    })


    return (
        <button ref={button} onClick={handleClick} className='fixed left-2 z-10 top-[100px] bg-slate-200 rounded-full border-2 p-2 transition hover:bg-slate-500 hover:text-white' >
            <FaChevronDown size={25} />
        </button>
    )
}
