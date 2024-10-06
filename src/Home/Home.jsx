import React, { useState } from 'react'
import Category from '../components/Category/Category'
 import Product_list from '../components/Product_list'
 
import Hero from '../components/Hero'
import Footer from '../Footer/Footer'
 
const Home = () => {
  const [categories, setCategories] = useState("all")
  console.log(categories)
  return (
    <div>
       
      <Hero/>
      <Category categories={categories} setCategories={setCategories} />
      <Product_list categories={categories}   />
<Footer/>
    </div>
  )
}

export default Home
