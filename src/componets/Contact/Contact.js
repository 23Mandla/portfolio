import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="grid grid-cols-3 w-full h-full pt-[4%]">
      <div className="relative  bg-[#BFA48D]">
        <div className="absolute left-7 top-[28%] bg-[#eeddd2] w-[25em] h-[40%] text-black">
          <h1 className="w-full text-center p-5 text-3xl">Contact me</h1>
          <div className="w-1/2 relative left-10 pt-5">
            <p className="text-sm">
              For any inquiries please complete the form or send me an email :
            </p>
            <a href="mailto:mandlambolekwa@gmail.com">
              mandlambolekwa@gmail.com
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 w-1/2 pl-1 flex gap-10 justify-center pt-10">
          <div className="bg-[#858585] p-2 flex items-center justify-center rounded-full hover:scale-110 transition-all">
            <FaGithub className="text-xl text-[#1C2128] cursor-pointer" />
          </div>
          <div className="bg-[#858585] p-2 flex items-center justify-center rounded-full cursor-pointer  hover:scale-110 transition-all">
            <FaLinkedin className="text-xl rounded-full text-gray-500" />
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-[#8b5f40]">
        <div className="relative right-10 w-[85%] top-[15%] float-right h-[70%]">
          <form className="w-[88%] float-right translate-y-[20%]">
            <div className="space-y-8 items-center gap-4">
              <div className="flex flex-1 justify-between w-full gap-3">
                <div className="w-full">
                  <input
                    className="w-full h-10 p-2 rounded-md bg-transparent border border-gray-300"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="w-full">
                  <input
                    className="w-full h-10 p-2 rounded-md bg-transparent border border-gray-300"
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="rounded-md">
                <textarea
                  className="w-full h-40 p-2 rounded-md bg-transparent border border-gray-300"
                  type="text"
                  placeholder="Message"
                />
              </div>
              <div className="">
                <button className="px-12 py-2 bg-[#868484] rounded-md text-black">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
