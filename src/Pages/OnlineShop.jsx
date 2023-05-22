import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom';
import Footer from '../components/Footer'
import CategoryNav from '../components/CategoryNav'
import AddSlider from '../components/AddSlider'
import { floatimg5 } from '../assets';



const OnlineShop = () => {
  return (
    <div>
      <CategoryNav/>
      <Outlet />
      <div id='general' className="">
          <div className="ad m-24 grid grid-cols-4 grid-rows-2 gap-4">
            <AddSlider className="ad-slider "/>
            <div className="little-add-img-1">
                <img  src={floatimg5} alt="" />
            </div>
            <div className="little-add-img-2">
                <img  src={floatimg5} alt="" />
            </div>

          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default OnlineShop