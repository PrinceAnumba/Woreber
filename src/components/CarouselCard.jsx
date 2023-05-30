import React from 'react'
import { Slideimg } from '../assets'

const CarouselCard = () => {
  return (
    <div className=' carousel-card flex flex-col gap-4 items-center justify-center '>
        <img className='' src={Slideimg} alt="" />
        <p>Clothings</p>
    </div>
  )
}

export default CarouselCard