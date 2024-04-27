
import React from 'react';
import Slider from "react-slick"; 
import pdata from './myData.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ( ) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {pdata?.map((d) => (
            <div className="bg-white h-[450px] text-black rounded-xl" key={d.id}>
              <div className="rounded-t-xl bg-indigo-500 flex justify-center items-center">
                <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p>{d.review}</p>
                {/* Additional content here */}
                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
