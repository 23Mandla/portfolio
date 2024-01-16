import React from "react";

export default function Navbar() {
  return (
    <div className="fixed flex flex-col w-1/5 h-[100%] items-center after:content-[''] after:absolute after:right-0 after:bg-gray-600 after:h-[80%] after:w-[1px] after:top-[10%]">
      <div className="border border-gray-600 w-1/2 h-1/6 flex items-center justify-center mt-10 rounded-md cursor-pointer shadow-[2px_2px_30px_0px_#101319] hover:shadow-[2px_2px_30px_10px_#021F3899]">
        <h1>HOME</h1>
      </div>
      <div className="border border-gray-600 w-1/2 h-1/6 flex items-center justify-center mt-10 rounded-md cursor-pointer shadow-[2px_2px_30px_0px_#101319] hover:shadow-[2px_2px_30px_10px_#021F3899]">
        <h1>ABOUT</h1>
      </div>
      <div className="border border-gray-600 w-1/2 h-1/6 flex items-center justify-center mt-10 rounded-md cursor-pointer shadow-[2px_2px_30px_0px_#101319] hover:shadow-[2px_2px_30px_10px_#021F3899]">
        <h1>WORK</h1>
      </div>
      <div className="border border-gray-600 w-1/2 h-1/6 flex items-center justify-center mt-10 rounded-md cursor-pointer shadow-[2px_2px_30px_0px_#101319] hover:shadow-[2px_2px_30px_10px_#021F3899]">
        <h1>CONTACT</h1>
      </div>
    </div>
  );
}
