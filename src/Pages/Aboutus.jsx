import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import FloatContent from '../components/FloatContent'
import FloatBullet from '../components/FloatBullet'
import QualitySection from '../components/QualitySection'
import ServiceBreakdown from '../components/ServiceBreakdown'

const Aboutus = () => {
  return (
    <div>
      <Hero/>
      <FloatContent/>
      <FloatBullet/>
      <QualitySection/>
      <ServiceBreakdown/>
      <Footer/>
    </div>
  )
}

export default Aboutus