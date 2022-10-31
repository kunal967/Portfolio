import React from "react";

const About = () => {
  return (
    <div className="h-max sm:h-screen  p-5 bg-home">
      <h2 className="font-portfolio text-center mt-10 w-fit sm:w-screen text-4xl font-bold text-nav-text">
        ABOUT ME
      </h2>
      <div className="text-center mt-5 mb-8 font-portfolio w-full text-text">
        <span className="text-center pr-10 pl-10 text-text font-bold text-lg">
          I'm a Frontend Web Developer building the Front-end of Websites and
          Web Applications that leads to the success of the overall product.
        </span>
      </div>
      
      <div className="flex flex-col sm:grid gap-14 grid-cols-2">
        <div className=" text-home bg-navbar rounded-lg p-8 text-left">
      
          {/* about me text */}
          <span className="font-bold text-nav-text text-4xl block text-start pb-6 ">Get to know me</span>
          <span className="font-portfolio text-2xl ">

          I'm a Frontend Web Developer building the Front-end of Websites and
          Web Applications that leads to the success of the overall product.
          Check out some of my work in the Projects section. I also like sharing
          content related to the stuff that I have learned over the years in Web
          Development so it can help other people of the Dev Community. Feel
          free to Connect or Follow me on my Linkedin where I post useful
          content related to Web Development and Programming I'm open to Job
          opportunities where I can contribute, learn and grow. If you have a
          good opportunity that matches my skills and experience then don't
          hesitate to contact me.
          </span>
        </div>
        <div className="text-purple-600 bg-navbar rounded-lg p-4 text-left mb-10">{/* my skills */}
        <span className="font-bold text-nav-text text-4xl block text-start pb-6" >My Skills</span>
        <div className="flex flex-wrap overflow-hidden text-2xl">
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
  );
};

export default About;
