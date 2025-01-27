import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Home from './Home/Home'
import Cart from './Cart/Cart'
import LogIn from './Login/LogIn'
 import { cartOpt } from './Context/Context'
import Footer from './Footer/Footer'
import Search from './components/Search'

import { searchContext } from './Context/Context'
import ProductDe from './Product details/ProductDe'
import AddToWish from './WishList/AddToWish'
function App() {
  const [searchvalue, setSearchValue] = useState("")
  const [searchBtn, setSearchBtn] = useState('')
   const [logIn, setLogIn] = useState(false)
 
  const [cart, setCart] = useState([])
  const [productDetail, setProductDetail] = useState(null)
  const [wish, setWish] = useState([])
  const [text, setText] = useState(false)
  return (
    <>
   
    <searchContext.Provider value={{logIn, setLogIn, searchvalue, setSearchValue, searchBtn, setSearchBtn}}> 
      {logIn ? <LogIn/>: <></>}
    <cartOpt.Provider value={{ text, setText, cart, setCart, wish, setWish, productDetail, setProductDetail,  }}>
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='home'   element={<Hero/>}/>
     <Route path='Cart' element={<Cart/>} />
      
     <Route path='contact' element={<Footer/>} />
     <Route path='search' element={<Search/>}/>
     <Route path='productDetails' element={<ProductDe/>}/>
     <Route path="wishList" element={<AddToWish/>}/>
     
      </Routes>
    </BrowserRouter>
    </cartOpt.Provider>
    </searchContext.Provider>
    <Footer/>
    </>
  )
}

export default App
