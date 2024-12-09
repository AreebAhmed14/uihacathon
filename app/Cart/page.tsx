import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

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

        <div className='w-full h-[525px] justify-center items-start mt-10 flex'>
            <div className='w-[817px] h-[216px] m-2 flex flex-col justify-start items-end'>
                <div className='w-full h-[55px] bg-[#FFF9E5] flex justify-around items-center'>
                    <p className='font-[500] text-[16px]'>Product</p>
                    <p className='font-[500] text-[16px]'>Price</p>
                    <p className='font-[500] text-[16px]'>Quantity</p>
                    <p className='font-[500] text-[16px]'>Sub Total</p>
                </div>
                <div className='w-full h-[55px]  mt-[4rem] flex justify-start items-center'>
                    <div className='w-[100px] mr-2  h-[90px] bg-[#FFF9E5] rounded-sm'>
                        <Image src={'/static/Herosame.png'} alt="" width={100} height={100} />
                    </div>
                    <p className='font-[500] text-[16px] text-[#9F9F9F]'>Asgaard sofa</p>
                    <p className='font-[500] text-[16px] text-[#9F9F9F] ml-10'>Rs. 250,000.00</p>
                    <p className='font-[500] text-[16px] text-[#9F9F9F] ml-[9rem]'>1</p>
                    <p className='font-[500] text-[16px] text-[#9F9F9F] ml-[10rem]'>Rs. 250,000.00</p>
                </div>
            </div>
            <div className='w-[393px] h-[390px] bg-[#FFF9E5] m-2 flex flex-col items-center'>
                    <h1 className='text-[32px] font-[700] mt-5'>Cart Totals</h1>
                    <div className='w-[250px] flex justify-between items-center mt-10'>
                        <p className='font-[500] text-[16px] text-[#9F9F9F]'>Subtotal:</p>
                        <p className='font-[500] text-[16px] text-[#9F9F9F] '>Rs 250,000.00</p>
                    </div>
                    <div className='w-[250px] flex justify-between items-center mt-10'>
                        <p className='font-[500] text-[16px] text-[#9F9F9F]'>Total:</p>
                        <p className='font-[500] text-[20px] text-[#B88E2F] '>Rs 250,000.00</p>
                    </div>
                    <div className='w-[250px] flex justify-center items-center mt-10'>
                        <Link href={"/Checkout"}><button className='px-8 py-2 bg-[#B88E2F] text-[24px] font-[700] text-white rounded-full'>Checkout</button></Link>
                    </div>
            </div>
        </div>

    <div className='w-full h-[300px] flex justify-around items-center mt-5 bg-[#FAF4F4]'>
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
    </>
  )
}

export default page
