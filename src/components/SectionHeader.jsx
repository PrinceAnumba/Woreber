import React from 'react'

const SectionHeader = ({headerText}) => {
  return (
    <div className='flex justify-center uppercase p-24'>
        <h3>{headerText}</h3>
    </div>
  )
}

export default SectionHeader