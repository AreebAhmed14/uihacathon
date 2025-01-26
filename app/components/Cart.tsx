"use client";

import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import cartContext from "../context/cartcontext";
import { urlFor } from "@/sanity/lib/image";


const Cart = () => {
  const value = useContext(cartContext); // Get the context value
  const [confirm, setConfirm] = useState<any>(null)

  useEffect(() => {
    if (value) {
      setConfirm(value);
    }
  }, [value]);

  const hasData = confirm && confirm.data;

  if (!value || !hasData) {
    return <p className="flex justify-center items-center text-[20px] my-10 font-[700] text-[#6b5716]">Oops!  Cart is empty</p>;
  }
  else if(value || hasData){
    console.log(hasData)
  return (
    <>
     <div className="w-full h-[55px] bg-[#FFF9E5] flex justify-around items-center max-[450px]:justify-between">
            <p className="font-[500] text-[16px] max-[450px]:text-[14px]">Product</p>
            <p className="font-[500] text-[16px] max-[450px]:text-[14px]">Price</p>
            <p className="font-[500] text-[16px] max-[450px]:text-[14px]">Quantity</p>
            <p className="font-[500] text-[16px] max-[450px]:text-[14px]">Sub Total</p>
          </div>
    {
      hasData.map((value:any , item:any)=>{

   return(
      <div key={item} className="w-full h-auto justify-center items-start shadow-xl my-1 flex max-[1000px]:h-auto max-[1000px]:flex-col max-[1000px]:items-center">
        <div className="w-[1200px] max-[1005px]:w-[900px] max-[900px]:w-[700px]  m-2 flex flex-col justify-start items-end max-[824px]:w-[750px] max-[756px]:w-[650px] max-[650px]:w-[550px] max-[550px]:w-[450px] max-[450px]:w-[350px] max-[395px]:w-[300px]">
         
          <div className="w-full h-auto mt-[4rem] flex justify-start items-center max-[395px]:mt-[1.5rem]">
            <div className="w-[100px] mr-2 h-[90px] bg-[#FFF9E5] rounded-sm max-[650px]:w-[90px] max-[650px]:h-[60px] max-[550px]:mr-0 max-[395px]:h-[50px]">
                <Image
                          src={urlFor(value.imagePath).url()}
                          alt={value.name}
                          width={300}
                          height={300}
                          className="w-full h-full"
                        />
            </div>
            <p className="font-[500] text-[16px] text-black max-[1005px]:hidden">
              {value.name}
            </p>
            <p className="font-[500] text-[16px] text-black ml-[9rem] max-[650px]:ml-[5rem] max-[550px]:ml-[4.5rem] max-[450px]:ml-[2rem]">
              $. {value.price}
            </p>
            <p className="font-[500] text-[16px] text-black ml-[18rem] max-[650px]:ml-[5rem] max-[550px]:ml-[4.5rem] max-[450px]:ml-[3rem]">
              1
            </p>
            <p className="font-[500] text-[16px] text-black ml-[18rem] max-[650px]:ml-[5rem] max-[550px]:ml-[4.5rem] max-[450px]:ml-[3rem]">
              $. {value.price}
            </p>
          </div>
        </div>
      </div>
      )
   })
  }
    </>
  );
}
};

export default Cart;
