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
    <div className="relative h-screen ">
      <div>
        <Navbar isOpen={isOpen}/>
        <ToggleNav toggle={handleToggle} />
      </div>

      <div className="col-span-4 md:w-4/5 float-right">
        <Outlet />
      </div>
    </div>
  );
}
