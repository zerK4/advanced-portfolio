import Header from "../components/header";
import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import functionStore from "../store/functionStore";
import Logo from "../public/logo.webp";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

function MyApp({ Component, pageProps }) {
  const [isActive, setIsActive] = useState("");
  const { fetchProjects, fetchCerts } = functionStore();

  useEffect(() => {
    fetchProjects();
    fetchCerts();
  }, []);

  const { ref: pro, inView: activeH } = useInView();
  const { ref: cer, inView: activeC } = useInView();
  const { ref: con, inView: activeCo } = useInView();

  useEffect(() => {
    if (activeH === true || activeC === true || activeCo === true) {
      setIsActive("");
    }
  }, [activeH, activeC, activeCo]);

  return (
    <div className="flex md:h-full flex-col md:flex-row bg-[#151515] min-h-screen text-neutral-400 scroll-smooth">
      <div className="flex lg:w-[80%] flex-col md:flex-row mx-auto p-2 md:h-screen text md:pt-20">
        <div className="md:flex-1 md:relative md:h-full">
          <div className="w-full md:w-[30%] h-fit relative md:fixed md:flex md:justify-between md:h-[90%] md:flex-col ">
            <div className="">
              <h1 className="text-[3rem] py-4 text-white font-bold">
                Sebastian Pavel
              </h1>
              <p className="text-2xl text-neutral-300">
                A full stack web developer based in{" "}
                <span className="text-orange-400">Iasi</span>, Romania.
              </p>
              <p className="mt-4">
                Currently working as a senior analyst since several years and
                coding from almost 1.5 years on my own.
              </p>
              <div className="md:flex flex-col hidden mt-20 gap-4">
                <a href="#projects">
                  <button
                    onClick={() => setIsActive("p")}
                    className="w-fit flex gap-2 items-center link"
                  >
                    <span className="font-thin">01</span>
                    <p
                      className={`${
                        isActive === "p" ||
                        (activeH === true &&
                          (activeC !== true || activeCo !== true))
                          ? "w-[4rem] bg-orange-400"
                          : "w-[1rem] line"
                      } h-[2px] movement bg-neutral-800 `}
                    ></p>{" "}
                    <p className="text-[.8rem] font-semibold">PROJECTS</p>
                  </button>
                </a>
                <a href="#certs">
                  <button
                    onClick={() => setIsActive("ce")}
                    className="w-fit flex gap-2 items-center link"
                  >
                    <span className="font-thin">02</span>
                    <p
                      className={`${
                        isActive === "ce" || activeC === true
                          ? "w-[4rem] bg-orange-400"
                          : "w-[1rem] line"
                      } h-[2px] movement bg-neutral-800 `}
                    ></p>{" "}
                    <p className="text-[.8rem] font-semibold">CERTIFICATION</p>
                  </button>
                </a>
                <a href="#contact">
                  {" "}
                  <button
                    onClick={() => setIsActive("c")}
                    className="w-fit flex gap-2 items-center link"
                  >
                    <span className="font-thin">03</span>
                    <p
                      className={`${
                        isActive === "c" || activeCo === true
                          ? "bg-orange-400 w-[4rem]"
                          : "w-[1rem] line"
                      } h-[2px] movement bg-neutral-800 `}
                    ></p>{" "}
                    <p className="text-[.8rem] font-semibold">CONTACT</p>
                  </button>
                </a>
              </div>
            </div>
            <div className="py-3 my-6 flex gap-4 items-center">
              <div className="w-[3rem] h-[3rem] rounded-full border-2 border-neutral-800">
                <Image
                  src={Logo}
                  height="100%"
                  width="100%"
                  layout="responsive"
                  className=" rounded-full"
                />
              </div>
              <div className="buttons flex gap-2 items-center">
                <a href="https://www.linkedin.com/in/sebastian-pavel-0851a719b/">
                  <button className="p-2 flex items-center gap-2 rounded-md">
                    <AiFillLinkedin className="text-2xl" />
                    <span>Linkedin</span>
                  </button>
                </a>
                <a href="https://github.com/zerK4">
                  <button className="flex items-center gap-2 rounded-md">
                    <AiFillGithub className="text-2xl" />
                    <span>Github</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto md:flex-1">
          <Component
            {...pageProps}
            activeH={activeH}
            pro={pro}
            cer={cer}
            activeC={activeC}
            con={con}
            activeCo={activeCo}
          />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
