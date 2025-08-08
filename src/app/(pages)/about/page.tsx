import cloudinaryLoader from "@/app/lib/cloudinary";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  const herosrc =
    "https://res.cloudinary.com/dv7vjs0s0/image/upload/f_auto,q_auto,w_800/v1754448341/meg-jenson-_cp0vEyJb_Q-unsplash_xky98a.jpg";
  const localsrc = "/images/hero.jpg";

  const about = {
    headline: "We don't just host events — we shape unforgettable experiences.",
    intro:
      "At Julie Event Planner Consulting, we redefine what it means to host. Whether it's a wedding, corporate retreat, private dinner, or creative shoot, we provide immersive spaces and curated support that help you bring your vision to life. Our event solutions are designed with elegance, flexibility, and modern aesthetics at the core.",
    philosophy:
      "We believe that a space is more than just walls and décor — it’s a canvas for memory-making. That’s why our approach merges stunning locations with seamless planning, ensuring that every detail is intentional, and every experience feels exclusive.",
    uniqueValue:
      "From customizable venue styling to strategic partnerships with decorators, caterers, and media teams, we provide end-to-end support tailored to your needs. Whether you're planning months ahead or need something in 48 hours, we move fast — and with excellence.",
    cta: "Let’s make something remarkable together. Explore our curated spaces or reach out to book a consultation — your next big moment deserves a venue that’s just as extraordinary.",
  };

  return (
    <section className="">
      <div className="h-full relative w-full min-h-[90vh] justify-center flex items-center mb-20 ">
        <div className="z-50 text-white">
          <div className="flex text-center flex-col items-center justify-center">
            <Image
              loader={cloudinaryLoader}
              src="/images/logo.png"
              alt="Julie Party Planner Logo"
              width={400}
              height={50}
              className="object-contain ml-2"
            />
            <h1 className="text-[2.5rem] font-semibold lg:text-[5rem]">
              ABOUT US{" "}
            </h1>
            <p className="text-xs font-semi-bold lg:text-[1rem] opacity-80">
              EXPLORE
            </p>
          </div>
        </div>
        <div className="bg-black opacity-70 z-40 absolute h-full w-full"></div>
        <div className="absolute w-full h-full overflow-hidden">
          <Image
            loader={cloudinaryLoader}
            src={herosrc}
            alt="Party, event, image"
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
            unoptimized
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <h2 className="lg:text-[3rem] text-[1.5em] font-semibold lg:text-center  mb-5 w-[90%] lg:w-full">
          {about.headline}
        </h2>
        <div className="lg:w-[80%] w-[90%] flex flex-col items-center">
          <p className="lg:w-[70%] text-justify">{about.intro}</p>

          <div className="my-8">
            <h3 className="lg:text-[3rem] text-[1.5em] font-semibold lg:text-center  mb-5 w-[90%] lg:w-full">
              Our Philosophy
            </h3>
            <p className="text-justify">{about.philosophy}</p>
          </div>

          <div className="my-8">
            <h3 className="lg:text-[3rem] text-[1.5em] font-semibold lg:text-center  mb-5 w-[90%] lg:w-full">
              What We Offer
            </h3>
            <p className="text-justify">{about.uniqueValue}</p>
          </div>
          <div className="my-8">
            <h3 className="lg:text-[3rem] text-[1.5em] font-semibold lg:text-center  mb-5 w-[90%] lg:w-full">
              Let's Create the Remarkable
            </h3>
            <p className="text-justify">{about.cta}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
