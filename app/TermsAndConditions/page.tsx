import { TACS } from "@/Components/array_items";
import { PrimaryBtn } from "@/Components/reuseable-components";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import h_002 from "../../public/Img/h_001.jpg";

export const metadata: Metadata = {
  title: "Rholexgh - TermsAndConditions",
  description: "Professional Portrait | Retouching Studio.",
  openGraph: {
    title: "Rholexgh — TermsAndConditions.",
    description: "Professional Portrait | Retouching Studio.",
    url: "https://www.rholexghstudios.com/",
    siteName: "Rholexgh Studios",
    images: "/Assets/img/me/iamjulius_s.png",
    locale: "en-US",
    type: "website",
  },
};
export default function TermsAndConditions() {
  return (
    <main className="pt-16">
      <header className="flex flex-col items-center">
        <div className="flex w-full max-w-7xl flex-col px-4">
          <div className=" py-10">
            <Image
              src={h_002}
              alt="hero_img"
              className="h-80 w-full object-cover"
            />
          </div>
        </div>
      </header>
      <section className="flex flex-col items-center">
        <div className="flex w-full max-w-5xl flex-col items-center p-4">
          <div>
            <div className="flex w-full flex-col py-1 text-center">
              <h1 className="text-3xl font-black underline">
                Terms And Conditions
              </h1>
              <p className="text-xl font-black underline">
                FOR ONLY OUTDOOR AND STUDIO SHOOT.
              </p>
            </div>
            <h2 className="py-1 text-lg capitalize">
              Dear Client, thank you for choosing{" "}
              <span className="font-black"> RholexGH Studio</span>.
            </h2>
            <p>
              We promise to provide utmost service with all the professionalism
              our craft requires. We would like you to kindly take note of the
              following:
            </p>
          </div>
          {/* Terms And Conditions */}
          <div className="my-5 w-full max-w-5xl px-4 capitalize">
            <ol className="list-disc space-y-2">
              <li>
                <p>
                  Pictures From Photoshoots Done With{" "}
                  <span className="font-black"> ONE OUTFIT</span> Will Be
                  Delivered After{" "}
                  <span className="font-black"> 3 Working Days</span>.
                </p>
              </li>
              <li>
                <p>
                  Pictures from photoshoots based on our other packages will be
                  delivered after{" "}
                  <span className="font-black"> 7 working days</span>.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-black">NO REFUND</span>, after bookings.
                </p>
              </li>
              <li>
                <span>
                  Any booking made{" "}
                  <span className="font-black">
                    {" "}
                    before a discount promotion
                  </span>
                  , is not allowed to enjoy the discount.
                </span>
              </li>
              <li>
                <span>
                  Client must notify the photographer if they do not want their
                  images posted on social media or the internet.
                </span>
              </li>
              <li>
                <span>
                  <span className="font-black">NB:</span> Only soft copies of
                  the images will be provided. Hard copies, frames and albums
                  come at an <span className="font-black"> extra cost</span>.
                </span>
              </li>
              <li>
                <span>
                  <span className="font-black"> 70% deposit</span> is required
                  to <span className="font-black"> confirm booking date</span>.
                </span>
              </li>
              <li>
                <span>
                  <span className="font-black">NB:</span> Client is only allowed
                  to reschedule shoot twice after booking. After the second
                  reschedule, booking will be canceled and money will not be
                  refunded.
                </span>
              </li>
              <li>
                <span>
                  <span className="font-black"> Official Receipts </span>
                  will be provided after the photoshoot.
                </span>
              </li>
              <li>
                <span>
                  <span className="font-black">Late fees</span> will be charged
                  per the hour after booked time is up{" "}
                  <span className="font-black"> ( 2 - 4 hours session )</span>.
                </span>
              </li>
              <li>
                <span>
                  Client pays for transportation, if the photoshoot is an
                  outdoor shoot.
                </span>
              </li>
              <li>
                <span>
                  CLIENT MUST BOOK AN OUTDOOR LOCATION, AND MUST BE ESPONSIBLE
                  TO PAY FOR BILLS GIVEN BY LOCATION CHOSEN FOR the OUTDOOR
                  SHOOT.
                </span>
              </li>
              <li className="">
                <span>
                  CLIENT PAYS AN{" "}
                  <span className="font-black"> EXTRA AMOUNT</span>, IF HE/ SHE
                  WANTS THE PICTURES TO BE DELIVERED THE SAME DAY OR NEXT DAY
                  <span className="font-black"> (EXPRESS SERVICE)</span>.
                </span>
              </li>
              <li>
                <span>
                  client pays for my hotel accommodation & food if the outdoor
                  shoot takes more than a day.
                </span>
              </li>
            </ol>
          </div>
          {/* Ending */}
          <div className="">
            <p className="text-lg font-bold">Thank you !!!</p>
          </div>
          <div className="py-4">
            <PrimaryBtn link={"/BookMe"} text="Book A Photoshoot" />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center">
        <div className="flex w-full max-w-7xl flex-col px-2">
          <div className="py-10">
            <div className="relative">
              <Image
                src={h_002}
                alt="hero_img"
                className="h-80 w-full object-cover"
              />
              <div className="absolute bottom-2 w-full p-4">
                <div className=" flex items-center justify-between">
                  <div>
                    <PrimaryBtn link={"/Gallery"} text="View Gallery" />
                  </div>
                  <div>
                    <PrimaryBtn link={"/#FAQs"} text="View FAQs" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
