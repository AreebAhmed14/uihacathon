"use client"
import React from 'react'
import { useState } from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";    
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import {Poppins} from "next/font/google"
import Link from 'next/link';
import Image from 'next/image';

const PoppinsFont = Poppins({ subsets: ['latin'],weight:['400' , '700'] })

const Header = () => {
  const [show,setShow] = useState<boolean>(false)
  function showorunshow(){
  
  if(show === false){
      setShow(true)
  }
  else{
      setShow(false)
  }
  }
  function close(){
    setShow(false)
  }
  return (
    <>
      <div className='w-full h-[100px] relative bg-[#FBEBB5] flex justify-between items-center'>

      <div className='w-[300px] h-full flex justify-between items-center ml-[30rem]'>
           <Link href={"/"}> <div className={`font-[600] ${PoppinsFont} text-[16px]`}>Home</div></Link>
            <Link href={"/Shop"}><div className={`font-[600] ${PoppinsFont} text-[16px]`}>Shop</div></Link>
            <Link href={"/About"}><div className={`font-[600] ${PoppinsFont} text-[16px]`}>About</div></Link>
            <Link href={"/Contact"}><div className={`font-[600] ${PoppinsFont} text-[16px]`}>Contact</div></Link>

        </div>
        
        <div className='w-[250px] h-full flex justify-between items-center mr-[8rem]'>
            <Link href={"/Account"}><MdOutlineAccountCircle size={25} /></Link>
            <IoSearchSharp size={25} />
            <FaRegHeart size={25} />
            <MdOutlineShoppingCart size={25} onClick={showorunshow} className='cursor-pointer'/>

        </div>
        
      </div>

      <div className={`${show?'block':'hidden'} w-[417px] h-[746px] bg-white shadow-lg absolute right-0 z-20 flex flex-col justify-between items-center`}>
        <div className='w-full flex flex-col justify-center items-center'>
        <p className='text-[36px] font-[700] text-black'>Shopping Cart</p>
        <div className='w-full h-[105px] shadow-xl mt-[4rem] flex justify-start items-center'>
            <div className='h-full w-[108px] bg-[#FBEBB5]'>
                <Image src={'/static/Herosame.png'} alt="" width={108} height={108} />
            </div>
            <div className='w-[150px] ml-10 flex flex-col justify-center items-center h-full'>
                <p className='font-[500px] text-[20px]'>Asgaard sofa</p>
                <p>1 x <span className='ml-4 text-[#B88E2F]'>Rs. 250,000.00</span></p>

            </div>
        </div>
        </div>
                <div className='w-full flex justify-around h-[40px] mb-10'>

                  <Link href={"/Cart"}><button onClick={close} className='bg-[#FBEBB5] px-6 py-2 rounded-full text-[16px] font-[600]'>View Cart</button></Link>
                  <Link href={"/Checkout"}><button onClick={close} className='bg-[#FBEBB5] px-6 py-2 rounded-full text-[16px] font-[600]'>Check Out</button></Link>
                </div>
      </div>
    </>
  )
}

export default Header
