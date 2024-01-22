import React from "react";

export default function Skills() {
  return (
    <div className="grid grid-cols-3 bg-[#868686] h-screen text-[#313030]">
      <div className="relative">
        <h1 className="absolute top-16 left-28 font-bold w-full text-center text-4xl">
          MY SKILLS
        </h1>
      </div>

      <div className="col-span-2 p-5">
        <div className="w-[80%] mr-3 float-right h-full bg-gray-400"></div>
      </div>
    </div>
  );
}
