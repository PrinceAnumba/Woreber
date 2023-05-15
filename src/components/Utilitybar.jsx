import React from 'react'
import { logo, DropdownIconBlack, SearchIcon, HeartIcon, CartIcon } from '../assets/index'
import { Link } from 'react-router-dom'

const Utilitybar = () => {
  return (
    <div className=' utility bg-white flex justify-between items-center py-4 px-10 w-full'>
        <Link to="/"><img src={logo} alt="logo" className='w-32 logo'/></Link>
        <div className="search">
            <form className='flex items-center search-form-border' action="" method="post">
                <input className='small search-form-border h-full p-2' type="text" name="search" id="search" placeholder='Search Products'/>
                <div className='small flex items-center gap-2 search-form-border p-2  h-full'>All Categories <img  src={DropdownIconBlack} alt="" /></div>
                <div className='brown-bg-2 p-3 search-btn flex justify-center items-center' type=""><img className='w-4' src={SearchIcon} alt="search-icon" /></div>
            </form>
        </div>
        <div className="action flex items-center gap-3 small">
            <button className='btn p-3'>Login</button>
            <button className='btn p-3'>Signup</button>
            <button className='utility-icons'><img src={HeartIcon} alt="heart-icon" /></button>
            <button className='utility-icons'><img src={CartIcon} alt="cart-icon" /></button>
        </div>
    </div>
  )
}

export default Utilitybar