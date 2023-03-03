"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function NavMenu() {
  let pathname = usePathname(); //This is to get the current loction
  const [open, setOpen] = useState(false); // State to manage the full screen Menu.If false it is closed and if true it is opened
  const [menuBtnState, setMenuBtnState] = useState(false); // State to manage the hamburger Menu.If false it is closed and if true it is opened
  const [openBtn, setBtnOpen] = useState(false);

  const handleHanburgerManu = () => {
    if (!menuBtnState) {
      //open
      setMenuBtnState(true);
      setOpen(true);
      setBtnOpen(true);
    } else {
      //close
      setMenuBtnState(false);
      setOpen(false);
      setBtnOpen(false);
    }
  };
  const hideMenu = () => {
    if (open) {
      setOpen(false);
      setMenuBtnState(false);
      setBtnOpen(false);
    }
  };

  // setting up a magnetic btn for the hamburer menu

  return (
    <div className="z-40 flex w-full select-none overflow-hidden">
      <div className="flex flex-col items-center justify-center ">
        {/* Hanburger Manu Itself */}
        <div
          className={`navMen z-40 bg-inherit
            ${open ? "px-3 py-1" : "px-3 py-1"}
          `}
        >
          <div className="flex w-6 items-center justify-end">
            <div
              className="group flex h-6 w-6 cursor-pointer flex-col items-center justify-between"
              onClick={handleHanburgerManu}
            >
              {/* the btn */}
              <span
                className={`h-[2px] w-full transform cursor-pointer rounded-lg bg-black mix-blend-difference transition duration-300 ease-in-out 
                ${openBtn ? "translate-y-2.5 rotate-45 bg-black" : ""}
                `}
              />
              <span
                className={`h-[2px] w-full transform cursor-pointer rounded-lg bg-black mix-blend-difference transition duration-300  ease-in-out
                ${openBtn ? "hidden w-0" : "w-full"}
                `}
              />
              <span
                className={`h-[2px] w-full transform  cursor-pointer rounded-lg bg-black mix-blend-difference transition duration-300 ease-in-out
                ${openBtn ? "-translate-y-3 -rotate-45 bg-black" : ""}
                `}
              />
            </div>
          </div>
        </div>
        {/* MainMenu */}
        <div className="">
          <AnimatePresence mode="sync">
            {open && (
              <div className="fixed top-0 right-0 z-30 min-h-screen w-full overflow-hidden  bg-white md:w-[30vw]">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 0 }}
                  className="relative h-screen w-full"
                >
                  <div className="font-PolySansNeutral flex h-full flex-col justify-between">
                    {/* top */}
                    <div className=" relative z-40 flex h-40 flex-col justify-end overflow-hidden"></div>
                    {/* navlinks */}
                    <div className="flex flex-1 flex-col justify-center">
                      <div className="flex flex-col items-center justify-center space-y-8 text-6xl font-black md:text-7xl">
                        {/* home Link */}
                        <div>
                          <Link
                            href="/"
                            onClick={hideMenu}
                            className="text-black hover:text-white"
                          >
                            <h1
                              className={`font-Black font-PolySansBulky ${
                                pathname === "/" && "underline"
                              }  hover:decoration-white`}
                            >
                              Home
                            </h1>
                          </Link>
                        </div>
                        {/* Blog */}
                        <div>
                          <Link
                            href="/Blog"
                            onClick={hideMenu}
                            className="text-black hover:text-white"
                          >
                            <h1
                              className={`font-Black font-PolySansBulky ${
                                pathname === "/Blog" && "underline"
                              }  hover:decoration-white`}
                            >
                              Blog
                            </h1>
                          </Link>
                        </div>
                        {/* Gallery Link */}
                        <div>
                          <Link
                            href="/Gallery"
                            onClick={hideMenu}
                            className="text-black hover:text-white"
                          >
                            <h1
                              className={`font-Black font-PolySansBulky ${
                                pathname === "/Gallery" && "underline"
                              }  hover:decoration-white`}
                            >
                              Gallery
                            </h1>
                          </Link>
                        </div>
                        {/* Rate Card Link */}
                        <div>
                          <Link
                            href="/RateCard"
                            onClick={hideMenu}
                            className="text-black hover:text-white"
                          >
                            <h1
                              className={`font-Black font-PolySansBulky ${
                                pathname === "/RateCard" && "underline"
                              }  hover:decoration-white`}
                            >
                              RateCard
                            </h1>
                          </Link>
                        </div>
                        {/* T&C Link */}
                        <div>
                          <Link
                            href="/TermsAndConditions"
                            onClick={hideMenu}
                            className="text-black hover:text-white"
                          >
                            <h1
                              className={`font-Black font-PolySansBulky ${
                                pathname === "/TermsAndConditions" &&
                                "underline"
                              }  hover:decoration-white`}
                            >
                              T&Cs
                            </h1>
                          </Link>
                        </div>
                        {/* Book Me Link */}
                        <div>
                          <Link
                            href="/BookMe"
                            onClick={hideMenu}
                            className="text-black hover:text-white"
                          >
                            <h1
                              className={`font-Black font-PolySansBulky ${
                                pathname === "/BookMe" && "underline"
                              }  hover:decoration-white`}
                            >
                              Book Me
                            </h1>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* down */}
                    <div className=" relative z-40 flex h-40 flex-col justify-start overflow-hidden">
                      <div className=" font-PolySansNeutral inset-0 z-40 flex flex-col">
                        <div className="flex flex-col items-center justify-between px-4 py-2">
                          <div className=" flex flex-col items-center justify-center">
                            <h1 className="font-PolySansBulky pt-10 text-center text-lg leading-none text-[#828282]/40">
                              © 2023 RholexGHStudios
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
