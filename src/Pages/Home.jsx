import React from 'react'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import images from '../images'
import HomeSection from '../components/HomeSection'


const Home = () => {
  return (
    <div>
      <Slider/>
      <HomeSection/>
      <Footer/>
    </div>
  )
}

export default Home