import Image from "next/image";
import React from "react";
import { IoSettings } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
interface AdminHeaderProps {
  name: string;
}
const AdminHeader = ({ name }: AdminHeaderProps) => {
  return (
    <div className="border-b border-gray-200  h-[52px] mb-5 flex justify-between px-5 items-center">
      <h1 className="text-[16px] font-semibold">{name.toUpperCase()}</h1>

      <div className="flex gap-8">
        <div className="flex items-center gap-5">
          <MdOutlineLightMode size={20} />
          <IoSettings size={20} />
        </div>
        <div className="flex">
          <div className="border border-gray-300 rounded-full p-1">
            <Image
              className="rounded-full"
              src={"/profile.jpg"}
              alt="logo"
              width={30}
              height={30}
            ></Image>
          </div>
          <div className="pl-2">
            <p className="text-[14px] font-semibold">SAKTHI RAM</p>
            <p className="text-[10px] font-semibold">ADMIN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
