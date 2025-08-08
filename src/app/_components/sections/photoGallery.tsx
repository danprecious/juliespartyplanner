"use client";

import { images } from "@/app/utils/images";

import Image from "next/image";
import { motion } from "framer-motion";
import SubText from "../utilities/subText";
import cloudinaryLoader from "@/app/lib/cloudinary";

const PhotoGallery = () => {
  const pictures = [
    {
      id: 0,
      src: "v1754448360/adrien-olichon-ZgREXhl8ER0-unsplash_nooi06.jpg",
      orientation: "h-[65vh]",
    },
    {
      id: 1,
      src: "v1754447991/soniya-kulkarni-miwUPEOirUA-unsplash_isxihy.jpg",
      orientation: "h-[35vh]",
    },
    {
      id: 2,
      src: "v1754447981/sunil-tanaji-shinde-X3KdriabcVM-unsplash_ape5sj.jpg",
      orientation: "h-[65vh]",
    },
    {
      id: 3,
      src: "v1754448139/kelsey-booth-iZlVIHqZJqE-unsplash_nqn6ef.jpg",
      orientation: "h-[35vh]",
    },
    {
      id: 4,
      src: "v1754448289/vitor-monthay-JL2n-GWXCJo-unsplash_qk0o7s.jpg",
      orientation: "h-[65vh]",
    },
    {
      id: 5,
      src: "v1754448301/chuttersnap-aEnH4hJ_Mrs-unsplash_lpk9vx.jpg",
      orientation: "h-[35vh]",
    },
  ];

  return (
    <section className="w-full min-h-[90vh] py-[10em]" id="gallery">
      <div className="mt-[10em] flex lg:px-14 items-end w-[100%] overflow-hidden lg:block">
        <motion.div
          className="h-full flex  items-end"
          animate={{ x: ["0%", "-120%"] }}
          transition={{
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "mirror", // Loop the animation
            duration: 50, // Duration of one complete cycle
            ease: "linear", // Smooth movement
          }}
        >
          {pictures.map(({ id, orientation, src }) => {
            return (
              <div
                key={id}
                className={`${orientation} min-w-[25em] rounded-[1em] overflow-hidden bg-stone-400 mx-8`}
              >
                <Image
                  loader={cloudinaryLoader}
                  src={src}
                  alt="Party, event, image"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                  // unoptimized
                />
              </div>
            );
          })}
        </motion.div>
      </div>
      <Gallery />
    </section>
  );
};

export default PhotoGallery;

const generateGalleryData = () => {
  return images.gallery.map((image, index) => ({
    id: index,
    alt: `Gallery image ${index + 1}`,
    src: image.src,
    orientation: image.orientation,
  }));
};

export const Gallery = () => {
  const galleryImgs = generateGalleryData();

  return (
    <section className="w-full px-4 py-8">
      <div
        className="
          grid 
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          auto-rows-[200px] 
          gap-4 
          grid-flow-dense
        "
      >
        {galleryImgs.map((img) => (
          <div
            key={img.id}
            className={`
              relative 
              w-full 
              h-full 
              overflow-hidden 
              rounded-lg 
              bg-stone-500
              ${
                img.orientation === "portrait"
                  ? "lg:row-span-2"
                  : "lg:col-span-2"
              }
            `}
          >
            <Image
              loader={cloudinaryLoader}
              src={img.src}
              alt="Party, event, image"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
              // unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  );
};
