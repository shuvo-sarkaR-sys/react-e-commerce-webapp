import React, { useContext, useEffect, useState } from 'react';
import { cartOpt } from '../Context/Context';
import cross from '../assets/cross-button.png'
import emptyCartImg from '../assets/shopping.png'
const Cart = () => {
  const { cart, setCart } = useContext(cartOpt);
 
 
  
    const totals =  cart.reduce((total, item)=> total + Number(item.product_price) * item.quantity, 0)
    


   const handleCancel = (item)=>{
    setCart((prevCart)=>{
      const existingItem = prevCart.find((cartItem)=>cartItem.id === item.id)
      if(existingItem.quantity === 1){
        return prevCart.filter((cartItem)=> cartItem.id !== item.id);
      }
       return prevCart.map((cartItem)=> cartItem.id === item.id? {...cartItem, quantity: cartItem.quantity - 1}: cartItem) 
    })
   }
  return (
    <div> 
      <div className='xl:w-[800px] md:h-[65vh] mx-5  h-[40vh] md:mx-20 xl:mx-32 xl:min-h-[250px] m-auto border-2 my-10 pt-2 rounded-md'>
      <div className='grid grid-cols-4 gap-8 md:gap-24 lg:gap-36 mx-7'>
              <p>Image</p>
              <p>Product details</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
      {!cart || cart.length === 0 ? (
        <><p className='text-4xl text-center mt-10'>Cart is empty</p><img className='md:w-64 mx-auto mt-5' src={emptyCartImg} alt="" /></>
      ) : (
        cart.map((item) => (
          <div key={item.id} className='grid grid-cols-4 gap-8 lg:gap-36 md:gap-24 mt-7 mx-5'>
           
            <img className="w-24" src={item.product_image} alt={item.product_name} />
            <p className=''>{item.product_name}</p>
            <p className=''>{item.quantity}</p>
           <span className='flex gap-5 text-center'><p>{item.product_price} </p><div  onClick={()=>handleCancel(item)}><img   src={cross} alt="" /></div></span> 
          
          </div>
          
        ))
      )}
      </div>
      <div className='flex gap-12 text-center justify-end md:mr-[450px] mr-20'>
        <div className='flex text-xl mt-2'>
        <p>Total: ${totals}</p>
         
        </div>
        <button className='bg-orange-400 p-2 rounded-md'>Check Out</button>
      </div>
    </div>
  );
};

export default Cart;