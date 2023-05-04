import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='p-6 orange-bg sticky top-0 '>
      <ul className='flex justify-center items-center gap-8 text-white medium'>
        <CustomLink to="/">HOME</CustomLink>
        <CustomLink to="AboutUs">ABOUT US</CustomLink>
        <CustomLink to="OnlineShop">ONLINE SHOP</CustomLink>
        <CustomLink to="Blog">BLOG</CustomLink>
        <CustomLink to="Contact">CONTACT</CustomLink>
      </ul>
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