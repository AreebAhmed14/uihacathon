import React from 'react'
import Image from 'next/image'
import {Poppins} from "next/font/google"

const PoppinsFont = Poppins({ subsets: ['latin'],weight:['400' , '700'] })

const page = () => {
  return (
    <>
      <div className='w-full h-[450px] inset-0 bg-[url("/static/shop.jpg")]  flex-col relative bg-cover bg-center flex justify-center items-center'>
    <div className='absolute w-full h-[450px] backdrop-blur-[3px] z-10'></div>

        <span className='w-[77px] h-[77px] z-20'>
            <Image src={'/static/logo.png'} alt="" width={77} height={77} />
        </span>
        <p className='text-[48px] font-[500] z-20'>Blog</p>
        <div className='z-20 flex mt-2 justify-center items-center w-[120px] h-[24px]'>
            <span className='text-black font-[600]'>Home</span>
            <span>{`>`}</span>
            <span className='text-gray-800  font-[600]'>Blog</span>
        </div>
    </div>


    <div className='w-full flex flex-col justify-start items-center'>
        <h1 className={`text-[36px] font-[500] mt-5`}>Our Blogs</h1>
        <h1 className={`text-[16px] font-[500] mt-[2rem] ${PoppinsFont} text-[#9F9F9F]`}>Find a bright ideal to suit your taste with our great selection</h1>
        

        <div className='w-full  mt-[5rem] flex justify-center flex-col items-center'>
        <div className='w-[887px]  flex flex-col items-center mx-10'>
                <Image src={'/static/blog1.jpg'} alt="" width={950} height={950} className='w-full '/>
                <h1 className={`text-[36px] font-[700] mt-5`}>Going all-in with millennial design</h1>
                <h1 className={`text-[20px] font-[500] mt-5`}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, libero sunt natus enim porro ea aspernatur numquam iste? Debitis magni libero ab sapiente nemo blanditiis iure culpa aspernatur nobis repellat, facere, consectetur, reprehenderit eum optio quod voluptate voluptatibus ratione perferendis ducimus laborum nam beatae doloremque recusandae sunt. Reprehenderit, adipisci natus?
                </h1>
                <button className='px-8 hover:bg-[#FAF4F4] py-2 rounded-full border-[1px] border-black my-5'>View</button>
            </div>
            <div className='w-[887px] flex flex-col items-center mx-10'>
                <Image src={'/static/blog2.jpg'} alt="" width={950} height={950} className='w-full '/>
                <h1 className={`text-[36px] font-[700] mt-5`}>Going all-in with millennial design</h1>
                <h1 className={`text-[20px] font-[500] mt-5`}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, libero sunt natus enim porro ea aspernatur numquam iste? Debitis magni libero ab sapiente nemo blanditiis iure culpa aspernatur nobis repellat, facere, consectetur, reprehenderit eum optio quod voluptate voluptatibus ratione perferendis ducimus laborum nam beatae doloremque recusandae sunt. Reprehenderit, adipisci natus?
                </h1>
                <button className='px-8 hover:bg-[#FAF4F4] py-2 rounded-full border-[1px] border-black my-5'>View</button>

            </div>
            <div className='w-[887px] flex flex-col items-center mx-10'>
                <Image src={'/static/blog3.jpg'} alt="" width={950} height={950} className='w-full '/>
                <h1 className={`text-[36px] font-[700] mt-5`}>Going all-in with millennial design</h1>
                <h1 className={`text-[20px] font-[500] mt-5`}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, libero sunt natus enim porro ea aspernatur numquam iste? Debitis magni libero ab sapiente nemo blanditiis iure culpa aspernatur nobis repellat, facere, consectetur, reprehenderit eum optio quod voluptate voluptatibus ratione perferendis ducimus laborum nam beatae doloremque recusandae sunt. Reprehenderit, adipisci natus?
                    
                </h1>
                <button className='px-8 hover:bg-[#FAF4F4] py-2 rounded-full border-[1px] border-black my-5'>View</button>
                <button className='px-8 hover:bg-[#FAF4F4] py-2 rounded-full bg-[#f7e9e9] my-8'>Explore more</button>

            </div>
           
        </div>
      </div>

    </>
  )
}

export default page
