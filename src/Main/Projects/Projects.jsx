import React from "react";
import boxOffice from "../../images/Box-office-img.png";
import chatBox from "../../images/Chat-Box-img.png";
import Expence from "../../images/Expense-tracker-img.png";
import ticTacToe from "../../images/tic-tac-toe-removebg-preview.png";

const PROJECTS = [
  {
    id: 1,
    name: "Box-Office",
    image: boxOffice,
    desc: "If you want to bookmark your favroite Movies/TV Series and want to know information about it, BOX-OFFICE is for you. Here, you can Search for Movies/TV Shows and get to know about its cast,run-time, etc. All at one place. ",
    url: "https://crazy-box-office-app.netlify.app/#/",
  },
  {
    id: 2,
    name: "Chat-Box",
    image: chatBox,
    desc: "Chat-Box is an Single Page Application where you can create groups of people having similar intrests and can chat with them. Also you can share photos, videos,audio messages and documents.",
    url: "https://chaa-ats.firebaseapp.com/signin",
  },
  {
    id: 3,
    name: "Expence-Tracker",
    image: Expence,
    desc: "Expence tracker is Web App which will help you to manage all your expences and incomes.",
    url: "https://expense-tracker-app-with-react.netlify.app/",
  },
  {
    id: 4,
    name: "Tic-Tac-Toe",
    image: ticTacToe,
    desc: "All favroite Tic-Tac-Toe game with great UI and track all your and your opponents moves.",
    url: "https://mytictactoegamekst.surge.sh/",
  },
];

const Projects = () => {
  return (
    <div className="h-full pr-10 pl-10 mb-40">
      <div className="font-portfolio text-nav-text relative top-24 text-center text-5xl font-semibold">
        Projects
      </div>
      <div>
        <div className="relative top-32 text-lg font-portfolio font-semibold text-text ">
          Have a look at some of my projects...😉
        </div>
        <div>
          <div className="flex flex-wrap  relative top-48 md:grid md:grid-cols-2 md:gap-10 md:relative md:top-48 ">
            {Object.values(PROJECTS).map((id) => {
              return (
                <div className="mb-8 md:mb-0 " key={id}>
                  <div className="flex justify-center">
                    <img
                      className="justify-self-center "
                      src={id.image}
                      alt={id.name}
                    />
                  </div>
                  <div className="relative md:top-[-15%]">
                    <div className="relative top-[-2rem] md:top-0">
                      <div className="text-3xl font-bold relative text-nav-text ">
                        {id.name}
                      </div>
                      <div className=" relative top-8 text-center font-medium">
                        {id.desc}
                      </div>
                    </div>
                    <div className="flex align-middle justify-center relative top-12">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="h-10 m-5 w-36 font-semibold border-b-navbar bg-nav-text text-home hover:bg-home hover:border-2 rounded-3xl hover:border-nav-text hover:text-nav-text "
                        href={id.url}
                      >
                        See Live Demo
                      </a>
                      <button className="h-10 m-5 w-36 font-semibold border-b-navbar bg-nav-text text-home hover:bg-home hover:border-2 rounded-3xl hover:border-nav-text hover:text-nav-text ">
                        More
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

//<img src={boxOffice} alt="box office" />
//<img src={chatBox} alt="chat box" />
//<img src={Expence} alt="Expence Tracker" />
//<img src={ticTacToe} alt="Tic-Tac-Toe" />
// className="font-portfolio text-nav-text relative top-28 text-center text-5xl font-semibold"

// {PROJECTS.map((name) => (

//   <div key={name.name} className="">{name.name} </div>

// ))}
