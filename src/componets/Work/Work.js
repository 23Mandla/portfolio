import todo from "../../componets/assets/images/todo.png";
import art from "../../componets/assets/images/art.png";
import { FaGithub } from "react-icons/fa";

export default function Work() {
  return (
    <>
      <div className="relative p-16 md:p-10 h-full bg-[hsl(24,29%,93%)] after:content-[''] after:absolute after:bg-gray-600 after:h-[1px] after:w-[80%] after:bottom-8 after:left-[10%]">
        <div className="relative w-full h-[90%] bg-[#D5D5D5] flex items-center justify-center float-right md:w-[70%]">
          <div className="absolute -left-12 w-1/2 bg-[#b1b6bc] text-center py-8 space-y-0 md:space-y-10 md:-left-[30%] -top-16 md:top-[30%]">
            <h1 className="text-xl hidden md:block">PIXEL ART MAKER</h1>
            <div className="w-full grid grid-flow-col items-center justify-around">
              <div className="cursor-pointer bg-slate-500 px-3 py-3 rounded-full">
                <FaGithub className="text-2xl"/>
              </div>
              <div className="cursor-pointer bg-slate-500 px-6 py-2">
                <h1>View Demo</h1>
              </div>
            </div>
          </div>
          <div className="w-[75%] h-[70%]">
            <img src={art} alt="placeholder" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="relative p-16 md:p-10 h-full bg-[hsl(24,29%,93%)]">
        <div className="relative w-full md:w-[70%] h-[90%] bg-[#D5D5D5] flex items-center justify-center mt-10 md:mt-0">
          <div className="absolute -right-12 md:-right-[30%] w-1/2 bg-[#b1b6bc] text-center py-8 space-y-0 md:space-y-10 -top-16 md:top-[30%]">
            <h1 className="text-xl hidden md:block">TODO APP</h1>
            <div className="w-full grid grid-flow-col items-center justify-around">
              <div className="cursor-pointer bg-slate-500 px-3 py-3 rounded-full">
                <FaGithub className="text-xl "/>
              </div>
              <div className="cursor-pointer bg-slate-500 px-6 py-2">
                <h1>View Demo</h1>
              </div>
            </div>
          </div>
          <div className="w-[75%] h-[70%]">
            <img src={todo} alt="placeholder" className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}
