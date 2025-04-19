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
      } w-80 h-screen z-50 fixed overflow-auto custom-scroll transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } `}
    >
        <div className="p-4">
          <p className="text-center text-gray-700 ">Zeinab Malekmakan</p>
          <br />
          <p className="text-center text-gray-700 ">
            About Me jabjbXOB SQBCUWBEC CBUIWEBCJ CEWBCU CJUEWBC ECBEBCJUEBW
            WCBECUEBC CBECJSCIOEHC ESC
          </p>
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
