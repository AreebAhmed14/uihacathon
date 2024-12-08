import React from 'react'
import Image from 'next/image'
import {Poppins} from "next/font/google"

const PoppinsFont = Poppins({ subsets: ['latin'],weight:['400' , '700'] })

const Hero = () => {
  return (
    <>
      <div className='w-full h-[900px] bg-[#FBEBB5] flex justify-between items-center'>


      <div className='w-[440px] h-[276px] ml-[4rem] flex flex-col'>
        <p className={`w-full h-[192px] font-[500] text-[62px] leading-[96px] ${PoppinsFont}`}>Rocket single seater</p>
        <p className={`font-[500] text-[24px] leading-[36px] underline mt-[2rem] ${PoppinsFont}`}>Shop Now</p>
      </div>



        <div className='w-[850px] h-full bg-[#FBEBB5] flex justify-center items-center'>
            <Image src={"/static/sofa.png"} alt='' width={950} height={950} className='scale-x-[-1]'/>
        </div>

            
      </div>
    </>
  )
}

export default Hero
