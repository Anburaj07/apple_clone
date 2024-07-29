import React, { useState } from "react";
import logo from "../images/logo.png";

const navItems = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "Vision",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
];

const MenuIcon = () => (
  <svg
    className="w-6 h-6 text-[#c4c4c5]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
    ></path>
  </svg>
);

const SearchIcon = () => (
  <svg
    className="w-6 h-6 text-[#c4c4c5]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-4.35-4.35m1.65-5.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
    ></path>
  </svg>
);

const BagIcon = () => (
  <svg
    className="w-6 h-6 text-[#c4c4c5]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 6h14l1 14H4L5 6zm7-4a2 2 0 012 2v2H10V4a2 2 0 012-2z"
    ></path>
  </svg>
);

const CloseIcon = () => (
  <span className="text-right w-[95%] font-normal text-md cursor-pointer">
    x
  </span>
);

const NavItems = ({ className }) => (
  <div className={className}>
    {navItems.map((item, index) => (
      <p key={index} className="text-center ml-8">
        {item}
      </p>
    ))}
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#434344] text-[#c4c4c5] fixed top-0 left-0 w-full z-50 font-serif">
      <div className="w-full xl:w-[75%] lg:w-[98%] p-4 lg:p-2 m-auto flex justify-between items-center text-sm font-medium">
        <div className="hidden lg:flex justify-between items-center w-full">
          <div className="w-[5%]">
            <img src={logo} alt="logo" className="w-[100%]" />
          </div>
          <div className="flex justify-between items-center w-full">
            <NavItems className="flex justify-between items-center" />
            <SearchIcon />
            <BagIcon />
          </div>
        </div>
        <div className="lg:hidden w-full flex justify-between">
          <div className="w-[40px]">
            <img src={logo} alt="logo" className="w-[100%]" />
          </div>
          <div className="flex items-center space-x-4">
            <SearchIcon />
            <BagIcon />
            <button onClick={toggleMenu}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-[#f8f8f8] w-full text-[#333336] font-semibold text-2xl">
          <NavItems className="text-left ml-8" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
