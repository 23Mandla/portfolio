import me from "../assets/images/cartoon.png";
import bg from "../assets/images/about.png";

export default function About() {
  return (
      <div className="relative w-full md:w-full pt-24 px-20 space-y-20 md:space-y-0 h-screen  after:content-[''] after:absolute after:bg-gray-600 after:h-[1px] after:w-[80%] after:bottom-10 after:left-[10%]" style={{backgroundImage:`url(${bg})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
     
        <div className="bg-[#ccb28c] py-12 col-span-2 relative w-[60%] float-right">
          <div className="absolute h-20 w-20 rounded-full -top-6 -left-4 mb:-left-8 bg-black block md:hidden">
            <img src={me} alt="me" className="w-full h-full rounded-full" />
          </div>
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
      </div>
    
   
  );
}
