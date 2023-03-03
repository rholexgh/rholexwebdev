"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowRight2,
  ArrowRight3,
  ArrowUp2,
  ExportSquare,
} from "iconsax-react";

import me_l from "../public/Img/hero-img.png";
import me_s from "../public/Img/hero-img.png";

export default function Junks() {
  return <h1>Hello</h1>;
}
//Primary Link Btn
interface PrimaryBtnProps {
  link: any;
  text: string;
  btnColor?: string;
  btnStyle?: string;
}
export function PrimaryBtn(props: PrimaryBtnProps) {
  return (
    <div className="">
      <Link
        href={props.link}
        className={` group flex items-center border-2 border-transparent bg-accent px-4 py-2 text-white hover:border-accent hover:bg-transparent hover:text-accent ${props.btnColor} ${props.btnStyle}`}
      >
        {props.text}
        <ArrowRight
          size={32}
          className="px-1 group-hover:translate-x-1 group-hover:transition group-hover:ease-in-out"
        />
      </Link>
    </div>
  );
}
export function AltBtn(props: PrimaryBtnProps) {
  return (
    <div className="border-2  border-transparent bg-accent text-center text-white hover:border-accent hover:bg-transparent  hover:text-accent  ">
      <Link
        href={props.link}
        className={`truncate px-4 py-2 ${props.btnColor} ${props.btnStyle}`}
      >
        {props.text}
      </Link>
    </div>
  );
}
export function AltBtnthree(props: PrimaryBtnProps) {
  return (
    <div className="border-2  border-transparent bg-accent text-center text-white hover:border-accent hover:bg-transparent  hover:text-accent  ">
      <Link
        href={props.link}
        className={`flex items-center space-x-2 truncate px-4 py-2 ${props.btnColor} ${props.btnStyle}`}
      >
        {props.text}
      </Link>
    </div>
  );
}
export function AltBtntwo(props: PrimaryBtnProps) {
  return (
    <div className="group border-2  border-accent bg-transparent text-center text-accent hover:border-transparent hover:bg-accent  hover:text-white  ">
      <Link
        href={props.link}
        className={`flex items-center space-x-2 truncate px-4 py-2 ${props.btnColor} ${props.btnStyle}`}
      >
        {props.text}
        <ArrowRight
          size={32}
          className="px-1 group-hover:translate-x-1 group-hover:transition group-hover:ease-in-out"
        />
      </Link>
    </div>
  );
}

//Gradient Btn
interface GlowingBtnComponentProps {
  btnChildren: any;
  glowColor: string;
  btnColor: string;
  btnStyle?: string;
}
export function GlowingBtnComponent(props: GlowingBtnComponentProps) {
  return (
    <div className="flex flex-col items-center">
      {/* btn */}
      <div className="relative">
        <div
          className={`absolute inset-0 rounded-lg blur ${props.glowColor}`}
        ></div>
        <button
          className={`relative flex rounded-lg bg-blue-400 ${props.btnColor} ${props.btnStyle}`}
        >
          {props.btnChildren}
        </button>
      </div>
    </div>
  );
}

//Animated text that splits the texts and animated them from bottom to top
interface AnimatedTextProps {
  text: any;
}
export function AnimatedText(props: AnimatedTextProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 1, ease: "easeInOut" },
  };
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      className="flex"
    >
      {[...props.text].map((value) => (
        <motion.span variants={item} key={value}>
          {value}
        </motion.span>
      ))}
    </motion.span>
  );
}

//Image Component
export function BlindesImage() {
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 60px, rgba(0,0,0,1) 60px, rgba(0,0,0,1) 60px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 60px)`;

  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <div className="flex flex-col items-center px-4  md:items-start md:px-0">
      {/* Desktop */}
      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
        className="border-primary-300 relative hidden rounded-lg border-2 object-contain p-1 md:block"
      >
        <Image
          src={me_l}
          alt="Julius Eghan"
          className="rounded object-contain"
          priority
          onLoad={() => setIsLoaded(true)}
          placeholder="blur"
        />
      </motion.div>
      {/* mobile */}
      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
        className="border-primary-300 relative rounded-lg border-2 object-contain p-1 md:hidden"
      >
        <Image
          src={me_s}
          alt="Julius Eghan"
          className="rounded object-contain"
          priority
          onLoad={() => setIsLoaded(true)}
          placeholder="blur"
        />
      </motion.div>
    </div>
  );
}

//Accordation
interface AccordionProps {
  title: string;
  content: any;
}
export function Accordion(props: AccordionProps) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="mb-4 w-full border-2 p-1">
      <button
        className="relative flex w-full cursor-pointer items-center justify-between border-none bg-transparent p-1 text-left outline-none"
        onClick={toggle}
        type="button"
      >
        <p>{props.title}</p>
        <ArrowUp2
          variant="Outline"
          className={`h-5 w-5 ${
            isShowing ? "rotate-180" : "rotate-0"
          } text-gray-400`}
        />
      </button>
      <div
        className={`${isShowing ? "block" : "hidden"} bg-accent/10 p-2`}
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
    </div>
  );
}
