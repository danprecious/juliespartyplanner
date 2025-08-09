import cloudinaryLoader from "@/app/lib/cloudinary";
import Image from "next/image";
import React from "react";
import { LogoImage } from "./logo";

const Footer = () => {
  return (
    <footer className="pt-[10em] overflow-hidden justify-end flex items-center flex-col pb-5">
      <div className="relative">
        <div className="flex justify-center opacity-40">
          <LogoImage />
        </div>
        <h1 className="text-[20rem] font-black text-gradient-r opacity-10">
          JULIE
        </h1>
      </div>

      <div className="text-center">
        <div className="py-5">
          <strong>
            JULIE PARTY PLANNER & CONSULT LLC 4854 OLD NATIONAL HWY STE 201
            COLLEGE PARK, GA 30337-6943
          </strong>
        </div>
        <p>Copyright 2025, JuliePartyPlanner</p>
      </div>
    </footer>
  );
};

export default Footer;
