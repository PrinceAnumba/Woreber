import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom';
import Footer from '../components/Footer'
import CategoryNav from '../components/CategoryNav'
import AddSlider from '../components/AddSlider'
import { floatimg5 } from '../assets';
import ScrollCarousel from '../components/ScrollCarousel'



const OnlineShop = () => {
  return (
    <div>
      <CategoryNav/>
      <Outlet />
      <div id='general' className="px-24 mt-8">
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
      </div>
      <Footer/>
    </div>
  )
}

export default OnlineShop