"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isHidden, setIsHidden] = useState(true);

  const links = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/Store",
      name: "Store",
    },
    {
      href: "/About",
      name: "About Me",
    },
    {
      href: "/Resome",
      name: "Resome",
    },
    {
      href: "/Contact",
      name: "Contact",
    },
  ];
  useEffect(() => {
    const eventhandler = () => {
      const header = document.getElementById("header");

      if (scrollY > 50) {
        header?.classList.replace("opacity-100", "opacity-70");
      } else {
        header?.classList.replace("opacity-70", "opacity-100");
      }
    }
    window.addEventListener("scroll",eventhandler );
    return removeEventListener("scroll",eventhandler);
  }, []);

  const pathname = usePathname();
  return (
    <div
      className={` py-5 shadow fixed top-0 right-0 left-0 z-50`}
      // style={{
      //   backgroundImage: "url('./images/bg5.png')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",

      // }}
    >
      <img
        id="header"
        src="./images/bg5.png"
        className="absolute top-0 left-0 w-full h-full opacity-70  object-cover"
      />
      <div className={`absolute bg-black/10 inset-0`}></div>
      <Container>
        <div className="flex relative justify-between items-center mx-auto">
          <div className="">
            <img
              src="./images/LOGO.png"
              alt="LOGO"
              className="w-20 lg:w-40 m-auto"
            />
          </div>

          <div className="flex justify-between mx-auto ">
            <button
              onClick={() => {
                setIsHidden(!isHidden);
              }}
            >
              <img
                src="./images/menu.png"
                className={`w-5 lg:w-10 lg:hidden`}
              />
            </button>
            <nav>
              <ul
                className={`lg:flex transition-all duration-900 group-hover:scale-105 ${
                  isHidden
                    ? "hidden "
                    : "flex-col w-full absolute top-14.5 right-0 bg-white shadow  flex items-center"
                } `}
              >
                {links.map((item) => {
                  return (
                    <button
                      key={item.name}
                      onClick={() => {
                        setIsHidden(true);
                      }}
                      className="hover:bg-cyan-50 w-full lg:w-auto rounded mx-1"
                    >
                      <Link
                        href={item.href}
                        className={`hover:bg-cyan-50  rounded w-full flex text-center ${
                          pathname === item.href
                            ? "text-blue-600 bg-cyan-50"
                            : ""
                        }`}
                      >
                        <li className={`mx-auto px-1 py-2 w-20`}>
                          {item.name}
                        </li>
                      </Link>
                    </button>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className=" flex items-center">
            <Link href={"/Login"}>
              <button className="mx-1">
                <img src="./images/login3.png" className="w-5 lg:w-8 " />
              </button>
            </Link>
            <Link href={"/Card"}>
              <button className="mx-1">
                <img src="./images/card.png" className="w-5 lg:w-7 " />
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
