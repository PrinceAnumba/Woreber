import React from 'react'

const SectionHeader = ({headerText}) => {
  return (
    <div className='section-header flex justify-center uppercase p-24'>
        <h3>{headerText}</h3>
    </div>
  )
}

export default SectionHeader