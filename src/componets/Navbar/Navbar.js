import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";;
export default function Navbar({isOpen}) {
  
  return (
    <>
      <div className="fixed flex-col w-1/5 float-left h-full items-center justify-center hidden md:flex">
        <div className="relative bg-[#acacba] w-1/2 h-[12%]  lg:h-1/6 mt-10 rounded-md cursor-pointer shadow-[1px_1px_4px_1px_#101319] hover:shadow-[1px_px_10px_10px_#021F3899]">
          <Link
            to="/"
            className="w-full h-full flex items-center justify-center"
          >
            Home
          </Link>
        </div>
        <div className="relative bg-[#acacba] w-1/2 h-[12%]  lg:h-1/6 mt-10 rounded-md cursor-pointer shadow-[1px_1px_4px_1px_#101319] hover:shadow-[1px_px_10px_10px_#021F3899]">
          <Link
            to="/about"
            className="w-full h-full flex items-center justify-center"
          >
            About
          </Link>
        </div>
        <div className="relative bg-[#acacba] w-1/2 h-[12%]  lg:h-1/6 mt-10 rounded-md cursor-pointer shadow-[1px_1px_4px_1px_#101319] hover:shadow-[1px_px_10px_10px_#021F3899]">
          <Link
            to="/work"
            className="w-full h-full flex items-center justify-center"
          >
            Work
          </Link>
        </div>
        <div className="relative bg-[#acacba] w-1/2 h-[12%]  lg:h-1/6 mt-10 rounded-md cursor-pointer shadow-[1px_1px_4px_1px_#101319] hover:shadow-[1px_px_10px_10px_#021F3899]">
          <Link
            to="/contact"
            className="w-full h-full flex items-center justify-center"
          >
            Contact
          </Link>
        </div>
      </div>
     <MenuItem showMenu={isOpen}/>
    </>
  );
}
