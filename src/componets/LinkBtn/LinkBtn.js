import React from "react";

import linkBtn from "../assets/images/link_0.png";
export default function LinkBtn({ state }) {
  return (
    <div
      className={`relative left-3 flex items-center w-5 h-5 rounded-full ${
        state ? "link" : ""
      }`}
    >
      <img
        src={linkBtn}
        alt=""
        className="relative -left-2.5  w-5"
        style={{ transform: "rotate(270deg)" }}
      />
    </div>
  );
}
