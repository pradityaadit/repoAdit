"use client";
import React from "react";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  });
  return (
    <div
      className={`${
        shadow ? "shadow-md shadow-slate-900 " : ""
      } fixed right-0 px-[30px] md:px-[100px] bg-black h-[70px] md:h-[100px] w-full z-[1000] flex items-center justify-between text-white`}
    >
      <div className="font-poppins cursor-none font-bold text-[24px]">
        ADITT
      </div>
      <ul
        className={`${
          nav ? "top-[70px]" : "top-[-490px]"
        } md:flex gap-2 md:items-center md:pb-0 pb-12 px-[30px] absolute md:static md:z-auto z-[100] bg-black left-0 w-full md:w-auto transition-all duration-300 ease-in `}
      >
        <li className="bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2">
          <a href="#main">Home</a>
        </li>
        <li className="bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2">
          <a href="#about">About</a>
        </li>
        <li className="bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2">
          <a href="#skills">Skills</a>
        </li>
        <li className="bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2">
          <a href="#projects">Project</a>
        </li>

        <li className="bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] hover:text-transparent bg-clip-text xl:hover:scale-110 cursor-pointer p-2">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div
        className="flex md:hidden text-2xl font-bold"
        onClick={() => setNav(!nav)}
      >
        {nav ? <IoClose /> : <AiOutlineMenu />}
      </div>
    </div>
  );
};

export default Navbar;
