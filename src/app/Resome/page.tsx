"use client";
import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import styles from "../../styles/Tabs.module.css";
import Container from "@/components/Container";
import Sidebar from "@/components/Sidebar";
import Skilltab from "@/components/Skilltab";
import CloseAnimatedSign from "@/components/CloseAnimatedSign";

function Resome() {
  const tabs = ["About", "Skills", "Exp. & Edu.", "More"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const toggle = () => {
    setIsOpenSidebar((prev) => !prev);
  };

  return (
    <div className={` ${styles.apple_tab} w-100% h-100% pt-30 `}>
      <div className="hidden lg:flex">
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
                  } rounded lg:border-t border-b px-10 py-3 z-auto ${
                    activeTab === item ? "bg-cyan-950 text-white" : ""
                  } `}
                >
                  <p className={`px-4 `}>{item}</p>
                </button>
              );
            })}
          </div>
          <div>
            {activeTab === "About" && (
              <div>
                <p>tab description 2</p>
              </div>
            )}

            {activeTab === "Skills" && <Skilltab />}
            {activeTab === "Exp. & Edu." && (
              <div>
                <p>tab description 3</p>
              </div>
            )}
            {activeTab === "More" && (
              <div>
                <p>tab description 4</p>
              </div>
            )}
          </div>
        </main>
      </Container>
    </div>
  );
}

export default Resome;
