import React from "react"

export default function ToggleNav({toggle}) {
  return (
    <div className="absolute z-40 w-full h-full block md:hidden"  >
      <div className="relative flex flex-col  items-center gap-1 bg-[#e9e2db] float-right w-28 h-28 pt-7 pl-2 cursor-pointer" style={{clipPath:"circle(85% at 91% 12%)"}} onClick={toggle}>
        <span className="w-10 h-1 bg-[#A39D89]"></span>
        <span className="w-10 h-1 bg-[#A39D89]"></span>
        <span className="w-10 h-1 bg-[#A39D89]"></span>
      </div>
    </div>
  )
}
