"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 text-white shadow-md p-4 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
         
          <h1 className="flex items-center space-x-2 font-bold text-3xl">
            <svg
              width="22"
              height="33"
              viewBox="0 0 10 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.38861 10.4734C6.38861 11.8114 6.38861 13.4418 4.54557 14.1063C6.43291 14.7532 6.38861 16.1266 6.38861 17.562V22.8785C6.38861 23.8886 6.7962 24.5 7.52279 24.6506C7.68244 24.7045 7.85064 24.7285 8.01899 24.7215H9.79114V28.2658H6.86709C3.7481 28.2658 2.02911 26.4937 2.02911 23.2063V16.9152C2.00699 16.5922 1.86458 16.2893 1.63 16.0662C1.39541 15.8431 1.08571 15.716 0.762025 15.7101H0V12.6H0.762025C1.09216 12.5956 1.40796 12.4644 1.64388 12.2334C1.87981 12.0024 2.01776 11.6895 2.02911 11.3595V4.97975C2.02911 1.74557 3.71266 0 6.86709 0H9.81772V3.49114H8.04557C7.87702 3.49163 7.70958 3.51854 7.54937 3.57089C6.82278 3.75696 6.41519 4.35949 6.41519 5.34304L6.38861 10.4734Z"
                fill="white"
              />
            </svg>
            <>Finsweet</>
          </h1>

         
          <div className="hidden md:flex space-x-6 items-center">
            <ul className="flex space-x-6">
              {["Home", "Blog", "About", "Register"].map((name, index) => (
                <li key={index}>
                  <Link href={name === "Home" ? "/" : `/${name.toLowerCase()}`}>
                    <span
                      className={`text-white hover:text-gray-600 cursor-pointer ${
                        pathname === (name === "Home" ? "/" : `/${name.toLowerCase()}`)
                          ? "font-bold text-black"
                          : ""
                      }`}
                    >
                      {name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/login">
              <button className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600">
                Login
              </button>
            </Link>
          </div>

          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>


      <div
        className={`fixed top-0 right-0 h-screen w-1/2 bg-white shadow-md p-4 z-40 duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute top-4 right-4" onClick={toggleMenu}>
          <X size={24} />
        </button>
        <ul className="mt-12">
          {["Home", "Blog", "About", "Register"].map((name, index) => (
            <li key={index} className="py-2 border-b">
              <Link href={name === "Home" ? "/" : `/${name.toLowerCase()}`}>
                <span
                  className={`text-gray-600 hover:text-black block ${
                    pathname === (name === "Home" ? "/" : `/${name.toLowerCase()}`)
                      ? "font-bold text-black"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Link href="/login">
            <button className="bg-blue-500 w-full py-2 rounded-md text-white hover:bg-blue-600">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
