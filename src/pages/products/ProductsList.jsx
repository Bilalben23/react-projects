import React from 'react'
import useFetch from "../../utils/useFetch"
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddProductToCart } from '../../components/store/product/productShopCartSlice';


export default function ProductsList() {
    const { data: products, isLoading, error } = useFetch("https://fakestoreapi.com/products");

    if (error) {
        return <div className='w-fit mx-auto'>
            <h2 className='text-red-500 font-bold'>{error}</h2>
        </div>
    }

    return (
        <div className='mb-5'>

            {
                isLoading && <ProductsSkelton skeltonNumbers={50} />
            }
            {
                (!isLoading && products && products.length > 0) && <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 w-[90%] mx-auto'>
                    {
                        products?.map(product => {
                            return <ProductCard
                                key={product.id}
                                product={product}
                            />
                        })
                    }
                </div>
            }
        </div>
    )
}


function ProductCard({ product }) {
    const dispatch = useDispatch()
    const productsAddedToCart = useSelector((state) => state.productShopCartReducer)


    function isAddedToCart(id) {
        return !!productsAddedToCart.find(product => product.id === id);
    }

    return <div className='p-2 rounded bg-slate-100 shadow-lg'>
        <div className=''>
            <img src={product?.image} alt={product?.title} className='rounded w-full h-[250px]' />
        </div>
        <p className='text-sm mt-2 mb-4 truncate font-semibold'>{product?.title}</p>
        <button type='button' className='text-sm bg-blue-500 text-white px-3 py-1.5 rounded shadow-sm transition hover:opacity-85 hover:shadow-none'
            onClick={() => dispatch(toggleAddProductToCart(product))}>
            {isAddedToCart(product?.id) ? "Remove From" : "Add To"}Cart</button>

    </div>
}




function ProductsSkelton({ skeltonNumbers }) {
    return <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 w-[90%] mx-auto'>
        {
            [...Array(skeltonNumbers)].map((_, index) => {
                return <div key={index} className='rounded shadow-lg p-3 h-[280px]'>
                    <div className='bg-slate-400 animate-pulse rounded h-4/6'></div>
                    <p className='w-full h-[15px] bg-slate-400 animate-pulse rounded mt-2 mb-2'></p>
                    <button className='w-1/2 bg-slate-400 rounded animate-pulse h-[40px]'></button>
                </div>
            })
        }
    </div>
}