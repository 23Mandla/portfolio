import React from "react";
import { CiMenuFries } from "react-icons/ci";

export default function ToggleNav({ toggle }) {
  return (
    <div className="w-full bg-[#6c6356] top-0 left-0 right-0 fixed flex justify-between py-2 px-5 items-center">
      <h1 className="ml-16">Mandla<span className="text-4xl ml-1 text-[#0ff]">.</span></h1>
      <CiMenuFries className="text-3xl text-cyan-200" />
    </div>
  );
}
