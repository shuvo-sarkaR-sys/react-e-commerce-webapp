import React, { useContext, useState } from 'react'
import  { product_list } from '../assets/asset'
 import heart from '../assets/heart.png'
 import order from '../assets/order.png'
 import { cartOpt } from '../Context/Context'
import { Link } from 'react-router-dom'
 
 
const Product_list = ({categories}) => {
    const {  setText,setWish, setCart, setProductdDetail} = useContext(cartOpt)
    
const [cartText, setCartText] = useState(false)
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
setCartText(true)
 setTimeout(() => {
  setCartText(false)
 }, 2000);

}
  const showProduct = (props)=>{
    setProductdDetail(props)
   
  }
   
   
 const AddToWish = (props) =>{
setWish((prevWish)=>{
  if(!prevWish.some((item)=>item.id === props.id)){
    return [...prevWish, props]
  }
  return prevWish;
}

)
 setText(true);
 setTimeout(() => {
  setText(false)
 }, 2000);



 }

   const filteredProducts = categories === 'all'? product_list : product_list.filter((item)=> item.category === categories)

 

  return (
    <div className='flex   flex-wrap mt-10 md:gap-[90px] gap-8 md:mx-[100px]  justify-center'>
    {
        filteredProducts.map((item, index)=>
        <div onClick={()=>showProduct(item)} id={item.id} key={index} className="border-2 rounded-md md:w-64 md:h-[310px] p-3">
          <Link to='productDetails' ><img className='md:w-54 m-auto md:h-[190px]' src={item.product_image} alt="" /></Link>
        <div className='flex justify-between mt-2'>
         <p>{item.product_name}</p>
         <p>Price: ${item.product_price}</p>
          
         </div>
         <div className='flex  mt-3 justify-between text-4xl'>
         <img onClick={()=>AddToWish(item)} className='w-12 h-12 cursor-pointer rounded-md hover:bg-slate-300 p-2' src={heart} alt="" />
         <img  onClick={()=>addtoCart(item)} className='w-12 h-12 cursor-pointer rounded-md hover:bg-slate-300 p-2' src={order} alt="" />
         </div>
       
          </div>
      )
    } {cartText && <p className='fixed  bottom-36 bg-blue-200 p-1 rounded-md '>Product added to cart successfully</p>}
    </div>
  )
}

export default Product_list
