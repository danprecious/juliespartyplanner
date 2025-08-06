import cloudinaryLoader from "@/app/lib/cloudinary";
import Image from "next/image";
import React from "react";
import { LogoImage } from "./logo";

const Footer = () => {
  return (
    <footer className="pt-[10em] overflow-hidden justify-end flex items-center flex-col">
      <div className="relative">
        <div className="flex justify-center opacity-40">
          <LogoImage />
        </div>
        <h1 className="text-[20rem] font-black text-gradient-r opacity-10">
          JULIE
        </h1>
      </div>

      <div className="text-center">
        <p>Copyright 2025, Dan Precious</p>
        <div className="py-5">
          <strong>Built with Love and Anger, lol</strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
