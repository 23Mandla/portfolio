import React from "react";
import html from "../../componets/assets/images/html.png";
import css from "../../componets/assets/images/css.png";
import js from "../../componets/assets/images/js.png";
import php from "../../componets/assets/images/php.png";
import react from "../../componets/assets/images/react.png";
import next from "../../componets/assets/images/next.png";
import nodeExp from "../../componets/assets/images/nodeExp.png";
import mySQL from "../../componets/assets/images/mySQL.png";
import mongodb from "../../componets/assets/images/mongodb.png";

export default function Skills() {
  return (
    <div className="relative  h-screen p-16">
      <div className="bg-[#d4d1d1] relative w-[70%] h-full p-10 float-right ">
        <div className=" h-full p-14 space-y-8 bg-[#e5e2e0]  text-[#4A4A4A] text-[15px]">
          <p>
            I'm Mandla Mbolekwa, final year student at Unisa and a software
            developer with a passion for creating and developing web and mobile
            applications. I have a strong interest in software and web
            development.
          </p>
          <p>
            In addition to formal education, I have proactively pursued personal
            development opportunities including learning beyond formal education
            and completing a certificate in programming from Udacity
          </p>
          <p>
            I am currently seeking an internship, entry-level, or part-time
            opportunity where I can demonstrate my programming skills and gain
            hands-on experience.
          </p>
        </div>

        <div
          className="absolute flex gap-8 border w-[58%] ml-3 -left-[50%] h-38 top-[20%] p-6 text-sm"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <div className="flex flex-col justify-center gap-3">
            <img src={php} alt="" className="w-12 rounded-md" />
            <img src={react} alt="" className="w-12 rounded-lg" />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <img src={php} alt="" className="w-12 rounded-md" />
            <img src={mongodb} alt="" className="w-12 h-10 rounded-lg" />
            <img src={mySQL} alt="" className="w-12 rounded-md" />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <img src={nodeExp} alt="" className="w-14 h-12 rounded-md" />
            <img src={react} alt="" className="w-14 rounded-lg" />
            <img src={next} alt="" className="w-14 rounded-md" />
          </div>
          <div className="space-y-5">
            <img src={html} alt="" className="w-16 rounded-md" />
            <img src={css} alt="" className="w-16 rounded-lg" />
            <img src={js} alt="" className="w-16 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
