import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'

const Blogshow = async ({params}:{params:Promise<{Blogshow:string}>}) => {
    const {Blogshow} = await params
        let blog = await client.fetch('*[_type=="blog"]')
        const find = blog.find((item:any)=>{
            return String(item.id) === String(Blogshow)
        })
  return (
    <>
      <div className='text-[30px] font-[600] text-center font-serif max-[600px]:text-[25px] text-[#f3d98b] mx-3 my-10 max-[380px]:text-[20px] max-[380px]:my-7'>{find.title}</div>
    <div className='w-full h-[400px] flex justify-center items-center my-5 overflow-hidden max-[450px]:h-[350px] max-[380px]:h-[300px]'>

     <Image src={urlFor(find.imagePath).url()} alt={find.title} width={950} height={950} className='w-[70%] rounded-md h-full max-[740px]:w-[90%]'/>
     </div>
     <div className='mx-5 my-4 text-[18px] font-sans leading-[30px] max-[380px]:text-[16px] max-[380px]:leading-[20px] font-[600] text-gray-800 text-justify mt-[5rem] max-[400px]:mt-[2rem]'>{find.description}</div>
   
    </>
  )
}

export default Blogshow
