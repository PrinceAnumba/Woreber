import React from 'react'
import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NoImg, ChevronLeft, ChevronRight, HeartIcon, Back , DiscountIcon } from '../assets'
import WishItem from '../components/WishItem'


const Wishlist = () => {
    const history = useNavigate();
    return (
      <div className="wishlist flex justify-center items-center flex-col pb-32">
          <div className="back w-4/5 my-24 flex flex-col ">
            <button onClick={()=> history(-1)}><img src={Back} alt="go-back" /></button>
            <h5 className='font-bold'>Wish list <span className="mx-4 grey-out">3ITEMS</span></h5>
          </div>
          
          <div className="prod-detail-card flex gap-24 w-4/5">
             <div className="items">
              <WishItem/>
              <WishItem/>
              <WishItem/>
             </div>
          </div>
      </div>
    )
}

export default Wishlist