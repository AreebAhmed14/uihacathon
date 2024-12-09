import React from 'react'
import Image from 'next/image'


const TwoProduct = () => {
  return (
    <>
      <div className='w-full h-[670px] bg-[#FAF4F4] flex justify-center items-center'>


        <div className='w-[605px] h-[560px] m-1'>
          <div className='w-full h-[400px]'>
          <Image src={"/static/cteablee.png"} alt='' width={950} height={950}  className='flex justify-center items-center'/>
          </div>
          <p className='text-[36px] font-[500] ml-[5rem]'>Side table</p>
          <p className='text-[20px] underline mt-5 font-[500] ml-[5rem]'>View More</p>
        </div>
        <div className='w-[605px] h-[560px] m-1'>
          <div className='w-full h-[400px]'>
          <Image src={"/static/csofaa.png"} alt='' width={950} height={950}  className='flex justify-center items-center'/>
          </div>
          <p className='text-[36px] font-[500] ml-[5rem]'>One Piece Sofa </p>
          <p className='text-[20px] underline mt-5 font-[500] ml-[5rem]'>View More</p>
        </div>
      </div>
    </>
  )
}

export default TwoProduct
