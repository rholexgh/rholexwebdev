"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import NavMenu from "./nav-menu";
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

            <div className="flex items-center space-x-4">
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
              {/* Gallery */} {/* Terms And Conditions */}
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
