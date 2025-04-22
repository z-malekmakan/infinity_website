import React from "react";

function ExperienceEducationTab() {
  return (
    <div className="m-10 mt-0 pb-5 bg-cyan-900 rounded h-full w-full mx-auto">
      <div className="bg-cyan-800 h-8 rounded-t flex items-center pl-2 mb-4">
        <span className="w-5 h-5 bg-orange-700 rounded-full inline-block text-center mx-1"></span>
        <span className="w-5 h-5 bg-amber-400 rounded-full inline-block text-center mx-1"></span>
        <span className="w-5 h-5 bg-green-600 rounded-full inline-block text-center mx-1"></span>
      </div>
      <div className="lg:px-10 px-5">
        <div>
          <h1 className="lg:text-3xl text-amber-400">EXPERIENCE</h1>
          <hr />
          <br />
          <h5 className="text-white font-bold lg:text-lg">
            FRONT-END DEVELOPER-REACT / INTERNSHIP
          </h5>
          <h6 className="text-white">Sepanja , Shiraz</h6>
          <h6 className="text-white">Sep 2024 - Mar 2025 (7 months)</h6> <br />
          <p className="text-white">
            I learned standard coding in react and some small libraries in the
            company. They are one of the best teams I have ever learned from.
          </p>
        </div>
        <br />
        <div>
          <h1 className="lg:text-3xl text-amber-400">EDUCATION</h1>
          <hr /><br/>
          <h5 className="text-white font-bold lg:text-lg">
          BACHELOR OF SCIENCE IN COMPUTER SCIENCE
          </h5>
          <h6 className="text-white">Pyame Noor University, Shiraz-( 2017-2021)</h6>
          <h6 className="text-white">2017-2021 (4 years)</h6> <br />
        </div>
      </div>
    </div>
  );
}

export default ExperienceEducationTab;
