import { useEffect, useRef, useState } from 'react'
import { FaChevronUp } from "react-icons/fa"


export default function ScrollToTop() {
    const button = useRef()

    function handleClick() {
        window.scrollTo(0, 0);
    }

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.innerHeight >= window.scrollY) {
                button.current.style.display = "none";
            } else {
                button.current.style.display = "block";
            }
        })

    }, [])


    return (
        <button ref={button} onClick={handleClick} className='fixed z-10 left-2 bottom-2 bg-slate-200 rounded-full border-2 p-2 transition hover:bg-slate-500 hover:text-white' >
            <FaChevronUp size={25} />
        </button>
    )
}
