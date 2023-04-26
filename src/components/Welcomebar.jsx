import React from 'react'
import { DropdownIcon } from '../assets/index'

const Welcomebar = () => {
  return (
    <div className='flex justify-between py-4 px-10 brown-bg-2 w-full'>
        <p className='font-light text-white small'>Welcome to Woreber</p>
        <button className='text-white small flex items-center gap-2 justify-center'>ENG <img src={DropdownIcon} alt="dropdown" /></button>
    </div>
  )
}

export default Welcomebar