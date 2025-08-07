import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import Link from 'next/link';
const BottomNavigation = () => {
      const navItems = [
    { name: "Home", href: "/", icon: <FaHome size={30} /> },
    { name: "Account", href: "/account", icon: <MdAccountCircle size={30} /> },
    { name: "Orders", href: "/orders", icon: <FaBox  size={30}/> },

  ];
  return (
    <div className='sticky bottom-0 bg-white h-[65px] flex justify-between'>

        {
            navItems.map(({name,href,icon})=><div key={name}>

<Link href={href}>
{icon}
</Link>


            </div>)
        }

    </div>
  );
};

export default BottomNavigation;