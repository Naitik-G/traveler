import React from "react";
import Tourists from "../assets/Tourists.jpg";

function Home() {
  return (
    <div className=" w-full h-screen bg-white overflow-hidden md:h-1/2 sm:h-[300px] text-black relative">
      <img
        src={Tourists}
        alt=""
        className="z-0 h-full w-full object-cover"
      />
      <div class="z-0 w-screen inset-0 bg-black opacity-20 absolute"></div>
        <div className="absolute top-36 left-28 text-left">
          <h1 className=" text-8xl font-bold tracking-tight text-white md:text-8xl lg:text-9xl font-lobster ">
            Travel world <br /> with us
          </h1>
          <p className=" text-2xl text-gray-100 py-2 pr-2 font-Montserrat">
          Traveling can be one of the most life-changing experiences of our lives. <br /> It can broaden our horizons,
          </p>
        
      </div>
    </div>
  );
}

export default Home;
