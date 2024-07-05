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
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 768px))" });

  const handleToggle = () => {
    setToggle(!isOpen);
  };
 

  return (
    <div className="relative block  md:grid md:grid-cols-7 w-full">
      <div className="bg-[#ccb28c] flex justify-center">
        {isTabletOrMobile && <ToggleNav toggle={handleToggle} />}
        {isDesktopOrLaptop && <Navbar isOpen={isOpen} />}
      </div>

      {/** TODO *
        import page transition and animate pages
       */}

      <div className="col-span-6">
        <Outlet />
      </div>
    </div>
  );
}
