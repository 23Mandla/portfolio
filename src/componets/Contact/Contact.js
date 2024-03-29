import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="grid md:grid-cols-3 w-full h-full">
      <div className="relative hidden md:block bg-[#dbc3af]">
        <div className="absolute left-7 top-10 md:top-[28%] bg-[#dec8b9] w-[25em] h-[40%] text-black">
          <h1 className="w-full text-center p-5 text-2xl">Contact me</h1>
          <div className="w-1/2 relative left-10">
            <p className="text-sm">
              For any inquiries please complete the form or send me an email :
            </p>
            <a href="mailto:mandlambolekwa@gmail.com">
              mandlambolekwa@gmail.com
            </a>
          </div>
          <div className="w-1/2 pl-1 flex gap-10 justify-center pt-5 pb-2">
            <div className="bg-[#858585] p-2 flex items-center justify-center rounded-full hover:scale-110 transition-all">
              <FaGithub className="text-xl text-[#1C2128] cursor-pointer" />
            </div>
            <div className="bg-[#858585] p-2 flex items-center justify-center rounded-full cursor-pointer  hover:scale-110 transition-all">
              <FaLinkedin className="text-xl rounded-full text-gray-300" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-[#8b5f40] p-16">
        <div className="relative w-full md:w-[95%]  md:top-[5%] float-right h-[90%]">
          <form className="absolute bottom-0 w-full md:w-[90%] float-right md:top-[20%]">
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
