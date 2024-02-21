import React from "react";
import Navbar from "../componets/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="h-screen ">
      <div>
        <Navbar />
      </div>

      <div className="col-span-4 md:w-4/5 float-right">
        <Outlet />
      </div>
    </div>
  );
}
