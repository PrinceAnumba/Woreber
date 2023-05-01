import React from 'react'
import { imagea1 } from '../assets'

const Hero = () => {
  return (
    <div className='relative'>
        <img className='w-full' src={imagea1} alt="image" />
        <div className="overlay absolute top-0 flex justify-center items-center">
            <h1 className='text-white '>À propos de nous</h1>
        </div>
    </div>
  )
}

export default Hero