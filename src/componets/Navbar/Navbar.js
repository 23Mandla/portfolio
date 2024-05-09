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
      <div className="fixed -mt-5 flex-col items-center justify-center hidden md:flex">
        <div
          className={`flex items-center justify-center bg-[#4e4c48] mt-10 rounded-full cursor-pointer shadow-[1px_1px_4px_1px_#101319] text-gray-400 p-5 ${
            state.home ? "linkHover" : ""
          }`}
          onMouseEnter={() => dispatch({ type: "hover", id: "home" })}
          onMouseLeave={() => dispatch({ type: "unhover", id: "home" })}
        >
          <Link
            to="/"
            className="relative w-full h-full rounded-full flex flex-col items-center justify-center"
          >
            <p className="text-[9px] absolute -top-1 -left-2">Home</p>
            <LinkBtn state={state.home} />
          </Link>
        </div>
        <div
          className={`flex items-center justify-center bg-[#4e4c48] mt-10 rounded-full cursor-pointer shadow-[1px_1px_4px_1px_#101319] text-gray-400 p-5 ${
            state.about ? "linkHover" : ""
          }`}
          onMouseEnter={() => dispatch({ type: "hover", id: "about" })}
          onMouseLeave={() => dispatch({ type: "unhover", id: "about" })}
        >
          <Link to="/about" className="relative">
            <p className="text-[9px] absolute -top-1 -left-2">About</p>
            <LinkBtn state={state.about} />
          </Link>
        </div>
        <div
          className={`flex items-center justify-center bg-[#4e4c48] mt-10 rounded-full cursor-pointer shadow-[1px_1px_4px_1px_#101319] text-gray-400 p-5 ${
            state.work ? "linkHover" : ""
          }`}
          onMouseEnter={() => dispatch({ type: "hover", id: "work" })}
          onMouseLeave={() => dispatch({ type: "unhover", id: "work" })}
        >
          <Link to="/work" className="relative">
            <p className="text-[9px] absolute -top-1 -left-1">Work</p>
            <LinkBtn state={state.work} />
          </Link>
        </div>
        <div
          className={`flex items-center justify-center bg-[#4e4c48] mt-10 rounded-full cursor-pointer shadow-[1px_1px_4px_1px_#101319] text-gray-400 p-5 ${
            state.contact ? "linkHover" : ""
          }`}
          onMouseEnter={() => dispatch({ type: "hover", id: "contact" })}
          onMouseLeave={() => dispatch({ type: "unhover", id: "contact" })}
        >
          <Link to="/contact" className="relative">
            <p className="text-[9px] absolute -top-1 -left-4">Contact</p>
            <LinkBtn state={state.contact} />
          </Link>
        </div>
      </div>
      <MenuItem showMenu={isOpen} />
    </>
  );
}
