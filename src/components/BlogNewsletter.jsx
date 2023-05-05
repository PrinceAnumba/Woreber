import React from 'react'
import { NewsletterIcon } from '../assets/index'

const BlogNewsLetter = () => {
  return (
    <div className='p-12 brown-bg-1 flex justify-center items-center w-full'>
        <div className="form flex justify-center gap-80 items-center w-full " >
            <div className="text-lorem flex justify-between text-white gap-6">
                <img className='w-8' src={NewsletterIcon} alt="" />
                <div className="hero">
                    <p>Join our newsletter and get offers</p>
                    <p className='small'>Sign up our newsletter</p>
                </div>
            </div>
            <div className="input">
                <input className='p-4 small' type="email" name="email" id="email" placeholder='Enter your Email'/>
                <button className='p-4 orange-bg text-white px-10 btn-reverse'>SUBSCRIBE</button>
            </div>
        </div>
    </div>
  )
}

export default BlogNewsLetter