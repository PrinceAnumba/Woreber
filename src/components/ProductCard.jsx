import React from 'react'
import { ProductImg1, HeartIcon }from '../assets'

const ProductCard = () => {
  return (
    <div className='relative'>
      <img src={ProductImg1} alt="product-image" />
      <p className="discount absolute top-4 right-4 text-red-700">-50%</p>
      <div className="product-info flex  justify-between items-center my-4">
        <h6 className="profuct-name">Product Name</h6>
        <button><img src={HeartIcon} alt="heart-icon" /></button>
      </div>
      <div className="product-price flex items-center gap-4">
        <h5 className="price">$39.49</h5>
        <span className="old-price text-gray-500 line-through">$78.66</span>
      </div>
    </div>
  )
}

export default ProductCard