import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <div className='w-full h-[602px] border-b-[2px] border-[#9F9F9F] flex justify-center max-[850px]:flex-col max-[850px]:h-auto max-[850px]:items-center'>
        <div className='w-[480px] h-[500px] bg-[#FFF9E5] mt-[3rem] max-[1136px]:w-[400px] max-[1136px]:h-[500px] max-[990px]:w-[300px] max-[850px]:h-auto max-[850px]:w-[600px] max-[600px]:w-[500px] max-[512px]:w-[400px] max-[420px]:w-[300px] max-[337px]:w-[300px]'>
            <Image src={"/static/Herosame.png"} alt='' width={950} height={950}/>
        </div>
        <div className='w-[606px] h-[530px] ml-[3rem] mt-[5rem] flex flex-col justify-start max-[1136px]:w-[550px]  max-[990px]:w-[500px] max-[850px]:ml-0 max-[512px]:w-[400px] max-[420px]:w-[300px] max-[337px]:w-[280px] max-[550px]:mt-[2rem]'>
            <p className='text-[42px] mt-3 font-[500] max-[420px]:text-[35px]'>Asgaard sofa</p>
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
                               <button className='w-[200px] h-[60px] font-[600] border-[#9F9F9F] text-[18px] border-[1px] text-black rounded-md flex justify-center items-center max-[420px]:w-[100px] max-[420px]:text-[16px] max-[420px]:h-[50px]'>Add to Cart</button>
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
