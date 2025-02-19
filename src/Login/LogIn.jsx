import React, { useContext, useState } from 'react'
import cross from '../assets/cross-button.png'
import { searchContext } from '../Context/Context'
const LogIn = () => {
  const {setLogIn} = useContext(searchContext)
  const [register, setRegister] = useState(false)
  const handleClickRegister = ()=>{
        setRegister(true)
  }
const handleClickLogin = ()=>{
  setRegister(false)
}
  return (
    <div className=' fixed flex w-[100%] h-[100%]   z-20  backdrop-blur '>
      <form className='md:min-w-[450px] h-[400px] m-auto rounded-xl bg-slate-50 animate-fadeIn' action="">
        <div className='flex justify-between  mx-2 mt-2 ml-4'>
          <h1 className='text-orange-400 font-medium text-2xl '>SARKAR</h1>
          <img onClick={()=>setLogIn(false)} className='w-12' src={cross} alt="" />
        </div>
        <br />
       
         
        <div className='flex flex-col mx-24'>
           <p className='text-3xl'>Welcome</p>
           <br />
           <div className='text-center flex mb-4'><p className='cursor-pointer' onClick={handleClickLogin}>LogIn</p>/<span className='hover:text-slate-400 cursor-pointer' onClick={handleClickRegister}><u>Register</u></span></div>
           {register ? (
        <>
          <input className="rounded-lg mb-1 w-[250px]" type="text" placeholder="Full name" />
          <input className="rounded-lg mb-1 w-[250px]" type="email" placeholder="Email address" />
          <input className="rounded-lg mb-1 w-[250px]" type="password" placeholder="Password" />
        </>
      ) : (
        <>
          <input className="rounded-lg mb-1 w-[250px]" type="email" placeholder="Email address" />
          <input className="rounded-lg mb-1 w-[250px]" type="password" placeholder="Password" />
        </>
      )}
        <br />
        {register ? <button className='bg-orange-400 p-1 rounded-md w-[100px] ml-36' >Register</button>: <button className='bg-orange-400 p-1 rounded-md w-[100px] ml-36' type='submit'>LogIn</button>}
        </div>
      </form>
    </div>
  )
}

export default LogIn
