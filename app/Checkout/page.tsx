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
        <p className='text-[48px] font-[500] z-20'>Checkout</p>
        <div className='z-20 flex mt-2 justify-center items-center w-[120px] h-[24px]'>
            <span className='text-black font-[600]'>Home</span>
            <span>{`>`}</span>
            <span className='text-gray-800  font-[600]'>checkout</span>
        </div>
        
    </div>


    <div className='w-full flex justify-center items-start  '>
    <div className='w-[610px] pl-20 pt-10  flex flex-col'>
                <p className='text-[36px] font-[700]'>Billing Detail</p>
                <label className='text-[16px] font-[500] mt-5'>First Name</label>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-[#000000] rounded-md mt-5'/>

                <label className='text-[16px] font-[500] mt-5'>Last Name</label>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-[#000000] rounded-md mt-5'/>

                <label className='text-[16px] font-[500] mt-5'>{`Company Name (OPtional)`}</label>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-[#000000] rounded-md mt-5'/>

                <label className='text-[16px] font-[500] mt-5'>Country/ Religion</label>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-[#000000] rounded-md mt-5'/>

                <label className='text-[16px] font-[500] mt-5'>Street / Address</label>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-[#000000] rounded-md mt-5'/>

                <label className='text-[16px] font-[500] mt-5'>Town / City</label>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-[#000000] rounded-md mt-5'/>

                <label className='text-[16px] font-[500] mt-5'>Province</label>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-[#000000] rounded-md mt-5'/>

                <label className='text-[16px] font-[500] mt-5'>Zip Code</label>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-[#000000] rounded-md mt-5'/>

                <label className='text-[16px] font-[500] mt-5'>Phone</label>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-[#000000] rounded-md mt-5'/>

                <label className='text-[16px] font-[500] mt-5'>Email Address</label>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-[#000000] rounded-md mt-5'/>
              
            </div>

            <div className='w-[608px] flex flex-col items-center justify-start h-[790px] mt-[5rem]'>
                <div className='w-[530px] flex justify-between mt-[4rem]'>
                    <p className='font-[600] text-[24px]'>Product</p>
                    <p className='font-[600] text-[24px]'>Sub Total</p>
                </div>
                <div className='w-[530px] flex justify-between mt-[2rem]'>
                    <p className='font-[400] text-[16px] text-[#9F9F9F]'>Asgaard sofa</p>
                    <p className='font-[400] text-[16px]'>Rs. 250,000.00</p>
                </div>
                <div className='w-[530px] flex justify-between mt-[2rem]'>
                    <p className='font-[600] text-[16px]'>Subtotal</p>
                    <p className='font-[600] text-[20px]'>Rs. 250,000.00</p>
                </div>
                <div className='w-[530px] flex justify-between mt-[2rem]'>
                    <p className='font-[400] text-[16px]'>Total</p>
                    <p className='font-[700] text-[24px] text-[#B88E2F]'>Rs. 250,000.00</p>
                </div>
                <hr />

                <div className='w-[530px] flex flex-col justify-center mt-[3rem]'>

                <p className='font-[600] text-[16px]'>Direct Bank Transfer</p>
                <p className='font-[400] text-[16px] text-[#9F9F9F] mt-5'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                <p className='font-[400] text-[16px] text-[#9F9F9F] mt-4'>Direct Bank Transfer</p>
                <p className='font-[400] text-[16px] text-[#9F9F9F] mt-4'>Direct Bank Transfer</p>
                <p className='font-[400] text-[16px] text-[#000000] mt-4'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                <div className='w-[530px] flex justify-center mt-[3rem]'>
                    <button className='w-[220px] h-[50px] bg-[#B88E2F] text-[white] font-[600] rounded-md'>Place Order</button>

                </div>
                </div>
            </div>
    </div>
    </>
  )
}

export default page
