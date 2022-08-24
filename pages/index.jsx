import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Certification from "./certification";
import Contact from "./contact";
import Projects from "./projects";

export default function Home(props) {
  return (
    <div className="pb-20">
      <Head>
        <title>Sebastian Pavel</title>
        <meta name="description" content="Sebastian Pavel personal portfolio" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/logo.webp" />
      </Head>
      <div className="p-2 scroll-smooth">
        <Projects activeH={props.activeH} pro={props.pro} />
        <Certification activeC={props.activeC} cer={props.cer} />
        <Contact activeCe={props.activeCon} con={props.con} />
      </div>
    </div>
  );
}
