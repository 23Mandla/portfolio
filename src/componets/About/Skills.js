import React from "react";
import html from "../../componets/assets/images/html.png";
import node from "../../componets/assets/images/node.png";
import js from "../../componets/assets/images/js.png";
import php from "../../componets/assets/images/php.png";
import java from "../../componets/assets/images/java.png";
import react from "../../componets/assets/images/react.png";
import next from "../../componets/assets/images/next.png";
import express from "../../componets/assets/images/express.png";
import mySQL from "../../componets/assets/images/mySQL.png";
import firebase from "../../componets/assets/images/firebase.png";
import mongodb from "../../componets/assets/images/mongodb.png";

export default function Skills() {
  return (
    <div className="relative space-y-10 md:space-y-0 h-screen p-16">
      <div className="w-full grid grid-cols-2 md:hidden gap-5">
        {/** insert title skills on side here */}
        <div className="flex flex-col gap-5">
          <div className="flex justify-end">
            <img src={php} alt="" className="w-[50%] rounded-md p-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)"}}/>
          </div>
          <div className="flex justify-end gap-10">
            <img src={java} alt="" className="w-[25%] rounded-lg p-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)"}} />
            <img src={firebase} alt="" className="w-[25%] rounded-md p-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)"}}/>
          </div>
        </div>
        <div className="p-5 rounded-md" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
         <img src={html} alt="" className="w-full h-full rounded-md"/>
        </div>
      </div>
      <div className="bg-[#d4d1d1] relative w-full h-full p-10 float-right md:w-[70%]">
        <div className=" h-full p-14 space-y-8 bg-[#e5e2e0]  text-[#4A4A4A] text-[14.5px]">
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
          className="hidden absolute md:flex gap-8 border w-[58%] ml-3 -left-[50%] h-38 top-[20%] p-6 text-sm "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <div className="flex flex-col justify-center gap-3">
            <div className="bg-[#7A86B8] rounded-md">
              <img src={php} alt="" className="w-12 rounded-m" />
            </div>
            <div className="bg-[#d4d6d9] rounded-md">
              <img src={java} alt="" className="w-12 rounded-lg" />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <div className="bg-white rounded-md">
              <img src={firebase} alt="" className="w-12 rounded-md" />
            </div>
            <div className="bg-[#001D2A] rounded-md">
              <img src={mongodb} alt="" className="w-12 h-10 rounded-lg" />
            </div>
            <div className="bg-[#3E6E93] rounded-md">
              <img src={mySQL} alt="" className="w-12 rounded-md" />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <div className="bg-black rounded-md p-1">
              <img src={express} alt="" className="w-14 h-12 rounded-md" />
            </div>
            <div className="bg-[#23272F] rounded-md p-1">
              <img src={react} alt="" className="w-14 rounded-lg" />
            </div>
            <div className="bg-gray-500 rounded-md p-1">
              <img src={next} alt="" className="w-14 rounded-md" />
            </div>
          </div>
          <div className="space-y-5">
            <div className="bg-orange-300 rounded-md p-2">
              <img src={html} alt="" className="w-16 rounded-md" />
            </div>
            <div className="bg-white rounded-md p-2">
              <img src={node} alt="" className="w-16 rounded-lg" />
            </div>
            <div className="bg-gray-500 rounded-md p-1">
              <img src={js} alt="" className="w-16 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
