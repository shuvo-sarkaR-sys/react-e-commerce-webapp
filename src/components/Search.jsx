import React, { useContext, useEffect, useState } from 'react'
import { searchContext } from '../Context/Context'
import { product_list } from '../assets/asset'
import heart from '../assets/heart.png'
import order from '../assets/order.png'
import { cartOpt } from '../Context/Context'
const Search = () => {
  const {cart, setCart} = useContext(cartOpt)
  const addtoCart = (props)=>{
    setCart((prevCart)=>{
      const existingItem = prevCart.find((item)=>item.id===props.id)
      if(existingItem){
        return prevCart.map((item)=> item.id === props.id? {...item, quantity: item.quantity + 1} : item)
      }
      else{
        return [...prevCart, {...props, quantity: 1}]
      }
    })
    }
    
 const {searchBtn} = useContext(searchContext)
 const [searchProduct, setSearchProduct] = useState([])
 console.log(searchProduct)
 console.log(searchBtn)
   useEffect(()=>{
    if(searchBtn.length > 0){
      const filteredItems = product_list.filter((item)=> item.product_name.toLowerCase().includes(searchBtn.toLowerCase()))
      setSearchProduct(filteredItems.length > 0 ? filteredItems: "unfoud")
    }
    else{
      setSearchProduct("unFound")
    }
   }, [searchBtn])
  return (
    <div className='flex gap-3 flex-wrap mt-4 mx-4'>
        {  Array.isArray(searchProduct)? (
          searchProduct.map((item, index)=>(
         <div className="border-2 rounded-md md:w-64 md:h-[280px] p-3">
          <img className='md:w-54 m-auto md:h-[190px]' src={item.product_image} alt="" />
          <div className='flex justify-between mt-2'>
         <p>{item.product_name}</p>
         <p>Price: ${item.product_price}</p>
         <hr />
         </div>
         <div className='flex  mt-3 justify-between text-4xl'>
         <img className='w-6 h-6' src={heart} alt="" />
         <img onClick={()=>addtoCart(item)} className='w-7 h-7' src={order} alt="" />
         </div>
         </div>
            
          ))):(
          <p>No product found</p>
          )
        }
       

    </div>
  )
}

export default Search
