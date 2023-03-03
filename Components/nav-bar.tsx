"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavMenu from "./nav-menu";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { ChevronDown } from "react-feather";

export default function Navbar() {
  let pathname = usePathname();

  return (
    <nav
      className={`fixed top-0 z-50 flex w-full flex-col items-center border-b border-transparent bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter`}
    >
      <div className="flex w-full max-w-7xl flex-col px-4 py-2">
        <div className="flex w-full justify-between">
          {/* Logo and Pic */}
          <div className="flex items-center space-x-2">
            <div className="nav-link-logo">
              <Link href={"/"} className="">
                <h1 className="nav-link-logo">Rholexgh Studio</h1>
                {pathname === "/" ? (
                  <motion.div
                    layoutId="nav"
                    transition={{
                      opacity: { ease: "easeInOut" },
                      layout: { duration: 0.3 },
                    }}
                    className="h-[0.2rem] w-full bg-black"
                  ></motion.div>
                ) : (
                  <div className="h-[0.2rem] bg-transparent"></div>
                )}
              </Link>
            </div>
          </div>

          {/* Links and CTA */}
          <div className="">
            {/* desktop View */}
            <NavigationMenu.Root className="relative z-[1] flex w-full justify-center">
              <div className="hidden items-center space-x-4 md:flex">
                {/* nav links */}
                {/* blog */}
                <div>
                  <Link href={"/Blog"}>
                    <h1 className="nav-link">Blog</h1>
                  </Link>
                  {pathname === "/Blog" ? (
                    <motion.div
                      layoutId="nav"
                      transition={{
                        opacity: { ease: "easeInOut" },
                        layout: { duration: 0.3 },
                      }}
                      className="h-[0.2rem] w-full bg-black"
                    ></motion.div>
                  ) : (
                    <div className="h-[0.2rem] bg-transparent"></div>
                  )}
                </div>
                {/* Gallery */}
                <div className="hidden px-4 md:flex md:flex-col">
                  <Link href={"/Gallery"}>
                    <h1 className="nav-link">Gallery</h1>
                  </Link>
                  {pathname === "/Gallery" ? (
                    <motion.div
                      layoutId="nav"
                      transition={{
                        opacity: { ease: "easeInOut" },
                        layout: { duration: 0.3 },
                      }}
                      className="h-[0.2rem] w-full bg-black"
                    ></motion.div>
                  ) : (
                    <div className="h-[0.2rem] bg-transparent"></div>
                  )}
                </div>
                {/* Gallery */}
                <div className="hidden px-4 md:flex md:flex-col">
                  <NavigationMenu.List className="">
                    <NavigationMenu.Item>
                      <NavigationMenu.Trigger className="group flex select-none  items-center space-x-2">
                        <div>
                          <Link href={"/RateCard"}>
                            <h1 className="nav-link">Rate Card</h1>
                          </Link>
                          {pathname === "/RateCard" ? (
                            <motion.div
                              layoutId="nav"
                              transition={{
                                opacity: { ease: "easeInOut" },
                                layout: { duration: 0.3 },
                              }}
                              className="h-[0.2rem] w-full bg-black"
                            ></motion.div>
                          ) : (
                            <div className="h-[0.2rem] bg-transparent"></div>
                          )}
                        </div>
                        <ChevronDown
                          className=" transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                          aria-hidden
                        />
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="absolute top-0 left-0 w-full border-2 data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight sm:w-auto">
                        <div className="list-none space-y-2 p-1 sm:w-[200px]">
                          <li>
                            <Link
                              href={"/RateCard/WeddingAndEngagement"}
                              className={`px-1 ${
                                pathname === "/RateCard/WeddingAndEngagement" &&
                                "underline"
                              }`}
                            >
                              Wedding/Engagement
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={"/RateCard/StudioAndOutdoor"}
                              className={`px-1 ${
                                pathname === "/RateCard/StudioAndOutdoor" &&
                                "underline"
                              }`}
                            >
                              Studio/Outdoor
                            </Link>
                          </li>
                        </div>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    <NavigationMenu.Indicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut">
                      <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white " />
                    </NavigationMenu.Indicator>
                  </NavigationMenu.List>

                  <div className="absolute top-full left-0 flex w-full justify-center perspective-[2000px]">
                    <NavigationMenu.Viewport className="relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut sm:w-[var(--radix-navigation-menu-viewport-width)]" />
                  </div>
                </div>
                {/* Terms And Conditions */}
                <div>
                  <Link href={"/TermsAndConditions"}>
                    <h1 className="nav-link">T&C</h1>
                  </Link>
                  {pathname === "/TermsAndConditions" ? (
                    <motion.div
                      layoutId="nav"
                      transition={{
                        opacity: { ease: "easeInOut" },
                        layout: { duration: 0.3 },
                      }}
                      className="h-[0.2rem] w-full bg-black"
                    ></motion.div>
                  ) : (
                    <div className="h-[0.2rem] bg-transparent"></div>
                  )}
                </div>
                {/* Book Me */}
                <div className="hidden px-4 md:flex md:flex-col">
                  <Link href={"/BookMe"}>
                    <h1 className="nav-link">Book Me</h1>
                  </Link>
                  {pathname === "/BookMe" ? (
                    <motion.div
                      layoutId="nav"
                      transition={{
                        opacity: { ease: "easeInOut" },
                        layout: { duration: 0.3 },
                      }}
                      className="h-[0.2rem] w-full bg-black"
                    ></motion.div>
                  ) : (
                    <div className="h-[0.2rem] bg-transparent"></div>
                  )}
                </div>
              </div>
            </NavigationMenu.Root>

            {/* Mobile View */}
            <div className="md:hidden">
              <NavMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
