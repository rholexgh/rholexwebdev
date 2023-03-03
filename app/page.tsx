import { FAQS, HomeGalleryArray } from "@/Components/array_items";
import { HomeGalleryImages } from "@/Components/gallery-image-components";
import { Accordion, PrimaryBtn } from "@/Components/reuseable-components";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import h_002 from "../public/Img/hero-img.png";

export default function Home() {
  return (
    <main className="">
      {/* header */}
      <section className="relative flex w-full flex-col items-center">
        <div className="max-w-full">
          <Image src={h_002} alt="igm" />
        </div>
        {/* section for img carosel and btn */}
        <div className="absolute bottom-52">
          <div className="bg- rounded px-4 py-2">
            <h1 className="text-6xl text-white">Welcome</h1>
          </div>
          <div></div>
        </div>
      </section>
      {/* Ratecard */}
      <section className="flex flex-col items-center py-10">
        <div className="flex w-full max-w-7xl flex-col">
          <div className="w-full p-4 text-center">
            <h1 className="text-3xl font-black">
              PORTRAIT / WEDDING & RETOUCHING STUDIOS
            </h1>
          </div>
          <div className="flex flex-col p-4">
            <div className=" md:relative">
              <div className="">
                <Image src={h_002} alt="igm" />
              </div>
              <div className=" flex md:absolute md:bottom-2 md:right-2 ">
                <div className="flex max-w-xs flex-col justify-end space-y-4 bg-white p-4">
                  <div>
                    <h1 className="text-2xl font-black">OUR SERVICES</h1>
                    <p className="text-base">
                      {`
                        We offer photography services, portrait,studio,
                        outdoor,Family shoot etc. We also offer other creative
                        services as add-on when booking
                      `}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-2xl font-black">CREATIVE PACKAGES</h1>
                    <p className="text-base">
                      {`
                      Whilst we can create a bespoke package tailored to your
                      photography needs, we've put together some basic packages
                      which you can choose from.
                      `}
                    </p>
                  </div>
                  <div className="pt-4">
                    <PrimaryBtn link={"/RateCard"} text="View Rate Card" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery */}
      <div>
        <HomeGalleryImages />
      </div>
      {/* About */}
      <section className="hidden flex-col items-center">
        <div className="flex w-full max-w-7xl flex-col">About</div>
      </section>
      {/* FAQs */}
      <section
        className="flex flex-col items-center scroll-smooth py-10"
        id="FAQs"
      >
        <div className="flex w-full max-w-7xl flex-col px-4">
          <div className="pb-4">
            <h1 className="py-2 text-3xl font-black">
              FREQUENTLY ASKED QUESTIONS(FAQs)
            </h1>
            <p className="capitalize">
              Have Any Question Look Through Our Freequently asked questions
              before you contact us.
            </p>
          </div>
          <div>
            <div>
              {FAQS.map((FAQ) => (
                <div key={FAQ.id}>
                  <Accordion title={FAQ.questions} content={FAQ.answer} />
                </div>
              ))}
            </div>
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
                    <PrimaryBtn link={"/TermsAndConditions"} text="View T&C" />
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
