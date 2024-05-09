import React, { useEffect, useState } from 'react'

export default function LoadMoreProducts() {
    const [products, setProducts] = useState([])
    const [loadMore, setLoadMore] = useState(10)
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)


    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true)
                const res = await fetch(`https://dummyjson.com/products?limit=${loadMore}`)
                const data = await res.json()
                setProducts(data.products)
                setIsLoading(false)
            } catch (e) {
                setErrorMessage(e.message);
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [loadMore])

    function handleLoadMoreProductsClick() {
        if (loadMore !== 100) {
            setLoadMore(prevLoadMore => prevLoadMore += 30)
        }
    }
    return (
        <div className='m-2'>
            {
                errorMessage !== null && <div>
                    <h2>Error Occurred: {errorMessage}</h2>
                </div>
            }
            {
                isLoading
                    ? <div className="grid grid-cols-3 gap-5 p-8">
                        {
                            [...Array(loadMore)].map((_, index) => {
                                return <div key={index} className="bg-gray-100 p-4  w-full h-[300px] rounded shadow">
                                    <div className="bg-gray-500 w-full h-3/4 rounded animate-pulse"></div>
                                    <p className="w-full h-[40px] bg-gray-500 rounded mt-4 animate-pulse"></p>
                                </div>
                            })
                        }
                    </div>
                    : <div className="grid grid-cols-3 gap-5 p-8">
                        {
                            products.map((product) => {
                                return <div key={product.id} className='bg-gray-100 p-4  w-full min-h-[300px] rounded shadow overflow-clip'>
                                    <div className='h-[70%] rounded mb-4'>
                                        <img src={product.images[0]} alt={product.title} className='w-full h-full aspect-square rounded' />
                                    </div>
                                    <p className='text-xs'>{product.description}</p>
                                </div>
                            })
                        }
                    </div>
            }
            <button type='button' className={`block mx-auto px-4 py-2 bg-slate-300 rounded shadow cursor-pointer text-sm font-semibold transition ${loadMore === 100 ? 'opacity-50' : 'hover:opacity-90 hover:shadow-none'}`} onClick={handleLoadMoreProductsClick}>{loadMore !== 100 ? "Load More Products" : "No more products to load"}</button>
        </div>
    )
}
