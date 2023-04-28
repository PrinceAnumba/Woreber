import React from 'react'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import { image1, image2, image3, image4 } from '../assets'
import HomeSection from '../components/HomeSection'


const Home = () => {
  return (
    <div>
      <Slider/>
      <HomeSection image={image4} title="CLOTHING"/>
      <HomeSection image={image3} title="TEXTILES"/>
      <HomeSection image={image2} title="LEATHER GOODS"/>
      <HomeSection image={image1} title="ACCESSORIES"/>
      <Footer/>
    </div>
  )
}

export default Home