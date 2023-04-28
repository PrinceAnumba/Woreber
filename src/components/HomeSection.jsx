import React from 'react'
import { image1, image2 } from '../assets'

const HomeSection = () => {
  return (
    <div className='relative flex justify-center items-center'>
        <img className='overflow-hidden ' src={image1} alt="Background-image" />
        <div className=" absolute top-0 content text-white flex justify-center items-center flex-col gap-4">
            <h1 className="">CLOTHING</h1>
            <button className="explore-btn text-white font-medium mt-8">Discover More</button>
        </div>
    </div>
  )
}

export default HomeSection