import React from 'react'

const ServiceCard = ({img}) => {
  return (
    <div className='flex flex-col gap-4 '>
        <div className="service-image">
            <img src={img} alt="image" />
        </div>
        <div className="content service-card flex flex-col items-center">
            <h5 className='font-semibold'>Find The Best Fashion Style For You</h5>
            <p className='small'>
            Lorem ipsum dolor sit amet consectetur. Velit aenean 
            vitae libero sociis egestas sit ante. Massa urna morbi volutpat 
            arcu sit venenatis. Urna risus sapien amet vel a sit. 
            </p>
        </div>
        <div className="contact flex items-center justify-center">
            <a href="#" className="service-link underline hover:text-blue-700">Contact us</a>
        </div>
    </div>
  )
}

export default ServiceCard