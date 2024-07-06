import React, { useReducer, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion, useInView, useAnimation } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import art from "../../componets/assets/images/art.png";
import todo from "../../componets/assets/images/todo.png";
import stokveel from "../../componets/assets/images/stokveel.png";
import linkBtn from "../assets/images/link.png";
import homeBg from "../assets/images/home_.png";
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
      className="h-full w-full flex justify-center items-center"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundRepeat: "no repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="block md:grid md:grid-cols-2 sm:w-[94%] w-full h-full m-auto p-6 space-y-8 pt-14 z-20">
        <div ref={ref} className="hidden md:grid">
          <div className="relative flex items-end pl-14 mix-blend-lighten">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.4, delay: 1.2, ease: "easeInOut" },
              }}
              className="flex border-4 rounded-full border-[#231709] items-start justify-center"
            >
              <img src={mandla} alt="" className="w-24 h-24 rounded-full" />
            </motion.div>
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.4, delay: 1.2, ease: "easeInOut" },
              }}
              className="w-36 h-36 absolute bottom-0 left-9"
              fill="transparent"
              viewbox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="71"
                cy="92"
                r="49"
                stroke="#0ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 04 250 22 22" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                    "20 50 70 30",
                    "30 60 40 20",
                    "25 75 50 25",
                    "10 100 40 50",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
            <div className="absolute bg-[#48b9b9] h-0.5 w-full bottom-10 left-[9.8em]"></div>
          </div>

          <div className="relative flex flex-col pt-8 items-center">
            <div
              className={`relative -top-5 flex items-center w-10 h-10 rounded-full ${
                hovered.link ? "link" : ""
              }`}
            >
              <p className="absolute -left-16 -top-0.5 w-40 text-[12px] text-[#dab8b8]">
                Get in touch
              </p>
              <img
                src={linkBtn}
                alt=""
                className="relative -left-8  w-16"
                style={{ transform: "rotate(270deg)" }}
              />
            </div>
            <div className="-ml-20 mt-2 flex gap-10 ">
              <div className="border border-cyan-300 h-8 w-8 flex items-center justify-center rounded-full hover:scale-110 transition-all duration-500 text-cyan-300 hover:text-black cursor-pointer hover:bg-cyan-300">
                <FaGithub className="text-xl" />
              </div>
              <div className="border border-cyan-300  h-8 w-8 p-2 flex items-center justify-center rounded-full cursor-pointer  hover:scale-110 transition-all duration-500 hover:bg-cyan-300 hover:text-black text-cyan-300">
                <FaLinkedinIn className="text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* mobile view */}
        <div className=" flex md:hidden  items-center justify-center">
          <div className="relative flex items-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.4, delay: 1.2, ease: "easeInOut" },
              }}
              className=" border-4 rounded-full border-transparent"
            >
              <img src={mandla} alt="" className="w-24 h-24 rounded-full" />
            </motion.div>
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.4, delay: 1.2, ease: "easeInOut" },
              }}
              className="w-36 h-36 absolute bottom-0 -left-5"
              fill="transparent"
              viewbox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="71"
                cy="92"
                r="49"
                stroke="#0ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                    "20 50 70 30",
                    "30 60 40 20",
                    "25 75 50 25",
                    "10 100 40 50",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <div className="rounded-md px-8 bg-[#7c7b7b] flex items-center justify-center whitespace-nowrap">
            <div className="inline-block w-full overflow-hidden ">
              <span className="inline-block animate-slide space-x-14 py-0 lg:py-2">
                <p className="text-lg mb:text-xl inline-block text-cyan-300">
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
          <div className="relative border rounded-md">
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
