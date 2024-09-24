import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaTimes } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { toggleAddProductToCart } from '../../components/store/product/productShopCartSlice'
// import { Circles, Bars, CirclesWithBar, Comment, DNA, Audio, Discuss, Hearts, Blocks, Grid, InfinitySpin, FallingLines, ColorRing, LineWave, ProgressBar, Hourglass, MutatingDots, FidgetSpinner, Radio, MagnifyingGlass, Rings, ThreeDots, Puff, TailSpin, Vortex, RevolvingDot, RotatingTriangles, Watch, BallTriangle, RotatingSquare, Oval,  } from 'react-loader-spinner'

export default function ProductsShopCart() {
    const productsAddedToCart = useSelector(state => state.productShopCartReducer)
    const totalAmount = Math.round(productsAddedToCart?.reduce((accumulator, product) => accumulator + product?.price, 0), 2)


    return (
        <div className='mb-5'>
            <div className='w-fit p-4 rounded shadow float-right mb-8'>
                <h1 className='font-semibold mb-3 text-amber-500'>Your Cart Summary:</h1>
                <ul>
                    <li>Total Items: <span className='font-bold'>{productsAddedToCart.length}</span></li>
                    <li>Total Amount: <span className='font-bold'>{totalAmount}$</span></li>
                </ul>
            </div>
            <div className='clear-right w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8'>
                {
                    !productsAddedToCart.length > 0 && <div className='col-span-full text-center font-semibold'>
                        <h2 className='mb-4'>No product have added to the cart yet!</h2>
                        <Link to="/products-list" className='px-2 py-1.5 rounded bg-blue-500 shadow text-white text-xs transition hover:opacity-85 hover:shadow-none'>See More products</Link>
                    </div>
                }
                {
                    productsAddedToCart.map(product => {
                        return <ProductCard
                            key={product?.id}
                            product={product}
                        />
                    })
                }
            </div>
        </div>
    )
}



function ProductCard({ product }) {
    const dispatch = useDispatch();



    return <div className='flex items-center justify-start space-x-4 p-3 rounded shadow-md relative border-t'>
        <div className='h-[60px] w-2/6'>
            <img src={product.image} alt={product.title} className='w-full h-full' />
        </div>
        <div className='w-3/4'>
            <p className='text-xs truncate'>{product.title}</p>
            <p className='text-sm mt-1 font-bold'>{product.price}$</p>
        </div>
        <button className='absolute -top-[7.5px] -right-[7.5px] bg-slate-500 rounded-full text-white p-[2px] shadow transition hover:shadow-none hover:opacity-85' onClick={() => dispatch(toggleAddProductToCart(product))}>
            <FaTimes size={15} />
        </button>
    </div>
}

