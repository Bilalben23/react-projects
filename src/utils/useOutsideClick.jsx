import { useEffect } from 'react'

export default function useOutsideClick(ref, handler) {
    console.log(ref.current, handler)

    useEffect(() => {

        function listener(event) {
            console.log(event)
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler()
        }

        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)


        return () => {
            document.removeEventListener("mousedown", listener)
            document.removeEventListener("touchstart", listener)
        }

    }, [ref, handler])
}


/* 
    * Mouse Events 🖱️

    + click: triggered when a mouse button is clicked (pressed and released) on an element.
    + dbclick: triggered when a mouse button is double clicked on an element.
    + mousedown: triggered when a mouse button is pressed down an an element.
    + mouseup: triggered when a mouse button is released over an element.
    + mousemove: triggered when the mouse pointer is moved over an element.
    + contextmenu: triggered when the right mouse button is clicked, opening the context menu.
    + mouseenter: triggered when the mouse pointer enters the element(does not bubble).
    + mouseleave: Triggered when the mouse pointer leaves the element (does not bubble).
    + mouseover: triggered when the mouse pointer is moved onto the element or one of its children (bubbles).
    + onmouseout: triggered when the mouse pointer is moved out of the element or one of its children(bubbles).
*/