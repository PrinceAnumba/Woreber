import React from 'react'
import ProductCardBtn from '../components/ProductCardBtn'
import { ProductImg1 } from '../assets'

const Clothing = () => {
  return (
    <div className="mx-24 my-24">
        <div className="product-bar-btn grid grid-cols-7 justify-center gap-8">
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
          <ProductCardBtn image={ProductImg1}/>
        </div>
    </div>
  )
}

export default Clothing