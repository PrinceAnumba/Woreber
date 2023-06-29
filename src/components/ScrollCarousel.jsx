import React from 'react'
import { ChevronLeft } from '../assets';
import { ChevronRight } from '../assets';
import CarouselCard from '../components/CarouselCard';

const ScrollCarousel = () => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <div className='scroll-carousel category-bg my-4 p-8 relative flex items-center w-full'>
        <div className="m-4 left-icon h-10 w-10  flex justify-center items-center brown-bg-1" onClick={slideLeft}>
            <img src={ChevronLeft} alt="" />
        </div>
        <div
          id='slider'
          className='p-4 w-full flex items-center gap-4 h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {/* {data.map((item) => (
            <img
              className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
          ))} */}

          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
          <CarouselCard/>
        </div>
        <div className="m-4 right-icon h-10 w-10  flex justify-center items-center brown-bg-1" onClick={slideRight}>
            <img src={ChevronRight} alt="" />
        </div>
      </div>
    </>
  );
}

export default ScrollCarousel