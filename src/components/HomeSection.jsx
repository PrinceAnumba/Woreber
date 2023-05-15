import React from 'react'

const HomeSection = ( {image, title}) => {
  return (
    <div className='max-w-full relative flex justify-center items-center'>
        <img className='overflow-hidden w-full' src={image} alt="Background-image" />
        <div className=" home-img absolute top-1/2 content text-white flex justify-center items-center flex-col gap-4">
            <h1 className="">{title}</h1> 
            <button className="explore-btn text-white font-medium mt-8">Discover More</button>
        </div>
    </div>
  )
}

export default HomeSection;