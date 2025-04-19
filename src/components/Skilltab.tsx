import React from "react";
import CloseAnimatedSign from "./CloseAnimatedSign";

function Skilltab() {
  const skills = [
    "HTML",
    "CSS",
    "Tailwind",
    "Sass",
    "JavaScript",
    "React JS",
    "Next JS",
    "Responsive Design RWD",
    "ReactQuery",
    "GIT",
    "GitHub",
    "Material-UI Web Socket",
    "Context",
    "Redux",
    "Redux-Toolkit",
  ];

  return (
    <div className="m-10 mt-0 pb-5 bg-cyan-900 rounded h-full ">
      <div className="bg-cyan-800 h-8 rounded-t flex items-center pl-2 mb-4">
        <span className="w-5 h-5 bg-orange-700 rounded-full inline-block text-center mx-1"></span>
        <span className="w-5 h-5 bg-amber-400 rounded-full inline-block text-center mx-1"></span>
        <span className="w-5 h-5 bg-green-600 rounded-full inline-block text-center mx-1"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {skills.map((item, index) => {
          return (
            <div
              key={index}
              className="shadow rounded text-center py-2 my-2 mx-5 bg-amber-300 hover:scale-105 transition-all duration-300"
            >
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skilltab;
