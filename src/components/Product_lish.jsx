import React from 'react'
import  { product_list } from '../assets/asset'
const Product_lish = ({categories}) => {
  return (
    <div className='flex   flex-wrap mt-10 gap-[90px] md:mx-[100px]  justify-center'>
    {
      product_list.map((item, index)=>
        <div className="border-2 md:w-64 md:h-[200px] p-3">
          <img className='md:w-54 m-auto md:h-[150px]' src={item.product_image} alt="" />
        <div className='flex justify-between mt-2'>
         <p>{item.product_name}</p>
         <p>Price: ${item.product_price}</p>
         </div>
          </div>
      )
    }
    </div>
  )
}

export default Product_lish
