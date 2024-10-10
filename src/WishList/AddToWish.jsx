import React, { useContext } from 'react'
import { cartOpt } from '../Context/Context'
import cross from '../assets/cross-button.png'
const AddToWish = () => {
  const { wish, setWish } = useContext(cartOpt)

  const handleClick = (props) => {
    setWish((prevWish) => prevWish.filter((item) => item.id !== props.id));
  };
  
  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl mt-4 ml-4'>Your wish list</h1>
      {wish.length === 0 ? (
      <p className='text-2xl text-center mt-20'>Wish list is empty</p>
    ) : (
      wish.map((item, index) => (
        <div className='w-16 flex gap-16 ml-10 md:ml-40 mt-16' key={index}>
          <img src={item.product_image} alt="" />
          <p>{item.product_name}</p>
          <img
            onClick={() => handleClick(item)}
            className='cursor-pointer w-8 h-8 mt-2'
            src={cross}
            alt=""
          />
        </div>
      ))
    )}
    </div>
  )
}

export default AddToWish
