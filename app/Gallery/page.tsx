import { GalleryImage1 } from "@/Components/array_items";
import { GalleryImages } from "@/Components/gallery-image-components";
import type { Metadata } from "next";
import Image from "next/image";
import h_002 from "../../public/Img/h_001.jpg";

export const metadata: Metadata = {
  title: "Rholexgh - Gallery",
  description: "Professional Portrait | Retouching Studio.",
  openGraph: {
    title: "Rholexgh — Gallery.",
    description: "Professional Portrait | Retouching Studio.",
    url: "https://www.rholexghstudios.com/",
    siteName: "Rholexgh Studios",
    images: "/Assets/img/me/iamjulius_s.png",
    locale: "en-US",
    type: "website",
  },
};
export default function Gallery() {
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
            <h1 className="text-3xl font-black">Gallery</h1>
          </div>
        </div>
      </header>
      <section className="flex flex-col items-center">
        <div className="flex w-full max-w-7xl flex-col px-4">
          <div>
            <GalleryImages />
          </div>
        </div>
      </section>
    </main>
  );
}
