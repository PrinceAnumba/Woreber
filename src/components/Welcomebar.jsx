import React from 'react'
import { DropdownIcon } from '../assets/index'
import Language from './Language'
import  {useState} from 'react';

const Welcomebar = () => {
  const [isOpen, setOpen] = useState(false);


  return (
    <div className='flex justify-between py-4 px-10 brown-bg-2 w-full relative'>
        <p className='font-light text-white small'>Welcome to Woreber</p>
        <button className='text-white small flex items-center gap-2 justify-center' onClick={()=> setOpen((prev) => !prev)}>
          ENG <img src={DropdownIcon} alt="dropdown"  />
          
          </button>
        {isOpen && (
          <Language/>
        )}
    </div>
  )
}

export default Welcomebar