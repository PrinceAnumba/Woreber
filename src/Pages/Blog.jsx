import React from 'react'
import BlogPost from '../components/BlogPost'
import BlogNewsLetter from '../components/BlogNewsletter'
import Latestblogs from '../components/Latestblogs'


const Blog = () => {
  return (
    <div>
      <BlogPost/>
      <BlogNewsLetter/>
      <Latestblogs/>
    </div>
  )
}

export default Blog