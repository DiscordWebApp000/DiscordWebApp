import Navbar from '../../components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='w-[1200px] mx-auto'>
      <Navbar />

      <div className='text-3xl h-full w-full flex justify-center items-center'>page commands</div>
    </div>
  )
}

export default page