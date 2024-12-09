import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <div className='w-full h-[602px] border-b-[2px] border-[#9F9F9F] flex justify-center'>
        <div className='w-[480px] h-[500px] bg-[#FFF9E5] mt-[3rem]'>
            <Image src={"/static/Herosame.png"} alt='' width={950} height={950}/>
        </div>
        <div className='w-[606px] h-[530px] ml-[3rem] mt-[5rem] flex flex-col justify-start'>
            <p className='text-[42px] mt-3 font-[500]'>Asgaard sofa</p>
            <p className='text-[24px] mt-3 text-[#9F9F9F] font-[500]'>Rs. 250,000.00</p>
            <p className='text-[17px] mt-3 font-[500]'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
            <p className='text-[16px] mt-3 text-[#9F9F9F] font-[500]'>Size</p>
            <div className='w-[123px] h-[30px] flex justify-between'>
                <div className='w-[30px] h-[30px] bg-[#FBEBB5] font-[600] flex justify-center items-center text-[18px]'>L</div>
                <div className='w-[30px] h-[30px] bg-[#FAF4F4] font-[600] flex justify-center items-center text-[18px]'>XL</div>
                <div className='w-[30px] h-[30px] bg-[#FAF4F4] font-[600] flex justify-center items-center text-[18px]'>XS</div>
            </div>
            <p className='text-[16px] mt-5 text-[#9F9F9F] font-[500]'>Color</p>
            <div className='w-[123px] h-[30px] flex justify-between'>
                <div className='w-[30px] h-[30px] bg-purple-800 rounded-full font-[600] flex justify-center items-center text-[18px]'></div>
                <div className='w-[30px] h-[30px] bg-[#000000] rounded-full font-[600] flex justify-center items-center text-[18px]'></div>
                <div className='w-[30px] h-[30px] bg-[#CDBA7B] rounded-full font-[600] flex justify-center items-center text-[18px]'></div>
            </div>
            <div className='w-full h-[65px]  mt-10 flex justify-start items-center'>
                <div className='w-[125px] h-full border-[1px] rounded-[5px] flex justify-center items-center mr-[2rem] border-[#9F9F9F]'><span className='mr-4'>-</span>1 <span className='ml-4'>+</span></div>
                <button className='w-[200px] h-[60px] font-[600] border-[#9F9F9F] text-[18px] border-[1px] text-black rounded-md flex justify-center items-center'>Add to Cart</button>
            </div>

        </div>

      </div>
        <div className='w-full flex justify-center flex-col items-center mt-[2rem]'>
            <p className='text-[24px] font-[600]'>Description</p>
            <center>
            <p className='text-[#9F9F9F] mt-5 p-4 text-[16px]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p></center>
        </div>
    </>
  )
}

export default page
