import React from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Destination() {
  const destinations = [
    {
      id: 1,
      country: 'France',
      description: 'A beautiful country with a rich history and culture.',
      imgSrc: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZyYW5jZXxlbnwwfHwwfHx8MA%3D%3D',
      link: '/france',
    },
    {
      id: 2,
      country: 'India',
      description: 'A land of captivating beauty and rich cultural heritage.',
      imgSrc: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGluZGlhfGVufDB8MXwwfHx8MA%3D%3D',
      link: '/india',
    },
    {
      id: 3,
      country: 'Japan',
      description: 'A country full of history, culture, and natural beauty.',
      imgSrc: 'https://images.unsplash.com/photo-1605523746900-8aa30db1befd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGphcGFufGVufDB8MXwwfHx8MA%3D%3D',
      link: '/japan',
    },
    {
      id: 4,
      country: 'Greece',
      description: 'This picturesque island in the Cyclades is known for its stunning whitewashed villages',
      imgSrc: 'https://images.unsplash.com/photo-1508855173839-a6d69c12573a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGdyZWVjZXxlbnwwfDF8MHx8fDA%3D',
      link: '/greece',
    },

  ];

  return (
    <section id='destination' className="bg-regal-green pb-10">
      <h1 className="flex items-center justify-center py-10 font-lobster text-8xl font-bold ">Destinations</h1>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
        {destinations.map((destination) => (
          <div 
          data-aos="fade-up"
          className="relative h-[400px] w-[300px] rounded-md overflow-hidden " key={destination.id}>
            <img
              src={destination.imgSrc}
              alt="Destination"
              className="z-0 h-full w-full rounded-lg object-cover"
            />
          
            <div className="absolute h-[450px] bottom-2 left-0 text-left translate-y-[80px] hover:-translate-y-0 transition-all duration-700 ease-in-out">
              <div className="relative top-[340px] bg-regal-red pl-4 pb-3.5 rounded-lg">
                <h1 className="text-lg font-semibold text-white">{destination.country}</h1>
                <p className="mt-2 text-sm text-gray-100">{destination.description}</p>
                {destination.link ? (
                  <NavLink to={destination.link} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    View Profile &rarr;
                  </NavLink>
                ) : (
                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    View Profile &rarr;
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destination;
