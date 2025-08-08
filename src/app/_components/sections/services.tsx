import Image from "next/image";
import React from "react";
import { LogoImage } from "../base/logo";
import cloudinaryLoader from "@/app/lib/cloudinary";

const Services = () => {
  const services = [
    {
      id: 0,
      title: "Catering & Culinary Art",
      images: [
        "v1754612627/anton-rybakov-oT4ZgWJP5cA-unsplash_bhw7qy.jpg",
        "v1754612495/julia-blumberg-ODdw4F6ajpU-unsplash_ilyegn.jpg.jpg",
        "v1754612383/chuttersnap-kgIMnUlv0Mw-unsplash_kuolxl.jpg.jpg",
      ],
      description:
        "Delight your guests with an unforgettable culinary experience. From artfully plated entrées to custom menus, our chefs blend creativity and flavor to match your event’s style and spirit.",
    },
    {
      id: 1,
      title: "Floral Design",
      images: [
        "v1754612499/melody-zimmerman-nf0zABigc8s-unsplash_bqfnhe.jpg.jpg",
        "v1754612576/oxana-melis-X_7Qb2Tg_6g-unsplash_zscmgj.jpg.jpg",
        "v1754612545/aida-batres-_QxzSVWesm0-unsplash_srmhqn.jpg.jpg",
      ],
      description:
        "Every arrangement is a work of art. Our in-house floral team designs striking, seasonal pieces that transform any space — from grand centerpieces to delicate aisle florals.",
    },
    {
      id: 2,
      title: "Event Production",
      images: [
        "v1754612438/sam-moghadam-d1svyyw_9-s-unsplash_bn60ki.jpg.jpg",
        "v1754612383/montylov-3LM_c8LY16o-unsplash_dwagj8.jpg.jpg",
        "v1754612718/pablo-heimplatz-ZODcBkEohk8-unsplash_tt754u.jpg.jpg",
      ],
      description:
        "From lighting to layout, we produce immersive experiences that wow your guests. Our team handles every detail to ensure flawless execution, no matter your vision.",
    },
    {
      id: 3,
      title: "Furniture & Rentals",
      images: [
        "v1754612646/kevin-yudhistira-alloni-oRC-Yq2fGAk-unsplash_jnitfv.jpg.jpg",
        "v1754612454/yan-lee-1Zwn-yYMYZE-unsplash_wv0kwj.jpg.jpg",
        "v1754612782/janay-peters-OGtDgKzMwJU-unsplash_qndaxa.jpg.jpg",
      ],
      description:
        "From elegant tablescapes to stylish seating, our rental collections elevate your event’s design. Choose from a curated selection of premium furniture, linens, and accessories.",
    },
    {
      id: 4,
      title: "Event Planning",
      images: [
        "v1754612800/evangeline-shaw-xRlI-L-kvrw-unsplash_bk3qj9.jpg.jpg",
        "v1754612416/alejandro-escamilla-BbQLHCpVUqA-unsplash_um98zc.jpg.jpg",
        "planner-directing-staff.jpg",
      ],
      description:
        "Relax and enjoy your day — we’ve got everything covered. Our seasoned planners coordinate timelines, vendors, and execution to deliver a seamless experience from start to finish.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center" id="services">
      {services.map(({ id, title, images, description }) => {
        return (
          <div
            key={id}
            className="flex flex-col items-center justify-center mb-[12em] lg:w-[80%] w-full px-4"
          >
            <div className="flex justify-center opacity-">
              <LogoImage />
            </div>
            <h2 className="text-[2rem] mb-8 text-center">{title}</h2>
            <div className="flex justify-between lg:flex-row flex-col w-full mb-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full lg:mx-2 h-[50vh] bg-stone-400 lg:mb-0 mb-4"
                >
                  <Image
                    loader={cloudinaryLoader}
                    src={image}
                    alt="Party, event, image"
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-full"
                    // unoptimized
                  />
                </div>
              ))}
            </div>
            <p className="lg:w-[50%] text-center">{description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Services;
