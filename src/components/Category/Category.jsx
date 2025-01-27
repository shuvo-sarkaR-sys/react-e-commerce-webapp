import React, { useState } from 'react'
import { Category_list, product_list } from '../../assets/asset'
const Category = ({categories, setCategories}) => {
     const [imgborder, setImgborder] = useState(null)
  const handleClick = (categoryName)=>{
    setCategories((prev)=>(prev==categoryName? 'all' : categoryName))
   setImgborder((prev)=> prev === categoryName ? null : categoryName)
  }
  return (
    <div>
      <div className='mt-10 flex   justify-center gap-8 sm:gap-12'>
        {Category_list.map((item, index) => 
            <div className='cursor-pointer w-8 md:w-16' key={index} onClick={()=>handleClick(item.category_name)} >
              <img className={`rounded-full ${imgborder === item.category_name ? 'border-4 rounded-full border-orange-400': ''}`}    src={item.category_image} alt="" />
              <p>{item.category_name}</p>
            </div>
        
       
        )}
      </div>
    </div>
  )
}

export default Category
