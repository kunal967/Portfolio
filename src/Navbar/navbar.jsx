import React from "react";
import {Outlet,Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between w-fit sm:w-screen bg-navbar h-20  pt-8 pb-8 ">
        <div className="flex content-center items-center ml-8 font-portfolio font-bold text-2xl text-nav-text">
          PORTFOLIO
          </div>
        <ul className="flex mr-6 font-portfolio font-semibold text-nav-text items-center text-lg ">
          <li className="m-4">
            <Link to='/'>Home</Link>
          </li>
          <li className="m-4 ">
            <Link to='/about'>About</Link>
          </li>
          <li className="m-4 ">
            <Link to='/projects'>Projects</Link>
          </li>
          <li className="m-4">
            <Link to='/contact'>Contact Me </Link>
          </li>
          
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;


// hover:underline hover:text-xl

// import  {Outlet} from react-router-dom