import React from 'react'
import { Link, useMatch, useResolvedPath,} from 'react-router-dom'

const CategoryNav = () => {

  return (
    <nav className='cat-nav category nav-mb tb-center p-4 category-bg  sticky top-0 '>
      <ul className='flex justify-center items-center gap-8 text-neutral-800 medium nav-links'>
        <CustomLink className=' hover:bg-gray-400 ' to="/OnlineShop/Clothing">CLOTHING</CustomLink>
        <CustomLink className=' hover:bg-gray-400 ' to="/OnlineShop/Textiles">TEXTILES</CustomLink>
        <CustomLink className=' hover:bg-gray-400 ' to="/OnlineShop/LeatherGoods">COUTURE</CustomLink>
        <CustomLink className=' hover:bg-gray-400 ' to="/OnlineShop/Accessories">ACCESORIES</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""} onClick={()=> document.getElementById("general").style.display = "none"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default CategoryNav