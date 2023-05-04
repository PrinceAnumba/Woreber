import React from 'react'
import SectionHeader from './SectionHeader'
import ServiceCard from './ServiceCard'
import { imageh3, imageh1, imageh2 } from '../assets'

const OurServices = () => {
  return (
    <div className='mt-12 mb-52'>
        <SectionHeader headerText="our services"/>
        <div className="flex justify-center items-center ">
            <div className="grid  grid-cols-3 gap-3 justify-center">
                <ServiceCard img={imageh3}/>
                <ServiceCard img={imageh1}/>
                <ServiceCard img={imageh2}/>
            </div>
        </div>

    </div>
  )
}

export default OurServices