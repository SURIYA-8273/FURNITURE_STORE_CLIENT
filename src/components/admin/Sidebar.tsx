"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { SiSmartthings } from "react-icons/si";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaAdversal } from "react-icons/fa6";
import { FaFirstOrderAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const menuItems = [
  { label: "Dashboard", href: "/admin", icon: <MdDashboard size={20} /> },
  { label: "Customers", href: "/admin/customers", icon: <FaUsers size={20} /> },
  {
    label: "Products",
    href: "/admin/products",
    icon: <SiSmartthings size={20} />,
  },
  {
    label: "Categories",
    href: "/admin/products/categories",
    icon: <MdCategory size={20} />,
  },
  {
    label: "Sub Categories",
    href: "/admin/products/sub-categories",
    icon: <TbCategoryFilled size={20} />,
  },
  {
    label: "Banners",
    href: "/admin/banners",
    icon: <FaAdversal size={20} />,
  },
  {
    label: "Orders",
    href: "/admin/users/orders",
    icon: <FaFirstOrderAlt size={20} />,
  },
  {
    label: "Profile",
    href: "/admin/profile",
    icon: <FaUser size={20} />,
  },
];
type SidebarProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
};



export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const pathname = usePathname();
  return (
    <span className="block">
      {/* {isMenuOpen ? ( */}
      <aside className="w-54  text-black shadow-lg border-r h-screen fixed top-0 flex flex-col">
        <div className="pl-4 font-bold text-[18px] border-b flex justify-between">
          <div className="pl-2 py-4">Admin Panel</div>
          <span
            className=" pt-1 pr-2 cursor-pointer md:hidden block "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IoClose />
          </span>
        </div>

        <div className="flex flex-col justify-between h-full  ">
          <nav className="flex flex-col px-5 py-4 gap-2 text-[14px] justify-center">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className={`flex  rounded-sm px-2 py-2  ${
                    pathname === item.href
                      ? "bg-[#a53ee5] text-white hover:bg-[#a53ee5]"
                      : "hover:bg-black/4"
                  } `}
                >
                  <span className="pr-2 pt-[0px]">{item.icon}</span>
                  <p>{item.label}</p>
                </div>
              </Link>
            ))}
          </nav>

          <div
            className={`flex  rounded-sm mx-5 px-2 mb-3 py-2 cursor-pointer hover:bg-gray-800`}
          >
            <span className="pr-2 pt-[2px]">
              <RiLogoutBoxRFill size={20} />
            </span>
            <p>Logout</p>
          </div>
        </div>
      </aside>
      {/* ) : (
          <span
            className=" pt-1 pr-2 cursor-pointer "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IoMenu size={25} color="blue" />
          </span>
        )} */}
    </span>
  );
}
