"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GalleryImage1, HomeGalleryArray } from "./array_items";
import { PrimaryBtn } from "./reuseable-components";

export function HomeGalleryImages() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex w-full max-w-7xl flex-col p-4">
        <div>
          <motion.div className="grid gap-4 grid-cols-3">
            {HomeGalleryArray.map((img) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "tween", duration: 0.2 }}
                key={img.id}
              >
                <Image src={img.img} alt={img.name} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="flex w-full flex-col items-start justify-between py-2 md:flex-row md:items-center">
          <div>
            <h1 className="py-2 text-lg capitalize">
              Our Portfolio Of Awesome Images
            </h1>
          </div>
          <div className="py-2">
            <PrimaryBtn link={"/Gallery"} text="View Gallery" />
          </div>
        </div>
      </div>
    </section>
  );
}
export function GalleryImages() {
  return (
    <div>
      <div className="columns-4 gap-4 py-10">
        {GalleryImage1.map((g) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "tween", duration: 0.2 }}
            key={g.id}
            className={`w-full pb-4`}
          >
            <Image
              src={g.img}
              alt={g.name}
              className={`${g.aspect} object-cover`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
