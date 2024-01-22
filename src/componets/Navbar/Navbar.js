import React from "react";
import {Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <div className="fixed flex flex-col w-1/5 float-left h-full items-center after:content-[''] after:absolute after:right-3 after:bg-gray-600 after:h-[80%] after:w-[1px] after:top-[10%]">
      <div className="relative border border-gray-600 w-1/2 h-1/6 mt-10 rounded-md cursor-pointer shadow-[2px_2px_30px_0px_#101319] hover:shadow-[2px_2px_30px_10px_#021F3899] hover">
        <Link to="/" className="w-full h-full flex items-center justify-center">
          Home
        </Link>
      </div>
      <div className="relative border border-gray-600 w-1/2 h-1/6 flex items-center justify-center mt-10 rounded-md cursor-pointer shadow-[2px_2px_30px_0px_#101319] hover:shadow-[2px_2px_30px_10px_#021F3899] hover">
        <Link
          to="/about"
          className="w-full h-full flex items-center justify-center"
        >
          About
        </Link>
      </div>
      <div className="relative border border-gray-600 w-1/2 h-1/6 flex items-center justify-center mt-10 rounded-md cursor-pointer shadow-[2px_2px_30px_0px_#101319] hover:shadow-[2px_2px_30px_10px_#021F3899] hover">
        <Link
          to="/work"
          className="w-full h-full flex items-center justify-center"
        >
          Work
        </Link>
      </div>
      <div className="relative border border-gray-600 w-1/2 h-1/6 flex items-center justify-center mt-10 rounded-md cursor-pointer shadow-[2px_2px_30px_0px_#101319] hover:shadow-[2px_2px_30px_10px_#021F3899] hover">
        <Link
          to="/contact"
          className="w-full h-full flex items-center justify-center"
        >
          Contact
        </Link>
      </div>
    </div>
    </div>
    
  );
}
