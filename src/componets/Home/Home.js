import React from "react";
import Slider from "react-slick";
import free from "../assets/images/free.jpg";
import site from "../assets/images/site.jpg";
import blog from "../assets/images/blog.jpg";
import stokveel from "../assets/images/stokveel.png";
import star from "../assets/images/star-1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    name: "free",
    image: free,
    link: "https://www.google.com",
  },

  {
    name: "site",
    image: site,
    link: "https://www.google.com",
  },

  {
    name: "blog",
    image: blog,
    link: "https://www.google.com",
  },

  {
    name: "stokveel",
    image: stokveel,
    link: "https://www.google.com",
  },
];

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="space-y-10 h-[100%] pb-10">
      <div className="flex items-center justify-center gap-20">
        <img src={star} alt="" className="h-7" />
        <h1 className="text-5xl text-center text-orange-700">
          Mandla Mbolekwa
        </h1>
        <img src={star} alt="" className="h-7" />
      </div>
      <div className="relative border border-gray-600 w-[90%] h-[83%] m-auto rounded-md p-4">
        <div className="h-full w-[45%] bg-[#1D1D1D] p-2 rounded-md">
          <h1>I'm a final year IT student at Unisa</h1>
        </div>
        <div className="absolute right-14 w-96 h-56 border border-gray-900 bottom-5 mt-10 rounded-md">
          <Slider {...settings}>
            {data.map((item) => (
              <div className="h-56 rounded-md">
                <div
                  className="h-3/4 rounded-t-md bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="flex items-center justify-center h-1/4 rounded-b-md">
                  <a href={item.link}>{item.name}</a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
