import React from "react";


export default function MenuItem({ showMenu: isOpen}) {
  return (
    isOpen && (
      <div
        className={`absolute w-full h-full z-20 block md:hidden`}
        style={{ background: "rgba(0,0,0,0.83)" }}
      ></div>
    )
  );
}
