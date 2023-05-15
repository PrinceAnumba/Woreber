import React from 'react'
import { useState } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { MenuIcon, DropdownIconBlack, CloseIcon } from '../assets'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='p-4 orange-bg  sticky top-0'>
      <ul className='flex justify-center items-center gap-8 text-white medium nav-links'>
        <CustomLink to="/">HOME</CustomLink>
        <CustomLink to="AboutUs">ABOUT US</CustomLink>
        <CustomLink to="OnlineShop">ONLINE SHOP</CustomLink>
        <CustomLink to="Blog">BLOG</CustomLink>
        <CustomLink to="Contact">CONTACT</CustomLink>
      </ul>
      <div className="search-mobile flex justify-center items-center">
        <input className='small p-2 h-full' type="text" placeholder='Search Product' />
        <button className='bg-white small h-full p-2 flex items-center gap-2 drop-black-icon'>Category <img src={DropdownIconBlack} alt="" /></button>
      </div>
      <div className="nav-menu relative">

        {toggleMenu
          ? <img className='fill-white' src={CloseIcon} onClick={()=> setToggleMenu(false)} alt="" />
          : <img className='fill-white' src={MenuIcon} onClick={()=> setToggleMenu(true)} alt="" />
        }
        {
          toggleMenu && (
            <div className="nav-menu-container absolute list-none flex flex-col orange-bg p-4 -right-4 text-white top-8">
              <div className="nav-menu-container-links">
                <CustomLink to="/">HOME</CustomLink>
                <CustomLink to="AboutUs">ABOUT US</CustomLink>
                <CustomLink to="OnlineShop">ONLINE SHOP</CustomLink>
                <CustomLink to="Blog">BLOG</CustomLink>
                <CustomLink to="Contact">CONTACT</CustomLink>
              </div>
              <div className="signin flex flex-col justify-start gap-4 my-3" >
                <button className='btn small p-2 bg-black'>Sign up</button>
                <button className='btn small p-2 bg-white text-black'>Login</button>
              </div>
            </div>
          )
        }
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