import React, { useContext, useEffect } from 'react'
import Search from './Search'
import carts from '../assets/shopping-cart.png'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react'
 import { cartOpt, searchContext } from '../Context/Context'
const Navbar = () => {
  const { setLogIn, searchvalue, setSearchValue, searchBtn, setSearchBtn} = useContext(searchContext)
  const {cart} = useContext(cartOpt)

  const handleSearch = ()=>{
   setSearchBtn(searchvalue)
    
  }
  const handleInput = (e) =>{
      setSearchValue(e.target.value)
      
  }
  const [dot , setdots] = useState(false)
  useEffect(()=>{
    if(cart.length > 0){
      setdots(true)
    }
    else{
      setdots(false)
    }
  },[cart])
  return (
    <div className='bg-[#081621] sticky z-10 top-0 w-[100%] h-20 flex justify-between px-2 md:px-8 sm:p-1  items-center  text-white'>
       <Link to='/' className='flex items-center gap-3'><a href='#' >
        <p className='text-xl md:text-4xl font-mono font-semibold'>SARKAR </p></a>
        <img className='md:w-16 w-7' src={logo} alt="" /> </Link>
      <div>
        <input onChange={handleInput} className='h-10 text-black w-[90px]  rounded-l-md sm:w-[100px] md:w-[500px]  ' type="text" />
      <Link to='search'><button onClick={handleSearch} className='h-10 w-12  md:w-16 bg-orange-400 rounded-r-md'>Search</button> </Link>
 </div>
      <div className='flex gap-1 md:gap-4 items-center'>
       
       <Link to='/Cart'> <img className='w-18 h-10 ' src={carts} alt="" /></Link>
       {dot && <p className='relative left-[-16px] top-[-19px]   bg-orange-500 w-3 h-3 rounded-full'></p>}
       <button onClick={()=>setLogIn(true)} className='  bg-orange-400 h-8 px-2 rounded'>sign in</button> 
      </div>
    </div>
  )
        }

export default Navbar
