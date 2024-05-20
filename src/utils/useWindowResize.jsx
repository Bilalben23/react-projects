import { useLayoutEffect, useState } from 'react'

export default function useWindowResize() {
    const [windowSize, setWindowSize] = useState(() => {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    });


    useLayoutEffect(() => {
        window.addEventListener("resize", () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        })


        return () => {
            document.removeEventListener("resize", () => { });
        }
    }, [])

    return windowSize
}
