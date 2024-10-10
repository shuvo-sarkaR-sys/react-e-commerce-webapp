import React, { useContext, useEffect, useState } from 'react'
import Category from '../components/Category/Category'
 import Product_list from '../components/Product_list'
 
import Hero from '../components/Hero'
import Footer from '../Footer/Footer'
 import Love from '../assets/heart.png'
import { Link } from 'react-router-dom'
import { cartOpt } from '../Context/Context'
 
const Home = () => {
  const [categories, setCategories] = useState("all")
  const [dot, setDot] = useState(false)
 const {text, wish} = useContext(cartOpt)
 useEffect(()=>{
 if(wish.length > 0){
  setDot(true)
 }
 else{
  setDot(false)
 }
 })
  return (
    <div>
       
      <Hero/>
      <Category categories={categories} setCategories={setCategories} />
      <Product_list categories={categories}   />
      <Link to='wishList' ><div className='flex gap-3 fixed right-6 bottom-20 text-white font-medium  bg-slate-500 p-2 rounded-lg'>
        <p>Wish list</p>
       {dot && <p className='relative w-3 h-3 bg-black rounded-full left-5'></p>}
      <img className='w-8' src={Love} alt="" />
      </div></Link>
      {text && <div className='fixed  bottom-40 left-[100px] md:left-[650px] bg-backdrop-blur'><p className='bg-blue-100 rounded-md p-1  text-center'>add to wish list successfully</p></div>}
<Footer/>
    </div>
  )
}

export default Home
