import Link from "next/link";

export default function Header({ navToggle, setNavToggle, navToggleHandler }) {
  return (
    <header
      className={
        navToggle
          ? " px-10 h-40 flex flex-col items-end active fixed w-screen top-0 bg-neutral-300 bg-opacity-90 backdrop-blur-md z-40"
          : "px-10 h-24 flex flex-col active pt-0 fixed z-40 w-screen top-0 bg-neutral-300 bg-opacity-50 backdrop-blur-md"
      }
    >
      <div className="flex justify-between pt-4 w-full">
        <div className="logo text-4xl shadow-sm shadow-gray-50 p-3">
          <h1 className="cursor-default select-none">SP</h1>
        </div>
        <div
          onClick={navToggleHandler}
          className="relative text-5xl flex items-center select-none"
        >
          <p
            className={
              navToggle
                ? "dots cursor-pointer w-12 h-12 flex items-center justify-center border-[1px] border-gray-50 rotate-[360] ease-in-out duration-200"
                : "dots cursor-pointer w-12 h-12 flex items-center justify-center border-[1px] border-gray-50 rotate-90 ease-in-out duration-200"
            }
          >
            <span className={navToggle ? "dot" : null}>.</span>
            <span className={navToggle ? "text-red-500" : null}>.</span>
            <span className={!navToggle ? "dot" : null}>.</span>
          </p>
        </div>
      </div>
      <nav
        className={
          navToggle
            ? "w-80 flex justify-between items-center h-20 active"
            : "w-80 justify-between items-center h-20 hidden active"
        }
      >
        <a href="#">
          <button onClick={() => setNavToggle(false)} className="items">
            Home
          </button>
        </a>
        <a href="#projects">
          <button onClick={() => setNavToggle(false)} className="items">
            Projects
          </button>
        </a>
        <a href="#contact00">
          <button onClick={() => setNavToggle(false)} className="items">
            Contact
          </button>
        </a>
      </nav>
    </header>
  );
}
