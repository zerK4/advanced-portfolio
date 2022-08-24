import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Certification from "./certification";
import Contact from "./contact";
import Projects from "./projects";
import { AiOutlineBorderVerticle } from "react-icons/ai";

export default function Home() {
  const pro = useRef();
  const [activeH, setActiveH] = useState("");
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     console.log("entry", entry);
  //   });
  //   observer.observe(pro.current);
  // }, []);
  return (
    <div className="pb-20">
      <Head>
        <title>Sebastian Pavel</title>
        <meta name="description" content="Sebastian Pavel personal portfolio" />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <div className="p-2 scroll-smooth">
        <Projects activeH={activeH} pro={pro} />
        <Certification activeH={activeH} />
        <Contact activeH={activeH} />
      </div>
    </div>
  );
}
