import me from "../assets/images/cartoon.png";

export default function About() {
  return (
      <div className="relative w-full md:w-full space-y-20 md:space-y-0 h-full p-5 mb:p-16 md:grid gap-5 md:grid-cols-3 after:content-[''] after:absolute after:bg-gray-600 after:h-[1px] after:w-[80%] after:-bottom-10 after:left-[10%]">
        <div className="block md:grid md:grid-rows-3">
          <h1 className="relative text-center md:text-center  text-4xl pl-5 md:top-12  after:content-[''] after:absolute after:bg-gray-600 after:h-[1px] after:w-[50%] md:after:w-[80%] after:top-14 after:left-[25%] md:after:left-[12%] ">About me</h1>
          <div className="relative hidden md:block row-span-2 m-2 -top-7">
            <div className="absolute top-0 left-0 w-full h-full holder rounded-lg"></div>
            <img
              src={me}
              alt="placeholder"
              className="w-full h-full object-cover top-0 rounded-lg"
            />
          </div>
        </div>
        <div className="bg-[#dedbdb] p-5 mb:p-10 col-span-2 relative">
          <div className="absolute h-20 w-20 rounded-full -top-6 -left-4 mb:-left-8 bg-black block md:hidden">
            <img src={me} alt="me" className="w-full h-full rounded-full" />
          </div>
          <div className="m-auto w-[100%] mb:w-[83%] h-full p-12 space-y-8 bg-[#bfbebc]  text-[#ffffff] text-[12px] mb:text-[14.5px]">
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
