import React from 'react'
import { Category_list } from '../../assets/asset'
const Category = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-center gap-10'>
        {Category_list.map((item, index) => 
        <div><img className='md:w-16 w-8' src={item.category_image} alt="" />
        
        <p>{item.category_name}</p></div>
        )}
      </div>
    </div>
  )
}

export default Category
