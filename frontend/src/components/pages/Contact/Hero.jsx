import React from 'react'
import bgImage from "../../../assets/images/contact.jpg"

const Hero = () => { 

  return (
   <section
   className='relative min-h-screen bg-cover bg-center flex items-center justify-center'

   style={{backgroundImage: `url(${bgImage})`}}
   >

    <div className='absolute inset-0 bg-black/60'> </div>

    <div className='relative z-10 text-center text-white px-6 max-w-3xl'>

      <h1 className='text-8xl  font-light   mb-8'> Get in Touch</h1>

      <p className='text-xl   leading-7 mb-4'>
        Thooli No.9, Lakshmi Nagar, Saravanampatti,
          
          Coimbatore - 641035.
      </p>

      {/* email */}
      <p className='text-xl  mb-4
      '> <span className='font-semibold'> Email: </span> {""} Thooliofficial@gmail.com</p>

       {/*phone no.  */}
      <p className='text-xl  mb-4'>
        <span className='font-semibold'> sales & Enquiry :</span>+91 88259 26383 |
<span className="font-semibold ml-1">Support :</span> +91 93612 75652
        </p>
      
      {/* Working hours */}
      <p className='text-xl  mb-10'>
        <span className='font-semibold'>Working Hours : </span> {""} Mon - Sat 09:00 AM To 06:00 PM
      </p>

      {/* decorative divider line  */}
      <div
      className='w-20 h-[2px] bg-white/70 mx-auto'>

      </div>

    </div>

     <a
        href="https://wa.me/918825926383"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        {/* WhatsApp icon */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-7"
        />
      </a>

   </section>
  )
}

export default Hero