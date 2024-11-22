import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

import { FaHotel } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
import { MdFlight } from "react-icons/md";
import { IoIosWalk } from "react-icons/io";
import { MdCurrencyExchange } from "react-icons/md";
import { MdGTranslate } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { GiCruiser } from "react-icons/gi";



function AboutUs() {
  const services = [
    {
      icon: FaHotel,
      title: "Hotel Bookings",
      description: "Find and book hotels at your destination. You can search for hotels based on location, price, and amenities to find the perfect place to stay during your trip.",
    },
    {
      icon: FaCar,
      title: "Car Rental",
      description: "Allow your customers to rent cars for their trip. You can provide them with a list of car rental companies, car models, and prices to choose from.",
    },
    {
      icon: MdFlight,
      title: "Flight Booking",
      description: "Another essential service for a travelers' website is flight booking. This service should allow users to search for flights by destination, date, and time.",
    },
    {
      icon: IoIosWalk,
      title: "Activities and Tours",
      description: "Many travelers enjoy participating in activities  when they are visiting a new destination. A travelers' website should offer a service that allows users to search for activities. ",
    },
    {
      icon: MdCurrencyExchange,
      title: "Currency Exchange",
      description: "Travelers often need to exchange currency when they are visiting a new country. A travelers' website should offer a currency exchange service that allows users to .",
    },
    {
      icon: MdGTranslate,
      title: "Language Translation",
      description: "Language barriers can be a major challenge for travelers. A travelers' website should offer a language translation service that allows users to translate text from.",
    },
    {
      icon: MdGroups,
      title: "Group Tours",
      description: "Organize group tours to popular destinations and offer your customers a chance to travel with like-minded people. You can provide them with a fixed itinerary.",
    },
    {
      icon: GiCruiser,
      title: "Cruise Packages",
      description: "Offer cruise packages to customers who want to explore the world by sea. You can provide them with a list of destinations, cruise lines, and cabin options.",
    },
  ];

  return (
    <div className="bg-white pb-10">
      <h1 className="flex items-center justify-center text-8xl font-bold py-10 font-lobster">About Us</h1>
      <div className="flex flex-wrap items-center justify-center px-32 gap-x-10 gap-y-5">
        {services.map((service) => (
          <div
            data-aos="fade-up"
            key={service.title}
            className="flex flex-col items-center  sm:w-[280px] md:w-[300px] lg:w-[250px] rounded-lg  bg-white text-white  shadow-xl border-2	 border-regal-red"
          >
            <div className="flex flex-col items-center py-4 bg-regal-red w-full rounded-sm">
            <service.icon className="text-2xl" />
            <h1 className="text-lg font-Montserrat font-bold text-center mt-3">
              {service.title}
            </h1>
            </div>
            <p className="mt-3 text-sm text-gray-700 text-center p-4 font-Montserrat">{service.description}</p>
          </div>
        ))}
      </div>y
      
    </div>
  );
}

export default AboutUs;
