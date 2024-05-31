"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import SearchBar from "../ui/SearchBar";
import LoginLink from "./LoginLink";
const GlobalHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-10 backdrop-filter backdrop-blur-lg ">
      <div className="container mx-auto flex items-center justify-between p-4 ">
        <Link
          href="/"
          className=" text-gray-800 font-bold font-logo text-2xl hover:text-slate-500 transition duration-300 transform cursor-pointer"
        >
          Boiler
        </Link>
        <div className=" hidden md:flex justify-center w-full font-lato ">
          <nav className="w-[40%] bg-transparent border-b-2 border-yellow-400 rounded-full  p-2 flex justify-center items-center space-x-4">
            <Link
              href="/"
              className="text-slate-600  hover:text-blue-300 transition-transform duration-300 transform cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="text-slate-600 hover:text-blue-300 transition-transform duration-300 transform cursor-pointer"
            >
              Explore
            </Link>
            <Link
              href="/about"
              className="text-slate-600 hover:text-blue-300 transition-transform duration-300 transform cursor-pointer"
            >
              Videos
            </Link>
            <Link
              href="/about"
              className="text-slate-600 hover:text-blue-300 transition-transform duration-300 transform cursor-pointer"
            >
              About
            </Link>
          </nav>
        </div>

        <LoginLink isMobile={false} />
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-slate-800 hover:text-slate-500 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-transparent shadow-lg ">
          <nav className="flex flex-col items-center p-4 space-y-4 font-lato">
            <SearchBar />
            <Link
              href="/"
              className="text-slate-600 hover:text-blue-500 transition duration-300 transform cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="text-slate-600 hover:text-blue-500 transition duration-300 transform cursor-pointer"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-slate-600 hover:text-blue-500 transition duration-300 transform cursor-pointer"
            >
              About
            </Link>
            <LoginLink isMobile={true} />
            <div className="flex space-x-4">
              <FaFacebook className="text-slate-600 hover:text-blue-500 transition duration-300 transform cursor-pointer" />
              <FaTwitter className="text-slate-600 hover:text-blue-500 transition duration-300 transform cursor-pointer" />
              <FaInstagram className="text-slate-600 hover:text-blue-500 transition duration-300 transform cursor-pointer" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default GlobalHeader;
