import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import LinkBtn from "../LinkBtn/LinkBtn";

const reducer = (state, action) => {
  switch (action.type) {
    case "hover":
      return { ...state, [action.id]: true };
    case "unhover":
      return { ...state, [action.id]: false };
    default:
      return state;
  }
};

export default function Navbar({ isOpen }) {
  const [state, dispatch] = useReducer(reducer, {
    home: false,
    about: false,
    work: false,
    contact: false,
  });

  return (
    <>
      <div className="fixed flex-col w-1/5 float-left h-full items-center justify-center hidden md:flex">
        <div
          className={`relative bg-[#4e4c48] w-1/2 h-[12%]  lg:h-1/6 mt-10 rounded-md cursor-pointer shadow-[1px_1px_4px_1px_#101319] text-gray-400 ${
            state.home ? "linkHover" : ""
          }`}
          onMouseEnter={() => dispatch({ type: "hover", id: "home" })}
          onMouseLeave={() => dispatch({ type: "unhover", id: "home" })}
        >
          <Link to="/" className="w-full h-full grid justify-center">
            <p className="relative top-[15%]">Home</p>
            <LinkBtn state={state.home}/>
          </Link>
        </div>
        <div
          className={`relative bg-[#4e4c48] w-1/2 h-[12%]  lg:h-1/6 mt-10 rounded-md cursor-pointer shadow-[1px_1px_4px_1px_#101319] text-gray-400 ${
            state.about ? "linkHover" : ""
          }`}
          onMouseEnter={() => dispatch({ type: "hover", id: "about" })}
          onMouseLeave={() => dispatch({ type: "unhover", id: "about" })}
        >
          <Link to="/about" className="w-full h-full grid justify-center">
            <p className="relative top-[15%]">About</p>
            <LinkBtn state={state.about}/>
          </Link>
        </div>
        <div
          className={`relative bg-[#4e4c48] w-1/2 h-[12%]  lg:h-1/6 mt-10 rounded-md cursor-pointer shadow-[1px_1px_4px_1px_#101319] text-gray-400 ${
            state.work ? "linkHover" : ""
          }`}
          onMouseEnter={() => dispatch({ type: "hover", id: "work" })}
          onMouseLeave={() => dispatch({ type: "unhover", id: "work" })}
        >
          <Link to="/work" className="w-full h-full grid justify-center">
            <p className="relative top-[15%]">Work</p>
            <LinkBtn state={state.work}/>
          </Link>
        </div>
        <div
          className={`relative bg-[#4e4c48] w-1/2 h-[12%]  lg:h-1/6 mt-10 rounded-md cursor-pointer shadow-[1px_1px_4px_1px_#101319] text-gray-400 ${
            state.contact ? "linkHover" : ""
          }`}
          onMouseEnter={() => dispatch({ type: "hover", id: "contact" })}
          onMouseLeave={() => dispatch({ type: "unhover", id: "contact" })}
        >
          <Link to="/contact" className="w-full h-full grid justify-center">
            <p className="relative top-[10%]">Contact</p>
            <LinkBtn state={state.contact}/>
          </Link>
        </div>
      </div>
      <MenuItem showMenu={isOpen} />
    </>
  );
}
