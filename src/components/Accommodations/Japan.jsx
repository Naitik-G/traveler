import React from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function Japan() {
  const data = {
    title: "Mount Fuji",
    desc: "This iconic volcano is the highest mountain in Japan and a symbol of the country. Its snow-capped peak is visible from many parts of Tokyo and can be climbed during the summer months. ",
    imageOne: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnQlMjBmdWppfGVufDB8fDB8fHww",

    titleOne: "Tokyo",
    descOne:
      "The capital city of Japan is a bustling metropolis with a mix of modern and traditional attractions. Visitors can explore the neon-lit streets of Shibuya, visit the Meiji Shrine.",
    imageTwo: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG9reW98ZW58MHwwfDB8fHww",

    titleThree: "Kyoto",
    descThree:
      "This ancient city was once the capital of Japan and is home to many historical and cultural treasures. Visitors can explore the Kiyomizu-dera temple.",
    imageThree: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a295b3RvfGVufDB8fDB8fHww",

    titleFour: "Osaka",
    descFour:
      " This lively city is known for its delicious food, vibrant nightlife, and friendly people. Visitors can enjoy a delicious meal in Dotonbori,or visit the Osaka Castle. ",
    imageFour: "https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3Nha2F8ZW58MHwwfDB8fHww",
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
          <p className="text-lg px-10 w-full font-Montserrat">{data.descOne}</p>
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
          src={data.imageFour}
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

export default Japan