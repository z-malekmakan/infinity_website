"use client";
import { IOpenHamburger } from "@/interfaces/interfaces";
import React from "react";

function CloseAnimatedSign({isOpen,toggle}:IOpenHamburger) {
  return (
    <div className="lg:fixed absolute lg:top-30 top-19 z-[51] m-3" >
      <div
        onClick={() => {
          toggle();
        }}
        className={`w-10 h-6 flex flex-col justify-between cursor-pointer transition-all duration-300 
            ${isOpen?"[&>span:nth-child(1)]:rotate-45 [&>span:nth-child(1)]:translate-y-3 [&>span:nth-child(2)]:opacity-0 [&>span:nth-child(3)]:-rotate-45 [&>span:nth-child(3)]:-translate-y-2":""}`}
      >
        <span className="block bg-gray-800 h-1 rounded-full  transition-all duration-300"></span>
        <span className="bg-gray-800 h-1 rounded-full transition-all duration-300"></span>
        <span className="bg-gray-800 h-1 rounded-full transition-all duration-300"></span>
      </div>
    </div>
  );
}

export default CloseAnimatedSign;
