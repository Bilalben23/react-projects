import React from 'react'
import ProductsHeader from './ProductsHeader'
import { Outlet } from 'react-router-dom'

export default function ProductsLayouts() {
    return (
        <section>
            <ProductsHeader />
            <div>
                <Outlet />
            </div>
        </section>
    )
}
