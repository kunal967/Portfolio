import React from "react";

const Home = () => {
  return (
    <div className="h-screen text-center bg-purple-50">
      <span className="font-bold font-portfolio text-6xl flex justify-center pt-36 pb-6 text-purple-700">
        {/* HEY, I'M KUNAL TAKALKAR{" "} */}
        Hey, I am Kunal Takalkar
      </span>
      <span className="flex justify-center text-xl text-center text-purple-900 ">
        A Frontend focused Web Developer building the Frontend of Websites and
        Web Applications <br /> that leads to the success of the overall product
      </span>
      <br />
      <button
        className="cursor-pointer
        shadow-xl
        mt-10
       bg-purple-800
         text-purple-50 p-3
         hover:text-purple-800 
         hover:font-bold 
         hover:bg-purple-50 
         rounded-2xl 
         justify-center"
      >
        {" "}
        Download My CV
      </button>
    </div>
  );
};

export default Home;
