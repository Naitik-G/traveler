import React from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function India() {
  const data = {
    titleOne: "Taj Mahal",
    descOne: " This iconic white marble mausoleum is located in Agra, India. It was built by Mughal emperor Shah Jahan in memory of his third wife Mumtaz Mahal. ",
    imageOne: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D",

    titleTwo: "Red Fort",
    descTwo:
      "This 17th century fort is located in Delhi, India. It was built by Mughal emperor Shah Jahan and was the seat of Mughal power for over 200 years.",
    imageTwo: "https://static.toiimg.com/photo/65666850/redfort1.jpg?width=748&resize=4",

    titleThree: "Golden Temple",
    descThree:
      "This Sikh gurdwara is located in Amritsar, India. It is the holiest site in Sikhism and is one of the most popular tourist attractions in India.",
    imageThree: "https://plus.unsplash.com/premium_photo-1697730426305-113c62434f97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdvbGRlbiUyMHRlbXBsZXxlbnwwfHwwfHx8MA%3D%3D",

    titleFour: "Amber Fort",
    descFour:
      "This 16th century fort is located in Jaipur, India. It was built by Kacchwaha Rajput ruler Raja Man Singh I and was the capital of the Kachchwaha dynasty for over 100 years.",
    imageFour: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/73/32.jpg",
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

export default India