import React from 'react'
import Image from 'next/image'
import {Poppins} from "next/font/google"
import Link from 'next/link'

const PoppinsFont = Poppins({ subsets: ['latin'],weight:['400' , '700'] })

const Herosame = () => {
  return (
    <>
      <div className='w-full h-[900px] bg-[#FFF9E5] flex justify-between items-center'>

      <div className='w-[850px] h-full bg-[#FFF9E5  ] flex justify-center items-center'>
      <Image src={"/static/Herosame.png"} alt='' width={950} height={950} className='scale-x-[-1]'/>
  </div>

<div className='w-[440px] h-[276px] ml-[4rem] flex flex-col'>
    <p className='text-[24px] font-[500] text-center'>New Arrivals</p>
  <p className={`w-full font-[500] text-[62px] ${PoppinsFont}`}>Asgaard sofaa</p>
  <Link href={"/Detail"}><button className={`font-[500] text-[24px] border-[1px] underline text-center  mt-[2rem] ${PoppinsFont}`}>Order Now</button></Link>
</div>



 

      
</div>
    </>
  )
}

export default Herosame
