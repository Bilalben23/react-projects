import React from 'react'
import useFetch from '../utils/useFetch'
import useWindowResize from '../utils/useWindowResize'

export default function TestFetchCustomHook() {
    const { data: { products }, isLoading, error } = useFetch("https://dummyjson.com/products?limit=50", {})
    const { width, height } = useWindowResize()

    console.log(width, height);


    if (error) {
        return <div className='text-center'>
            <h1 className='text-center font-semibold text-red-500'>{error}</h1>
        </div>
    }


    return (
        <div>
            <h1 className='text-black font-black text-center mb-5'>useFetch custom hook</h1>
            <div className='p-5'>
                {
                    isLoading && <ul className='w-3/4 mx-auto space-y-2'>
                        {
                            [...Array(50)].map((_, index) => {
                                return <li key={index} className='w-full h-[25px] rounded shadow bg-slate-200 animate-pulse'></li>
                            })
                        }
                    </ul>
                }
                {
                    (!isLoading && products && products.length > 0) && <ul className='space-y-2'>
                        {
                            products.map(product => {
                                return <li key={product.id} className='text-center'>
                                    <h2>{product.title}</h2>
                                </li>
                            })
                        }
                    </ul>
                }

            </div>
            <div className='w-fit mx-auto mt-4'>
                <p>width: {width}</p>
                <p>height: {height}</p>
            </div>
        </div>
    )
}
