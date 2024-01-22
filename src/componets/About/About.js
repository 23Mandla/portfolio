import me from "../assets/images/home-pic-3.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-[#9f9999] h-screen m-auto grid grid-cols-3 text-[#313030] p-2">
      <div className="relative">
        <div className="absolute bottom-[15%] left-[30%] w-full h-1/2 bg-pink-400">
          <div className="absolute top-0 left-0 w-full h-full holder"></div>
          <img src={me} alt="" className="w-full h-full object-cover" />
        </div>
        <h1 className="absolute top-16 left-24 font-bold w-full text-center text-4xl">
          ABOUT ME
        </h1>
      </div>
      <div className="bg-[#dfdfdf] col-span-2 p-2">
        <div className="w-[80%] h-full float-right p-8 space-y-8 bg-[#c7c3c0] mr-3 text-[#4A4A4A]">
          <p>
            I'm Mandla Mbolekwa, final year student at Unisa and a software
            developer with a passion for creating and developing web and mobile
            applications. I have a strong interest in software and web
            development.
          </p>
          <p>
            I am currently seeking an internship, entry-level, or part-time
            opportunity where I can demonstrate my programming skills and gain
            hands-on experience.
          </p>
          <div className="flex gap-10">
            <div className="bg-[#858585] p-2 flex items-center justify-center rounded-full hover:scale-110 transition-all">
              <FaGithub className="text-xl text-[#1C2128] cursor-pointer"/>
            </div>
            <div className="bg-[#858585] p-2 flex items-center justify-center rounded-full cursor-pointer  hover:scale-110 transition-all">
              <FaLinkedin className="text-xl rounded-full text-[#0A66C2]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
