import React from 'react'
import Layout from "../components/Layout";
const page = () => {
  return (
    <Layout>
    <div className="w-full grid grid-cols-2 items-center h-screen">
      <div className='flex flex-col items-center'>
        <div className='flex text-white w-[400px] rounded-xl h-[150px] items-center justify-center bg-[#FA7275]'>
          data
        </div>
        <div></div>
      </div>
      <div className='flex items-center justify-center bg-white rounded-xl h-full flex-col'>section 2</div>
     
      
    </div>
    </Layout>
  )
}

export default page
