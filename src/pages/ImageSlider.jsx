import React, { useEffect, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"


export default function ImageSlider({ limit = 5 }) {
    const [images, setImages] = useState([])
    const [currentImage, setCurrentImage] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)


    useEffect(() => {
        async function fetchData(url) {
            try {
                setIsLoading(true)
                const res = await fetch(`${url}?limit=${limit}`)
                const data = await res.json()
                setImages(data.photos)
                setIsLoading(false)
            } catch (e) {
                setErrorMessage(e.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData("https://api.slingacademy.com/v1/sample-data/photos");
    }, [limit])

    function handleNextImageClick() {
        if (currentImage < images.length - 1) {
            setCurrentImage(prevImage => prevImage + 1)
        } else {
            setCurrentImage(0)
        }
    }

    function handlePrevClick() {
        if (currentImage > 0) {
            setCurrentImage(prevImage => prevImage - 1)
        } else {
            setCurrentImage(images.length - 1)
        }
    }
    function onClickBullet(imageIndex) {
        setCurrentImage(imageIndex)
    }


    return (
        <>
            {
                errorMessage && <div className='text-center font-bold text-red-500'>
                    <h1>Error Occurred: {errorMessage}</h1>
                </div>
            }


            <div className='flex items-center justify-between space-x-4 w-full sm:w-3/4  max-w-[700px] border-2 m-3 mx-auto p-3 select-none'>
                <div className='w-[50px] h-[50px] rounded-[100%] shadow-lg bg-slate-800 flex items-center justify-center cursor-pointer hover:opacity-90 hover:shadow-none transition' onClick={handlePrevClick}>
                    <BsChevronLeft
                        size={35}
                        fill='white'
                    />
                </div>

                {
                    (!isLoading && images.length > 0)
                        ? <div className='w-[80%] relative'>
                            {
                                images.map((img, index) => {
                                    return <div key={img.id} className={`shrink-0 max-h-[380px] border rounded overflow-hidden shadow ${currentImage === index ? "block" : "hidden"}`} >
                                        <img src={img.url} alt={img.title} className='w-full h-full max-h-[380px]' />
                                    </div>
                                })
                            }
                            <Bullets
                                bulletsNumber={images.length}
                                currentImage={currentImage}
                                onClickBullet={onClickBullet}
                            />
                        </div>
                        : <div className='w-[500px] h-[380px] bg-gray-400 animate-pulse rounded'></div>
                }

                <div>
                    <div className='w-[50px] h-[50px] rounded-[100%] shadow-lg bg-slate-800 flex items-center justify-center cursor-pointer hover:opacity-90 hover:shadow-none transition' onClick={handleNextImageClick}>
                        <BsChevronRight
                            size={35}
                            fill='white'
                        />
                    </div>
                </div>
            </div>

        </>
    )
}


function Bullets({ currentImage, bulletsNumber = 0, onClickBullet }) {
    return <div className='flex items-center justify-center space-x-1 absolute bottom-2 left-1/2 -translate-x-1/2 '>
        {

            [...Array(bulletsNumber)].map((_, index) => {
                return <div key={index} className={`w-[11px] h-[11px] rounded-full shadow-lg border cursor-pointer ${currentImage === index ? "bg-black" : "bg-black/20"}`} onClick={() => onClickBullet(index)}></div>
            })
        }
    </div>
}

// load more products /