import { Socials } from "../constants";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import HyperText from "./ui/hyper-text";

const Navbar = (): JSX.Element => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[60px] sm:h-[80px] md:h-[100px] bg-transparent flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-20">
      {/* Logo and Name */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="relative">
          <Image
            src="/logo1.png"
            alt="logo"
            width={30}
            height={30}
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain rounded-full"
          />
        </div>
        <HyperText className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
          {`Shahzaib 86 Dev`}
        </HyperText>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-5 mt-2 sm:mt-0">
        {Socials.map((social) => (
          <Link key={social.name} href={social.Link} aria-label={social.name}>
            <Image
              src={social.src}
              alt={social.name}
              width={20}
              height={20}
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};export default Navbar;
