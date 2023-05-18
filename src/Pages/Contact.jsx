import React from 'react'
import Footer from '../components/Footer'
import Getintouch from '../components/Getintouch'
import AccordionComp from '../components/Accordion'
import SectionHeader from '../components/SectionHeader'

const Contact = () => {
  return (
    <div className='bg-white'>
      <Getintouch/>
      <SectionHeader headerText="FAQ"/>
      <AccordionComp />
      <Footer/>
    </div>
  )
}

export default Contact