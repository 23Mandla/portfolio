import bg from "../assets/images/about.png";

export default function About() {
  return (
      <div className="relative w-full md:w-full  px-20 space-y-20 md:space-y-0 h-screen" style={{backgroundImage:`url(${bg})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <div className="absolute bg-[#ccb28c] py-12 col-span-2 w-[60%] right-10 top-[10%]">
         
          <div className="m-auto w-[100%] mb:w-[83%] h-full p-12 space-y-8 bg-[#9e8e6f]  text-[#FFFFFFFF] text-[12px] mb:text-[14px]">
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
        {/**ADD CODE DESIGN AND PROGRAMMING CIRCLE DESIGN*/}
      </div>
    
   
  );
}
