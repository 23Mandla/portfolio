import React from "react";
import { CiMenuFries } from "react-icons/ci";

export default function ToggleNav({ toggle }) {
  return (
    <div className="w-full bg-black  top-0 fixed h-1/2">
      <h1 className="text-white text-5xl font-bold">Mobile nav</h1>
      <CiMenuFries className="bg-teal-300 tex-2xl" />
    </div>
  );
}
