import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/09/travel-logo-design.jpg"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className={`w-6 h-6 fill-current text-gray-500 ${
                isMenuOpen ? "" : "hidden"
              }`}
              viewBox="0 0 24 24"
            >
              <path d="M4.293 5.293a1 1 0 011.414 0L12 11.586l6.293-6.293a1 1 0 111.414 1.414L13.414 13l6.293 6.293a1 1 0 01-1.414 1.414L12 14.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 13 4.293 6.707a1 1 0 010-1.414z" />
            </svg>
          </button>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:block justify-between items-center w-full lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive
                          ? "text-orange-700"
                          : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
