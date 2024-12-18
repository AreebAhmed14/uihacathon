import React from 'react'
import Image from 'next/image'
import {Poppins} from "next/font/google"
import Link from 'next/link'

const PoppinsFont = Poppins({ subsets: ['latin'],weight:['400' , '700'] })

const Herosame = () => {
  return (
    <>
      <div className='w-full h-[900px] bg-[#FFF9E5] flex justify-between items-center max-[1300px]:justify-center max-[830px]:h-auto max-[770px]:flex-col'>

      <div className='w-[850px] max-[1240px]:w-[750px] h-full bg-[#FFF9E5] flex justify-center items-center max-[770px]:w-auto max-[770px]:mt-8'>
      <Image src={"/static/Herosame.png"} alt='' width={950} height={950} className='scale-x-[-1]'/>
  </div>

<div className=' h-[276px] max-[830px]:h-auto ml-[4rem] flex flex-col items-center max-[1240px]:w-auto max-[580px]:mb-8 max-[770px]:ml-0'>
    <p className='text-[24px] font-[500] max-[580px]:text-[20px]'>New Arrivals</p>
    <center>
  <p className={` font-[500] text-[62px] ${PoppinsFont} max-[580px]:text-[50px] max-[376px]:text-[40px] max-[376px]:font-[450]`}>Asgaard sofaa</p>
  </center> 
  <Link href={"/Detail"}><button className={`font-[500] text-[24px] border-[1px] underline text-center  mt-[2rem] ${PoppinsFont} max-[580px]:text-[20px] max-[580px]:mt-[1rem]`}>Order Now</button></Link>
</div>



 

      
</div>
    </>
  )
}

export default Herosame
