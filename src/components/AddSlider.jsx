import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import images
import { image3, image4, image5 } from "../assets";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function AddSlider() {
    return (
        < >
            <div className="col-span-3 row-span-2 -z-0">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-full relative"
                >
                    <SwiperSlide className="relative w-full">
                        <img
                            className="object-fill w-full "
                            src={image5}
                            alt="image slide 1"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                        <img
                            className="object-fill w-full "
                            src={image4}
                            alt="image slide 2"
                        />
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                        <img
                            className="object-fill w-full "
                            src={image3}
                            alt="image slide 3"
                        />
                        
                    </SwiperSlide>

                    <div className="add-overlay absolute top-0 flex justify-center items-center">
                        <div className=" slider-content content text-white flex justify-center  flex-col gap-4 w-full p-8">
                            <h3 className="">Find The Best Fashion Style For You</h3>
                            <p className="small w-96">Lorem ipsum dolor sit amet consectetur. Velit aenean vitae libero 
                                sociis egestas sit ante. Massa urna morbi volutpat 
                                arcu sit venenatis. Urna risus sapien amet vel a sit. 
                            </p>
                            <button className="discover-btn text-black font-medium mt-8">Discover More</button>
                        </div>
                    </div>
                    
                </Swiper>
            </div>
        </>
    );
}