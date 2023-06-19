import React from 'react'
import ProductCard from "../components/ProductCard"
import { ProductImg1 } from '../assets'

const ProductBar = ({header}) => {
  return (
    <div className='my-4 category-bg p-8 flex flex-col gap-4'>
        <div className=" flex justify-between items-center">
            <h5>{header}</h5>
            <button>View All</button>
        </div>
        <div className="products-bar grid grid-cols-7 justify-center gap-8">
            <ProductCard image={ProductImg1}/>
            <ProductCard image={ProductImg1}/>
            <ProductCard image={ProductImg1}/>
            <ProductCard image={ProductImg1}/>
            <ProductCard image={ProductImg1}/>
            <ProductCard image={ProductImg1}/>
            <ProductCard image={ProductImg1}/>
        </div>
    </div>
  )
}

export default ProductBar