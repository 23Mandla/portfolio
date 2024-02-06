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
    <div className="space-y-10 h-full w-full ">
      <div className="flex items-center justify-center gap-20">
        <img src={star} alt="" className="h-10" />
        <h1 className="text-5xl text-center text-gray-400">Mandla Mbolekwa</h1>
        <img src={star} alt="" className="h-10" />
      </div>
      <div className="grid grid-cols-4 gap-8 w-[94%] h-[83%] m-auto rounded-md p-6 bg-[#d0d0d2]">
        <div
          ref={ref}
          className="relative col-span-2 bg-[#dfdede] p-9 text-sm rounded-md row-span-4 text-gray-600"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={animation}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="p-2"
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
            className="w-[60%] m-auto mt-10 py-3  bg-[#a09f9f] rounded-lg cursor-pointer hover:bg-slate-300 hover:text-black"
          >
            <h1 className="text-xl text-center text-white">GET IN TOUCH</h1>
          </motion.div>
          <div className="absolute bottom-0 w-1/2 pl-1 flex gap-10 pb-8">
            <div className="bg-[#858585] p-2 flex items-center justify-center rounded-full hover:scale-110 transition-all">
              <FaGithub className="text-xl text-[#242a31] cursor-pointer" />
            </div>
            <div className="bg-[#858585] p-2 flex items-center justify-center rounded-full cursor-pointer  hover:scale-110 transition-all">
              <FaLinkedin className="text-xl rounded-full text-gray-300" />
            </div>
          </div>
        </div>
        <div className="col-span-2 gap-10 rounded-full px-8 bg-[#959292] flex items-center justify-center overflow-hidden whitespace-nowrap">
          <div className="inline-block w-full overflow-hidden whitespace-nowrap">
            <span className="inline-block animate-slide space-x-16 py-2">
              <p className="text-2xl inline-block">SOFTWARE DEVELOPER</p>
              <p className="text-2xl inline-block">WEB DEVELOPER</p>
              <p className="text-2xl inline-block">PROGRAMMER</p>
            </span>
          </div>
        </div>
        <div className="border border-gray-900 rounded-md row-span-3 col-span-2">
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
