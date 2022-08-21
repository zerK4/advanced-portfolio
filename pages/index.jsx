import Head from "next/head";
import Image from "next/image";
import {
  AiFillLinkedin,
  AiTwotoneFileUnknown,
  AiFillGithub,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import Certification from "./certification";
import Contact from "./contact";
import Projects from "./projects";

export default function Home() {
  return (
    <div className="pb-20">
      <Head>
        <title>Sebastian Pavel</title>
        <meta name="description" content="Sebastian Pavel personal portfolio" />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <div className="p-2 scroll-smooth">
        <Projects />
        <Certification />
        <Contact />
      </div>
    </div>
  );
}
