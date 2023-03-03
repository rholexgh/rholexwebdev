import {
  NavLinksStudioAndOutdoor,
  outDootAndStudio,
} from "@/Components/array_items";
import {
  AltBtn,
  AltBtnthree,
  AltBtntwo,
  PrimaryBtn,
} from "@/Components/reuseable-components";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import h_002 from "../../../public/Img/h_001.jpg";

export const metadata: Metadata = {
  title: "Rholexgh - RateCard/Studio And Outdoor",
  description: "Professional Portrait | Retouching Studio.",
  openGraph: {
    title: "Rholexgh — RateCard.",
    description: "Professional Portrait | Retouching Studio.",
    url: "https://www.rholexghstudios.com/",
    siteName: "Rholexgh Studios",
    images: "/Assets/img/me/iamjulius_s.png",
    locale: "en-US",
    type: "website",
  },
};

export default function RateCard() {
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
      {/* nav links */}
      <section className="flex w-full flex-col items-center">
        <div className="flex w-full max-w-7xl flex-col items-center px-4">
          <div className=" flex w-full flex-col">
            <div className="flex pb-4">
              <h1 className="text-3xl font-black">
                Studio And Outdoor RateCard
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
              {NavLinksStudioAndOutdoor.map((nav) => (
                <div key={nav.id} className="">
                  <AltBtn
                    link={`/RateCard/StudioAndOutdoor${nav.link}`}
                    text={nav.name}
                    btnStyle=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className=" flex flex-col items-center">
        <div className="flex w-full max-w-7xl flex-col px-4">
          <div className="flex flex-col space-y-4">
            {outDootAndStudio.map((p) => (
              <div key={p.id}>
                <div className="py-2">
                  <h1 className="py-2 text-2xl font-black" id={p.name}>
                    {p.name}
                  </h1>
                  <div className="grid grid-cols-3 gap-3">
                    {p.package.map((pack) => (
                      <div key={pack.id} className="border-2">
                        <div>
                          <Image src={pack.img} alt={`${pack.name}_img`} />
                        </div>
                        <div className="text-center text-xl font-black">
                          {pack.name}
                        </div>
                        <div className="text-center">
                          {pack.features.map((f) => (
                            <div key={f.id}>
                              <span>{f.feature}</span>
                            </div>
                          ))}
                        </div>
                        <div className="">
                          <div className="flex justify-center  p-2">
                            <div className="bg-accent px-4 py-2 text-center text-white">
                              <h1>GH₵ {pack.price}</h1>
                            </div>
                          </div>
                          <div className="flex justify-center  p-2">
                            <AltBtntwo link={"/BookMe"} text={`Book Now`} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
