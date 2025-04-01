"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { PiSunglasses } from "react-icons/pi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handles the opening and closing of the nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border border-red-400 w-full fixed top-0 left-0 bg-white/70 backdrop-blur md:px-6 px-5 lg:px-8 xl:px-[8%] md:py-4 py-2 flex items-center justify-between z-50">
      {/* icon Logo */}
      <a className="border border-amber-400 w-28 flex items-center">
        <PiSunglasses className="w-10 h-10"/>
      </a>

      {/* Menu for Desktop */}
      <ul className="hidden md:flex space-x-6 lg:space-x-10 bg-white px-8 py-2 rounded-[50px] drop-shadow-lg">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Responsive Menu for Mobile */}
      <div
        className={`absolute top-16 right-0 bg-[#DBE2EF] shadow-lg rounded-lg p-5 md:hidden transition-transform duration-300 ease-in-out 
                ${isOpen ? "translate-x-0" : "translate-x-full"} z-40`}
      >
        <ul className="space-y-4">
          <li>
            <a href="#home" className="">
              Home
            </a>
          </li>
          <li>
            <a href="#about" >
              About
            </a>
          </li>
          <li>
            <a href="#projects" >
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" >
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <button>
          <Image src="/assets/moon.png" alt="moon" width={20} height={20} />
        </button>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-3 px-4 py-2 border border-gray-500 rounded-full"
        >
          Contact
          <Image src="/assets/pointer.png" alt="pointer" width={8} height={8} />
        </a>

        {/* Hamburger Button */}
        <button
          onClick={handleClick}
          className="md:hidden flex flex-col justify-center items-center"
        >
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                        h-0.5 w-5 rounded-sm ${
                          isOpen
                            ? "rotate-45 translate-y-1"
                            : "-translate-y-0.5"
                        }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                        h-0.5 w-3 rounded-sm my-0.5 ${
                          isOpen ? "opacity-0" : "opacity-100"
                        }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out 
                        h-0.5 w-5 rounded-sm ${
                          isOpen
                            ? "-rotate-45 -translate-y-1"
                            : "translate-y-0.5"
                        }`}
          ></span>
        </button>
      </div>
      {/* ---------------------mobile menu-------------------------- */}
      
    </nav>
  );
};

export default Navbar;
