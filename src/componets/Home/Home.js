import React, { useRef, useEffect } from "react";
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

export default function Home() {
  const ref = useRef(null);
  const isInview = useInView(ref, { triggerOnce: true });
  const animation = useAnimation();
  useEffect(() => {
    if (isInview) {
      animation.start("visible");
    }
  }, [isInview, animation]);

  return (
    <div className="space-y-12 h-full w-full flex flex-col justify-center">
      <div className="flex items-center justify-center gap-8 md:gap-20">
        <img src={star} alt="" className="h-6 sm:h-10" />
        <h1 className="text-xl mb:text-4xl text-center text-[#A39D89]">Mandla Mbolekwa</h1>
        <img src={star} alt="" className="h-6 sm:h-10" />
      </div>
      <div className="grid md:grid-cols-4 gap-8 w-[94%] m-auto p-6 bg-[#ddddde]">
        <div
          ref={ref}
          className="grid gap-8 col-span-2 bg-[#eae7e7] p-4 lg:p-8 text-[12px] lg:text-[14px] row-span-4 text-gray-600 order-last md:order-first"
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
            className="w-[50%] m-auto py-2  bg-[#a09f9f] rounded-lg cursor-pointer hover:bg-slate-300 hover:text-black"
          >
            <h1 className=" mb:text-lg text-center text-white">GET IN TOUCH</h1>
          </motion.div>
          <div className="pl-1 flex mt-5 gap-10">
            <div className="bg-[#858585] h-10 w-10 flex items-center justify-center rounded-full hover:scale-110 transition-all">
              <FaGithub className="text-xl text-[#242a31] cursor-pointer" />
            </div>
            <div className="bg-[#858585] h-10 w-10 p-2 flex items-center justify-center rounded-full cursor-pointer  hover:scale-110 transition-all">
              <FaLinkedin className="text-xl rounded-full text-gray-300" />
            </div>
          </div>
        </div>
        <div className="col-span-2 rounded-full px-8 bg-[#959292] flex items-center justify-center overflow-hidden whitespace-nowrap">
          <div className="inline-block w-full overflow-hidden whitespace-nowrap">
            <span className="inline-block animate-slide space-x-14 py-0 lg:py-2">
              <p className="text-lg mb:text-xl inline-block">SOFTWARE DEVELOPER</p>
              <p className="text-lg mb:text-xl inline-block">WEB DEVELOPER</p>
              <p className="text-lg mb:text-xl inline-block">PROGRAMMER</p>
            </span>
          </div>
        </div>
        <div className="border border-gray-900 rounded-md row-span-3 col-span-2 hidden md:block">
          <div className="h-full">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Autoplay]}
              className="h-full cursor-pointer"
            >
              <SwiperSlide className="relative w-full h-full rounded-md">
                <img
                  src={todo}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
                <a
                  href="https://www.google.com"
                  className="transition ease-in-out duration-300 absolute bottom-0 text-lg w-full -h-full flex justify-center items-center bg-[#837e7e] p-3 hover:scale-110 hover:font-bold hover:bg-[#212020] rounded-b-md"
                >
                  TODO APP
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-full rounded-md">
                <img
                  src={art}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
                <a
                  href="https://www.google.com"
                  className="transition ease-in-out duration-300 absolute bottom-0 text-lg w-full -h-full flex justify-center items-center bg-[#837e7e] p-3 hover:scale-110 hover:font-bold hover:bg-[#212020] rounded-b-md"
                >
                  ART MAKER
                </a>
              </SwiperSlide>
              <SwiperSlide className="w-full rounded-md">
                <img
                  src={stokveel}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
                <a
                  href="https://www.google.com"
                  className="transition ease-in-out duration-300 absolute bottom-0 text-lg w-full -h-full flex justify-center items-center bg-[#837e7e] p-3 hover:scale-110 hover:font-bold hover:bg-[#212020] rounded-b-md"
                >
                  STOKVEL
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
