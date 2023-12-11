import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function Contact() {

  return (
    <section id="contact">
    <div className="pl-2 lg:flex lg:flex-row lg:items-center">
      <div className="w-full lg:w-1/2">
        <div className="my-10 lg:my-0 lg:px-10">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-8xl font-lobster">
            Contact us
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nesciunt eos facilis
            debitis voluptas iure consectetur odit fugit voluptate recusandae?
          </p>

          <form action="#" method="POST" className="mt-8 max-w-xl">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                  type="email"
                  placeholder="Email"
                />
                <button
                  type="button"
                  className="rounded-md bg-regal-red px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-regal-red/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full lg:w-1/2 ">
        <img
          src="https://images.unsplash.com/flagged/photo-1573998594056-53123f2fedec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG91cmlzdHxlbnwwfHwwfHx8MA%3D%3D"
          alt="ManWith Laptop"
          className="h-full w-full rounded-l-full border-regal-red border-y-4 border-l-4 object-cover"
        />
      </div>
    </div>
  </section>
  );
}

export default Contact;
