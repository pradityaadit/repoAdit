import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectItemProps {
  title: string;
  backgroundImg: StaticImageData;
  projectUrl: string;
  tech: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  backgroundImg,
  projectUrl,
  tech,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl hover:shadow-slate-600 rounded-xl group hover:scale-105 ease-in duration-300">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt={title}
        layout="responsive"
      />
      {/* Overlay Content */}
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-slate-600 font-bold tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-slate-600 font-bold text-center">{tech}</p>
        <a
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
          className="text-center flex items-center justify-center py-3 rounded-lg bg-gradient-to-r from-[#3BF686] to-[#4CA9FF] text-white font-bold text-sm"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
