import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import LinkBtn from "../LinkBtn/LinkBtn";


export default function Navbar({isOpen}) {
  
  return (
    <>
      <div className="fixed flex-col w-1/5 float-left h-full items-center justify-center hidden md:flex">
        <div className="relative bg-[#4e4c48] w-1/2 h-[12%]  lg:h-1/6 mt-10 rounded-md cursor-pointer shadow-[1px_1px_4px_1px_#101319]">
          <Link
            to="/"
            className="w-full h-full pt-8 grid justify-center"
          >
            <p className="text-gray-500">Home</p>
            <LinkBtn />
          </Link>
        </div>
        <div className="relative bg-[#4e4c48] w-1/2 h-[12%]  lg:h-1/6 mt-10 rounded-md cursor-pointer shadow-[1px_1px_4px_1px_#101319] hover:shadow-[1px_px_10px_10px_#021F3899]">
          <Link
            to="/about"
            className="w-full h-full pt-8 grid justify-center"
          >
            <p className="text-gray-500">About</p>
            <LinkBtn />
          </Link>
        </div>
        <div className="relative bg-[#4e4c48] w-1/2 h-[12%]  lg:h-1/6 mt-10 rounded-md cursor-pointer shadow-[1px_1px_4px_1px_#101319] hover:shadow-[1px_px_10px_10px_#021F3899]">
          <Link
            to="/work"
            className="w-full h-full pt-8 grid justify-center"
          >
            <p className="text-gray-500">Work</p>
            <LinkBtn />
          </Link>
        </div>
        <div className="relative bg-[#4e4c48] w-1/2 h-[12%]  lg:h-1/6 mt-10 rounded-md cursor-pointer shadow-[1px_1px_4px_1px_#101319] hover:shadow-[1px_px_10px_10px_#021F3899]">
          <Link
            to="/contact"
            className="w-full h-full pt-8 grid justify-center"
          >
           <p className="text-gray-500">Contact</p>
            <LinkBtn />
          </Link>
        </div>
      </div>
     <MenuItem showMenu={isOpen}/>
    </>
  );
}
