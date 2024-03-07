import React, { useReducer, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useInView, useAnimation } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import star from "../assets/images/star-1.png";
import art from "../../componets/assets/images/art.png";
import todo from "../../componets/assets/images/todo.png";
import stokveel from "../../componets/assets/images/stokveel.png";
import linkBtn from "../assets/images/link.png";

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
    <div className="space-y-16 h-full w-full flex flex-col justify-center">
      <div className="flex items-center justify-center gap-8 md:gap-20">
        <img src={star} alt="" className="h-6 sm:h-10" />
        <h1 className="text-xl mb:text-4xl text-center text-[#A39D89]">
          Mandla Mbolekwa
        </h1>
        <img src={star} alt="" className="h-6 sm:h-10" />
      </div>
      <div className="grid md:grid-cols-4 gap-8 w-[94%] m-auto p-6 bg-[#ddddde]">
        <div
          ref={ref}
          className="hidden md:grid gap-8 col-span-2 bg-[#eae7e7] p-4 lg:p-8 text-[12px] lg:text-[14px] row-span-4 text-gray-600 order-last md:order-first"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 1.2, delay: 0.7 }}
          >
            Hello, I'm a final year IT student at UNISA with a keen passion for
            software and web development. As I approach the culmination of my
            academic journey, I am actively seeking opportunities for
            internships, entry-level positions, or part-time roles where I can
            apply and enhance my programming skills.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2, delay: 1 }}
            className="w-[50%] m-auto py-2  bg-[#4e4c48] rounded-lg cursor-pointer hover:bg-[#525251] text-gray-300 hover:text-white"
          >
            <h1 className=" mb:text-lg text-center">GET IN TOUCH</h1>
          </motion.div>
          <div className="pl-1 flex mt-5 gap-10">
            <div className="bg-[#a9a59e] h-10 w-10 flex items-center justify-center rounded-full hover:scale-110 transition-all">
              <FaGithub className="text-xl text-[#242a31] cursor-pointer" />
            </div>
            <div className="bg-[#a9a59e] h-10 w-10 p-2 flex items-center justify-center rounded-full cursor-pointer  hover:scale-110 transition-all">
              <FaLinkedin className="text-xl rounded-full text-gray-300" />
            </div>
          </div>
        </div>
        <div className="col-span-2 rounded-full px-8 bg-[#4e4c48] flex items-center justify-center overflow-hidden whitespace-nowrap">
          <div className="inline-block w-full overflow-hidden ">
            <span className="inline-block animate-slide space-x-14 py-0 lg:py-2">
              <p className="text-lg mb:text-xl inline-block text-[#58cbfc]">
                SOFTWARE DEVELOPER
              </p>
              <p className="text-lg mb:text-xl inline-block text-orange-300">WEB DEVELOPER</p>
              <p className="text-lg mb:text-xl inline-block text-purple-400">PROGRAMMER</p>
            </span>
          </div>
        </div>
        <div className="relative border rounded-md md:row-span-3 md:col-span-2 ">
          <div
            className={`absolute text-gray-400 cursor-pointer justify-center top-0 left-0 w-full h-full rounded-lg z-40  ${
              hovered.link ? "linkHover" : ""
            }`}
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
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
