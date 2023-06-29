import React from 'react'
import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NoImg, ChevronLeft, ChevronRight, HeartIcon, Back , DiscountIcon } from '../assets'
import CartItem from '../components/CartItem'

const Cart = () => {
    const history = useNavigate();
  return (
    <div className="cart flex justify-center items-center flex-col pb-32">
        <div className="back w-4/5 my-24 flex flex-col ">
          <button onClick={()=> history(-1)}><img src={Back} alt="go-back" /></button>
          <h5 className=''>Cart <span className="mx-4 grey-out">3ITEMS</span></h5>
        </div>
        
        <div className="prod-detail-card flex gap-24 w-4/5">
           <div className="items">
            <CartItem/>
            <CartItem/>
            <CartItem/>
           </div>
           <div className="order-summary ">
              <div className="summary-container p-4 border flex flex-col gap-4">
                <h6 className='font-bold'>Order Summary</h6>
                <div className="breakdown">
                  <div className=" flex justify-between mt-2">
                    <p className="">Price</p>
                    <span className="price font-bold">CFA 17,100</span>
                  </div>
                  <div className=" flex justify-between mt-2">
                    <p className="">Discount</p>
                    <span className="discount ">CFA 17,100</span>
                  </div>
                  <div className=" flex justify-between mt-2">
                    <p className="">Shipping</p>
                    <span className="Shipping text-gray-500">Free</span>
                  </div>
                  <div className=" flex justify-between mt-2">
                    <p className="">Coupon Applied</p>
                    <span className="Shipping ">CFA 0</span>
                  </div>

                  <hr className="my-4" />

                  <div className=" flex justify-between mt-2">
                    <p className="">TOTAL</p>
                    <span className="total font-bold">CFA 17,100</span>
                  </div>
                  <div className=" flex justify-between mt-2">
                    <p className="">Estimated Delivery by</p>
                    <span className="Shipping ">01 Feb, 2023</span>
                  </div>
                  <div className=" relative mt-4">
                    <input type="text" name="" id="" className='border w-full p-2 ' placeholder='Coupon Code'/>
                    <img src={DiscountIcon} alt="discount-icon" className=' absolute top-1/3 right-2' />
                  </div>
                  <button className="my-8 py-2 w-full bg-black text-white">Check out</button>
                </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Cart