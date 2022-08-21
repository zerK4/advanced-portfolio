import React from "react";
import Logo from "../public/logo.webp";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-screen h-[30rem] flex items-center justify-center gap-10 md:flex-row flex-col p-2">
      <div className="">
        <div className="w-[12rem] h-[12rem] ">
          <Image
            src={Logo}
            height="100%"
            width="100%"
            layout="responsive"
            className="object-contain rounded-full"
          />
        </div>
      </div>
      <div className="">
        <h1 className="text-3xl">Hi there,</h1>
        <p className="">
          I am Sebastian, a full stack web developer based in Iasi, Romania.
        </p>
      </div>
    </div>
  );
}
