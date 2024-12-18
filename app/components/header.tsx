"use client"
import React from 'react'
import { useState } from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";    
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import {Poppins} from "next/font/google"
import { CgMenuHotdog } from "react-icons/cg";
import Link from 'next/link';
import Image from 'next/image';

const PoppinsFont = Poppins({ subsets: ['latin'],weight:['400' , '700'] })

const Header = () => {
  const [show,setShow] = useState<boolean>(false)
  const [menushow,setMenushow] = useState<boolean>(false)
  function showorunshow(){
  
  if(show === false){
      setShow(true)
  }
  else{
      setShow(false)
  }
  }
  function menushoworunshow(){
  
  if(menushow === false){
    setMenushow(true)
  }
  else{
    setMenushow(false)
  }
  }
  function close(){
    setShow(false)
  }
  function closemenu(){
    setMenushow(false)
  }
  return (
    <>
      <div className='w-full h-[100px] relative bg-[#FBEBB5] flex justify-between items-center'>

      
      <div className='w-[300px] h-full flex justify-between items-center ml-[30rem] max-[1190px]:ml-[20rem] max-[1010px]:ml-[10rem] max-[860px]:w-[250px] max-[860px]:ml-[2rem] max-[560px]:hidden'>
           <Link href={"/"}> <div className={`font-[600] ${PoppinsFont} text-[16px]`}>Home</div></Link>
            <Link href={"/Shop"}><div className={`font-[600] ${PoppinsFont} text-[16px]`}>Shop</div></Link>
            <Link href={"/About"}><div className={`font-[600] ${PoppinsFont} text-[16px]`}>About</div></Link>
            <Link href={"/Contact"}><div className={`font-[600] ${PoppinsFont} text-[16px]`}>Contact</div></Link>

        </div>

        
        <div className='w-[250px] max-[860px]:w-[200px] max-[390px]:w-[120px] h-full flex justify-between items-center mr-[8rem] max-[860px]:mr-[2rem] max-[560px]:ml-[2rem]'>
            <Link href={"/Account"}><MdOutlineAccountCircle size={25} /></Link>
            <IoSearchSharp size={25} />
            <FaRegHeart size={25} className='max-[390px]:hidden '/>
            <MdOutlineShoppingCart size={25} onClick={showorunshow} className='cursor-pointer'/>

        </div>
        <CgMenuHotdog className='text-[2rem] mr-5 max-[560px]:block hidden' onClick={menushoworunshow}/>



        
      </div>
      <div className={`${menushow?'block':'hidden'} w-full h-[80vh] bg-[#FBEBB5] shadow-lg absolute z-30 flex flex-col justify-start items-center`}>
        <Link href={"/"}><div  onClick={closemenu} className='w-full h-[70px] flex justify-center items-center text-[1.5rem] text-white font-[700]'>Home</div></Link>
        <Link href={"/Shop"}><div  onClick={closemenu} className='w-full h-[70px] flex justify-center items-center text-[1.5rem] text-white font-[700]'>Shop</div></Link>
        <Link href={"/Contact"}><div  onClick={closemenu} className='w-full h-[70px] flex justify-center items-center text-[1.5rem] text-white font-[700]'>Contact</div></Link>
        <Link href={"/About"}><div  onClick={closemenu} className='w-full h-[70px] flex justify-center items-center text-[1.5rem] text-white font-[700]'>About</div></Link>
      </div>
        

      <div className={`${show?'block':'hidden'} w-[417px] h-[746px] bg-white shadow-xl absolute right-0 z-30 flex flex-col justify-between items-center max-[420px]:w-full max-[420px]:h-[550px]`}>
        <div className='w-full flex flex-col justify-center items-center'>
        <p className='text-[36px] font-[700] text-black max-[350px]:text-[26px]'>Shopping Cart</p>
        <div className='w-full h-[105px] max-[420px]:h-[80px] shadow-xl mt-[4rem] flex justify-start items-center'>
            <div className='h-full w-[108px] bg-[#FBEBB5] max-[420px]:w-[90px]'>
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
