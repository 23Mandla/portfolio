import stokvel from "../../componets/assets/images/stokveel.png";
import { FaGithub } from "react-icons/fa";

export default function Work() {
  return (
    <>
      <div className="relative p-10 h-full bg-[hsl(24,29%,93%)] after:content-[''] after:absolute after:bg-gray-600 after:h-[1px] after:w-[80%] after:bottom-8 after:left-[10%]">
        <div className="relative w-[70%] h-[90%] bg-[#D5D5D5] flex items-center justify-center float-right">
          <div className="absolute -left-[30%] w-1/2 bg-[#b1b6bc] text-center py-9 space-y-10">
            <h1 className="text-2xl">PIXEL ART MAKER</h1>
            <div className="w-full grid grid-flow-col items-center justify-around">
              <div className="cursor-pointer bg-slate-500 px-3 py-3 rounded-full">
                <FaGithub className="text-2xl"/>
              </div>
              <div className="cursor-pointer bg-slate-500 px-6 py-2">
                <h1>View Demo</h1>
              </div>
            </div>
          </div>
          <div className="w-[70%] h-[60%]">
            <img src={stokvel} alt="placeholder" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="relative p-10 h-full bg-[hsl(24,29%,93%)]">
        <div className="relative w-[70%] h-[90%] bg-[#D5D5D5] flex items-center justify-center space">
          <div className="absolute -right-[30%] w-1/2 bg-[#b1b6bc] text-center py-9 space-y-10">
            <h1 className="text-2xl">PIXEL ART MAKER</h1>
            <div className="w-full grid grid-flow-col items-center justify-around">
              <div className="cursor-pointer bg-slate-500 px-3 py-3 rounded-full">
                <FaGithub className="text-xl "/>
              </div>
              <div className="cursor-pointer bg-slate-500 px-6 py-2">
                <h1>View Demo</h1>
              </div>
            </div>
          </div>
          <div className="w-[70%] h-[60%]">
            <img src={stokvel} alt="placeholder" className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}
