import React from 'react'
import Getintouch from '../components/Getintouch'
import AccordionComp from '../components/Accordion'
import SectionHeader from '../components/SectionHeader'

const Contact = () => {
  return (
    <div className='bg-white'>
      <Getintouch/>
      <SectionHeader headerText="FAQ"/>
      <AccordionComp />
    </div>
  )
}

export default Contact