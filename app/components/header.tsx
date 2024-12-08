import React from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";    
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import {Poppins} from "next/font/google"

const PoppinsFont = Poppins({ subsets: ['latin'],weight:['400' , '700'] })

const Header = () => {
  return (
    <>
      <div className='w-full h-[100px] bg-[#FBEBB5] flex justify-between items-center'>

      <div className='w-[300px] h-full flex justify-between items-center ml-[30rem]'>
            <div className={`font-[600] ${PoppinsFont} text-[16px]`}>Home</div>
            <div className={`font-[600] ${PoppinsFont} text-[16px]`}>Shop</div>
            <div className={`font-[600] ${PoppinsFont} text-[16px]`}>About</div>
            <div className={`font-[600] ${PoppinsFont} text-[16px]`}>Contact</div>

        </div>

        <div className='w-[250px] h-full flex justify-between items-center mr-[8rem]'>
            <MdOutlineAccountCircle size={25} />
            <IoSearchSharp size={25} />
            <FaRegHeart size={25} />
            <MdOutlineShoppingCart size={25} />

        </div>
        
      </div>
    </>
  )
}

export default Header
