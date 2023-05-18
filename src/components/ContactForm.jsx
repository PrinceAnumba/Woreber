import React from 'react'

const ContactForm = () => {
  return (
    <div className='contact-form'>
        <h3 className=' text-black '>Get in touch</h3>
        <form action="" method="post" className='grid grid-cols-2 gap-4'>
            <div className="contact-us name flex flex-col">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Full Name' />
            </div>
            <div className="contact-us email flex flex-col">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='email@example.com' />
            </div>
            <div className="contact-us phone flex flex-col">
                <label htmlFor="phone">Phone Number</label>
                <input type="number" placeholder='Phone Number' />
            </div>
            <div className="contact-us address flex flex-col">
                <label htmlFor="address">Address</label>
                <input type="text" placeholder='Address' />
            </div>
            <textarea className=' resize-none rounded-md mt-4 bg-black text-white col-span-2 p-8 ' name="message" id="message" cols="30" rows="10" placeholder='Your Message'></textarea>

            <button className='p-4 w-56 bg-black text-white font-medium'  type="submit">SEND MESSAGE</button>
        </form>
    </div>
  )
}

export default ContactForm