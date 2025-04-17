import React from "react";
import {
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGithub,
  FaLaravel,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

const Skill = () => {
  return (
    <div id="skills">
      <div className="text-[20px] sm:grid-cols-2 font-bold md:text-[40px] font-sora text-[#fbfbfb] md:leading-[72px]">
        here are the skills i have
      </div>
      <div className=" cursor-pointer grid grid-cols-1 md:grid-cols-3 p-4 min-[1300px]:grid-cols-4 gap-8">
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#E96228] hover:text-[#E96228] bg-slate-400 text-navy-900 hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <FaHtml5 className="text-8xl " />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl font-sora text-slate-600">HTML</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#264DE4] hover:text-[#264DE4] bg-slate-400 text-navy-900 hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <FaCss3Alt className="text-8xl " />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl font-sora text-slate-600">CSS</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#F7E025] hover:text-[#F7E025] bg-slate-400 text-navy-900 hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <FaJs className="text-8xl " />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl font-sora text-slate-600">JS</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#58C4DC] hover:text-[#58C4DC] bg-slate-400 text-navy-900 hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <FaReact className="text-8xl " />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl font-sora text-slate-600">React</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#F03C2E] hover:text-[#F03C2E] bg-slate-400 text-navy-900 hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <FaLaravel className="text-8xl " />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl font-sora text-slate-600">Laravel</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#563d7c] hover:text-[#8019FA] bg-slate-400 text-navy-900 hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <FaBootstrap className="text-8xl " />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-3xl font-sora text-slate-600">Bootstrap</h3>
            </div>
          </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#14b8a6] hover:text-[#14b8a6] bg-slate-400 text-navy-900 hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <SiTailwindcss className="text-8xl " />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-3xl font-sora text-slate-600">Taillwind</h3>
            </div>
          </div>
        </div>

        <div className="p-6 shadow-xl rounded-xl hover:shadow-xl hover:shadow-[#000000] bg-slate-400 text-navy-900 hover:scale-[1.1] ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <FaGithub className="text-8xl " />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-4xl font-sora text-slate-600">Git</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
