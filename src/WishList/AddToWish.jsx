import React, { useContext } from 'react'
import { cartOpt } from '../Context/Context'
import cross from '../assets/cross-button.png'
const AddToWish = () => {
  const { wish, setWish, setCart  } = useContext(cartOpt)

  const handleClick = (props) => {
    setWish((prevWish) => prevWish.filter((item) => item.id !== props.id));
  };
  const addtoCart = (props)=>{

    setCart((prevCart)=>{
      const existingItem = prevCart.find((item)=>item.id===props.id)
      if(existingItem){
        return prevCart.map((item)=> item.id === props.id? {...item, quantity: item.quantity + 1} : item)
      }
      else{
        return [...prevCart, {...props, quantity: 1}]
      }
    })}
  
  return (
    <div className='h-[70vh]' >
      <h1 className='text-3xl mt-4 ml-4'>Your wish list</h1>
      <div className='border rounded-md md:w-[80%] lg:w-1/2 xl:ml-32 mt-7 xl:p-8 lg:ml-16 md:ml-10 mx-5'> 
      {wish.length === 0 ? (
      <p className='text-2xl text-center  '>Wish list is empty</p>
    ) : (
      wish.map((item, index) => (
        <div className='  grid my-3 mx-3 grid-cols-4 items-center gap-16  ' key={index}>
          <img className=' w-24 ' src={item.product_image} alt="" />
          <p>{item.product_name}</p>
          
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={()=>addtoCart(item)} className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

<img
            onClick={() => handleClick(item)}
            className='cursor-pointer w-8 h-8 mt-2'
            src={cross}
            alt=""
          />
        </div>
      ))
    )}</div>
    </div>
  )
}

export default AddToWish
