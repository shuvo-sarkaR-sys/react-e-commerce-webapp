import React, { useContext, useState } from 'react'
import  { product_list } from '../assets/asset'
 import heart from '../assets/heart.png'
 import order from '../assets/order.png'
 import { cartOpt } from '../Context/Context'
const Product_list = ({categories}) => {
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

console.log(cart)

   const filteredProducts = categories === 'all'? product_list : product_list.filter((item)=> item.category === categories)

 

  return (
    <div className='flex   flex-wrap mt-10 md:gap-[90px] gap-8 md:mx-[100px]  justify-center'>
    {
        filteredProducts.map((item, index)=>
        <div key={index} className="border-2 rounded-md md:w-64 md:h-[310px] p-3">
          <img className='md:w-54 m-auto md:h-[190px]' src={item.product_image} alt="" />
        <div className='flex justify-between mt-2'>
         <p>{item.product_name}</p>
         <p>Price: ${item.product_price}</p>
          
         </div>
         <div className='flex  mt-3 justify-between text-4xl'>
         <img className='w-12 h-12 cursor-pointer rounded-md hover:bg-slate-300 p-2' src={heart} alt="" />
         <img  onClick={()=>addtoCart(item)} className='w-12 h-12 cursor-pointer rounded-md hover:bg-slate-300 p-2' src={order} alt="" />
         </div>
          </div>
      )
    }
    </div>
  )
}

export default Product_list
