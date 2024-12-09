import React from 'react'
import Image from 'next/image'


const page = () => {
  return (
    <>

    <div className='w-full h-[450px] inset-0 bg-[url("/static/shop.jpg")]  flex-col relative bg-cover bg-center flex justify-center items-center'>
    <div className='absolute w-full h-[450px] backdrop-blur-[3px] z-10'></div>

        <span className='w-[77px] h-[77px] z-20'>
            <Image src={'/static/logo.png'} alt="" width={77} height={77} />
        </span>
        <p className='text-[48px] font-[500] z-20'>Shop</p>
        <div className='z-20 flex mt-2 justify-center items-center w-[120px] h-[24px]'>
            <span className='text-black font-[600]'>Home</span>
            <span>{`>`}</span>
            <span className='text-gray-800  font-[600]'>Shop</span>
        </div>
        
    </div>
    <div className='w-full flex flex-col justify-start items-center'>
        

        <div className='w-full h-[400px]  mt-[5rem] flex justify-around items-center'>
        <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/2.png'} alt="" width={950} height={950} className='w-full h-[287px] '/>
                
                <h1 className={`text-[16px] font-[400] mt-5`}>Granite dining table with dining chair</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/dinning.png'} alt="" width={950} height={950} className='w-full h-[287px] '/>
                
                <h1 className={`text-[16px] font-[400] mt-5`}>Granite dining table with dining chair</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/partytable.png'} alt="" width={950} height={950}  className='w-full h-[287px] '/>
                <h1 className={`text-[16px] font-[400] mt-5`}>Outdoor bar table and stool</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/9.png'} alt="" width={950} height={950} className='w-full h-[287px] '/>
                <h1 className={`text-[16px] font-[400] mt-5`}>Plain console with teak mirror</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
        </div>


        <div className='w-full h-[400px]  mt-[5rem] flex justify-around items-center'>
        <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/8.png'} alt="" width={950} height={950} className='w-full h-[287px] '/>
                
                <h1 className={`text-[16px] font-[400] mt-5`}>Granite dining table with dining chair</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/dinning.png'} alt="" width={950} height={950} className='w-full h-[287px] '/>
                
                <h1 className={`text-[16px] font-[400] mt-5`}>Granite dining table with dining chair</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/7.png'} alt="" width={950} height={950}  className='w-full h-[287px] '/>
                <h1 className={`text-[16px] font-[400] mt-5`}>Outdoor bar table and stool</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/10.png'} alt="" width={950} height={950} className='w-full h-[287px] '/>
                <h1 className={`text-[16px] font-[400] mt-5`}>Plain console with teak mirror</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
        </div>


        <div className='w-full h-[400px]  mt-[5rem] flex justify-around items-center'>
        <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/6.png'} alt="" width={950} height={950} className='w-full h-[287px] '/>
                
                <h1 className={`text-[16px] font-[400] mt-5`}>Granite dining table with dining chair</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/5.png'} alt="" width={950} height={950} className='w-full h-[287px] '/>
                
                <h1 className={`text-[16px] font-[400] mt-5`}>Granite dining table with dining chair</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/partytable.png'} alt="" width={950} height={950}  className='w-full h-[287px] '/>
                <h1 className={`text-[16px] font-[400] mt-5`}>Outdoor bar table and stool</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/mirror.png'} alt="" width={950} height={950} className='w-full h-[287px] '/>
                <h1 className={`text-[16px] font-[400] mt-5`}>Plain console with teak mirror</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
        </div>


        <div className='w-full h-[400px]  mt-[5rem] flex justify-around items-center'>
        <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/1.png'} alt="" width={950} height={950} className='w-full h-[287px] '/>
                
                <h1 className={`text-[16px] font-[400] mt-5`}>Granite dining table with dining chair</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/2.png'} alt="" width={950} height={950} className='w-full h-[287px] '/>
                
                <h1 className={`text-[16px] font-[400] mt-5`}>Granite dining table with dining chair</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/3.png'} alt="" width={950} height={950}  className='w-full h-[287px] '/>
                <h1 className={`text-[16px] font-[400] mt-5`}>Outdoor bar table and stool</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
            <div className='w-[287px] h-full flex flex-col '>
                <Image src={'/static/4.png'} alt="" width={950} height={950} className='w-full h-[287px] '/>
                <h1 className={`text-[16px] font-[400] mt-5`}>Plain console with teak mirror</h1>
                <h1 className={`text-[24px] font-[500] mt-5`}>Rs. 25,000.00</h1>
            </div>
        </div>

        <div className='w-full h-[300px] flex justify-around items-center mt-10 bg-[#FAF4F4]'>
            <div className='w-[375px] h-[108px] flex flex-col '>
                <h1 className={`text-[36px] font-[700] mt-5`}>Free Delivery</h1>
                <h1 className={`text-[20px] font-[500] mt-5`}>For all oders over $50, consectetur adipim scing elit.</h1>
            </div>
            <div className='w-[375px] h-[108px] flex flex-col '>
                <h1 className={`text-[36px] font-[700] mt-5`}>90 Days Return</h1>
                <h1 className={`text-[20px] font-[500] mt-5`}>If goods have problems, consectetur adipim scing elit.</h1>
            </div>
            <div className='w-[375px] h-[108px] flex flex-col '>
                <h1 className={`text-[36px] font-[700] mt-5`}>Secure Payment</h1>
                <h1 className={`text-[20px] font-[500] mt-5`}>100% secure payment, consectetur adipim scing elit.   </h1>
            </div>
        </div>
      </div>
    </>
  )
}

export default page
