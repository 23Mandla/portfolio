import React from "react";
import Navbar from "../componets/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="h-screen ">
      <div className="w-full">
        <Navbar />
      </div>

      <div className="col-span-4 w-4/5 float-right">
        <Outlet />
      </div>
    </div>
  );
}
