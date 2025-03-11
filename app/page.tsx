"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const SignUp = () => {
  return (
    <div className='flex flex-col lg:grid text-[#131524] lg:grid-cols-3 md:w-full  h-screen items-center'>
          <div className='flex col-span-1 items-center flex-col w-full bg-[#FA7275] h-full text-white'>
            <div className='flex mt-2 md:mt-[50px] w-full md:w-[300px] items-center justify-center'>
              <Image src='/pinterest.png' alt='logo' width={40} height={40} />
              <h1 className='text-xl ml-3'>My<span className='text-gray-200'>S</span>tore</h1>
            </div>
            <div className='flex items-center justify-center lg:justify-none   w-full md:w-[300px] mt-5 flex-col '>
              <h1 className='flex text-2xl font-bold '>Manage your files</h1>
              <h1 className='flex text-2xl font-bold '>The best way</h1>
            </div>
            <div className='mt-4'>
              <p className='flex w-[300px] md:w-[300px] text-sm text-center '>Awesome, we have created the perfect place for you to store all your documents.</p>
            </div>
            <div className='mt-5'>
              <Image src='/files.png' alt='files logo' width={250} height={250}/>
            </div>
          </div>
          <div className='flex items-center justify-center col-span-2 flex-col h-full'>
            <div className='flex w-full md:w-[400px]'>
              <h1 className='font-bold text-3xl text-[#131524] '>Log In</h1>
            </div>
            <form className='w-full p-1 md:w-[400px] md:mt-7'>
              <input type='text' name='email' placeholder='Enter your email ... ' className='text-[10px] mt-7 p-4 w-[350px] md:w-[400px] rounded-md outline-none shadow-sm' />
              <button className='flex cursor-pointer text-[10px] p-4 rounded-full w-[350px] md:w-[400px] items-center justify-center text-white bg-[#FA7275] mt-6 shadow-sm'>Sign in</button>
            </form>
            <div className='mt-4'><p className='text-[10px]'>Dont have an account? <Link className='text-[#FA7275]' href='/signup'>Create Account</Link></p></div>
          </div>
          
        </div>
  )
}

export default SignUp
