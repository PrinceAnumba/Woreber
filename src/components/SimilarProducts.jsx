import React from 'react'
import ProductCardBtn from "../components/ProductCardBtn"
import { NoImg } from '../assets'

const SimilarProducts = ({header}) => {
  return (
    <div className='my-4 p-8 flex flex-col gap-4 w'>
        <div className=" flex justify-center items-center mb-8">
            <h5>{header}</h5>
        </div>
        <div className="products-bar grid grid-cols-4 justify-center gap-8">
            <ProductCardBtn image={NoImg}/>
            <ProductCardBtn image={NoImg}/>
            <ProductCardBtn image={NoImg}/>
            <ProductCardBtn image={NoImg}/>
        </div>
    </div>
  )
}

export default SimilarProducts