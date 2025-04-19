import React from "react";
import Container from "./Container";
import { Ichildren } from "@/interfaces/interfaces";
import Navbar from "./Navbar";
import dynamic from "next/dynamic";

// const Navbar = dynamic(()=>import('../components/Navbar'),{ssr:false});


function Layout({ children }: Ichildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
