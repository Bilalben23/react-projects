
import { state, useState } from 'react'
import { FaStar } from "react-icons/fa"

export default function RatingStars({ numberOfStars = 5 }) {
    const [rating, setRating] = useState(0)
    const [hovering, setHovering] = useState(0)

    function handleClick(star_index) {
        setRating(star_index)
    }

    function handleMouseEnter(star_index) {
        setHovering(star_index)
    }

    function handleMouseLeave() {
        setHovering(rating)
    }


    return (
        <div className='flex w-full items-center justify-center h-[75vh]'>
            <div className='flex items-center justify-center space-x-1'>
                {
                    [...Array(numberOfStars)].map((_, index) => {
                        index++;
                        return <FaStar
                            className='cursor-pointer drop-shadow'
                            key={index}
                            fill={(index <= rating || index <= hovering) ? "yellow" : 'black'}
                            size={50}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        />
                    })
                }
            </div>
        </div>
    )
}
