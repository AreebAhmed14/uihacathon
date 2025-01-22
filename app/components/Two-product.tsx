import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const TwoProduct = () => {
  return (
    <>
      <div className='w-full h-[670px] max-[770px]:h-auto max-[770px]:flex-col bg-[#FAF4F4] flex justify-center items-center'>


        <div className='w-[605px] h-[560px] m-1 max-[770px]:w-full max-[770px]:h-auto'>
          <div className='w-full h-[400px] max-[770px]:h-auto'>
          <Image src={"/static/cteablee.png"} alt='' width={950} height={950}  className=''/>
          </div>
          <p className='text-[36px] font-[500] ml-[5rem] max-[770px]:ml-[2rem] max-[560px]:text-[25px] max-[560px]:font-[600]'>Side table</p>
          <Link href={"/Shop"}><p className='text-[20px] max-[560px]:text-[16px] underline mt-5 font-[500] ml-[5rem] max-[770px]:ml-[2rem]'>View More</p></Link>
        </div>

        <div className='w-[605px] h-[560px] m-1 max-[770px]:w-full max-[770px]:h-auto'>
          <div className='w-full h-[400px] max-[770px]:h-auto '>
          <Image src={"/static/csofaa.png"} alt='' width={950} height={950}  className=''/>
          </div>
          <p className='text-[36px] font-[500] ml-[5rem] max-[770px]:ml-[2rem] max-[560px]:text-[25px] max-[560px]:font-[600]'>One Piece Sofa </p>
          <Link href={"/Shop"}><p className='text-[20px] max-[560px]:text-[16px] underline mt-5 font-[500] ml-[5rem] max-[770px]:ml-[2rem]'>View More</p></Link>
        </div>
      </div>
    </>
  )
}

export default TwoProduct
