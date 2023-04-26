import React from 'react'
import NewsLetter from './NewsLetter'
import { FacebookIcon, WhatsappIcon, InstagramIcon, SkypeIcon, YoutubeIcon, Location, Phone } from '../assets'

const Footer = () => {
  return (
    <div className='w-full'>
        <NewsLetter/>
        <div className="footer bg-black p-10 text-white grid grid-cols-5 grid-rows-2 gap-5">
          <div className="about flex flex-col gap-8">
            <h2 className='medium'>ABOUT US</h2>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec laoreet. </p>
          </div>          
          <div className="information flex flex-col gap-8">
            <h2>INFORMATION</h2>
            <ul className='flex flex-col gap-1'>
              <li className='footer-link'><a href="#">About</a></li>
              <li className='footer-link'><a href="#">Delivery Information</a></li>
              <li className='footer-link'><a href="#">Privacy Policy</a></li>
              <li className='footer-link'><a href="#">Sales</a></li>
              <li className='footer-link'><a href="#">Terms & Conditions</a></li>
              <li className='footer-link'><a href="#">EMI Payment</a></li>
            </ul>
          </div>
          <div className="information flex flex-col gap-8">
            <h2>ACCOUNT</h2>
            <ul className='flex flex-col gap-1'>
              <li className='footer-link'><a href="#">My Account</a></li>
              <li className='footer-link'><a href="#">My Orders</a></li>
              <li className='footer-link'><a href="#">Returns</a></li>
              <li className='footer-link'><a href="#">Shipping</a></li>
              <li className='footer-link'><a href="#">Whishlist</a></li>
              <li className='footer-link'><a href="#">Account Details</a></li>
            </ul>
          </div>
          <div className="information flex flex-col gap-8">
            <h2>STORE</h2>
            <ul className='flex flex-col gap-1'>
              <li className='footer-link'><a href="#">Affiliate</a></li>
              <li className='footer-link'><a href="#">Discounts</a></li>
              <li className='footer-link'><a href="#">Returns</a></li>
              <li className='footer-link'><a href="#">Sale</a></li>
              <li className='footer-link'><a href="#">Contact</a></li>
              <li className='footer-link'><a href="#">All Collections</a></li>
            </ul>
          </div>

          <div className="information flex flex-col gap-8">
            <h2>CONTACT US</h2>
            <ul className="information flex flex-col gap-1">
              <li className='flex items-center gap-5'><img src={Location} alt="location" /> Adress, COUNTRY</li>
              <li className='flex items-center gap-5'><img src={Phone} alt="location" /> 0123456789</li>
            </ul>
          </div>

          <div className="socials flex flex-col gap-8">
              <h2 className='medium'>JOIN US</h2>
              <div className="social-links flex items-center gap-4">
                <a href="#"><img className='w-6 footer-link' src={FacebookIcon} alt="facebook" /></a>
                <a href="#"><img className='w-6 footer-link' src={WhatsappIcon} alt="Whatsapp" /></a>
                <a href="#"><img className='w-6 footer-link' src={InstagramIcon} alt="Instagram" /></a>
                <a href="#"><img className='w-6 footer-link' src={SkypeIcon} alt="fSkype" /></a>
                <a href="#"><img className='w-6 footer-link' src={YoutubeIcon} alt="Youtube" /></a>
              </div>
          </div>
          
          <div className="information col-span-2 flex flex-col gap-8">
            <h2>PAYMENT METHODS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec laoreet. </p>
          </div>
          
        </div>
        <div className="copyright flex items-center justify-center p-6 bg-black text-white">
          <p>Woreber | ©2023</p>
        </div>
        
    </div>
  )
}

export default Footer