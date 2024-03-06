import React from "react";

import linkBtn from "../assets/images/link_0.png";
export default function LinkBtn({ state }) {
  return (
    <div className={`absolute flex items-center bottom-4 right-4 border border-gray-500 w-8 h-8 rounded-full ${state ? 'link' : ''}`}>
      <img src={linkBtn} alt="" className="relative -left-2.5  w-6" style={{ transform: "rotate(270deg)" }} />
    </div>
  );
}
