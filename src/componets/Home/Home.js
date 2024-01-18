import React from "react";
import free from "../assets/images/free.jpg";

export default function Home() {
  return (
    <div className="space-y-10 h-[100%] pb-10">
      <h1 className="text-7xl text-center text-orange-700">Mandla Mbolekwa</h1>
      <div className="relative border border-gray-600 w-[90%] h-[77%] m-auto rounded-md p-4">
        <h1>I'm a final year IT student at Unisa</h1>
        <div className="absolute right-10 w-96 h-56 border border-gray-900 bottom-5 rounded-md grid grid-rows-4">
          <div className="row-span-3 bg-black">
            <img src={free} alt="" className="w-full h-full rounded-md" />
          </div>

          <div className="">Link</div>
        </div>
      </div>
    </div>
  );
}
