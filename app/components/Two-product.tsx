import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';


const TwoProduct = async () => {
            const datas = await client.fetch('*[_type=="product"][0..2]');
            console.log(datas)
  
  return (
    <>
    <div className='grid grid-cols-3 justify-items-center max-[900px]:grid-cols-2 max-[600px]:grid-cols-1'>

{datas.map((items:any , values:any)=>(
  <div key={values}>
   <div className='w-[350px] h-[450px] flex flex-col items-center justify-center my-5 rounded-lg max-[1066px]:w-[300px] max-[400px]:h-[400px]'>
        <div className='w-[full] h-[90%] mt-3 rounded-lg overflow-hidden'>
            <Image src={urlFor(items.imagePath).width(500).url()} alt='' width={950} height={950} className='w-full h-full'/>
        </div>
        <div className='flex flex-col w-[80%] my-2 justify-center items-center'>
          <center>

            <h1 className='font-[600] text-[1rem] my-1'>{items.name}</h1>
          </center>
            <div className='w-full flex justify-center items-center border-y-2'>
              <Link href={`/Shop/${items.id}`}><p className='my-1 text-[1rem] font-[600]'>Shop now</p></Link>
        </div>
            </div>
    </div>
    </div>
    ))
}
</div>
    </>
  )
}

export default TwoProduct
