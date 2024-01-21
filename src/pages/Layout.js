import React from "react";
import Navbar from "../componets/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="grid grid-cols-5 h-screen w-full">
      <div className="">
        <Navbar />
      </div>

      <div className="col-span-4">
        <Outlet />
      </div>
    </div>
  );
}
