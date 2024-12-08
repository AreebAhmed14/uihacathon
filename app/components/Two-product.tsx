import React from 'react'
import Image from 'next/image'
import {Poppins} from "next/font/google"

const PoppinsFont = Poppins({ subsets: ['latin'],weight:['400' , '700'] })

const TwoProduct = () => {
  return (
    <>
      <div className='w-full h-[670px] bg-[#FAF4F4] flex justify-center items-center'>
        <div className='w-[605px] h-[560px] flex flex-col justify-start'>
                
                <Image src={"/static/cheat.png"} alt='' width={950} height={950}  className='flex justify-center items-center'/>
        </div>
        <div className='w-[605px] h-[560px] flex flex-col justify-start'>
                
                <Image src={"/static/cheat2.png"} alt='' width={950} height={950}  className='flex justify-center items-center'/>
        </div>
      </div>
    </>
  )
}

export default TwoProduct
