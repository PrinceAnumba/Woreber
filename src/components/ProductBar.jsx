import React from 'react'
import ProductCard from "../components/ProductCard"

const ProductBar = ({header}) => {
  return (
    <div className='my-4 category-bg p-8 flex flex-col gap-4'>
        <div className=" flex justify-between items-center">
            <h5>{header}</h5>
            <button>View All</button>
        </div>
        <div className="products-bar flex justify-between items-center">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
  )
}

export default ProductBar