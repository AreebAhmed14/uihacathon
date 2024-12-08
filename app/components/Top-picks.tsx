import React from 'react'
import Image from 'next/image'
import {Poppins} from "next/font/google"

const PoppinsFont = Poppins({ subsets: ['latin'],weight:['400' , '700'] })
const Toppicks = () => {
  return (
    <>
      <div className='w-full h-[777px] flex flex-col justify-start items-center'>
        <h1 className={`text-[36px] font-[500] mt-5`}>Top Picks For You</h1>
        <h1 className={`text-[16px] font-[500] mt-[2rem] ${PoppinsFont} text-[#9F9F9F]`}>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h1>
        

        <div className='w-full h-[400px]  mt-[5rem] flex justify-around items-center'>
            <div className='w-[287px] h-full  flex flex-col'>
              <div className='w-full h-[287px] '>
                <Image src={'/static/bed.png'} alt="" width={950} height={950} className='w-full h-full'/>

              </div>
                <h1 className={`text-[16px] font-[400] mt-5`}>Trenton modular sofa_3</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/dinning.png'} alt="" width={950} height={950} className='w-full h-[287px] '/>
                
                <h1 className={`text-[16px] font-[400] mt-5`}>Granite dining table with dining chair</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/partytable.png'} alt="" width={950} height={950}  className='w-full h-[287px] '/>
                <h1 className={`text-[16px] font-[400] mt-5`}>Outdoor bar table and stool</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/mirror.png'} alt="" width={950} height={950} className='w-full h-[287px] '/>
                <h1 className={`text-[16px] font-[400] mt-5`}>Plain console with teak mirror</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
        </div>
      </div>
    </>
  )
}

export default Toppicks
