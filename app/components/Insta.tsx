import React from 'react'
import {Poppins} from "next/font/google"

const PoppinsFont = Poppins({ subsets: ['latin'],weight:['400' , '700'] })

const Insta = () => {
  return (
    <>
      <div className='w-full h-[450px] inset-0 bg-[url("/static/bginsta.jpg")] flex-col relative bg-cover bg-center flex justify-center items-center'>
      <div className='absolute inset-0 z-10 backdrop-blur-[3px]'></div>

      <p className={`font-[700] text-[60px] z-20 ${PoppinsFont}`}>Our Instagram</p>
      <p className={`font-[400] text-[20px] z-20 ${PoppinsFont}`}>Follow our store on Instagram</p>
      <button className='font-[400] text-[20px] px-5 py-3 shadow-xl shadow-gray-600 z-20 bg-white rounded-full mt-5'>Follow us</button>

      </div>
    </>
  )
}

export default Insta
