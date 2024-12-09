import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Poppins} from "next/font/google"

const PoppinsFont = Poppins({ subsets: ['latin'],weight:['400' , '700'] })
const Blogs = () => {
  return (
    <>
   <div className='w-full h-[777px] flex flex-col justify-start items-center'>
        <h1 className={`text-[36px] font-[500] mt-5`}>Top Picks For You</h1>
        <h1 className={`text-[16px] font-[500] mt-[2rem] ${PoppinsFont} text-[#9F9F9F]`}>Find a bright ideal to suit your taste with our great selection</h1>
        

        <div className='w-full h-[400px]  mt-[5rem] flex justify-center items-center'>
        <div className='w-[287px] h-full flex flex-col items-center mx-10'>
                <Image src={'/static/blog1.jpg'} alt="" width={950} height={950} className='w-full h-[287px] '/>
                <h1 className={`text-[16px] font-[400] mt-5`}>Going all-in with millennial design</h1>
                <h1 className={`text-[24px] font-[600] mt-5 underline`}>Read More</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col items-center mx-10'>
                <Image src={'/static/blog2.jpg'} alt="" width={950} height={950} className='w-full h-[287px] '/>
                
                <h1 className={`text-[16px] font-[400] mt-5`}>Going all-in with millennial design</h1>
                <h1 className={`text-[24px] font-[600] mt-5 underline`}>Read More</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col items-center mx-10'>
                <Image src={'/static/blog3.jpg'} alt="" width={950} height={950}  className='w-full h-[287px] '/>
                <h1 className={`text-[16px] font-[400] mt-5`}>Going all-in with millennial design</h1>
                <h1 className={`text-[24px] font-[600] text-center mt-5 underline`}>Read More</h1>
            </div>
           
        </div>
        <Link href={"/Blog"}><button className='bg-[#FBEBB5] mt-[4rem] px-6 py-2 rounded-full text-[16px] font-[600]'>View All</button></Link>

      </div>

    </>
  )
}

export default Blogs
