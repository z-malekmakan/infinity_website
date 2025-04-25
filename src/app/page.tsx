"use client";
import Container from "@/components/Container";
import { themeContext } from "@/context/ThemeContext";
import { useContext } from "react";
// import Map from "@/components/Map";

// const Map = dynamic(()=>import('../components/Map'),{ssr:false})

export default function Home() {
  const { theme, setTheme } = useContext(themeContext);
  
  return (
    <div className={`dark:text-red-500 text-white`}>
      <Container>
        home
        <br />
        <br />
        <br />
        lhjbxjbsbcxjsbcjs
        <br />
        kjcbajbcjabsc
        <br />
        <br />
        kxsjcbiuscs
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        {/* <button className="bg-cyan-950 rounded px-2 text-white"
          onClick={() => {
            if (theme === "light") {
              setTheme("dark");
            } else {
              setTheme("light");
            }
          }}
        >
          theme
        </button> */}
      </Container>
    </div>
  );
}
