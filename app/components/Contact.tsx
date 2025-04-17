/** @format */

import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Lanyard from "./Lanyard/Lanyard";

const Contact = () => {
  return (
    <div id="contact" className="w-full text-[#FBFBFB]">
      <div className="flex flex-col ">
        <h1 className="text-[20px] font-bold md:text-[40px] font-sora text-[#FBFBFB] md:leading-[72px]">
          Get in Touch
        </h1>
      </div>
      <div className="m-auto p-4 w-full ">
        <div className="grid lg:grid-cols-5 gap-2">
          {/* left */}
          <div className="col-span-3  lg:col-span-2 w-full h-full shadow-xl  bg-[#323443] rounded-xl ">
            <div className="h-full">
              <div>
                <Lanyard position={[-1, 0, 12]} gravity={[0, -40, 0]} />
              </div>

              <div className="p-4 font-sora text-white lg:p-4 ">
                <p className="uppercase  font-bold text-center  font-sora">
                  Connect With Me
                </p>
                <div className="flex items-center justify-between py-4">
                  <a href="https://www.instagram.com/prdty.aditt/">
                    <div className="rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] md:p-6 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaInstagram className="text-navbar" />
                    </div>
                  </a>
                  <a href="https://github.com/pradityaadit">
                    <div className="rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] md:p-6 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub className="text-navbar" />
                    </div>
                  </a>

                  <div className="rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] md:p-6 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail className="text-navbar" />
                  </div>

                  <div>
                    <div className="rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] md:p-6 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill className="text-navbar" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl  bg-[#323443] rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="#"
                method="POST"
                encType="multipart/form-data"
                target="_blank"
                className="text-black"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2 ">
                  <div className="flex flex-col">
                    <label className="uppercase font-sora text-white text-sm py-2">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-slate-300 outline-navbar"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase font-sora text-white text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-slate-300 outline-navbar"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase font-sora text-white text-sm py-2">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-slate-300 outline-navbar"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase font-sora text-white text-sm py-2">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-slate-300 outline-navbar"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase font-sora text-white text-sm py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 outline-navbar border-slate-300"
                    rows={10}
                    name="message"
                  ></textarea>
                </div>

                <button className="w-full font-sora text-white rounded-lg p-4 bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] text-navbar  mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <a href="#main">
            <div>
              <div className="rounded-full shadow-lg hover:shadow-white bg-[linear-gradient(134deg,_#3BF686_40.75%,_#4CA9FF_90.52%)] p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="text-navbar" size={30} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
