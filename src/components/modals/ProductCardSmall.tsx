import React from 'react';
import Image from 'next/image';
import { IoStarSharp } from 'react-icons/io5';

type ProductCardSmallProps ={
    data : number
}
const ProductCardSmall = ({data}:ProductCardSmallProps) => {
  return (
   <div
                key={data}
                className="bg-gray-100 pb-2 w-[160px] min-w-[160px] relative"
              >
                {data % 2 == 1 && (
                  <div className="absolute bg-rose-950 text-white px-2 py-1 text-[11px] rounded-tl-sm rounded-br-sm">
                    POPULAR
                  </div>
                )}
                <div className="w-full flex-shrink-0  h-[140px ">
                  <Image
                    src="/chair.jpg"
                    height={150}
                    width={150}
                    alt={"chait"}
                    className="w-full rounded-sm shadow-md h-full"
                  />
                </div>
                <p className="text-[14px] font-semibold px-1 pt-2 pb-1">
                  Tining table
                </p>
                <div className="flex pl-1 pb-1 ">
                  <IoStarSharp size={13} color="orange" />
                  <IoStarSharp size={13} color="orange" />
                  <IoStarSharp size={13} color="orange" />
                  <IoStarSharp size={13} color="orange" />
                  <IoStarSharp size={13} color="orange" />{" "}
                </div>
                <div className="flex justify-between px-1 gap-x-2 text-[12px]">
                  <p className="font-bold text-gray-800">{"$42,4444"}</p>
                  <p className="line-through text-gray-500 text-[11px] pt-[1px]">
                    {"$44,444"}
                  </p>
                  <p className="text-red-600 font-bold ">100%</p>
                </div>
              </div>
  );
};

export default ProductCardSmall;