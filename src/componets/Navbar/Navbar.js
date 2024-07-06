import React, { useReducer } from "react";
import { Link, useLocation } from "react-router-dom";
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

export default function Navbar() {
  const [state, dispatch] = useReducer(reducer, {
    home: false,
    about: false,
    work: false,
    contact: false,
    active: null,
  });

  const links = [
    { id: "home", to: "/", text: "Home" },
    { id: "about", to: "/about", text: "About" },
    { id: "work", to: "/work", text: "Work" },
    { id: "contact", to: "/contact", text: "Contact" },
  ];

  //get the current path
  const path = useLocation().pathname;

  //set the active link
  if (path === "/") {
    state.active = "home";
  } else if (path === "/about") {
    state.active = "about";
  } else if (path === "/work") {
    state.active = "work";
  } else if (path === "/contact") {
    state.active = "contact";
  }

  return (
    <div className="fixed -mt-5 flex-col items-center hidden md:flex translate-y-[35%]">
      {links.map((link) => (
        <Link
          key={link.id}
          to={link.to}
          className={`flex relative items-center justify-center bg-[#4e4c48] mt-10 rounded-full cursor-pointer shadow-[1px_1px_4px_1px_#101319] text-gray-400 p-5 ${
            state[link.id] ? "linkHover" : ""
          } ${state.active === link.id ? "bg-[#6ad389]" : ""}`}
          onMouseEnter={() => dispatch({ type: "hover", id: link.id })}
          onMouseLeave={() => dispatch({ type: "unhover", id: link.id })}
        >
          {link.text === "Contact" ? (
            <p className="text-[9px] absolute top-4 left-1 text-white">
              {link.text}
            </p>
          ) : (
            <p className="text-[9px] absolute top-4 left-3 text-white">
              {link.text}
            </p>
          )}
          <LinkBtn state={state[link.id]} />
        </Link>
      ))}
    </div>
  );
}
