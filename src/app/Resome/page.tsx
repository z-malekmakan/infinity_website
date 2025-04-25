"use client";
import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import styles from "../../styles/Tabs.module.css";
import Container from "@/components/Container";
import Sidebar from "@/components/Sidebar";
import Skilltab from "@/components/Skilltab";
import CloseAnimatedSign from "@/components/CloseAnimatedSign";
import AboutTab from "@/components/AboutTab";
import ExperienceEducationTab from "@/components/ExperienceEducationTab";
import MoreTab from "@/components/MoreTab";

function Resome() {
  const tabs = ["About", "Skills", "Exp. & Edu.", "More"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const toggle = () => {
    setIsOpenSidebar((prev) => !prev);
  };

  return (
    <div className={` ${styles.apple_tab} w-100% h-100% pt-30 `}>
      <div className="flex">
        <CloseAnimatedSign isOpen={isOpenSidebar} toggle={toggle} />
        <Sidebar isOpen={isOpenSidebar} />
      </div>
      {isOpenSidebar && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-20"
          onClick={() => {
            setIsOpenSidebar((prev) => !prev);
          }}
        ></div>
      )}

      <Container>
        <main className="">
          <div className=" flex justify-center flex-col lg:flex-row">
            {tabs.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTab(item);
                  }}
                  className={`${
                    styles.tabs
                  } rounded lg: px-10 py-3 z-auto ${
                    activeTab === item ? "bg-cyan-950 text-white dark:bg-cyan-800" : "border-t lg:border-b text-black dark:text-white"
                  } `}
                >
                  <p className={`px-4 `}>{item}</p>
                </button>
              );
            })}
          </div>
          <div>
            {activeTab === "About" && <AboutTab />}

            {activeTab === "Skills" && <Skilltab />}
            {activeTab === "Exp. & Edu." && <ExperienceEducationTab />}
            {activeTab === "More" && <MoreTab />}
          </div>
        </main>
      </Container>
    </div>
  );
}

export default Resome;
