import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom';
import { NoImg } from '../assets'
import ProductCardBtn from '../components/ProductCardBtn'
import ProductDetail from '../Pages/ProductDetail';

const Textiles = () => {
  return (
    <div className="pb mx-24 my-24">
    
        <div className=" product-bar-btn grid grid-cols-7 justify-center gap-8">
          <ProductCardBtn image={NoImg}/>
          <ProductCardBtn image={NoImg}/> 
          <ProductCardBtn image={NoImg}/>
          <ProductCardBtn image={NoImg}/>
          <ProductCardBtn image={NoImg}/>
          <ProductCardBtn image={NoImg}/>
          <ProductCardBtn image={NoImg}/>
          <ProductCardBtn image={NoImg}/>
          <ProductCardBtn image={NoImg}/>
          <ProductCardBtn image={NoImg}/>
          <ProductCardBtn image={NoImg}/>
          <ProductCardBtn image={NoImg}/>
          <ProductCardBtn image={NoImg}/>
          <ProductCardBtn image={NoImg}/>
          <ProductCardBtn image={NoImg}/>
          <ProductCardBtn image={NoImg}/>
          <ProductCardBtn image={NoImg}/>
          <ProductCardBtn image={NoImg}/>
          <ProductCardBtn image={NoImg}/>
          <ProductCardBtn image={NoImg}/>
        </div>
    </div>
  )
}

export default Textiles