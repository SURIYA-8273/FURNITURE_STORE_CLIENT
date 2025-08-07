"use client";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import FavouriteCardSmall from "@/components/FavouriteCardSmall";
const Favourite = () => {
  const router = useRouter();
  return (
    <div className="m-3">
      <div className="flex justify-between mb-2 sticky top-0 bg-white px-1 pt-2 pb-3">
        <div className="flex gap-2" onClick={() => router.back()}>
          <IoIosArrowBack size={23} color="gray" />
          <p>Your Favourite</p>
        </div>
      </div>

      <div className="pb-2">
        {[1, 2].map((data) => (
          <div key={data} className="pb-2">
            <FavouriteCardSmall />
          </div>
        ))}
      </div>

      

    
    </div>
  );
};

export default Favourite;
