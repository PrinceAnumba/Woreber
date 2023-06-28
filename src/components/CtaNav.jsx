import React from 'react'
import { Link, useMatch, useResolvedPath, Outlet  } from 'react-router-dom'

const CtaNav = () => {
    return (
        <div className=" flex justify-center flex-col items-center w-full">
            <nav className='cat-nav category nav-mb tb-center p-4 category-bg  sticky top-0 w-full'>
                <ul className='flex justify-center items-center gap-8 text-neutral-800 medium nav-links'>
                    <CustomLink className=' hover:bg-gray-400 ' to="/Account/Login">LOGIN</CustomLink>
                    <CustomLink className=' hover:bg-gray-400 ' to="/Account/Signup">SIGNUP</CustomLink>
                </ul>
            </nav>
            <Outlet />
        </div>
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
export default CtaNav