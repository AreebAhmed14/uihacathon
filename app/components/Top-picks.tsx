import React from 'react'
import Image from 'next/image'
import {Poppins} from "next/font/google"
import { client } from '@/sanity/lib/client'

const PoppinsFont = Poppins({ subsets: ['latin'],weight:['400' , '700'] })
const Toppicks = async () => {
          const datas = await client.fetch('*[_type=="product"][3..5]');
  console.log(datas)
  return (
    <>
      <div className='w-full h-[777px] max-[1164px]:h-[auto] flex flex-col justify-start items-center'>
        <h1 className={`text-[36px] font-[500] mt-5 max-[412px]:text-[30px]`}>Top Picks For You</h1>
        <center><h1 className={`text-[16px] font-[500] mt-[2rem] ${PoppinsFont} text-[#9F9F9F] max-[412px]:text-[14px]`}>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h1></center>
        

        <div className='w-full h-[400px] max-[1164px]:h-auto max-[412px]:flex-col mt-[5rem] flex justify-around items-center'>

          <div className='flex max-[1164px]:flex-col'>
            <div className='w-[287px] h-full  flex flex-col max-[574px]:w-[200px] max-[412px]:w-auto max-[412px]:hidden '>
              <div className='w-full h-[287px] '>
                <Image src={'/static/bed.png'} alt="" width={950} height={950} className='w-full h-full'/>

              </div>
                <h1 className={`text-[16px] font-[400] mt-5 max-[412px]:ml-[2rem]`}>Trenton modular sofa_3</h1>
                <h1 className={`text-[24px] font-[500] mt-5 max-[412px]:ml-[2rem] max-[412px]:text-[20px]`}>Rs. 25,000.00</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col max-[574px]:w-[200px] max-[412px]:w-auto  '>
                <Image src={'/static/dinning.png'} alt="" width={950} height={950} className='w-full h-[287px] '/>
                
                <h1 className={`text-[16px] font-[400] mt-5 max-[412px]:ml-[2rem]`}>Granite dining table with dining chair</h1>
                <h1 className={`text-[24px] font-[500] mt-5 max-[412px]:ml-[2rem] max-[412px]:text-[20px]`}>Rs. 25,000.00</h1>
            </div>
            </div>



            <div className='flex max-[1164px]:flex-col'>
            <div className='w-[287px] h-full flex flex-col max-[574px]:w-[200px] max-[412px]:w-auto  '>
                <Image src={'/static/partytable.png'} alt="" width={950} height={950}  className='w-full h-[287px] '/>
                <h1 className={`text-[16px] font-[400] mt-5 max-[412px]:ml-[2rem]`}>Outdoor bar table and stool</h1>
                <h1 className={`text-[24px] font-[500] mt-5 max-[412px]:ml-[2rem] max-[412px]:text-[20px]`}>Rs. 25,000.00</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col max-[574px]:w-[200px] max-[412px]:w-auto  '>
                <Image src={'/static/mirror.png'} alt="" width={950} height={950} className='w-full h-[287px] '/>
                <h1 className={`text-[16px] font-[400] mt-5 max-[412px]:ml-[2rem]`}>Plain console with teak mirror</h1>
                <h1 className={`text-[24px] font-[500] mt-5 max-[412px]:ml-[2rem] max-[412px]:text-[20px]`}>Rs. 25,000.00</h1>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Toppicks
