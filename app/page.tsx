"use client";
import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";

export default function Home() {
  return (
    <div className="px-[30px] md:px-[100px] w-full bg-black-2 flex flex-col">
      <Navbar />
      <div className="mt-[70px] md:mt-[100px]">
        <hr className="bg-[#4d4d4d] border-none h-[1px]" />
        <Main />
        <hr className="bg-[#4d4d4d] border-none h-[1px]" />
        <About />

        <hr className="bg-[#4d4d4d] border-none h-[1px]" />
        <Skill />
        <hr className="bg-[#4d4d4d] border-none h-[1px]" />
        <Projects />
        <hr className="bg-[#4d4d4d] border-none h-[1px]" />
        <Contact />
      </div>
    </div>
  );
}
