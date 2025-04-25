import React from "react";

function AboutTab() {
  return (
    <div className="m-10 mt-0 pb-5 bg-cyan-900 rounded h-full w-full mx-auto">
      <div className="bg-cyan-800 h-8 rounded-t flex items-center pl-2 mb-4">
        <span className="w-5 h-5 bg-orange-700 rounded-full inline-block text-center mx-1"></span>
        <span className="w-5 h-5 bg-amber-400 rounded-full inline-block text-center mx-1"></span>
        <span className="w-5 h-5 bg-green-600 rounded-full inline-block text-center mx-1"></span>
      </div>
      <div className="lg:px-10 px-5">
        <h1 className="font-bold text-white lg:text-9xl"><span>Zeinab</span> <span>Malekmakan</span></h1>
        <p className="lg:text-4xl text-sm text-amber-400">Front-end Developer</p>
        <br />
        <hr />
        <br />
        <p className="lg:text-2xl text-white text-sm dark:text-neutral-300">
          I am a junior front-end developer with a strong focus on React. I’ve
          built my personal website and developed several small projects, always
          aiming for clean and maintainable code. My greatest strengths are my
          fast learning ability and adaptability, which help me thrive in team
          environments and quickly adjust to new challenges.
        </p> <br/>
        <p className="lg:text-2xl text-white text-sm">
          I am seeking a junior front-end position in a company that offers
          opportunities for continuous learning, a friendly and collaborative
          team environment, and a space to grow both technically and personally.
        </p>
      </div>
    </div>
  );
}

export default AboutTab;
