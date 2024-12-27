import React from 'react'
import cover from '../assets/cover.jpg';
import googleIcon from '../assets/googleIcon.jpg';

const colors = {
    primary: '#060606',
    background: '#E0E0E0',
    disabled: '#D9D9D9'
}

function LoginPage() {
  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[25%] left-[10%] flex flex-col'>
            <h1 className='text-4xl text-white font-bold my-4'>Turn Your Ideas into reality</h1>
            <p className='text-base text-white font-normal'>Start for free and get attractive offers from the community</p>
        </div>
        <img src={cover} className='w-full h-full object-cover' alt="" />
      </div>
      <div className='w-1/2 mx-auto h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
        <h1 className='w-full max-w-[500px] mx-auto text-xl text-[#060606] font-semibold mr-auto'>Interactive Brand</h1>

        <div className='w-full flex flex-col max-w-[500px]'>
            <div className='w-full flex flex-col mb-10'>
                <h3 className='text-3xl font-semibold mb-2'>Login</h3>
                <p className='text-sm mb-2'>Welcome Back!! Please enter your details</p>
            </div>

            <div className='w-full flex flex-col'>
                <input type="email" placeholder='Email' className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>
                <input type="email" placeholder='Password' className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'/>
            </div>

            <div className='w-full flex items-center justify-between'>
                <div className='w-full flex items-center'>
                    <input type="checkbox" className='w-4 h-4 mr-2'/>
                    <p className='text-sm'>Remember me for 30 days</p>
                </div>

                <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password ?</p>
            </div>

            <div className='w-full flex flex-col'>
              <button className='w-full text-white my-2 bg-[#060606] rounded-md p-4 text-center justify-center cursor-pointer'>Log in</button>
              <button className='w-full text-[#060606] my-2 bg-white border border-black rounded-md p-4 text-center flex justify-center cursor-pointer'>Register</button>
            </div>

            <div className='w-full flex items-center justify-center relative py-2'>
              <div className='w-full h-[1px] bg-black/40'></div>
              <p className='text-lg absolute text-black/80 bg-[#f5f5f5]'>or</p>
            </div>

            <div className='w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex justify-center cursor-pointer'>
              <img src={googleIcon} className='h-6 mr-2 bg-white' alt="" />
              Sign In with Google
            </div>
        </div>

        <div className='w-full flex items-center justify-center'>
            <p className='text-sm font-normal text-black'>Dont have a account? <span className='font-semibold underline underline-offset-2'></span></p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
