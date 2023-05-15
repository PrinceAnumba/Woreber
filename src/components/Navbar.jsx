import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { MenuIcon, DropdownIconBlack } from '../assets'

const Navbar = () => {
  return (
    <nav className='p-4 orange-bg relative  flex items-center justify-between px-8'>
      <ul className='flex justify-center items-center gap-8 text-white medium nav-links'>
        <CustomLink to="/">HOME</CustomLink>
        <CustomLink to="AboutUs">ABOUT US</CustomLink>
        <CustomLink to="OnlineShop">ONLINE SHOP</CustomLink>
        <CustomLink to="Blog">BLOG</CustomLink>
        <CustomLink to="Contact">CONTACT</CustomLink>
      </ul>
      <div className="search-mobile flex justify-center items-center">
        <input className='small p-2' type="text" placeholder='Search Product' />
        <button className='bg-white small h-full p-2 flex items-center gap-2'>Category <img src={DropdownIconBlack} alt="" /></button>
      </div>
      <div className="menu-icon ">
        <img className='fill-white' src={MenuIcon} alt="" />
        
      </div>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar