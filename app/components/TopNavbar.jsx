import React from 'react'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import { FaCloudUploadAlt } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import Link from 'next/link';



const TopNavbar = () => {
  return (
    <div className='flex w-full items-center justify-between  h-[50px]'>
        <Link href="/">
       <div className='flex   w-full md:w-[300px] items-center justify-center'>
          <Image src='/pinterest.png' className='' alt='logo' width={40} height={40} />
          <h1 className='text-xl ml-3 text-[#FA7275]'>My<span className='text-gray-200'>S</span>tore</h1>
       </div>
       </Link>
       <form>
       <div className='flex w-[300px] shadow-sm rounded-full items-center text-gray-900'>
        <CiSearch className="ml-3"/>
        <input type='text ' name='search' placeholder='search here........' className='text-[10px]  p-2 outline-none ' />
        </div>
       </form>
       <div className='flex  gap-3 items-center mr-5 justify-center'>
        <button className='flex w-[80px] items-center justify-center bg-[#FA7275] rounded-full text-white p-2 shadow-md text-[10px] '><FaCloudUploadAlt className='mr-1'/>Upload</button>
        <RiLogoutBoxLine className='text-[#FA7275]'/>
       </div>
       
    </div>
  )
}

export default TopNavbar
