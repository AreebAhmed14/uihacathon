import React from 'react'
// import Link from 'next/link'
import Image from 'next/image'
import Cart from '../components/Cart'
import Link from 'next/link'
const page = () => {
  return (
    <>
         <div className='w-full h-[450px] inset-0 bg-[url("/static/shop.jpg")]  flex-col relative bg-cover bg-center flex justify-center items-center'>
    <div className='absolute w-full h-[450px] backdrop-blur-[3px] z-10'></div>

        <span className='w-[77px] h-[77px] z-20'>
            <Image src={'/static/logo.png'} alt="" width={77} height={77} />
        </span>
        <p className='text-[48px] font-[500] z-20'>My Cart</p>
        <div className='z-20 flex mt-2 justify-center items-center w-[120px] h-[24px]'>
            <span className='text-black font-[600]'>Home</span>
            <span>{`>`}</span>
            <span className='text-gray-800  font-[600]'>Cart</span>
        </div>
    </div>

    <Cart/>


<div className='w-full flex justify-center items-center my-10'>
    <Link href={"/Checkout"}><button className='bg-[#f5df96] font-[600] px-5 py-2 text-[20px] rounded-lg hover:scale-95 transition-all'>Check Out</button></Link>
</div>


        <div className='w-full h-[300px] flex justify-between items-center mt-10 bg-[#FAF4F4] max-[730px]:h-auto max-[730px]:flex-col'>
            <div className='w-[375px] h-[108px] flex flex-col max-[1058px]:w-[300px] max-[730px]:h-auto max-[730px]:text-center max-[730px]:py-5'>
                <h1 className={`text-[36px] font-[700] mt-5 max-[1818px]:text-[30px]`}>Free Delivery</h1>
                <h1 className={`text-[20px] font-[500] mt-5 max-[818px]:text-[16px] px-2`}>For all oders over $50, consectetur adipim scing elit.</h1>
            </div>
            <div className='w-[375px] h-[108px] flex flex-col max-[1058px]:w-[300px] max-[730px]:h-auto max-[730px]:text-center max-[730px]:py-5'>
                <h1 className={`text-[36px] font-[700] mt-5 max-[1818px]:text-[30px]`}>90 Days Return</h1>
                <h1 className={`text-[20px] font-[500] mt-5 max-[818px]:text-[16px] px-2`}>If goods have problems, consectetur adipim scing elit.</h1>
            </div>
            <div className='w-[375px] h-[108px] flex flex-col max-[1058px]:w-[300px] max-[730px]:h-auto max-[730px]:text-center max-[730px]:py-5'>
                <h1 className={`text-[36px] font-[700] mt-5 max-[1818px]:text-[30px]`}>Secure Payment</h1>
                <h1 className={`text-[20px] font-[500] mt-5 max-[818px]:text-[16px] px-2`}>100% secure payment, consectetur adipim scing elit.   </h1>
            </div>
        </div>
    </>
  )
}

export default page
