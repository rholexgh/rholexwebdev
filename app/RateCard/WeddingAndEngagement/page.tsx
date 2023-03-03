import {
  NavLinksWeddingAndEngagement,
  WeddingAndEngagement,
} from "@/Components/array_items";
import {
  AltBtn,
  AltBtntwo,
  PrimaryBtn,
} from "@/Components/reuseable-components";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import h_002 from "../../../public/Img/h_001.jpg";

export const metadata: Metadata = {
  title: "Rholexgh - RateCard",
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
                Wedding And Engagement RateCard
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
              {NavLinksWeddingAndEngagement.map((nav) => (
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
      <section className="my-8 flex flex-col items-center px-4">
        <div className="flex w-full max-w-7xl flex-col">
          <div className="relative bg-accent/30 p-2">
            <div>
              {WeddingAndEngagement.map((p) => (
                <div key={p.id} className=" py-4">
                  <div className=" py-6">
                    <h1 className="text-3xl font-black">{p.name}</h1>
                  </div>
                  {/* single */}
                  <div className=" bg-white p-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      {/* img */}
                      <div className="">
                        <Image src={p.single.img} alt={p.single.name} />
                      </div>
                      {/* content */}
                      <div className="flex flex-col items-center justify-between">
                        <div>
                          <h1 className="text-2xl font-black">
                            {p.single.name}
                          </h1>
                        </div>
                        <div>
                          <ul className="text-center">
                            {p.single.features.map((f) => (
                              <li key={f.id}>{f.feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="">
                          <div className="flex justify-center  p-2">
                            <div className="bg-accent px-4 py-2 text-center text-white">
                              <h1>GH₵ {p.single.price}</h1>
                            </div>
                          </div>
                          <div className="flex justify-center  p-2">
                            <AltBtntwo link={"/BookMe"} text={`Book Now`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* double */}
                  <div className="my-8 grid grid-cols-2 gap-4  md:grid-cols-4">
                    {p.fourCols.map((fc) => (
                      <div key={fc.id} className="bg-white p-2">
                        <div>
                          <Image src={fc.img} alt={fc.name} />
                        </div>
                        <div className="flex flex-col items-center text-center">
                          <div className="py-2">
                            <h1 className="text-2xl font-black">{fc.name}</h1>
                          </div>
                          <div>
                            <ul>
                              {fc.features.map((f) => (
                                <li key={f.id}>{f.feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex justify-center  p-2">
                            <div className="bg-accent px-4 py-2 text-center text-white">
                              <h1>GH₵ {fc.price}</h1>
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
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="flex-col items-center">
        <div className="flex w-full max-w-7xl flex-col">About</div>
      </section>
      <section className="flex-col items-center">
        <div className="flex w-full max-w-7xl flex-col">About</div>
      </section>
      <footer className="flex flex-col items-center">
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
      </footer>
    </main>
  );
}
