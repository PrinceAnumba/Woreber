import React from 'react'
import { useContext, useState, react } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NoImg, HeartIcon, DiscountIcon } from '../assets'

const WishItem = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const history = useNavigate();
    // const { handleAddToCart } = useContext(Context);
    // const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };
    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };




  return (
    <div className=" wish-item">
        <div className='wish flex  gap-8 '>
            <div className=" gap-8 relative wish-img">
                <img className="w-full" src={NoImg} alt="" />
            </div>
            <div className="prouct-detail flex flex-col justify-center gap-4 w-full">
                <h5>Product Name</h5>
                <div className="price flex gap-24">
                    <h4 className='font-bold'>CFA 13,500</h4>
                    <div className="rating">⭐⭐⭐⭐⭐ <span >5.0 / 5.0 <span className="text-grey-700 small">(556)</span></span></div>
                </div>
                <p className="details small w-3/5">
                    Lorem ipsum dolor sit amet consectetur. Quam tempus dictumst leo mi sagittis a sit. Id in vel at aliquam. Ut eu ante elementum pharetra blandit egestas placerat felis. Leo id lobortis gravida turpis duis consequat amet. Auctor enim arcu viverra aliquam.
                </p>

                <div class = "color-groups  flex flex-col gap-4">
                    <p>Color</p>
                    <div className="flex">
                        <div class = "color color-white active-color"></div>
                        <div class = "color color-black"></div>
                        <div class = "color color-yellow"></div>
                        <div class = "color color-blue"></div>
                        <div class = "color color-red"></div>
                    </div>
                </div>
                {/* <div className="heart my-4">
                    <button className="flex " ><img src={HeartIcon} alt="heart-icon" className="mr-4" /> <span><p>Add to Wishlist</p></span></button>
                </div> */}

                <div className="btns flex justify-between">
                    <div className="increment flex  items-center gap-1 mr-32 border">
                        <button className="py-2 px-4 " onClick={decrement}><p>-</p></button>
                        <div className="count flex justify-center items-center w-12 h-full">{quantity}</div>
                        <button className="py-2 px-4" onClick={increment}><p>+</p></button>
                    </div>

                    <div className="ra-btns">
                        <button className="px-8 py-2 bg-orange-600 border mr-4 text-white hover:bg-black transition">Remove</button>
                        <button className="px-8 py-2 bg-black text-white">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        <hr className="my-12" />
    </div>
  )
}

export default WishItem