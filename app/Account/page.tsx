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
        <p className='text-[48px] font-[500] z-20'>Account</p>
        <div className='z-20 flex mt-2 justify-center items-center w-[120px] h-[24px]'>
            <span className='text-black font-[600]'>Home</span>
            <span>{`>`}</span>
            <span className='text-gray-800  font-[600]'>Account</span>
        </div>
        
    </div>

        <div className='w-full flex justify-center mt-10 items-center max-[800px]:flex-col'>


            <div className='w-[610px] pl-20 pt-10  h-[630px] flex flex-col max-[1250px]:w-[500px] max-[1000px]:w-[400px] max-[800px]:pl-2 max-[800px]:w-auto'>
                <p className='text-[36px] font-[700]'>Login</p>
                <label className='text-[16px] font-[500] mt-5'>Username or email address</label>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-[#000000] rounded-md mt-5 max-[1000px]:w-[300px] max-[1000px]:h-[65px]'/>
                <label className='text-[16px] font-[500] mt-5'>Password</label>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-[#000000] rounded-md mt-5 max-[1000px]:w-[300px] max-[1000px]:h-[65px]'/>
                <div className='flex w-full mt-8'>
                    <div className='w-[30px] h-[27px] border-[1px] rounded-md border-[#000000]'></div>
                    <div className='text-[16px] ml-3'>Remember Me</div>
                </div>
                <div className='flex w-full mt-8 items-center'>
                    <button className='px-10 py-4 border-[1px] rounded-md border-[#000000]'>Login</button>
                    <div className='text-[16px] ml-[10rem] max-[1000px]:ml-[5rem]'>Last your password</div>
                </div>
            </div>


            <div className='w-[610px] px-20 pt-10 h-[630px] flex flex-col max-[1230px]:w-[500px] max-[1000px]:w-[400px] max-[800px]:pl-12 max-[450px]:w-[auto] max-[450px]:px-2'>
                <p className='text-[36px] font-[700]'>Resister</p>
                <label className='text-[16px] font-[500] mt-7'>Email Address</label>
                <input type="text" className='w-[420px] h-[75px] border-[1px] border-[#000000] rounded-md mt-5 max-[1000px]:w-[300px] max-[1000px]:h-[65px]'/>
                <p className='font-[300] text-[16px] mt-5'>A link to set a new password will be sent to your email address.</p>
                <p className='font-[300] text-[16px] mt-5'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                                <div className='flex w-full mt-8'>
                </div>
                <div className='flex w-full mt-8 items-center'>
                    <button className='px-10 py-4 border-[1px] rounded-md border-[#000000]'>Register</button>
                </div>
            </div>


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
