import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between bg-violet-50 h-20 shadow-sm pt-8 pb-8">
        <div className="flex content-center items-center ml-8 font-portfolio font-bold text-2xl text-violet-600">
          Kunal Takalkar
          </div>
        <ul className="flex mr-6 font-portfolio font-semibold text-violet-500 items-center text-lg ">
          <li className="m-2 ">
            <Link to='/'>Home</Link>
          </li>
          <li className="m-2 ">
            <Link to='/about'>About</Link>
          </li>
          <li className="m-2 ">
            <Link to='/projects'>Projects</Link>
          </li>
          <li className="m-2 ">
            <Link to='/contact'>Contact Me </Link>
          </li>
          
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
