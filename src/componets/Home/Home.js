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
      className="space-y-16 h-full w-full flex flex-col justify-center"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundRepeat: "no repeat",
        backgroundSize: "cover",
      }}
    >
     
      <div className="grid md:grid-cols-4 gap-8 w-[94%] m-auto p-6">
        <div
          ref={ref}
          className="hidden md:grid gap-8 col-span-2  p-4 lg:p-8 text-[12px] lg:text-[14px] row-span-4 text-gray-600 order-last md:order-first"
        >
         
          <div className="flex mt-44 gap-10">
            <div className="bg-[#a9a59e] h-10 w-10 flex items-center justify-center rounded-full hover:scale-110 transition-all">
              <FaGithub className="text-xl text-[#242a31] cursor-pointer" />
            </div>
            <div className="bg-[#a9a59e] h-10 w-10 p-2 flex items-center justify-center rounded-full cursor-pointer  hover:scale-110 transition-all">
              <FaLinkedin className="text-xl rounded-full text-gray-300" />
            </div>
          </div>

          <div
              className={`relative ml-20 flex items-center border border-gray-500 w-10 h-10 rounded-full ${
                hovered.link ? "link" : ""
              }`}
            >
              <p className="absolute -left-20 -top-0.5 w-40 text-[12px]">Get in touch</p>
              <img
                src={linkBtn}
                alt=""
                className="relative -left-8  w-16"
                style={{ transform: "rotate(270deg)" }}
              />
            </div>
        </div>
        <div className="col-span-2 rounded-full px-8 bg-[#7c7b7b] flex items-center justify-center overflow-hidden whitespace-nowrap">
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
              Some of the work I've done while learning and developing my skills
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
  );
}
