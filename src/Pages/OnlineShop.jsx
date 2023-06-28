import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom';
import Footer from '../components/Footer'
import CategoryNav from '../components/CategoryNav'
import AddSlider from '../components/AddSlider'
import { floatimg5, AdImg1, AdImg2 } from '../assets';
import ScrollCarousel from '../components/ScrollCarousel'
import ProductBar from '../components/ProductBar'
import AdBlock from '../components/AdBlock'
import ProductDetail from './ProductDetail';



const OnlineShop = () => {
  return (
    <div> 
      <CategoryNav/>
      
      <Outlet />
      <div id='general' className="px-24 my-12">
        <div className="ad grid grid-cols-4 grid-rows-2 gap-4">
          <AddSlider className="ad-slider "/>
          <div className="little-add-img-1">
              <img  src={floatimg5} alt="" />
          </div>
          <div className="little-add-img-2">
              <img  src={floatimg5} alt="" />
          </div>
        </div>
        <ScrollCarousel />
        <ProductBar header="Woreber’s Top Selling Products"/>
        <ProductBar header="Woreber’s Latest Products"/>
        <ProductBar header="Best Price | Up tp 50% Off"/>
        <ProductBar header="Woreber’ Luxury Products"/>
        <div className="ad-block flex justify-center gap-8 items-center ">
          <AdBlock img={AdImg1} title="Clothing"/>
          <AdBlock img={AdImg2} title="Leather Goods"/>
        </div>
        <ProductBar header="Popular Right Now"/>
      </div>
      <Footer/>
    </div>
  )
}

export default OnlineShop