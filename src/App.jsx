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
function App() {
  const [searchvalue, setSearchValue] = useState("")
  const [searchBtn, setSearchBtn] = useState('')
   
 
  const [cart, setCart] = useState([])
  return (
    <>
    <searchContext.Provider value={{searchvalue, setSearchValue, searchBtn, setSearchBtn}}>
    <cartOpt.Provider value={{cart, setCart}}>
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='home'   element={<Hero/>}/>
     <Route path='Cart' element={<Cart/>} />
     <Route path='LogIn' element={<LogIn/>}/>
     <Route path='contact' element={<Footer/>} />
     <Route path='search' element={<Search/>}/>
      </Routes>
    </BrowserRouter>
    </cartOpt.Provider>
    </searchContext.Provider>
    </>
  )
}

export default App
