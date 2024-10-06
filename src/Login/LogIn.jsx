import React, { useContext } from 'react'
import cross from '../assets/cross-button.png'
import { searchContext } from '../Context/Context'
const LogIn = () => {
  const {setLogIn} = useContext(searchContext)
  return (
    <div className=' absolute flex w-[100%] h-[100%]   z-20  backdrop-blur '>
      <form className='md:w-[450px] h-[350px] m-auto rounded-xl bg-slate-50 animate-fadeIn' action="">
        <div className='flex justify-between mx-2 mt-1'>
          <h1 className='text-orange-400 font-medium text-2xl'>SARKAR</h1>
          <img onClick={()=>setLogIn(false)} className='w-12' src={cross} alt="" />
        </div>
        <br />
       
         
        <div className='flex flex-col mx-24'>
           <p>Welcome</p>
           <br />
           <p>LogIn</p>
        <input className='w-[250px] mb-1 rounded-lg' type="email" placeholder='Email address' />
        
        <input className='w-[250px] mb-1 rounded-lg' placeholder='Password' type="password" />
        <br />
        <button className='bg-orange-400 p-1 rounded-md w-[100px] ml-36' type='submit'>LogIn</button>
        </div>
      </form>
    </div>
  )
}

export default LogIn
