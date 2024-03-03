import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState(0)
  return (
    <nav className="w-full flex justify-between items-center py-6 navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[34px]" />
      <ul className="hidden sm:flex justify-end items-center list-none flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font.poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }  hover:text-white ${index===activeLink ? "text-white":"text-dimWhite"}`}
            onClick={()=>setActiveLink(index)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="cursor-pointer w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } min-w-[140px] p-6 mx-4 my-2 rounded-lg absolute right-0 top-20 bg-black-gradient sidebar`}
        >
           <ul className=" flex flex-col justify-end items-center list-none flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font.poppins font-normal cursor-pointer text-[16px] ${
              index === 0 ? "mt-0" : "mt-4 hover:bg-black-gradient"
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
