import Image from "next/image";
import type { Metadata } from "next";
import h_002 from "../../public/Img/h_001.jpg";
import EmailForm from "@/Components/email-form";
import Link from "next/link";
import { PrimaryBtn } from "@/Components/reuseable-components";

export const metadata: Metadata = {
  title: "RholexGH - Book Me",
  description: "Professional Portrait | Retouching Studio.",
  openGraph: {
    title: "Rholexgh — Book Me.",
    description: "Professional Portrait | Retouching Studio.",
    url: "https://www.rholexghstudios.com/",
    siteName: "Rholexgh Studios",
    images: "/Assets/img/me/iamjulius_s.png",
    locale: "en-US",
    type: "website",
  },
};
export default function BookMe() {
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
          <div>
            <h1 className="text-2xl  font-black">
              {`Let("'")s Begin Your Journey`}
            </h1>
            <p>
              {`
              We definitely can("'")t wait to hear from you! For all inquiries,
              kindly fill out the form below so we can reach out to you. After
              submitting, we should reach out to you within 48 hours to commence
              your booking process. Also, please find links to the 2022("/")23
              Ratecard below the form or visit the Ratecard section of our
              website.`}
            </p>
          </div>
        </div>
      </header>
      <section className="flex flex-col items-center">
        <div className="flex w-full max-w-7xl flex-col">
          <EmailForm />
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
