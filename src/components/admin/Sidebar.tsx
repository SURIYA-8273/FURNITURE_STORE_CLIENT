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
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";

const menuItems = [
  { label: "Dashboard", href: "/admin", icon: <MdDashboard size={15} /> },
  { label: "Customers", href: "/admin/customers", icon: <FaUsers size={15} /> },
  {
    label: "Products",
    href: "/admin/products",
    icon: <SiSmartthings size={15} />,
  },
  {
    label: "Categories",
    href: "/admin/categories",
    icon: <MdCategory size={15} />,
  },
  {
    label: "Sub Categories",
    href: "/admin/sub-categories",
    icon: <TbCategoryFilled size={15} />,
  },
  {
    label: "Banners",
    href: "/admin/banners",
    icon: <FaAdversal size={15} />,
  },
  {
    label: "Orders",
    href: "/admin/users/orders",
    icon: <FaFirstOrderAlt size={15} />,
  },
  {
    label: "Profile",
    href: "/admin/profile",
    icon: <FaUser size={15} />,
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
    <>
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:block z-50 bg-white`}
      >
        {isMenuOpen ? (
          <aside className="w-0 md:w-54 text-black  border-r border-gray-200 md:h-screen fixed top-0 flex flex-col">
            <div className="pl-3 font-semibold border-b border-gray-200 flex justify-between py-2">
              <div className="flex w-full py-2">
                <div>
                  <Image
                    src={"/chair.jpg"}
                    alt="logo"
                    width={35}
                    height={35}
                  ></Image>
                </div>
                <div className="pl-2">
                  <div className="text-[13px]">SAKTHI FURNITURE</div>
                  <div className="text-[9px]">ADMIN PANEL</div>
                </div>
              </div>

              {/* <div
                className=" pt-1 pr-2 cursor-pointer md:hidden  block "
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <IoClose />
              </div> */}
            </div>

            <div className="flex flex-col justify-between h-full  ">
              <nav className="flex flex-col px-5 py-4 gap-2 text-[12px] font-semibold justify-center">
                {menuItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <div
                      className={`flex  rounded-sm px-2 py-2  ${
                        pathname === item.href
                          ? "bg-[#a53ee5] text-white hover:bg-[#a53ee5]"
                          : "hover:bg-black/4"
                      } `}
                    >
                      <div className="pr-3 pt-[1px]">{item.icon}</div>
                      <p>{item.label.toUpperCase()}</p>
                    </div>
                  </Link>
                ))}
              </nav>

              <div
                className={`flex  rounded-sm mx-5 px-2 mb-3 py-2 cursor-pointer hover:bg-gray-800`}
              >
                <div className="pr-2 pt-[2px]">
                  <RiLogoutBoxRFill size={20} />
                </div>
                <p>Logout</p>
              </div>
            </div>
          </aside>
        ) : (
          <div
            className=" pt-1 pr-2 cursor-pointer "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IoMenu size={25} color="blue" />
          </div>
        )}
      </div>
      <div
        className="cursor-pointer absolute top-3 left-6 md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <IoMenu size={30} color="blue" />
      </div>
    </>
  );
}
