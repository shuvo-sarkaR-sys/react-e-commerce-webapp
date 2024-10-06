import React from 'react'
import { Category_list, product_list } from '../../assets/asset'
const Category = ({categories, setCategories}) => {
     
  
  return (
    <div>
      <div className='mt-10 flex flex-wrap justify-center gap-12'>
        {Category_list.map((item, index) => 
            <div className='cursor-pointer w-8 md:w-16' key={index} onClick={()=>setCategories(prev=>prev==item.category_name?'all':item.category_name)} >
              <img   src={item.category_image} alt="" />
              <p>{item.category_name}</p>
            </div>
        
       
        )}
      </div>
    </div>
  )
}

export default Category
