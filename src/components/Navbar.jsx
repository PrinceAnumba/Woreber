import React from 'react'
import { useState } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { MenuIcon, DropdownIconBlack, CloseIcon } from '../assets'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='nav-mb tb-center p-4 orange-bg  sticky top-0'>
      <ul className='flex justify-center items-center gap-8 text-white medium nav-links'>
        <CustomLink to="/">HOME</CustomLink>
        <CustomLink to="AboutUs">ABOUT US</CustomLink>
        <CustomLink onClick={Onlineshop} to="OnlineShop">ONLINE SHOP</CustomLink>
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
            <div className="nav-menu-container absolute list-none flex flex-col orange-bg p-4 -right-0 text-white top-12 gap-4 z-50">
              <div className="nav-menu-container-links flex flex-col gap-4">
                <CustomLink className='w-full' onClick={()=> setToggleMenu(false)} to="/">HOME</CustomLink>
                <CustomLink className='w-full' onClick={()=> setToggleMenu(false)} to="AboutUs">ABOUT US</CustomLink>
                <CustomLink className='w-full' onClick={()=> setToggleMenu(false)}  to="OnlineShop">ONLINE SHOP</CustomLink>
                <CustomLink className='w-full' onClick={()=> setToggleMenu(false)} to="Blog">BLOG</CustomLink>
                <CustomLink className='w-full' onClick={()=> setToggleMenu(false)} to="Contact">CONTACT</CustomLink>
              </div>
              <div className="signin flex flex-col justify-start gap-3 my-3" >
                <Link to="/Account/Signup"><button className='btn small p-2 bg-black w-full'>Sign up</button></Link>
                <Link to="/Account/Login"><button className='btn small p-2 bg-white text-black w-full'>Login</button></Link>
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

function Onlineshop(){
  return (
    document.getElementById("general").style.display="inline"
  )
}

export default Navbar