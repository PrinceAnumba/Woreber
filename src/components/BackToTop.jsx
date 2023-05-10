import React from 'react'
import { useState, useEffect } from 'react'
import { arrowup } from '../assets'

const BackToTop = () => {
    const [backToTop, setBackToTop] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div>
        {backToTop && (
            <button onClick={scrollUp} className='back-to-top-btn flex justify-center items-center'><img src={arrowup} alt="" /></button>
        )}
    </div>
  )
}

export default BackToTop