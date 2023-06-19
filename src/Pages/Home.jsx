import React from 'react'
import Slider from '../components/Slider'
import { image1, image2, image3, image4 } from '../assets'
import HomeSection from '../components/HomeSection'
import OurServices from '../components/OurServices'


const Home = () => {
  return (
    <div>
      <Slider/>
      <HomeSection image={image4} title="CLOTHING"/>
      <HomeSection image={image3} title="TEXTILES"/>
      <HomeSection image={image2} title="COUTURE"/>
      <HomeSection image={image1} title="ACCESSORIES"/>
      <OurServices/>
    </div>
  )
}

export default Home