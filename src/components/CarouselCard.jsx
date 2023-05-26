import React from 'react'
import { Slideimg } from '../assets'

const CarouselCard = () => {
  return (
    <div className=' flex flex-col gap-4 items-center justify-center '>
        <img className='w-96' src={Slideimg} alt="/0" />
        <p>Clothings</p>
    </div>
  )
}

export default CarouselCard