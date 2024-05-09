import React, {useState} from "react";
import Navbar from "../componets/Navbar/Navbar";
import ToggleNav from "../componets/Navbar/ToggleNav";
import { Outlet } from "react-router-dom";


export default function Layout() {
  const [isOpen, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!isOpen);
  }

  return (
    <div className="relative grid grid-cols-7 w-full">
      <div className="bg-[#ccb28c] flex items-center justify-center">
        <Navbar isOpen={isOpen}/>
        <ToggleNav toggle={handleToggle} />
      </div>

      <div className="col-span-6">
        <Outlet />
      </div>
    </div>
  );
}
