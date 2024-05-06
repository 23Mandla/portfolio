import React, { useReducer, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useInView, useAnimation } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import art from "../../componets/assets/images/art.png";
import todo from "../../componets/assets/images/todo.png";
import stokveel from "../../componets/assets/images/stokveel.png";
import linkBtn from "../assets/images/link.png";
import homeBg from "../assets/images/home-bg2.png";
import mandla from "../assets/images/cartoon.png";

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

export default function Home() {
  const [hovered, dispatch] = useReducer(reducer, {
    link: false,
  });

  const ref = useRef(null);
  const isInview = useInView(ref, { triggerOnce: true });
  const animation = useAnimation();

  useEffect(() => {
    if (isInview) {
      animation.start("visible");
    }
  }, [isInview, animation]);

  return (
    <div
      className="h-full w-full flex flex-col justify-center"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundRepeat: "no repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="grid md:grid-cols-2 w-[94%] m-auto">
        <div
          ref={ref}
          className="hidden md:grid text-[12px] lg:text-[14px] text-gray-600 order-last md:order-first"
        >
          <div className="relative flex items-end pl-10">
            <div className="flex border-4 rounded-full border-white items-start justify-center">
              <img src={mandla} alt="" className="w-20 h-20 rounded-full"/>
            </div>
            <div className="absolute bg-[#d3ad80] h-0.5 w-full bottom-10 left-[9em]">
    
            </div>
          </div>

          <div className="relative flex flex-col pt-8 items-center">
            <div
              className={`relative -left-10 -top-5 flex items-center w-10 h-10 rounded-full ${
                hovered.link ? "link" : ""
              }`}
            >
              <p className="absolute -left-16 -top-0.5 w-40 text-[12px]">
                Get in touch
              </p>
              <img
                src={linkBtn}
                alt=""
                className="relative -left-8  w-16"
                style={{ transform: "rotate(270deg)" }}
              />
            </div>
            <div className="-ml-40 -mt-2 flex gap-10 ">
              <div className="bg-[#a9a59e] h-8 w-8 flex items-center justify-center rounded-full hover:scale-110 transition-all">
                <FaGithub className="text-xl text-[#242a31] cursor-pointer" />
              </div>
              <div className="bg-[#a9a59e] h-8 w-8 p-2 flex items-center justify-center rounded-full cursor-pointer  hover:scale-110 transition-all">
                <FaLinkedin className="text-xl rounded-full text-gray-300" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="rounded-full px-8 bg-[#7c7b7b] flex items-center justify-center overflow-hidden whitespace-nowrap">
            <div className="inline-block w-full overflow-hidden ">
              <span className="inline-block animate-slide space-x-14 py-0 lg:py-2">
                <p className="text-lg mb:text-xl inline-block text-[#42d2df]">
                  SOFTWARE DEVELOPER
                </p>
                <p className="text-lg mb:text-xl inline-block text-orange-400">
                  WEB DEVELOPER
                </p>
                <p className="text-lg mb:text-xl inline-block text-purple-300">
                  PROGRAMMER
                </p>
              </span>
            </div>
          </div>
          <div className="relative border rounded-md md:row-span-3 md:col-span-2 ">
            <div
              className={`absolute text-gray-400 cursor-pointer justify-center top-0 left-0 w-full h-full rounded-lg z-40  ${
                hovered.link ? "linkHover" : ""
              }`}
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
              onMouseEnter={() => dispatch({ type: "hover", id: "link" })}
              onMouseLeave={() => dispatch({ type: "unhover", id: "link" })}
            >
              <div className="flex gap-10 justify-end pr-20">
                <img src={linkBtn} alt="" className="h-20 w-8" />
                <h1 className="mt-4 text-3xl font-bold ">Work Summary</h1>
              </div>
              <p className="w-1/2 text-sm ml-5 mt-6">
                Some of the work I've done while learning and developing my
                skills
              </p>
              <div
                className={`ml-56 mt-8 flex items-center border border-gray-500 w-8 h-8 rounded-full ${
                  hovered.link ? "link" : ""
                }`}
              >
                <img
                  src={linkBtn}
                  alt=""
                  className="relative -left-4  w-6"
                  style={{ transform: "rotate(270deg)" }}
                />
              </div>
            </div>
            <div className="relative h-full">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                scrollbar={{ draggable: true }}
                modules={[Autoplay]}
                className="h-full cursor-pointer"
              >
                <SwiperSlide className="relative w-full h-full rounded-md">
                  <img
                    src={todo}
                    alt=""
                    className="w-full h-full object-fill rounded-md"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-full rounded-md">
                  <img
                    src={art}
                    alt=""
                    className="w-full h-full object-fill rounded-md"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-full rounded-md">
                  <img
                    src={stokveel}
                    alt=""
                    className="w-full h-full object-fill rounded-md"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
