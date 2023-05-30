import React from 'react'

const AdBlock = ({img, title}) => {
  return (
    <div className='relative my-4'>
        <img src={img} alt="Ad-img" />
        <div className="overlay absolute top-0 text-white flex flex-col justify-center p-8">
            <h2>{title}</h2>
            <p className="detail">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam aliquid nulla dolorem mollitia unde incidunt atque, minima, natus aut error sunt officiis tenetur facilis voluptate vel accusamus voluptatibus nostrum vero.</p>
            <button className='explore-btn-sm my-4 '>Shop</button>
        </div>
    </div>
  )
}

export default AdBlock