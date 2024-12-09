import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[1170px] h-[555px] flex relative justify-around items-center'>
        <div className='w-[285px] h-[72px] flex flex-col justify-around '>
            <h1 className='font-[700] my-2 text-[#9F9F9F] text-[18px]'>400 University Drive Suite 200 Coral Gables,
            FL 33134 USA</h1>
        </div>
        <div className='w-[217px] h-[312px] flex flex-col justify-around '>
            <h1 className='font-[700] my-2 text-[#9F9F9F] text-[24px]'>Link</h1>
            <Link href={"/"}><h1 className='font-[400] my-2 text-black text-[16px]'>Home</h1></Link>
            <Link href={"/Shop"}><h1 className='font-[400] my-2 text-black text-[16px]'>Shop</h1></Link>
            <Link href={"/"}><h1 className='font-[400] my-2 text-black text-[16px]'>About</h1></Link>
            <Link href={"/Contact"}><h1 className='font-[400] my-2 text-black text-[16px]'>Contact</h1></Link>
            
        </div>
        <div className='w-[217px] h-[312px] flex flex-col justify-around '>
            <h1 className='font-[700] my-2 text-[#9F9F9F] text-[24px]'>Help</h1>
            <h1 className='font-[400] my-2 text-black text-[16px]'>Payment option</h1>
            <h1 className='font-[400] my-2 text-black text-[16px]'>Return</h1>
            <h1 className='font-[400] my-2 text-black text-[16px]'>Privacy Policy</h1>
            
        </div>
        
        <div className='w-[300px] h-[312px] flex flex-col justify-start ite'>
            <h1 className='font-[700] my-2 text-[#9F9F9F] text-[24px]'>News Latters</h1>
            <div className='flex justify-between items-center'>
            <div className='border-b-[1px] border-black w-[200px] h-[24px] my-2 text-gray-500 mt-10 text-[16px]'>Enter Your Email Address </div>
            <span className=' ml-10 mt-8 h-[24px] border-b-[1px] border-black text-black font-[500] text-[16px]'>Subscribe</span>
            </div>
            
        </div>
        
      </div>
    </div>
  )
}

export default Footer