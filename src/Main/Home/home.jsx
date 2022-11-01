import React from "react";
import About from "../About/about";
import Contact from "../Contact/contact";
import Projects from "../Projects/Projects";
import Resume from "../../images/Kunal_Takalkar.pdf"

const Home = () => {
  return (
    <div className="h-max w-fit sm:w-screen text-center bg-home">
      <div className="h-screen text-center ">
        <span className="font-bold font-portfolio text-6xl w-fit sm:w-screen flex text-flex-end justify-center pt-36 pb-6 text-text">
          {/* HEY, I'M KUNAL TAKALKAR{" "} */}
          Hey, I am Kunal Takalkar
          {/* <span className="text-nav-text pl-3 text-7xl hover:capitalize ">  Kunal Takalkar </span> */}
        </span>
        <span className="flex justify-center font-semibold text-2xl pr-10 pl-10 text-center pb-10 text-text ">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications <br /> that leads to the success of the overall
          product
        </span>
        <br />
        <a href={Resume} download="Kunal_Takalkar.pdf"
          className="cursor-pointer
        shadow-2xl
        mt-10
        text-lg
        font-bold
        bg-navbar
        text-nav-text p-3
        hover:text-purple-800 
        hover:font-extrabold 
        hover:bg-purple-50 
        rounded-2xl 
        justify-center"
        >
          {" "}
          Download My CV
        </a>
      </div>
      <div className="h-max sm:h-screen">
        <About />
      </div>
      <div className="h-max sm:h-screen">
        <Projects />
      </div>
      <div className="h-max sm:h-screen">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
