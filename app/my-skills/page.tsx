"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="flex flex-col gap-10 md:gap-20 max-w-[95%] text-center items-center">
        <div className="flex flex-col items-center gap-2 md:gap-4">
          <h1 className="font-semibold text-white text-[28px] sm:text-[32px] md:text-[40px] lg:text-[50px]">
            Skills
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}&{" "}
            </span>
            Technologies
          </h1>
          <p className="text-gray-400 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
            Using the latest tech this world has to offer
          </p>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 15 },
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 25 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-full"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 15 },
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 25 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-full"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;
