import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='w-full h-[100vh] bg-[#FBEBB5] flex flex-col justify-center items-center'>
        <center><h1 className='text-3xl font-bold'>ORDER PLACED SUCCESSFULLY</h1></center>
        <p className='text-sm'>You Recive your order soon.</p>
        <Link href={"/Shop"}><button className='bg-gray-50 rounded-lg my-5 text-black text-[20px] font-[700] px-5 py-3 '>Back to Shop</button></Link>
      </div>
    </>
  )
}

export default page
