import React, { useState } from "react";
import styles from "../styles/Tabs.module.css";
import dynamic from "next/dynamic";
import MPlayer from "./MPlayer";
import { IOpenSidebar } from "@/interfaces/interfaces";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

function Sidebar({ isOpen }: IOpenSidebar) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <aside
      className={` ${
        styles.sidebar_transparent
       }   w-90 lg:w-90 h-screen z-50 fixed top-0 lg:top-29 overflow-auto custom-scroll transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } `}
    >
        <div className="p-4">
          <br/><br/>
          <p className="text-center text-gray-700 text-3xl"><span className="block">Zeinab</span> Malekmakan</p>
          <br />
          <p className="text-center text-gray-700 ">
            Female, 1998-02-10
          </p>
          <p className="text-center text-gray-700 ">
            Tehran, Iran
          </p>
          <br/>
          <Map />
          <br />
          <div className="flex justify-center items-center w-full ">
          {
            !isPlaying ? <button onClick={()=>setIsPlaying(true)} className="bg-cyan-950 rounded-2xl text-white p-3">play music for me :) </button> : <MPlayer />
          }
          </div>
          {/* <MPlayer /> */}
        </div>
    </aside>
  );
}

export default Sidebar;
