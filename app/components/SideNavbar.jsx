import Link from 'next/link'
import React from 'react'
import { MdDashboard } from "react-icons/md";
import { HiDocument } from "react-icons/hi2";
import { FaVideo } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { CiCircleMore } from "react-icons/ci";
import Image from 'next/image'

const SideNavbar = () => {
  return (
    <div className='flex flex-col items-center text-gray-500 ustify gap-7 text-[9px] font-bold w-[200px] h-full'>
        <div className='flex items-center mt-9 hover:bg-[#FA7275] p-2 rounded-full w-[150px] hover:shadow-md hover:text-white'><Link className='flex w-full items-center gap-2' href="/dashboard"><MdDashboard size={15} /><span className='text-gray-800 hover:text-white'>Dashboard</span></Link></div>
        <div className='flex items-center hover:bg-[#FA7275] p-2 rounded-full w-[150px] hover:shadow-md hover:text-white'><Link className='flex w-full items-center gap-2' href="/documents"><HiDocument size={15}/><span className='text-gray-800 hover:text-white'>Documents</span></Link></div>
        <div className='flex items-center hover:bg-[#FA7275] p-2 rounded-full w-[150px] hover:shadow-md hover:text-white'><Link className='flex w-full items-center gap-2' href="/images"><CiImageOn size={15}/><span className='text-gray-800 hover:text-white'>Images</span></Link></div>
        <div className='flex items-center hover:bg-[#FA7275] p-2 rounded-full w-[150px] hover:shadow-md hover:text-white'><Link className='flex w-full items-center gap-2' href="/media"><FaVideo size={15}/><span className='text-gray-800 hover:text-white'>Media</span></Link></div>
        <div className='flex items-center hover:bg-[#FA7275] p-2 rounded-full w-[150px] hover:shadow-md hover:text-white'><Link className='flex w-full items-center gap-2' href="/others"><CiCircleMore size={15}/><span className='text-gray-800 hover:text-white'>Others</span></Link></div>
        <div className='flex w-full items-center justify-center'><Image width={150} height={90} src="/files-2.png" alt="files"/></div>
      
    </div>
  )
}

export default SideNavbar
