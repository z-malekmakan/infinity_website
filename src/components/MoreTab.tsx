import React from "react";

function MoreTab() {
  return (
    <div className="m-10 mt-0 pb-5 bg-cyan-900 rounded h-full w-full mx-auto">
      <div className="bg-cyan-800 h-8 rounded-t flex items-center pl-2 mb-4">
        <span className="w-5 h-5 bg-orange-700 rounded-full inline-block text-center mx-1"></span>
        <span className="w-5 h-5 bg-amber-400 rounded-full inline-block text-center mx-1"></span>
        <span className="w-5 h-5 bg-green-600 rounded-full inline-block text-center mx-1"></span>
      </div>
      <div className="px-5 lg:px-10">
        <h1 className="text-amber-400 text-3xl">LANGUAGES</h1>
        <hr /><br/>
        <h5 className="text-white lg:text-lg">English-Fluent</h5>

        <div className="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "95%"}}></div>
        </div>
        <br/>
        <h5 className="text-white lg:text-lg">German-Basic</h5>

        <div className="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "30%"}}></div>
        </div><br/>
        <h1 className="text-amber-400 text-3xl">HOBIES</h1>
        <hr /><br/>
        <h5 className="text-white lg:text-lg">Spend time with family and friends , Read books , Math Puzzles</h5>
      </div>
    </div>
  );
}

export default MoreTab;
