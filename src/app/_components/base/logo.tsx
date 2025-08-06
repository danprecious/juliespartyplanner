import cloudinaryLoader from "@/app/lib/cloudinary";
import Image from "next/image";

const Logo = ({ size }: { size: number }) => {
  return (
    <div className="flex text-center flex-col items-center justify-center">
      <Image
        loader={cloudinaryLoader}
        src="/images/logo.png"
        alt="Julie Party Planner Logo"
        width={size}
        height={50}
        className="object-contain ml-2"
      />
      <h1 className="text-[1.5rem] font-semibold">JULIE</h1>
      <p className="text-xs opacity-75">EVENT PLANNER</p>
    </div>
  );
};

export default Logo;

export const LogoImage = () => {
  return (
    <Image
      loader={cloudinaryLoader}
      src="/images/logo.png"
      alt="Julie Party Planner Logo"
      width={200}
      height={50}
      className="object-contain ml-2"
    />
  );
};
