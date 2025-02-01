"use client"
import React from 'react'
import { RiAccountCircleFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from 'react';
import { Caveat } from 'next/font/google';
import Link from 'next/link';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ["400","700"]
});
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);
    function off(){
      setShowMenu(false)
    }
  return (
    <>
      <div className='w-full h-[80px] bg-[#FBEBB5] flex justify-between items-center'>
        <h1 className={`ml-5 text-[2rem] font-[700] ${caveat.className} text-white shadow-xl px-3 rounded-lg max-[488px]:text-[1.5rem] max-[380px]:text-[1.3rem] max-[380px]:ml-3`}>SHOUT-FURN</h1>
        <div className='flex'>
        <ul className='flex mx-10 max-[965px]:mx-5 max-[406px]:mx-3 max-[360px]:mx-0 max-[360px]:mr-5'>
            <li className='mx-5 text-[1.3rem] hover:scale-110 transition-all duration-[1s] text-white max-[963px]:mx-3 max-[488px]:text-[1.1rem] max-[488px]:mt-1 max-[406px]:hidden max-[488px]:mx-2'><FiSearch /></li>
            <Link href={"/Account"}><li className='mx-5 text-[1.3rem] hover:scale-110 transition-all duration-[1s] text-white max-[963px]:mx-3 max-[488px]:text-[1.1rem] max-[488px]:mt-1 max-[488px]:mx-2'><RiAccountCircleFill className=''/></li></Link>
            <Link href={"/Cart"}><li className='mx-5 text-[1.3rem] hover:scale-110 transition-all duration-[1s] text-white max-[963px]:mx-3 max-[488px]:text-[1.1rem] max-[488px]:mt-1 max-[488px]:mx-2'><BsCart4 /></li></Link>
           <li className='mx-5 text-[1.3rem] hover:scale-110 transition-all duration-[1s] text-white max-[963px]:mx-3 max-[488px]:text-[1.1rem] max-[488px]:mt-1 max-[488px]:mx-2'><IoMdHeart /></li>
        </ul>
        <ul className='flex mx-10 max-[965px]:mx-5 max-[770px]:hidden'>
            <Link href={"/"}><li className='mx-5 text-[1rem] font-sans font-[600] text-white hover:scale-105 transition-all duration-[1s] cursor-pointer max-[963px]:mx-3'>Home</li></Link>
            <Link href={"/About"}><li className='mx-5 text-[1rem] font-sans font-[600] text-white hover:scale-105 transition-all duration-[1s] cursor-pointer max-[963px]:mx-3'>About</li></Link>
            <Link href={"/Contact"}><li className='mx-5 text-[1rem] font-sans font-[600] text-white hover:scale-105 transition-all duration-[1s] cursor-pointer max-[963px]:mx-3'>Contact</li></Link>
            <li className='mx-5 text-[1rem] font-sans font-[600] text-white hover:scale-105 transition-all duration-[1s] cursor-pointer max-[963px]:mx-3'>Privacy Policy</li>
        </ul>
        <HiMenuAlt3 onClick={toggleMenu}  className='hidden max-[770px]:block text-white text-[1.5rem] mx-10 max-[440px]:mx-3'/>
        </div>
      </div>
        <div className={`${showMenu ? "block" : "hidden" } w-full h-[80vh] flex flex-col justify-start items-center bg-[#FBEBB5]`}>
            <Link href={"/"}><p onClick={off} className='text-[1.2rem] text-white font-[600] my-5 mt-10'>Home</p></Link>
            <Link href={"About"}><p onClick={off} className='text-[1.2rem] text-white font-[600] my-5'>About</p></Link>
            <Link href={"/Contact"}><p onClick={off} className='text-[1.2rem] text-white font-[600] my-5'>Contact</p></Link>
            <p onClick={off} className='text-[1.2rem] text-white font-[600] my-5'>Privacy Policy</p>
        </div>
    </>
  )
}

export default Header
