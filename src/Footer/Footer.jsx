import React from 'react'
import facebookImg from '../assets/facebook (2).png'
import youtubeImg from '../assets/youtube.png'
import twitterImg from '../assets/twitter (1).png'
const Footer = () => {
  return (
    <div className='bg-[#071520] md:h-[450px]   mt-10 pl-2 md:px-20' >
      <h1 className='text-orange-400 font-bold text-3xl pt-5'>SARKAR</h1>
      <br />
      <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at qui nemo doloremque necessitatibus adipisci minus dolorum sit odio quidem? Fugit consequuntur ipsa repudiandae voluptatum distinctio. Magnam quasi cupiditate est.</p>
      <br />
      <div className='flex w-12 gap-5'>
        <img src={facebookImg} alt="" />
        <img src={youtubeImg} alt="" />
        <img src={twitterImg} alt="" />
      </div>
      <br />
      <div className='flex gap-16 text-white'>
      <div>
        <ul>
          <li>Company</li>
          <li>Home</li>
          <li>About</li>
          <li>About Us</li>
          <li>Delivery policy</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div>
        <h1>Get in touch</h1>
        <p>+8801234345342</p>
        <p>Contact: sarkar@gmail.com</p>
      </div>
      </div>
      <br />
      <hr />
      <p className="text-center text-white my-3 pb-3">Copyright 2024 all rigth</p>
    </div>
  )
}

export default Footer
