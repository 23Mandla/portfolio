import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import stokveel from "../assets/images/stokveel.png";
import star from "../assets/images/star-1.png";

export default function Home() {
  return (
    <div className="space-y-10 h-full w-full ">
      <div className="flex items-center justify-center gap-20">
        <img src={star} alt="" className="h-10" />
        <h1 className="text-5xl text-center text-gray-400">
          Mandla Mbolekwa
        </h1>
        <img src={star} alt="" className="h-10" />
      </div>
      <div className="grid grid-cols-4 gap-8 w-[94%] h-[83%] m-auto rounded-md p-6 bg-[#b1b6bc]">
        <div className="relative col-span-2 bg-[#e5dfdb] p-2 rounded-md row-span-4 pt-4 text-gray-600">
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
            Highlight of my work can be{" "}
            <span className="text-blue-500 font-bold">
              <a href="https://www.google.com">found here</a>
            </span>
          </p>
          <div className="absolute right-12 bottom-16 px-7 py-3 bg-[#bcb9b9] transition ease-in-out duration-300 rounded-lg cursor-pointer hover:bg-slate-300 hover:text-black ">
            <h1>Contact</h1>
          </div>
        </div>
        <div className="col-span-2 rounded-full bg-[#5c5b5b] flex items-center p-5 justify-around flex-row">
          <span>
            <FaAnglesLeft className="text-3xl text-orange-400"/>
          </span>
          <p className="text-2xl">SOFTWARE DEVELOPER</p>
          <span>
            <FaAnglesRight className="text-3xl text-orange-400"/>
          </span>
        </div>
        <div className="border border-gray-900 rounded-md row-span-3 col-span-2">
          <div className="h-full">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className="h-full cursor-pointer"
            >
              <SwiperSlide className="relative w-full h-full rounded-md">
                <img
                  src={stokveel}
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
                  src={stokveel}
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
                  src={stokveel}
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
