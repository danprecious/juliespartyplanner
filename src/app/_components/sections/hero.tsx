import cloudinaryLoader from "@/app/lib/cloudinary";
import Image from "next/image";

const Hero = () => {
  const herosrc = "v1754448341/meg-jenson-_cp0vEyJb_Q-unsplash_xky98a.jpg";
  const localsrc = "/images/hero.jpg";

  return (
    <section className="h-full relative w-full min-h-[90vh] justify-center flex items-center mb-20 ">
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
          <h1 className="text-[2.5rem] font-semibold lg:text-[5rem]">JULIE</h1>
          <p className="text-xs font-semi-bold lg:text-[1rem] opacity-80">
            EVENT PLANNER
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
          // unoptimized
        />
      </div>
    </section>
  );
};

export default Hero;
