import React from 'react'
import { blogimg1, blogimg2, blogimg3, blogimg4, } from '../assets'


const BlogPost = () => {
  return (
    <div className='blog flex items-center justify-center flex-col py-24 mx-24'>
        <div className="float-content flex  flex-col">
            <h3 className=''>Lorem ipsum dolor sit amet consectetur.</h3>
            <p className='text-justify'>Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo ergw werg.</p>
        </div>
        <div className="flex items-center justify-center">
            <img className='blog-hero-img' src={blogimg1} alt="blog-img" />
        </div>
        <div className="float-content flex  flex-col my-12">
            <h5 className='blog-header-width'>Lorem ipsum dolor sit amet consectetur. Lorem scelerisque ridiculus sed ullamcorper. Blandit urna ornare pellentesque phasellus. </h5>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur. Placerat nisl in volutpat adipiscing aliquet. Neque elit faucibus nisl ut velit praesent pulvinar ut. Velit id ipsum odio dui enim risus euismod. Suspendisse nullam quam aliquam pharetra mi aliquet eros. Sed tortor vel consequat placerat orci morbi id. Mollis enim scelerisque cursus aliquam scelerisque non sollicitudin rutrum. Viverra elit tempus lacus id sed.</p>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur. Placerat nisl in volutpat adipiscing aliquet. Neque elit faucibus nisl ut velit praesent pulvinar ut. Velit id ipsum odio dui enim risus euismod. Suspendisse nullam quam aliquam pharetra mi aliquet eros. Sed tortor vel consequat placerat orci morbi id. Mollis enim scelerisque cursus aliquam scelerisque non sollicitudin rutrum. Viverra elit tempus lacus id sed.</p>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur. Placerat nisl in volutpat adipiscing aliquet. Neque elit faucibus nisl ut velit praesent pulvinar ut. Velit id ipsum odio dui enim risus euismod. Suspendisse nullam quam aliquam pharetra mi aliquet eros. Sed tortor vel consequat placerat orci morbi id. Mollis enim scelerisque cursus aliquam scelerisque non sollicitudin rutrum. Viverra elit tempus lacus id sed.</p>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur. Placerat nisl in volutpat adipiscing aliquet. Neque elit faucibus nisl ut velit praesent pulvinar ut. Velit id ipsum odio dui enim risus euismod. Suspendisse nullam quam aliquam pharetra mi aliquet eros. Sed tortor vel consequat placerat orci morbi id. Mollis enim scelerisque cursus aliquam scelerisque non sollicitudin rutrum. Viverra elit tempus lacus id sed.</p>
        </div>
        <div className="flex gap-8 items-center justify-center">
            <img className='w-1/3' src={blogimg2} alt="blog-img" />
            <img className='w-1/3' src={blogimg3} alt="blog-img" />
        </div>
        <div className="float-content flex  flex-col my-12">
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur. Placerat nisl in volutpat adipiscing aliquet. Neque elit faucibus nisl ut velit praesent pulvinar ut. Velit id ipsum odio dui enim risus euismod. Suspendisse nullam quam aliquam pharetra mi aliquet eros. Sed tortor vel consequat placerat orci morbi id. Mollis enim scelerisque cursus aliquam scelerisque non sollicitudin rutrum. Viverra elit tempus lacus id sed.</p>
        </div>
    </div>
  )
}

export default BlogPost