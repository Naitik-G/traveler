import React from "react";
import Profile1 from "../assets/Profile1.jpg";
import Profile2 from "../assets/Profile2.jpg";
import Profile3 from "../assets/Profile3.jpg";
import Profile4 from "../assets/Profile4.jpg";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const profiles = [
  {
    id: 1,
    name: "Mary",
    image: Profile1,
    testimonial:
      "I had an amazing experience with this agency. The staff was very helpful and friendly. They helped me plan my trip and made sure everything went smoothly. I would definitely recommend them to anyone looking for a great travel experience",
  },
  {
    id: 2,
    name: "Albert",
    image: Profile2,
    testimonial:
      "I was very impressed with the level of service I received from this agency. They were very knowledgeable and helped me find the perfect vacation package. I would definitely use them again in the future.",
  },
  {
    id: 3,
    name: "jon",
    image: Profile3,
    testimonial:
      "This agency is fantastic! They helped me plan a trip that was perfect for me and my family. The staff was very friendly and knowledgeable, and they made sure everything went smoothly. I would highly recommend them to anyone looking for a great travel experience.",
  },
  {
    id: 4,
    name: "jessi",
    image: Profile4,
    testimonial:
      "I had a wonderful experience with this agency. They were very professional and helped me plan a trip that was exactly what I was looking for. The staff was very friendly and knowledgeable, and they made sure everything went smoothly. I would definitely use them again in the future",
  },
];

const HappyCustomer = () => {
  return (
    <div className="bg-regal-green p-2">
      <h1 className="flex items-center justify-center text-8xl font-bold pt-4 font-lobster">
        Happy Customer
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-5 pt-20 pb-10">
        {profiles.map((profile) => (
          <div key={profile.id}
            data-aos="fade-up"
           className="flex w-[650px] bg-white shadow-xl	 p-2 rounded-lg border-2 border-regal-red">
            <img className="w-32 p-0.5 rounded-full  " src={profile.image} alt="" />
            <div className="p-5">
              <p className="text-xl font-bold">{profile.name}</p>
              <p className="">{profile.testimonial}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyCustomer;
