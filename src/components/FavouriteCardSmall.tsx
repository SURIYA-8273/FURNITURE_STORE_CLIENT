import React from "react";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
const FavoriteCardSmall = () => {
  return (
    <div className="flex flex-col gap-x-2 w-full bg-gray-100 px-2 py-2 rounded-sm">
      <div className="flex">
        <div className=" flex-shrink-0  h-[100px] w-[100px] ">
          <Image
            src="/chair.jpg"
            height={150}
            width={150}
            alt={"chait"}
            className="w-full rounded-sm shadow-md h-full"
          />
        </div>
        <div>
          <p className="font-medium text-[14px] mb-2 px-1 line-clamp-2 ">
            Premium 3-Foot Wooden Dining Table with Modern Minimalist Design
          </p>

          <div className="flex gap-x-4 items-center">
            <div className="flex pl-1">
              <IoStarSharp size={13} color="orange" />
              <IoStarSharp size={13} color="orange" />
              <IoStarSharp size={13} color="orange" />
              <IoStarSharp size={13} color="orange" />
              <IoStarSharp size={13} color="orange" />
              <p className="text-orange-400 text-[11px] font-semibold pl-1">
                4.5
              </p>
              <p className="text-orange-400 text-[11px] font-semibold pl-1">
                (123)
              </p>
            </div>
            <p className="text-green-600 text-[12px] font-semibold">IN STOCK</p>
          </div>

          <div className="flex px-1 gap-x-2 py-2 pb-4 ">
            <p className="font-semibold text-gray-800 text-[12px] ">
              PRICE : {"$44,4444"}
            </p>
            <p className="line-through text-gray-500 text-[12px] pt-[1px] ">
              {"$44,444"}
            </p>
            <p className="text-red-600 font-semibold text-[12px]">OFF 20%</p>
          </div>
        </div>
      </div>
      <div className="flex gap-x-3">
        <div className="py-1.5 w-full   text-rose-950 border-2  rounded-sm text-center font-semibold text-[12px]">
          ADD TO CART
        </div>
        <div className="py-1.5 w-full  text-rose-950 border-2  rounded-sm text-center font-semibold text-[12px]">
          REMOVE
        </div>
      </div>
    </div>
  );
};

export default FavoriteCardSmall;
