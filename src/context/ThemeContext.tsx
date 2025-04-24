"use client"
import { Ichildren, Ithemecontext } from "@/interfaces/interfaces";
import React, { createContext, useState } from "react";



export const themeContext = createContext({} as Ithemecontext);

function ThemeContextProvider({ children }: Ichildren) {
  const [theme, setTheme] = useState<string>("light");
  const toggleTheme = ()=>{
    if (theme==="light") {
      setTheme("dark");
    }else{
      setTheme("light");
    }
  }
  return (
    <themeContext.Provider value={{theme,setTheme,toggleTheme}}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeContextProvider;
