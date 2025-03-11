"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'




const SignUp = () => {
    const router=useRouter()

    const [userData, setUserData]=useState({
      full_name:'',
      email:''
    })

    const handleChange=(e)=>{
        const {name, value}=e.target
        setUserData({
            ...userData, [name]:value
        })
    }

    const handleLogin=(e)=>{
        e.preventDefault()
        fetch('http://127.0.0.1:5555/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(userData)

        })
        .then((response)=>{
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json()
        })
        .then((data)=>{
            console.log("Sign up data.............", data)
            sessionStorage.setItem('token', data.token)
            router.push('/home')
        })
        .catch(error=>{console.error('Error:cannot sign you in', error)})

    }

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
              <h1 className='font-bold text-3xl text-[#131524] '>Create Account</h1>
            </div>
            <form onSubmit={handleLogin} className='w-full p-1 md:w-[400px] md:mt-7'>
            <input  type='text' name='full_name' value={userData.full_name} onChange={handleChange} placeholder='Enter your full name ... ' className='text-[10px] p-4  w-[360px] md:w-[400px] rounded-md outline-none shadow-sm' />
              <input type='text' name='email' value={userData.email} onChange={handleChange} placeholder='Enter your email ... ' className='text-[10px] mt-7 p-4 w-[360px] md:w-[400px] rounded-md outline-none shadow-sm' />
              <button className='flex cursor-pointer text-[10px] p-4 rounded-full w-[360px] md:w-[400px] items-center justify-center text-white bg-[#FA7275] mt-6 shadow-sm'>Create Account</button>
            </form>
            <div className='mt-4'><p className='text-[10px]'>Already have an account? <Link className='text-[#FA7275]' href='/'>Sign in</Link></p></div>
          </div>
          
        </div>
  )
}

export default SignUp
