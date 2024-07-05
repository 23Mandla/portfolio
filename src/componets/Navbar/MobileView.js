import React from "react";
import { motion } from "framer-motion";

export default function MobileView({ showMenu: isOpen}) {
  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}

        className={`fixed w-full h-screen z-20`}
        style={{ background: "rgba(0,0,0,0.83)" }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="relative bg-[#acacba] w-1/2 h-[12%]  lg:h-1/6 mt-10 rounded-md cursor-pointer shadow-[1px_1px_4px_1px_#101319] hover:shadow-[1px_px_10px_10px_#021F3899]">
            <a href="/" className="w-full h-full flex items-center justify-center">
              Home
            </a>
          </div>
          <div className="relative bg-[#acacba] w-1/2 h-[12%]  lg:h-1/6 mt-10 rounded-md cursor-pointer shadow-[1px_1px_4px_1px_#101319] hover:shadow-[1px_px_10px_10px_#021F3899]">
            <a href="/about" className="w-full h-full flex items-center justify-center">
              About
            </a>
          </div>
          <div className="relative bg-[#acacba] w-1/2 h-[12%]  lg:h-1/6 mt-10 rounded-md cursor-pointer shadow-[1px_1px_4px_1px_#101319] hover:shadow-[1px_px_10px_10px_#021F3899]">
            <a href="/work" className="w-full h-full flex items-center justify-center">
              Work
            </a>
          </div>
          <div className="relative bg-[#acacba] w-1/2 h-[12%]  lg:h-1/6 mt-10 rounded-md cursor-pointer shadow-[1px_1px_4px_1px_#101319] hover:shadow-[1px_px_10px_10px_#021F3899]">
            <a href="/contact" className="w-full h-full flex items-center justify-center">
              Contact
            </a>
          </div>
        </div>
      </motion.div>
    )
  );
}
