import React, { useState } from 'react'
import Category from '../components/Category/Category'
import Product_lish from '../components/Product_lish'
const [categories, setCategories] = useState("")
const Home = () => {
  return (
    <div>
      <Category categories={categories} setCategories={setCategories} />
      <Product_lish categories={categories}   />
    </div>
  )
}

export default Home
