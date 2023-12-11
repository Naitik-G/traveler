import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();


function France() {
  const data = {
    titleOne: "Effiel Tower",
    descOne:
      "The Eiffel Tower is the most recognizable landmark in Paris, and it is a must-see for any visitor. Take the elevator to the top for stunning views of the city.",
    imageOne:
      "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWZmaWVsJTIwVG93ZXJ8ZW58MHwwfDB8fHww",

    titleTwo: "Louvre Museum",
    descTwo:
      "The Louvre Museum is one of the largest and most famous museums in the world. It houses a vast collection of art and artifacts, including the Mona Lisa and Venus de Milo.",
    imageTwo:
      "https://images.unsplash.com/photo-1565099824688-e93eb20fe622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TG91dnJlJTIwTXVzZXVtfGVufDB8MHwwfHx8MA%3D%3D",

    titleThree: "Arc de Triomphe",
    descThree:
      " The Arc de Triomphe is a triumphal arch that is located at the end of the Champs-Élysées. It was built to commemorate Napoleon's victories, and it is a popular spot for taking photos.",
    imageThree:
      "https://images.unsplash.com/photo-1507666664345-c49223375e33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXJjJTIwZGUlMjBUcmlvbXBoZXxlbnwwfDB8MHx8fDA%3D",

    titleFour: "Seine River",
    descFour:
      "The Seine River is a major river that flows through Paris. It is a popular spot for taking a boat tour or simply strolling along the banks.",
    imagefour:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U2VpbmUlMjBSaXZlcnxlbnwwfDB8MHx8fDA%3D",
  };

  return (
    <div className="bg-regal-green py-10 text-black">
      <h1 className="text-black inset-0 pl-8 font-bold font-lobster text-8xl">
        What we do here 
      </h1>
      <div
        className="flex flex-wrap justify-center gap-x-[200px]"
        data-aos="fade-up"
      >
        <div className="sm:w-full md:w-1/2 lg:w-1/3 p-5">
          <h1 className="p-10 text-6xl font-Montserrat font-bold ">{data.titleOne}</h1>
          <p className="text-lg px-10 w-f]
          ull font-Montserrat">{data.descOne}</p>
        </div>
        <img
          src={data.imageOne}
          alt="Eiffel Tower"
          className="sm:w-full md:w-1/2 lg:w-1/3 rounded-3xl"
        />
      </div>
      <div
        className="flex flex-wrap md:flex-wrap-reverse sm:flex-wrap-reverse pt-5 justify-center gap-x-[200px]"
        data-aos="fade-up"
      >
        <img
          src={data.imageTwo}
          alt="Louvre Museum"
          className="sm:w-full md:w-1/2 lg:w-1/3 rounded-3xl"
        />
        <div className="sm:w-full md:w-1/2 lg:w-1/3 p-5">
          <h1 className="p-10 text-5xl font-Montserrat font-bold">{data.titleTwo}</h1>
          <p className="text-lg px-10 w-full">{data.descTwo}</p>
        </div>
      </div>
      <div
        className="flex flex-wrap justify-center gap-x-[200px] pt-5"
        data-aos="fade-up"
      >
        <div className="sm:w-full md:w-1/2 lg:w-1/3 p-5">
          <h1 className="p-10 text-5xl font-Montserrat font-bold">{data.titleThree}</h1>
          <p className="text-lg px-10 w-full">{data.descThree}</p>
        </div>
        <img
          src={data.imageThree}
          alt="Arc de Triomphe"
          className="sm:w-full md:w-1/2 lg:w-1/3 rounded-3xl"
        />
      </div>
      <div
        className="flex flex-wrap md:flex-wrap-reverse pt-5 justify-center gap-x-[200px]"
        data-aos="fade-up"
      >
        <img
          src={data.imagefour}
          alt="Seine River"
          className="sm:w-full md:w-1/2 lg:w-1/3 rounded-3xl"
        />
        <div className="sm:w-full md:w-1/2 lg:w-1/3 p-5">
          <h1 className="p-10 text-5xl font-Montserrat font-bold">{data.titleFour}</h1>
          <p className="text-lg px-10 w-full">{data.descFour}</p>
        </div>
      </div>
    </div>
  );
}

export default France;
