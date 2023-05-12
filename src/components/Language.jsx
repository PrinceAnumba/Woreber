import React from 'react'

const Language = () => {
  return (
    <div className='dropdown absolute top-10 text-white right-1 brown-bg-2 w-24 '>
      <ul className='flex flex-col gap-1 '>
        <li className='border-b p-1 small hover:bg-purple-700 '>ENG</li>
        <li className='border-b p-1 small hover:bg-purple-700 '>FR</li>
        <li className='border-b p-1 small hover:bg-purple-700 '>ESP</li>
        <li className='border-b p-1 small hover:bg-purple-700 '>GER</li>
        <li className='border-b p-1 small hover:bg-purple-700 '>POR</li>
      </ul>
    </div>
  )
}

export default Language;