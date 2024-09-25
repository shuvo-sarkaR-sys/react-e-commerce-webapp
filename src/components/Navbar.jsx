import React from 'react'
import Search from './Search'
import cart from '../assets/shopping-cart.png'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='bg-[#081621] h-20 flex justify-between px-7 md:px-12 items-center  text-white'>
      <div className='flex items-center gap-3'>
    <p className='text-xl md:text-4xl font-mono font-semibold'>SARKAR </p>
    <img className='w-16' src={logo} alt="" />
    </div>
    <Search/>
    <div className='flex gap-4'>
    <button className='hidden sm:block md:block bg-orange-400 h-8 px-2 rounded'>sign in</button>
    <img className='w-18 h-10' src={cart} alt="" />
    </div>
    </div>
  )
}

export default Navbar
