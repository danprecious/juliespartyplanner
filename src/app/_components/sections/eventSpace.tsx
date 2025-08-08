import cloudinaryLoader from "@/app/lib/cloudinary";
import { images } from "@/app/utils/images";
import Image from "next/image";
import React from "react";

const EventSpace = () => {
  const spaces = [
    {
      id: 0,
      title: "The Grand Ballroom",
      description:
        "A spacious, opulent hall designed for large-scale celebrations, galas, and weddings. With soaring ceilings, golden chandeliers, and polished hardwood floors, the Grand Ballroom embodies timeless luxury and modern elegance.",
      quote:
        "The Grand Ballroom transformed our wedding into a fairytale — it was absolutely magical.",
      quoterAuthor: "— Stephanie R., Bride",
      image: "",
      orientation: "normal",
    },
    {
      id: 1,
      title: "The Garden Courtyard",
      description:
        "A charming outdoor oasis ideal for cocktail hours, ceremonies, or intimate soirées. Surrounded by lush greenery and elegant lighting, it creates a serene yet sophisticated atmosphere perfect for unforgettable gatherings.",
      quote:
        "We said our vows under the stars — it was like something out of a dream.",
      quoterAuthor: "— Marcus & Elina, Newlyweds",
      image: "",
      orientation: "inverted",
    },
    {
      id: 2,
      title: "The Velvet Lounge",
      description:
        "An exclusive space for smaller, high-end events. Plush seating, ambient lighting, and rich textures make this lounge perfect for VIP receptions, after-parties, or executive gatherings.",
      quote:
        "The lounge gave our event the intimacy and class we were hoping for. Absolutely flawless.",
      quoterAuthor: "— Daniel K., Event Planner",
      image: "",
      orientation: "normal",
    },
    {
      id: 3,
      title: "The Crystal Foyer",
      description:
        "The perfect pre-function space for guest arrivals, welcome drinks, or elegant check-ins. This foyer features mirrored walls, crystal lighting, and tasteful floral decor that makes an unforgettable first impression.",
      quote:
        "Our guests walked in and immediately knew this was going to be something special.",
      quoterAuthor: "— Lauren J., Corporate Host",
      image: "",
      orientation: "inverted",
    },
  ];

  return (
    <section
      className="w-full flex flex-col items-center justify-center mb-20"
      id="event-space"
    >
      {spaces.map(
        ({
          id,
          title,
          description,
          quote,
          quoterAuthor,
          image,
          orientation,
        }) => {
          return (
            <div
              key={id}
              className={`
                ${
                  orientation === "inverted"
                    ? "lg:flex-row-reverse "
                    : "lg:flex-col-reverse "
                } flex flex-col lg:flex-row justify-between lg:w-[80%] w-[90%] lg:h-[70vh] mb-[5em] lg:mb-[15em] text-justify`}
            >
              <div className="lg:w-[50%] flex w-full flex-col lg:px-8 lg:py-12 p-3 mb-6 ">
                <div className=" mb-6">
                  <h2 className="lg:text-[2rem] font-semibold mb-4">{title}</h2>
                  <p className="">{description}</p>
                </div>
                <div className="">
                  <blockquote className="italic mb-4">{quote}</blockquote>
                  <p className="opacity-75">{quoterAuthor}</p>
                </div>

                <div
                  className={`${
                    orientation === "inverted" ? "flex lg:justify-end" : ""
                  } w-full`}
                >
                  <button className="button">Book Location</button>
                </div>
              </div>
              <div className="lg:w-[35%] w-full min-h-[25em] overflow-hidden lg:h-full bg-stone-500">
                <Image
                  loader={cloudinaryLoader}
                  src={images.eventSpace[id]}
                  alt="Party, event, image"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                  // unoptimized
                />
              </div>
            </div>
          );
        }
      )}
    </section>
  );
};

export default EventSpace;
