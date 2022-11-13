/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const About = () => {
  return (
    <div className="h-full sm:h-screen w-screen relative top-4 sm:top-16  bg-home">
      <div className="block m-4 sm:m-0">
        <div className="text-center text-4xl font-portfolio font-bold text-nav-text hover:text-5xl hover:text-nav-hover ">
          About Me
        </div>
        <div className="text-center mt-5 mb-8 font-portfolio w-full text-text">
          <span className="text-center pr-10 pl-10 text-text font-bold text-lg">
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
          </span>
        </div>

        <div className="flex flex-col sm:grid gap-10  grid-cols-2">
          <div className=" text-home bg-navbar h-auto sm:w-4/5 sm:relative sm:left-16 rounded-lg p-8 text-left">
            {/* about me text */}
            <span className="font-bold  text-nav-text text-4xl block text-start pb-6 ">
              Get to know me
            </span>
            <span className="font-portfolio  text-lg  ">
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section. I also
              like sharing content related to the stuff that I have learned over
              the years in Web Development so it can help other people of the
              Dev Community. Feel free to Connect or Follow me on my <a className="text-nav-text font-bold" href="https://www.linkedin.com/in/kunal-takalkar-2607251b8/" target="_blank" > Linkedin </a>
              where I post useful content related to Web Development and
              Programming I'm open to Job opportunities where I can contribute,
              learn and grow. If you have a good opportunity that matches my
              skills and experience then don't hesitate to contact me.
            </span>
          </div>
          <div className="text-purple-600 bg-navbar h-auto sm:w-3/4 sm:relative sm:left-8 rounded-lg p-4 text-left mb-10">
            {/* my skills */}
            <span className="font-bold text-nav-text text-4xl block text-start pb-6">
              My Skills
            </span>
            <div className="flex flex-wrap overflow-hidden text-lg">
              <div className="skill_btn ">Python</div>
              <div className="skill_btn ">HTML & CSS</div>
              <div className="skill_btn">Javascript (es6 & above)</div>
              <div className="skill_btn">React JS</div>
              <div className="skill_btn">Core Java</div>
              <div className="skill_btn">Tailwind CSS</div>
              <div className="skill_btn">Basic SQL</div>
              <div className="skill_btn">Mongo DB</div>
              <div className="skill_btn">Express js</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// font-portfolio text-center mt-10 w-fit sm:w-screen text-5xl font-bold text-nav-text block m-auto 
