import React from 'react'
import BlogPost from '../components/BlogPost'
import BlogNewsLetter from '../components/BlogNewsletter'
import Latestblogs from '../components/Latestblogs'
import Footer from '../components/Footer'


const Blog = () => {
  return (
    <div>
      <BlogPost/>
      <BlogNewsLetter/>
      <Latestblogs/>
      <Footer/>
    </div>
  )
}

export default Blog