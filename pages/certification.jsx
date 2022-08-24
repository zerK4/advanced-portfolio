import React, { useState, useEffect } from "react";
import functionStore from "../store/functionStore";
import { BiCertification } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

export default function Certification(props) {
  const [certificat, setCertificat] = useState([]);
  const { certs } = functionStore();
  const [isHover, setIsHover] = useState("");

  useEffect(() => {
    setCertificat(certs);
  }, [certs]);

  return (
    <div className="md:px-4 " id="certs" ref={props.cer}>
      <div className={`text-2xl text-white  font-semibold my-2 `}>
        Certification
      </div>
      <div className="flex flex-col gap-2">
        {certificat.map((x) => (
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
            <div className="flex items-center justify-between">
              <h1 className="font-semibold">{x?.provider}</h1>
              <p className="text-[.8rem]">{x?.date}</p>
            </div>
            <div className="h-[3rem] flex items-center gap-2 ">
              <AiOutlineArrowRight className="text-orange-400" />
              <h1 className="text-2xl">{x?.name}</h1>
            </div>
            <div className="flex items-center gap-2">
              <BiCertification className="text-green-400" />
              <p className="">{x?.certId}</p>
            </div>
            <div className="my-2">
              <a href={x?.link}>
                <button className="flex items-center gap-2 opacity-70 hover:opacity-100 ease-in-out duration-300">
                  See it <BiLinkExternal />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
