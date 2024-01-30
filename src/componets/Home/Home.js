import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules';
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import star from "../assets/images/star-1.png";
import art from "../../componets/assets/images/art.png";

export default function Home() {
  return (
    <div className="space-y-10 h-full w-full ">
      <div className="flex items-center justify-center gap-20">
        <img src={star} alt="" className="h-10" />
        <h1 className="text-5xl text-center text-gray-400">Mandla Mbolekwa</h1>
        <img src={star} alt="" className="h-10" />
      </div>
      <div className="grid grid-cols-4 gap-8 w-[94%] h-[83%] m-auto rounded-md p-6 bg-[#b1b6bc]">
        <div className="relative col-span-2 bg-[#e4e2e2] p-8 text-sm rounded-md row-span-4 pt-4 text-gray-600">
          <p className="p-2">
            Hi, I'm a final year IT student at unisa with a strong interest in
            software and web development.
          </p>
          <p className="p-2">
            I am currently seeking an internship, entry-level, or part-time
            opportunity where I can demonstrate my programming skills and gain
            hands-on experience.
          </p>
          <p className="p-2">
            This is a highlight of my skill showcasing my ability to create
            awesome creative website.
          </p>
          <div className="w-[60%] left-[24%] m-auto mt-4 py-3  bg-[#bcb9b9] transition ease-in-out duration-300 rounded-lg cursor-pointer hover:bg-slate-300 hover:text-black ">
            <h1 className="text-xl text-center">GET IN TOUCH</h1>
          </div>
          <div className="absolute bottom-0 w-1/2 pl-1 flex gap-10 pb-4">
            <div className="bg-[#858585] p-2 flex items-center justify-center rounded-full hover:scale-110 transition-all">
              <FaGithub className="text-xl text-[#242a31] cursor-pointer" />
            </div>
            <div className="bg-[#858585] p-2 flex items-center justify-center rounded-full cursor-pointer  hover:scale-110 transition-all">
              <FaLinkedin className="text-xl rounded-full text-gray-300" />
            </div>
          </div>
        </div>
        <div className="col-span-2 gap-10 rounded-full bg-[#5c5b5b] flex items-center justify-center overflow-hidden whitespace-nowrap">
          <div className="relative flex items-center justify-around flex-row w-full">
            <span className="px-4">
              <FaAnglesLeft className="text-3xl text-orange-400" />
            </span>
            <div className="inline-block w-full overflow-hidden whitespace-nowrap space-x-10">
              <span className="inline-block animate-slide space-x-16">
                <p className="text-2xl inline-block">SOFTWARE DEVELOPER</p>
                <p className="text-2xl inline-block">WEB DEVELOPER</p>
                <p className="text-2xl inline-block">PROGRAMMER</p>
              </span>
            </div>
            <span className="px-4">
              <FaAnglesRight className="text-3xl text-orange-400" />
            </span>
          </div>
        </div>
        <div className="border border-gray-900 rounded-md row-span-3 col-span-2">
          <div className="h-full">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
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
                  src={art}
                  alt=""
                  className="w-full h-full object-fill rounded-md"
                />
                <a
                  href="https://www.google.com"
                  className="transition ease-in-out duration-300 absolute bottom-0 text-lg w-full -h-full flex justify-center items-center bg-black p-3 hover:scale-110 hover:font-bold hover:bg-[#212020] rounded-b-md home"
                >
                  Stokvel
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
                  className="transition ease-in-out duration-300 absolute bottom-0 text-lg w-full -h-full flex justify-center items-center bg-black p-3 hover:scale-110 hover:font-bold hover:bg-[#212020] rounded-b-md home"
                >
                  Stokvel
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
                  className="transition ease-in-out duration-300 absolute bottom-0 text-lg w-full -h-full flex justify-center items-center bg-black p-3 hover:scale-110 hover:font-bold hover:bg-[#212020] rounded-b-md home"
                >
                  Stokvel
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
