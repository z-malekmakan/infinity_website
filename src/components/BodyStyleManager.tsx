"use client"
import { themeContext } from '@/context/ThemeContext';
import React, { useContext, useEffect } from 'react'

function BodyStyleManager() {

    const {theme} = useContext(themeContext);
    useEffect(()=>{
      document.body.style.background = (theme === "light" ? "oklch(82.8% 0.189 84.429)" : "oklch(30.2% 0.056 229.695)")
      if (theme==="dark") {
        document.documentElement.classList.add("dark")
      }else{
        document.documentElement.classList.remove("dark")
      }
    },[theme])
  
  
  return (null  )
}

export default BodyStyleManager