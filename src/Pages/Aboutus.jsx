import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import FloatContent from '../components/FloatContent'
import FloatBullet from '../components/FloatBullet'
import QualitySection from '../components/QualitySection'
import ServiceBreakdown from '../components/ServiceBreakdown'
import SectionHeader from '../components/SectionHeader'
import SimpleFloat from '../components/SimpleFloat'
import KnowMore from '../components/KnowMore'
import VosService from '../components/VosService'
import Partners from '../components/Partners'



const Aboutus = () => {
  return (
    <div>
      <Hero/>
      <FloatContent/>
      <FloatBullet/>
      <QualitySection/>
      <ServiceBreakdown/>
      <SectionHeader headerText="Notre Fondateur"/>
      <SimpleFloat/>
      <SectionHeader headerText="En savoir plus"/>
      <KnowMore/>
      <VosService/>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default Aboutus