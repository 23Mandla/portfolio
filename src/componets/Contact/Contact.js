export default function Contact() {
  return (
    <div className="grid grid-cols-3 w-full h-full pt-[4%]">
      <div className="relative  bg-[#BFA48D]">
        <div className="absolute left-10 top-[28%] bg-[#eeddd2] w-[25em] h-[40%] text-black">
          <h1 className="w-full text-center p-5 text-3xl">Contact me</h1>
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
