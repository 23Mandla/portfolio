import React from "react"

export default function Home() {
  return (
    <div className="space-y-10 h-[100%] pb-10">
      <h1 className="text-7xl text-center text-orange-700">Mandla Mbolekwa</h1>
      <div className="relative border border-gray-600 w-[90%] h-[77%] m-auto rounded-md p-4">
        <h1>I'm a final year IT student at Unisa</h1>
        <div className="absolute right-10 w-80 h-52 border border-gray-900 bottom-5 rounded-md grid grid-rows-3">
          <div className="row-span-2 bg-black">Image</div>
          <div className="bg-red-200"></div>
          <div className="bg-red-200">Link</div>
        </div>
      </div>
    </div>
  )
}
