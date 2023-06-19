import React from 'react'
import { HeartIcon }from '../assets'
import { Link } from 'react-router-dom'

const ProductCard = ({image}) => {
  return (
    <div className='relative'>
      <Link>
        <img src={image} alt="product-image" />
        <p className="discount absolute top-4 right-4 text-red-700">-50%</p>
        <div className="product-info flex  justify-between items-center my-4">
          <h6 className="profuct-name">Product Name</h6>
          <button><img src={HeartIcon} alt="heart-icon" /></button>
        </div>
        <div className="product-price flex items-center gap-4">
          <h5 className="price">$39.49</h5>
          <span className="old-price text-gray-500 line-through">$78.66</span>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard