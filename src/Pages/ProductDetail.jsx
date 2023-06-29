import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NoImg, ChevronLeft, ChevronRight, HeartIcon, Back } from '../assets'
import Angle from '../components/Angle'
import SimilarProducts from '../components/SimilarProducts'
import Footer from "../components/Footer";
// import useFetch from "../../hooks/useFetch";
// import RelatedProducts from "./RelatedProducts/RelatedProducts";
// import {
//     FaFacebookF,
//     FaTwitter,
//     FaInstagram,
//     FaLinkedinIn,
//     FaPinterest,
//     FaCartPlus,
// } from "react-icons/fa";
// import "./pd.css";

const ProductDetail = () => {
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

    // if (!data) return;
    // const product = data?.data?.[0]?.attributes;


    // Selecting color js
    const COLOR_BTNS = document.querySelectorAll('.color');
    COLOR_BTNS.forEach(color => {
        color.addEventListener('click', () => {
            let colorNameClass = color.className;
            if(!color.classList.contains('active-color')){
                let colorName = colorNameClass.slice(colorNameClass.indexOf('-') + 1, colorNameClass.length);
                resetActiveBtns();
                color.classList.add('active-color');
                setNewColor(colorName)
            }
        });
    })

    // resetting all color btns
    function resetActiveBtns(){
        COLOR_BTNS.forEach(color => {
            color.classList.remove('active-color');
        });
    }

    // set new color on the banner right 
    function setNewColor(color){
        document.querySelector('.banner-right img').src = `images/tshirt_${color}.png`;
    }
    

    return (
        <div className="pd-details flex justify-center items-center flex-col pb-32">
            <div className="back w-4/5 my-24">
                <button onClick={()=> history(-1)}><img src={Back} alt="go-back" /></button>
            </div>
            <div className="prod-detail-card flex gap-24 w-4/5">
                <div className="image-carousel gap-8 relative">
                    <img className="w-full" src={NoImg} alt="" />
                    <div className="move-left right-icon h-10 w-10  flex justify-center items-center brown-bg-1 absolute top-1/2 left-4">
                        <img src={ChevronLeft} alt="left-icon" />
                    </div>
                    <div className="move-right right-icon h-10 w-10  flex justify-center items-center brown-bg-1 absolute top-1/2 right-4">
                        <img src={ChevronRight} alt="right-icon" />
                    </div>
                </div>
                <div className="prouct-detail flex flex-col justify-center gap-4">
                    <h5>Product Name</h5>
                    <div className="price flex gap-24">
                        <h4>CFA 13,500</h4>
                        <div className="rating">⭐⭐⭐⭐⭐ <span >5.0 / 5.0 <span className="text-grey-700 small">(556)</span></span></div>
                    </div>
                    <p className="details small w-96">
                        Lorem ipsum dolor sit amet consectetur. Quam tempus dictumst leo mi sagittis a sit. Id in vel at aliquam. Ut eu ante elementum pharetra blandit egestas placerat felis. Leo id lobortis gravida turpis duis consequat amet. Auctor enim arcu viverra aliquam.
                    </p>
                    <form action="" className="flex flex-col gap-4">
                        <p>Size</p>
                        <div className="size grid grid-cols-3 small w-52">
                            <div className="xs">
                                <input type="checkbox" name="size" id="xs" className="mr-2" />
                                <span>XS</span>
                            </div>
                            <div className="l">
                                <input type="checkbox" name="size" id="l" className="mr-2" />
                                <span>L</span>
                            </div>
                            <div className="s">
                                <input type="checkbox" name="size" id="s" className="mr-2" />
                                <span>S</span>
                            </div>
                            <div className="xl">
                                <input type="checkbox" name="size" id="xl" className="mr-2" />
                                <span>XL</span>
                            </div>
                            <div className="m">
                                <input type="checkbox" name="size" id="m" className="mr-2" />
                                <span>M</span>
                            </div>
                            <div className="xxl">
                                <input type="checkbox" name="size" id="xxl" className="mr-2" />
                                <span>XXL</span>
                            </div>
                        </div>
                    </form>

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
                    <div className="heart my-4">
                        <button className="flex " ><img src={HeartIcon} alt="heart-icon" className="mr-4" /> <span><p>Add to Wishlist</p></span></button>
                    </div>

                    <div className="btns flex ">
                        <div className="increment flex  items-center gap-1 mr-32 border first-line:">
                            <button className="py-2 px-4 " onClick={decrement}><p>-</p></button>
                            <div className="count flex justify-center items-center w-12 h-full">{quantity}</div>
                            <button className="py-2 px-4" onClick={increment}><p>+</p></button>
                        </div>

                        <button className="px-8 py-2 border-black border mr-4 hover:text-white hover:bg-black transition">Customize</button>
                        <button className="px-8 py-2 bg-black text-white">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="other-angles flex flex-col justify-center items-center m-24">
                <div className=" grid grid-cols-5 gap-8">
                    <Angle img={NoImg}/>
                    <Angle img={NoImg}/>
                    <Angle img={NoImg}/>
                    <Angle img={NoImg}/>
                    <Angle img={NoImg}/>
                </div>
                <div className="m-4">
                    <button className="p-4"><img className="filter" src={ChevronLeft} alt="" /></button>
                    <button className="p-4"><img className="filter" src={ChevronRight} alt="" /></button>
                </div>
            </div>

            <SimilarProducts header="Related Products"/>

        </div>
    );
};

export default ProductDetail;