"use client";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import CartCardSmall from "@/components/CartCardSmall";
const Cart = () => {
  const router = useRouter();
  return (
    <div className="m-3">
      <div className="flex justify-between mb-2 sticky top-0 bg-white px-1 pt-2 pb-3">
        <div className="flex gap-2" onClick={() => router.back()}>
          <IoIosArrowBack size={23} color="gray" />
          <p>Your Cart</p>
        </div>
      </div>

      <div className="pb-2">
        {[1, 2].map((data) => (
          <div key={data} className="pb-2">
            <CartCardSmall />
          </div>
        ))}
      </div>

      <div className="text-[13px] pt-3 px-1 border-t border-gray-300">
        <p className="pb-1 text-[15px] font-semibold">
          Price Details (2 Items)
        </p>
        <div className="flex justify-between py-1 ">
          <p>Total Product Price</p>
          <p>+ RS 12,0000</p>
        </div>

        <div className="flex justify-between py-1 pb-3 ">
          <p>Total Discount</p>
          <p>- RS 100</p>
        </div>

        <div className="flex justify-between py-3 font-semibold text-[14px] border-t border-gray-300">
          <p>Order Total</p>
          <p>RS 11,900</p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 ml-2 mr-1">
        <div className="py-2.5 w-full bg-rose-950  text-white border-2  rounded-sm text-center font-semibold text-[14px]">
        BUY NOW
      </div>
      </div>
    </div>
  );
};

export default Cart;
