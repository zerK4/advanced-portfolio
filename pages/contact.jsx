import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineCheck } from "react-icons/ai";

export default function Contact(props) {
  const form = useRef();
  const [sent, setSent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [completeError, setCompleteError] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    if (name && email && phone && message) {
      setIsLoading(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      emailjs
        .sendForm(
          "service_ges0jdw",
          "template_b7eegmg",
          form.current,
          "0FyAllc4zlo16DmN-"
        )
        .then(
          (result) => {
            setIsLoading(false);
            setSent("sent");
            setIsLoading(false);
            setTimeout(() => {
              setSent("");
            }, 3000);
          },
          (error) => {
            setIsLoading(false);
            setSent("error");
            setIsLoading(false);
          }
        );
    }
    !name
      ? setCompleteError("name")
      : !email
      ? setCompleteError("email")
      : !phone
      ? setCompleteError("phone")
      : !message
      ? setCompleteError("message")
      : setCompleteError("");
    setSent("");
  };
  return (
    <div className="w-full" id="contact" ref={props.con}>
      <div
        className={`fixed top-0 ${
          sent === "sent" ? "top-0 text-neutral-400 text-2xl" : "-top-[100vw]"
        } movement right-0`}
      >
        🤙 Thanks!
      </div>
      <div className="my-2 flex items-center justify-between">
        <h1 className="text-2xl text-white font-semibold ">Contact</h1>
        <div
          className={
            completeError !== "" ? "flex p-2 rounded-md text-red-500" : "hidden"
          }
        >
          Please complete {completeError}
        </div>
      </div>
      <div className="">
        <form ref={form} className="flex flex-col gap-1">
          <div className="flex flex-col">
            <label className="relative before:absolute before:w-[2px] before:h-[4.4rem] before:bg-orange-400 before:-left-2 before:top-0 after:absolute after:w-[1rem] after:h-[2px] after:bg-orange-400 after:-left-2 after:top-0  ">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              className="relative h-[2.5rem] w-full px-2 bg-[#202022] outline-none border-x-2 border-[#202022] focus:bg-neutral-700 ease-in-out duration-300"
              autoComplete="nope"
            />
          </div>
          <div className="flex flex-col">
            <label className="relative before:absolute before:w-[2px] before:h-[4.4rem] before:bg-orange-400 before:-left-2 before:top-0 after:absolute after:w-[1rem] after:h-[2px] after:bg-orange-400 after:-left-2 after:top-0  ">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              className="relative h-[2.5rem] w-full px-2 bg-[#202022] outline-none border-x-2 border-[#202022] focus:bg-neutral-700 ease-in-out duration-300"
              autoComplete="nope"
            />
          </div>
          <div className="flex flex-col">
            <label className="relative before:absolute before:w-[2px] before:h-[4.4rem] before:bg-orange-400 before:-left-2 before:top-0 after:absolute after:w-[1rem] after:h-[2px] after:bg-orange-400 after:-left-2 after:top-0  ">
              Phone
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              name="phone"
              className="relative h-[2.5rem] w-full px-2 bg-[#202022] outline-none border-x-2 border-[#202022] focus:bg-neutral-700 ease-in-out duration-300"
              autoComplete="nope"
            />
          </div>
          <div className="flex flex-col before:absolute before:w-[1rem] before:h-[2px] before:bg-orange-400 before:-left-2 before:-bottom-2 relative">
            <label className="relative before:absolute before:w-[2px] before:h-[8rem] before:bg-orange-400 before:-left-2 before:top-0 after:absolute after:w-[1rem] after:h-[2px] after:bg-orange-400 after:-left-2 after:top-0  ">
              Message
            </label>
            <textarea
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="relative resize-none h-[6rem] w-full px-2 bg-[#202022] outline-none border-x-2 border-[#202022] focus:bg-neutral-700 ease-in-out duration-300"
              autoComplete="nope"
            />
          </div>
          <div
            onClick={(e) => sendEmail(e)}
            className="cursor-pointer p-2 w-full bg-[#202022] mt-2 border-x-2 border-[#202022] hover:border-orange-400 ease-in-out duration-300"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <span className="loader border-orange-400 border-b-transparent"></span>
              </div>
            ) : sent === "sent" ? (
              <div className="flex items-center justify-center">
                <AiOutlineCheck className="text-green-400 text-2xl" />
              </div>
            ) : (
              <div className="flex items-center justify-center">Send</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
