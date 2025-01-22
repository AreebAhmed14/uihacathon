
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useContext } from "react";
// import { Wraped } from "@/app/context/wraped";
import cartContext from "@/app/context/cartcontext";

const ProductPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const [refine, setRefine] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const send:any = useContext(cartContext)

  useEffect(() => {
    async function Datafetch() {
      try {
        const { slug } = await params;
        const datas = await client.fetch('*[_type=="product"]');
        const result = datas.find((item: any) => String(item.id) === String(slug));
        setRefine(result);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    }
    Datafetch();
  }, [params]);

  if (loading) {
    return (
      <div className="text-center text-[36px] w-full h-screen font-[700] flex justify-center items-center">
        <div className="w-[80px] h-[80px] border-[10px] border-gray-300 border-b-[#FBEBB5] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!refine) {
    return (
      <div className="text-center text-[24px] w-full h-screen font-[700] flex justify-center items-center">
        <p>Product not found.</p>
      </div>
    );
  }


  return (
      <div className="w-full flex justify-start items-center max-[1000px]:justify-between max-[700px]:flex-col">
        <div className="w-[30%] h-[25rem] mx-5 max-[1050px]:w-[25rem] my-5 max-[450px]:w-[20rem] max-[370px]:w-[18rem] max-[370px]:h-[20rem] overflow-hidden rounded-lg">
          <Image
            src={urlFor(refine.imagePath).url()}
            alt={refine.name}
            width={300}
            height={300}
            className="w-full h-full"
          />
        </div>
        <div className="w-[60%] mt-10 h-auto my-4 mx-5 max-[700px]:w-[90%] max-[370px]:h-auto max-[370px]:my-5">
          <p className="text-2xl uppercase font-[700] m-4 max-[890px]:text-[22px] max-[370px]:m-2 max-[370px]:my-4 text-[#f5df96]">
            {refine.name}
          </p>
          <p className="text-[17px] font-[600] m-5 max-[370px]:m-2 max-[370px]:my-4 max-[400px]:text-[14px] text-black">
            {refine.description}
          </p>
          <p className="text-xl font-[600] m-4 max-[370px]:m-2 max-[370px]:my-4 text-black">
            Price: ${refine.price}
          </p>
          <p className="text-xl font-[600] m-4 max-[370px]:m-2 max-[370px]:my-4 text-black">
            Discount: {refine.discountPercentage}%
          </p>
          <div className={`${show?"block":"hidden"} w-full h-[50px] left-0 bottom-0 bg-[#f5df96] fixed transition-all flex justify-center items-center text-pretty font-[700]`}>ITEM ADDED TO CART SUCCESFULLY</div>
          <button
            onClick={()=>{
              send.setData((prevData: any[]) => [...(prevData || []), refine])
              setTimeout(()=>{
                setShow(true)
              },1000)
              setTimeout(()=>{
                setShow(false)
              },4000)
            }}
            className="bg-[#FBEBB5] px-3 py-2 rounded-lg mx-4 text-black font-[600] hover:scale-95 transition-all my-5"
          >
            Add to Cart
          </button>
        </div>
      </div>
  );
};

export default ProductPage;
