import React from "react";
import About from "../About/about";
import Contact from "../Contact/contact";
import Projects from "../Projects/Projects";
import Resume from "../../images/Kunal_Takalkar.pdf";
import Footer from "../../Footter/Footer";

const Home = () => {
  return (
    <div className="h-max w-screen sm:w-screen text-center bg-home">
      <div className="h-screen w-full text-center  block m-auto">
        <span className="font-bold font-portfolio text-6xl w-fit sm:w-screen flex text-flex-end justify-center align-middle pt-60 pb-6 text-text">
          {/* HEY, I'M KUNAL TAKALKAR{" "} */}
          Hey, I am Kunal Takalkar
          {/* <span className="text-nav-text pl-3 text-7xl hover:capitalize ">  Kunal Takalkar </span> */}
        </span>
        <span className="flex justify-center font-semibold text- text-center pb-10 text-text ">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications <br /> that leads to the success of the overall
          product
        </span>
        <br />
        <a
          href={Resume}
          download="Kunal_Takalkar.pdf"
          className="cursor-pointer
        shadow-2xl
        mt-10
        text-lg
        font-bold
        bg-navbar
        text-nav-text p-3
        hover:border-2 hover:border-nav-hover hover:text-home hover:bg-nav-text
        rounded-2xl 
        justify-center"
        >
          {" "}
          Download My CV
        </a>
      </div>
      <div className="flex justify-center ">
        <div>
          <ion-icon name="logo-github"></ion-icon>
        </div>
        <div>
          <ion-icon name="logo-linkedin"></ion-icon>
        </div>
        <div>
          <ion-icon name="logo-github"></ion-icon>
        </div>
      </div>
      <div className="h-max sm:h-max">
        <About />
      </div>
      <div className="h-max sm:h-max">
        <Projects />
      </div>
      <div className="h-max sm:h-max">
        <Contact />
      </div>
      <div className="h-max sm:h-max">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
