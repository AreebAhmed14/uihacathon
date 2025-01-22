import React from 'react'
import Image from 'next/image'
import {Poppins} from "next/font/google"
import Link from 'next/link'

const PoppinsFont = Poppins({ subsets: ['latin'],weight:['400' , '700'] })

const Hero = () => {
  return (
    <>
      <div className='w-full h-[900px] max-[870px]:h-auto max-[870px]:flex-col bg-[#FBEBB5] flex justify-between items-center'>


      <div className='w-[440px] h-[276px] max-[1100px]:h-[auto] max-[520px]:w-auto max-[520px]:mx-[2rem] ml-[4rem] flex flex-col max-[560px]:mt-[2rem]'>
        <p className={`w-full h-[192px] max-[1100px]:h-auto font-[500] text-[62px] max-[520px]:text-[50px] max-[520px]:leading-[60px] leading-[96px] ${PoppinsFont} max-[360px]:text-[35px] max-[360px]:font-[600]`}>Rocket single seater</p>
        <Link href={"/Shop"}><p className={`font-[500] text-[24px] leading-[36px] max-[560px]:leading-[0px] max-[560px]:mb-[3rem] max-[560px]:text-[18px] underline mt-[2rem] ${PoppinsFont}`}>View more</p></Link>
      </div>



        <div className='w-[850px] h-full max-[950px]:w-[550px] max-[560px]:w-auto max-[950px]:h-[auto] bg-[#FBEBB5] flex justify-center items-center'>
            <Image src={"/static/sofa.png"} alt='' width={950} height={950} className='scale-x-[-1]'/>
        </div>

            
      </div>
    </>
  )
}

export default Hero
