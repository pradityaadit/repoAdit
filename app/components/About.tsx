import React from "react";
import ScrollVelocity from "./ScrollVelocity/ScrollVelocity";

const About = () => {
  const velocity = 100;
  return (
    <div id="about" className="md:py-[30px] py-[30px] flex flex-col">
      <div className="text-[20px] -1 md:text-[48px] font-sora font-bold text-[#fbfbfb] md:leading-[72px]">
        Let me tell you a little more about myself
      </div>
      <div className="flex flex-col items-center xl:items-stretch xl:flex-row gap-9 mt-[40px]">
        <img
          className="object-cover w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-[12px]  ease-in-out duration-300"
          src="/assets/profil.jpg"
          alt="photo-2"
        ></img>

        <div className="bg-[#323443] p-[20px] text-slate-400  text-[12px] md:text-[18px] font-sora rounded-[20px] md:mr-20">
          Welcome to my portfolio! I'm Praidtya Oktanza, a passionate Front-End
          Developer and a sixth-semester Informatics Engineering student. I love
          crafting beautiful, responsive, and interactive web experiences that
          bring ideas to life.
          <br />
          My journey in coding started with a deep curiosity about how websites
          work, and over time, I've honed my skills in HTML, CSS, JavaScript,
          and modern front-end frameworks. Problem-solving excites me, and I
          enjoy turning complex designs into smooth, user-friendly interfaces.
          <br />
          When I'm not coding, you’ll probably find me at the gym, staying
          active and pushing my limits. I believe that discipline and
          consistency—both in fitness and coding—are key to continuous growth.
          <br />
          Currently, I'm exploring the latest front-end technologies and best
          practices to keep improving my craft. Let’s connect and create
          something awesome together! 🚀
        </div>
      </div>
      <ScrollVelocity
        texts={["Welcome To", "My portfolio"]}
        velocity={velocity}
        className="custom-scroll-text italic"
      />
    </div>
  );
};

export default About;
