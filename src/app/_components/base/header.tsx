"use client";

import Link from "next/link";
import Logo from "./logo";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  {
    id: 0,
    title: "ABOUT US",
    href: "/about",
  },
  {
    id: 1,
    title: "GALLERY",
    href: "/#gallery",
  },
  {
    id: 2,
    title: "EVENT SPACE",
    href: "/#event-space",
  },
  {
    id: 3,
    title: "SERVICES",
    href: "/#services",
  },
  {
    id: 4,
    title: "BOOKINGS",
    href: "/bookings",
  },
  {
    id: 5,
    title: "CONTACT",
    href: "/contact",
  },
];
const Header = () => {
  return (
    <header
      className={`flex justify-center items-center lg:py-8 py-0 lg:px-10 px-3 sticky top-0 backdrop-blur-md bg-white/50 z-60  font-bold`}
    >
      <nav className="lg:w-[75%] text-sm font-light lg:flex justify-between items-center hidden">
        <div className="flex justify-between w-[35%] text-sm font-">
          {navLinks.slice(0, 3).map((link) => {
            return (
              <Link className="" key={link.id} href={link.href}>
                {link.title}
              </Link>
            );
          })}
        </div>

        <div className="w-[30%] lg:mx-8">
          <Logo size={200} />
        </div>

        <div className="flex justify-between w-[35%]">
          {navLinks.slice(3, 6).map((link) => {
            return (
              <Link className="" key={link.id} href={link.href}>
                {link.title}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="lg:hidden w-full">
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;

const MobileMenu = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="">
      <div className="relative flex items-center justify-center py-4">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          {/* Optional: placeholder to balance layout */}
        </div>

        <Logo size={100} />

        <button
          onClick={() => setNavOpen(!navOpen)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl"
        >
          ☰
        </button>
      </div>
      {navOpen && (
        <nav className="mt-4">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="block py-2 px-4 hover:bg-gray-200"
                  onClick={() => setNavOpen(false)} // 👈 Close nav
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};
