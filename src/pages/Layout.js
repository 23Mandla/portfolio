import React, { useState } from "react";
import Navbar from "../componets/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ToggleNav from "../componets/Navbar/ToggleNav";


export default function Layout() {
  const [isOpen, setToggle] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 770px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 780px)" });

  const handleToggle = () => {
    setToggle(!isOpen);
  };
 

  return (
    <div className="relative  md:grid md:grid-cols-7 w-full">
      <div className="bg-[#595963] border-r border-gray-600 relative flex justify-center top-0 left-0 right-0 w-full z-50">
        {isTabletOrMobile && <ToggleNav toggle={handleToggle} />}
        {isDesktopOrLaptop && <Navbar isOpen={isOpen} />}
      </div>

      {/** TODO *
        import page transition and animate pages
       */}

      <div className="md:col-span-6">
        <Outlet />
      </div>
    </div>
  );
}
