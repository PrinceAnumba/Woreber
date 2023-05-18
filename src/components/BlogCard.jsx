import React from 'react'
import { blogimg3, blogimg4, blogimg5 } from '../assets'

function BlogCard() {
  return (
    <div className='blog-card flex flex-col gap-4'>
        <img className='blog-post-img' src={blogimg5} alt="blog-img" />
        <div className="info blog-filter flex  gap-4 items-center justify-between mr-4">
            <div className=" flex gap-4">
                <div className="btn-outlined">
                    Produits
                </div>
                <div className="btn-outlined">
                    Nouveau Style
                </div>
            </div>
            <div className="date ">4 Avr, 2023</div>
        </div>
        <h5>Lorem ipsum dolor sit amet consectetur.</h5>
        <p>Lorem ipsum dolor sit amet consectetur. Pulvinar sed pellentesque risus diam mus urna convallis amet mauris. At pellentesque commodo laoreet quam ...</p>
    </div>
  )
}

export default BlogCard