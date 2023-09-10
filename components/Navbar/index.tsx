"use client";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <nav className="navbar">
      <div className="lg:container lg:mx-auto navbar-child">
        <div className="lg:px-0 px-5 lg:block flex justify-between items-center">
          <Image src="/logo.png" width={65} height={65} alt="logo" />
          <div
            className="lg:px-0 px-5 text-2xl lg:hidden inline-block text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src={isOpen ? "/close.png" : "/menu.png"}
              width={20}
              height={20}
              alt="hamburger"
            />
          </div>
        </div>
        <div
          className={`navbar-child lg:space-x-3 lg:mt-0 lg:bg-transparent bg-white transition-all ${
            isOpen ? "h-auto mt-5" : "h-0"
          }`}
        >
          <ul
            className={`flex lg:space-x-10 lg:space-y-0 space-y-10 text-base lg:flex-row flex-col lg:p-0 p-5 ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <li className="text-black block cursor-pointer lg:inline-block">
              Mario
            </li>
            <li className="text-black block cursor-pointer lg:inline-block">
              Games
            </li>
            <li className="text-black block cursor-pointer lg:inline-block">
              About Mario
            </li>
            <li className="text-black block lg:inline-block">Work with us</li>
          </ul>
          <div
            className={`lg:py-0 py-5 text-sm ${isOpen ? "block" : "hidden"}`}
          >
            <button className="download-btn lg:mt-0 mt-4"> Download App</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
