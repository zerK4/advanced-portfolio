import React, { useState, useEffect } from "react";
import functionStore from "../store/functionStore";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

export default function Projects(props) {
  const { projects } = functionStore();
  const [proj, setProj] = useState([]);
  const [isHover, setIsHover] = useState("");

  useEffect(() => {
    setProj(projects);
  }, [projects]);

  if (projects?.length === 0) {
    return (
      <div className="w-full h-[4rem] flex items-center justify-center">
        <div className="loader h-10 w-10 border-orange-400 border-b-transparent"></div>
      </div>
    );
  } else {
    return (
      <div
        ref={props.pro}
        className="w-full flex flex-col gap-2 md:px-4 relative"
        id="projects"
      >
        <div className={`text-2xl text-white z-20 font-semibold`}>Projects</div>
        {proj.map((x) => (
          <div
            onMouseOver={() => setIsHover(x?._id)}
            onMouseOut={() => setIsHover("")}
            className={`${
              isHover !== "" && isHover !== x?._id
                ? "bg opacity-50 scale-90"
                : "bg-[#202022] bg-opacity-100 "
            } p-2 ease-in-out duration-300 cursor-default select-none`}
            key={x._id}
          >
            <div className="">
              <h1 className="font-semibold">{x?.projectFramework}</h1>
            </div>
            <div className="h-[3rem] flex items-center gap-2 ">
              <AiOutlineArrowRight className="text-orange-400" />
              <h1 className="text-2xl">{x?.projectName}</h1>
            </div>
            <div className="flex items-center gap-2">
              <p className="">{x?.projectDescription}</p>
            </div>
            <div className="w-full flex justify-between px-4">
              <a href={x?.projectCode}>
                <button className="flex items-center gap-2 py-2 opacity-50 hover:opacity-100 ease-in-out duration-300">
                  <BsCodeSlash />
                  Code
                </button>
              </a>
              <a href={x?.projectLive}>
                <button className="flex items-center gap-2 py-2 opacity-50 hover:opacity-100 ease-in-out duration-300">
                  <BiLinkExternal />
                  Live
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
