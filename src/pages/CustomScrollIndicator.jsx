import { useEffect, useRef, useState } from 'react'
import { FaChevronUp } from "react-icons/fa"


export default function CustomScrollIndicator({ url }) {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [scrollPercentage, setScrollPercentage] = useState(0)

    useEffect(() => {
        async function fetchData(getUrl) {
            try {
                setIsLoading(true)
                const res = await fetch(getUrl)
                const data = await res.json()
                if (data && data.products && data.products.length > 0) {
                    setProducts(data.products)
                }

            } catch (err) {
                setErrorMessage(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData(url)
    }, [url])


    function handleScrollPercentage() {
        const scrollY = Math.ceil(window.scrollY);
        const scrollHeight = (document.documentElement.scrollHeight - window.innerHeight);
        const percentage = Math.ceil((scrollY * 100) / scrollHeight);
        setScrollPercentage(percentage)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage)

        return () => {
            window.removeEventListener("scroll", () => { })
        }
    })


    if (errorMessage !== '') {
        return (
            <div>
                <h2>Error occurred: {errorMessage}</h2>
            </div>
        )
    }


    return (
        <div>
            <div className='w-full h-[10px] bg-slate-200 fixed top-[79px] z-50 border-b transition'>
                <div className='h-full w-3/4 bg-slate-400' style={{
                    width: `${scrollPercentage}%`
                }}></div>
            </div>
            <div className='w-3/4 mx-auto p-4 flex justify-center items-center space-y-4 flex-col'>
                {
                    isLoading && [...Array(100)].map((_, index) => {
                        return <div key={index} className='rounded bg-slate-300 animate-pulse shadow-sm w-full h-[50px]'></div>
                    })
                }
                {
                    (!isLoading && products && products.length > 0) &&
                    products.map(product => {
                        return <div key={product.id}>{product.title}</div>
                    })
                }
            </div>



        </div>
    )
}
