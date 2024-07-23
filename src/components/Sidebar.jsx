// components/Sidebar.tsx
import React from 'react';
import Image from 'next/image';
import { IoMdArrowDropdown } from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';
import icon1 from '../../public/assets/images/icon_shapes_02.svg'
import icon2 from '../../public/assets/images/home-2.svg'
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className=" bg-[#001F56] text-white lg:px-5 px-2 py-5">
  
      <ul className="nav">
        <li className="nav-item">
          <Link href='/Courses'>
          <Image src={icon1} alt="icon1"/>
          </Link>
  
        </li>
        <li className="nav-item">
        <Image src={icon2} alt="icon2"/>
        
        </li>
        {/* Add more navigation items here */}
      </ul>
    </div>
  );
};

export default Sidebar;
