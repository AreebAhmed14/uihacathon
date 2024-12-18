import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Poppins} from "next/font/google"

const PoppinsFont = Poppins({ subsets: ['latin'],weight:['400' , '700'] })
const Blogs = () => {
  return (
    <>
   <div className='w-full h-[777px] flex flex-col justify-start items-center max-[770px]:h-auto'>
        <h1 className={`text-[36px] font-[500] mt-5 max-[580px]:text-[26px] max-[580px]:mt-[3rem]`}>Top Blogs For You</h1>
        <h1 className={`text-[16px] font-[500] mt-[2rem] ${PoppinsFont} text-[#9F9F9F] max-[580px]:text-[14px] max-[580px]:mt-[1rem]`}>Find a bright ideal blogs to suit your taste .</h1>
        

        <div className='w-full h-[400px]  mt-[5rem] flex justify-center items-center max-[770px]:flex-col max-[770px]:h-auto max-[580px]:mt-[2rem]'>
        <div className='w-[287px] h-full max-[770px]:h-auto flex flex-col items-center mx-10 max-[1050px]:mx-2 max-[770px]:h-auto max-[770px]:mt-10'>
                <Image src={'/static/blog1.jpg'} alt="" width={950} height={950} className='w-full h-[287px] max-[580px]:h-auto'/>
                <h1 className={`text-[16px] font-[400] mt-5`}>Going all-in with millennial design</h1>
                <h1 className={`text-[24px] font-[600] mt-5 underline max-[770px]:mt-2`}>Read More</h1>
            </div>
            <div className='w-[287px] h-full max-[770px]:h-auto flex flex-col items-center mx-10 max-[1050px]:mx-2 max-[770px]:h-auto max-[770px]:mt-10'>
                <Image src={'/static/blog2.jpg'} alt="" width={950} height={950} className='w-full h-[287px] max-[580px]:h-auto'/>
                
                <h1 className={`text-[16px] font-[400] mt-5`}>Going all-in with millennial design</h1>
                <h1 className={`text-[24px] font-[600] mt-5 underline max-[770px]:mt-2`}>Read More</h1>
            </div>
            <div className='w-[287px] h-full max-[770px]:h-auto flex flex-col items-center mx-10 max-[1050px]:mx-2 
            max-[770px]:mt-10'>
                <Image src={'/static/blog3.jpg'} alt="" width={950} height={950}  className='w-full h-[287px] max-[580px]:h-auto  '/>
                <h1 className={`text-[16px] font-[400] mt-5`}>Going all-in with millennial design</h1>
                <h1 className={`text-[24px] font-[600] text-center mt-5 underline max-[770px]:mt-2`}>Read More</h1>
            </div>
           
        </div>
        <Link href={"/Blog"}><button className='bg-[#FBEBB5] mt-[4rem] px-6 py-2 rounded-full text-[16px] font-[600]'>View All</button></Link>

      </div>

    </>
  )
}

export default Blogs
