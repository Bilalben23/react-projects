import React, { useEffect, useState } from 'react'

export default function LoadMoreProducts() {
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)


    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true)
                const res = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
                const data = await res.json()
                if (data && data.products.length > 0) {
                    setProducts(count !== 0 ? prevProducts => {
                        return {
                            ...prevProducts,
                            products: [
                                ...prevProducts.products,
                                ...data?.products
                            ]
                        }
                    } : data)
                }
                setIsLoading(false)
            } catch (e) {
                setErrorMessage(e.message);
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [count])

    function handleLoadMoreProductsClick() {
        if ((count + 1) * 20 < products.total) {
            setCount(prevCount => prevCount += 1)
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
                            [...Array((count + 1) * 20)].map((_, index) => {
                                return <div key={index} className="bg-gray-100 p-4  w-full h-[300px] rounded shadow">
                                    <div className="bg-gray-500 w-full h-3/4 rounded animate-pulse"></div>
                                    <p className="w-full h-[40px] bg-gray-500 rounded mt-4 animate-pulse"></p>
                                </div>
                            })
                        }
                    </div>
                    : <div className="grid grid-cols-3 gap-5 p-8">
                        {
                            products?.products?.map((product) => {
                                return <div key={product.id} className='bg-gray-100 p-4  w-full min-h-[300px] rounded shadow overflow-clip'>
                                    <div className='h-[70%] rounded mb-4'>
                                        <img src={product.thumbnail} alt={product.title} className='w-full h-full aspect-square rounded' />
                                    </div>
                                    <p className='text-xs'>{product.description}</p>
                                </div>
                            })
                        }
                    </div>
            }
            {
                isLoading
                    ? <button className='block mx-auto px-5 py-2 rounded shadow bg-slate-300 animate-pulse w-[250px] h-[50px]'></button>
                    : <button type='button' className={`block mx-auto px-4 py-2 bg-slate-300 rounded shadow cursor-pointer text-sm font-semibold transition ${((count + 1) * 20 < products.total) ? 'hover:opacity-90 hover:shadow-none' : 'opacity-50 cursor-not-allowed'}`} onClick={handleLoadMoreProductsClick}>{(count + 1) * 20 < products.total ? `Load More Products ${isLoading ? '....' : ''}` : "No more products to load"}</button>
            }
        </div >
    )
}
