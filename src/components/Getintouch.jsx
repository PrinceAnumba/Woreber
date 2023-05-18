import React from 'react'
import ContactForm from './ContactForm'
import { FacebookIcon, WhatsappIcon, InstagramIcon, SkypeIcon, YoutubeIcon } from '../assets'

const Getintouch = () => {
  return (
    <div className='getintouch my-24 full form-content flex justify-center items-center gap-8'>
        <ContactForm/>
        <div className="follow-us w-96 self-start pt-24 flex flex-col gap-4 ">
            <h5>You Can Follow Us ?</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas.</p>
            <div className="socials flex flex-col gap-8">
                <div className="social-links flex items-center gap-4">
                    <a href="#"><img className='w-6 bg-black footer-link' src={FacebookIcon} alt="facebook" /></a>
                    <a href="#"><img className='w-6 bg-black footer-link' src={WhatsappIcon} alt="Whatsapp" /></a>
                    <a href="#"><img className='w-6 bg-black footer-link' src={InstagramIcon} alt="Instagram" /></a>
                    <a href="#"><img className='w-6 bg-black footer-link' src={SkypeIcon} alt="fSkype" /></a>
                    <a href="#"><img className='w-6 bg-black footer-link' src={YoutubeIcon} alt="Youtube" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Getintouch