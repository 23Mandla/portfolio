import me from "../assets/images/home-pic-3.jpg";

export default function About() {
  return (
  
      <div className="relative h-screen p-16 grid grid-cols-3 gap-5 after:content-[''] after:absolute after:bg-gray-600 after:h-[1px] after:w-[80%] after:-bottom-5 after:left-[10%]">
        <div className="grid grid-rows-3">
          <h1 className="relative text-5xl pl-5 top-12 left-5 after:content-[''] after:absolute after:bg-gray-600 after:h-[1px] after:w-[50%] after:top-14 after:left-[14%]">About me</h1>
          <div className="relative row-span-2 m-2 -top-7">
            <div className="absolute top-0 left-0 w-full h-full holder"></div>
            <img
              src={me}
              alt="placeholder"
              className="w-full h-full object-cover top-0"
            />
          </div>
        </div>
        <div className="bg-[#dfdfdf] p-10 col-span-2">
          <div className="m-auto w-[83%] h-full p-12 space-y-8 bg-[#F3EDE9]  text-[#4A4A4A] text-sm">
            <p>
              I'm Mandla Mbolekwa, final year student at Unisa and a software
              developer with a passion for creating and developing web and
              mobile applications. I have a strong interest in software and web
              development.
            </p>
            <p>
              In addition to formal education, I have proactively pursued
              personal development opportunities including learning beyond
              formal education and completing a certificate in programming from
              Udacity
            </p>
            <p>
              I am currently seeking an internship, entry-level, or part-time
              opportunity where I can demonstrate my programming skills and gain
              hands-on experience.
            </p>
          </div>
        </div>
      </div>
    
   
  );
}
