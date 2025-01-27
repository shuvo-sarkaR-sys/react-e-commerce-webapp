import React, { useContext, useEffect, useState } from 'react'
import { cartOpt } from '../Context/Context'
import { Carousel } from "flowbite-react";
import love from '../assets/heart.png'
import { use } from 'react'
const ProductDe = () => {
    const { setWish,setCart, productDetail, setProductDetail} = useContext(cartOpt)
    const [cartText, setCartText] = useState(false)
    const [wishText, setWishText] = useState(false)
   
    useEffect(() => {
      if (productDetail) {
        localStorage.setItem('productDetail', JSON.stringify(productDetail));
      }
    }, [productDetail]);
  
    // Retrieve productDetail from localStorage on component mount
    useEffect(() => {
      const savedProduct = localStorage.getItem('productDetail');
      if (savedProduct) {
        setProductDetail(JSON.parse(savedProduct)); // Fixed the typo here
      }
    }, [setProductDetail]);
  
    if (!productDetail) {
      return <p>Loading product details...</p>;
    }

    const addToCart = (props)=>{
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
    

    const AddToWish = (props) =>{
      setWish((prevWish)=>{
        if(!prevWish.some((item)=>item.id === props.id)){
          return [...prevWish, props]
        }
        return prevWish;
      }
     
      ) 
      setWishText(true)
      setTimeout(() => {
        setWishText(false)
      }, 2000);
    }


     

  return (
    <div>
       
    <div className='flex md:gap-28 mt-28 xl:ml-48'>
     <div><img className='w-[400px]' src={productDetail.product_image} alt="" /></div> 
     <div>
      <p className='md:text-4xl'>{productDetail.product_name}</p>
      <p className='text-2xl mt-5'>Price: ${productDetail.product_price}</p>
      <div className='flex mt-5 gap-3'>
         <button onClick={()=>addToCart(productDetail)} className='md:text-lg bg-orange-400 rounded-xl p-1 px-2'>Add to cart</button>
         <img onClick={()=>AddToWish(productDetail)} className='w-12' src={love} alt="" />
      </div>
      </div>
      {cartText && <p className='fixed bg-blue-200 p-1 rounded-md'>Product added to cart successfully</p>}
      {wishText && <p className='fixed bg-blue-200 p-1 rounded-md'>Added to wishlist successfully</p>}
    </div>
    
    <br />
    <br />
     <div>
         <p className='ml-10 text-xl'>Product details</p>
         <hr />
         <br />
         <p className='ml-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat perspiciatis, molestias, eaque earum in <br />eligendi mollitia ipsa illum ea quisquam quidem vel dolore error ad vitae! Provident fugiat ullam ut.</p>
         <br />
         <p className='ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facere suscipit ipsam culpa inventore <br /> ab rem expedita quos debitis unde laborum voluptate nostrum vero placeat vitae, esse sunt sit. Qui.</p>
     </div>
     
    </div>
  )
}

export default ProductDe
 