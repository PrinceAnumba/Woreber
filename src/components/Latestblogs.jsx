import React from 'react'
import BlogCard from './BlogCard'


const Latestblogs = () => {
  return (
    <div className='py-24 flex justify-center flex-col w-full items-center'>
        <h3 className='float-content'>Latest Posts</h3>
        <div className="blogs grid grid-cols-3 py-12 float-content gap-4" >
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
    </div>
  )
}

export default Latestblogs