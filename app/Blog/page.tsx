import React from 'react'
import Image from 'next/image'
import {Poppins} from "next/font/google"
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

const PoppinsFont = Poppins({ subsets: ['latin'],weight:['400' , '700'] })

const page = async () => {
    let blog = await client.fetch('*[_type=="blog"]')

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
            <span className='text-gray-800  font-[600]'>Blogs</span>
        </div>
    </div>


    <div className='w-full h-auto flex flex-col justify-start items-center'>
        <h1 className={`text-[36px] font-[500] mt-5`}>Our Blogs</h1>
        <center><h1 className={`text-[16px] font-[500] mt-[2rem] ${PoppinsFont} text-[#9F9F9F]`}>Find a bright ideal to suit your taste with our great selection</h1></center>
       
        {
            blog.map((val:any,key:any)=>(
                <div key={key} className='w-[800px] bg-[#f7e7b7] rounded-lg my-4 flex justify-center items-center flex-col max-[830px]:w-[600px] max-[610px]:w-[400px] max-[404px]:w-[300px]'>
                    <center>

                    <p className='text-[1.4rem] font-[700] my-4 max-[610px]:text-[1.1rem] max-[404px]:text-[1rem]'>{val.title}</p>
                    </center>
                    <div className='w-[600px] h-[400px] my-4 rounded-lg max-[830px]:w-[400px] max-[610px]:w-[300px] max-[610px]:h-[300px] max-[404px]:w-[250px] max-[404px]:h-[250px]'>
                        <Image src={urlFor(val.imagePath).url()} alt="" width={200} height={200} className='w-full h-full overflow-hidden rounded-lg'/>
                    </div>
                        <p className='text-[1.3rem] font-[400] m-4 max-[610px]:leading-6 max-[610px]:text-[1rem] max-[404px]:leading-5 max-[404px]:m-2'>{val.shortdes}...</p>

                        <p className='text-[1.3rem] font-[700] my-5 max-[610px]:my-3 max-[404px]:text-[1.1rem]'>{`View >`}</p>
                </div>
            ))
        }

        
      </div>

    </>
  )
}

export default page
