"use client";
import { ArrowUp2 } from "iconsax-react";
import { useState } from "react";

//Accordation
interface AccordionProps {
  title: string;
  content: any;
}
export default function Accordion(props: AccordionProps) {
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
