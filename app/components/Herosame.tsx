import React from 'react'
import Image from 'next/image'
import {Poppins} from "next/font/google"
import Link from 'next/link'

const PoppinsFont = Poppins({ subsets: ['latin'],weight:['400' , '700'] })

const Herosame = () => {
  return (
    <>
      <div className='w-full h-[800px] bg-[#fff1c8] flex justify-between items-center max-[1300px]:justify-center max-[830px]:h-auto max-[770px]:flex-col'>

      <div className='w-[750px] max-[1240px]:w-[750px] h-[full] mx-5 rounded-lg flex justify-center items-center max-[770px]:w-auto max-[770px]:mt-8'>
      <Image src={"/static/apisofaa2.webp"} alt='' width={950} height={950} className='overflow-hidden rounded-full'/>
  </div>

<div className=' h-[276px] max-[830px]:h-auto flex flex-col items-center max-[1240px]:w-auto max-[580px]:mb-8 mr-[5rem] max-[770px]:mr-0 '>
    <p className='text-[24px] font-[500] max-[580px]:text-[20px] my-3'>New Arrivals</p>
    <center>
  <p className={` font-[500] text-[62px] ${PoppinsFont} max-[580px]:text-[50px] max-[376px]:text-[40px] max-[376px]:font-[450]`}>Rapson sofaa</p>
  </center> 
  <Link href={"/Shop/6"}><button className={`font-[500] text-[24px] underline text-center  mt-[2rem] ${PoppinsFont} max-[580px]:text-[20px] max-[580px]:mt-[1rem]`}>Order Now</button></Link>
</div>



 

      
</div>
    </>
  )
}

export default Herosame
