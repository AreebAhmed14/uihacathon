import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const page = async () => {
  const fetch = await client.fetch(`*[_type=="product"]`);
  // console.log(fetch);
  return (
    <>
      <div className='w-full h-[450px] inset-0 bg-[url("/static/shop.jpg")]  flex-col relative bg-cover bg-center flex justify-center items-center'>
        <div className="absolute w-full h-[450px] backdrop-blur-[3px] z-10"></div>

        <span className="w-[77px] h-[77px] z-20">
          <Image src={"/static/logo.png"} alt="" width={77} height={77} />
        </span>
        <p className="text-[48px] font-[500] z-20">Shop</p>
        <div className="z-20 flex mt-2 justify-center items-center w-[120px] h-[24px]">
          <span className="text-black font-[600]">Home</span>
          <span>{`>`}</span>
          <span className="text-gray-800  font-[600]">Shop</span>
        </div>
      </div>

      <div className='grid grid-cols-3 justify-items-center max-[900px]:grid-cols-2 max-[600px]:grid-cols-1'>

{fetch.map((items:any , values:any)=>(
  <div key={values}>
   <div className='w-[350px] h-[350px] bg-gray-300 flex flex-col items-center my-5 rounded-lg max-[1066px]:w-[300px]'>
        <div className='w-[90%] h-[12rem] mt-3 rounded-lg overflow-hidden'>
            <Image src={urlFor(items.imagePath).width(500).url()} alt='' width={950} height={950} className='w-full h-full'/>
        </div>
        <div className='flex flex-col w-[80%] my-2'>
            <h1 className='font-[600] text-[1rem] my-1'>{items.name}</h1>
            <div className="w-full flex justify-between">

            <p className='text-[1.2rem] my-1 font-[600]'>Price: <span className='text-gray-800 font-[600] text-[1rem]'>{items.price} $</span> </p>
            <p className='text-[0.9rem] my-1'>({items.stockLevel}) </p>
            </div>
        </div>
           <Link href={`/Shop/${items.id}`}> <button className="text-[0.8rem] px-3 py-2 text-white bg-gray-500 rounded-lg mb-2 mr-[14rem] hover:scale-95 transition-all max-[1066px]:mr-[12rem]">Shop</button></Link>
    </div>
    </div>
    ))
}
</div>
    </>
  );
};

export default page;
