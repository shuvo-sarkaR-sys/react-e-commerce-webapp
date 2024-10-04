import React from 'react'
import { Category_list } from '../../assets/asset'
const Category = ({categories, setCategories}) => {
   
  return (
    <div>
      <div className='mt-10 flex flex-wrap-reverse justify-center gap-12'>
        {Category_list.map((item, index) => 
            <div key={index} onClick={()=>setCategories(prev=>prev==item.category_name?"all":item.category_name)} >
              <img className='w-8 md:w-16' src={item.category_image} alt="" />
              <p>{item.category_name}</p>
            </div>
        
       
        )}
      </div>
    </div>
  )
}

export default Category
