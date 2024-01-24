import stokvel from "../../componets/assets/images/stokveel.png";

export default function Work() {

  
  return (
    <div className="relative space-y-16 h-screen">
      <div className="relative w-[70%] h-full bg-[#D5D5D5] flex items-center justify-center float-right">
        <div className="absolute -left-[25%] w-1/2 bg-orange-500 text-center py-5">
          <h1>PIXEL ART MAKER</h1>
        </div>
        <div className="w-[70%] h-[70%]">
          <img src={stokvel} alt="placeholder" className="w-full h-full" />
        </div>
      </div>
      <div className="relative w-[70%] h-full bg-[#D5D5D5] flex items-center justify-center float-right">
        <div className="absolute -left-[25%] w-1/2 bg-orange-500 py-3 text-center">
          <h1>PIXEL ART MAKER</h1>
        </div>
        <div className="w-[70%] h-[70%]">
          <img src={stokvel} alt="placeholder" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
