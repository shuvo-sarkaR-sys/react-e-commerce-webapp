import React from 'react'
import { Carousel } from "flowbite-react";
import theme1 from '../assets/theme 1.jpg'
import theme2 from '../assets/theme2.jpg'
import theme3 from '../assets/theme3.jpg'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
const Hero = () => {
  return (
    <div>
      
<div className='flex flex-wrap mt-5 gap-4 justify-center'>
    <div className="w-[400px] h-[180px] md:w-[900px] md:h-[450px]   ">
      <Carousel>
        <img className='w-[400px] h-[180px] md:w-[900px] md:h-[450px]' src={theme1} alt="" />
        <img  className='w-[400px] h-[180px] md:w-[900px] md:h-[450px]' src={theme2} alt="" />
        <img className='w-[400px] h-[180px] md:w-[900px] md:h-[450px]' src={theme3} alt="" />
       
      </Carousel>
    </div>
<div>
  <h1 className='text-2xl'>Gaming Product</h1> 
  <div className='flex gap-3'>
<div>
<img src={p1} alt="" />
<h1>PC gaming</h1>
</div>
<div>
  <img src={p2} alt="" />
  <h1>Xbox</h1>
</div>
</div>
<br />
<div className='flex gap-3'>
<div>
  <img src={p3} alt="" />
  <h1>PlayStation</h1>
</div>
<div>
  <img src={p4} alt="" />
  <h1>Nentendo switch</h1>
</div>
 
 </div>
</div>
 
</div>
 
    </div>
  )
}

export default Hero
