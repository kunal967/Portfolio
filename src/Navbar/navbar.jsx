import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const LINKS = [
  { name: "HOME", link: "/" },
  { name: "ABOUT", link: "/about" },
  { name: "PROJECT", link: "/projects" },
  { name: "CONTACT", link: "/contact" },
];

const Navbar = () => {
  const [sidebarOn, setSidebarOn] = useState(true);
  return (
    <>
      <div className="absolute ">
        <nav className="sm:flex sm:justify-around w-full sm:w-full bg-navbar fixed top-0 z-[2] left-0 pb-2 drop-shadow-lg">
          <div className="flex content-center align-middle items-center ml-8 font-portfolio font-bold text-2xl pt-3 sm:pt-0 text-nav-text">
            PORTFOLIO
          </div>
          <div
            onClick={() => setSidebarOn(!sidebarOn)}
            className="text-4xl text-home absolute top-3 right-8 cursor-pointer md:hidden"
          >
            <ion-icon name={sidebarOn ? "menu" : "close"}></ion-icon>
          </div>
          <ul
            className={`sm:flex sm:items-center font-portfolio bg-navbar  text-nav-text pb-4  sm:pb-0 absolute sm:static sm:z-auto z-[-1]  left-0 w-full sm:w-auto sm:pl-0 text-center transition-all duration-500 ease-in ${
              sidebarOn ? "top-[-490px]" : "top-12  opacity-100 "
            } sm:opacity-100 opacity-00 `}
          >
            {LINKS.map((link) => (
              <li
                className="sm:m-4 hover:text-nav-hover duration-500 text-lg font-bold my-4 ml-10 "
                key={link.name}
              >
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
