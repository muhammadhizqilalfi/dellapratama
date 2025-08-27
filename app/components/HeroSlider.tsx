"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <div className="relative w-full h-screen">
      {/* SLIDER */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-gray-500",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-red-500",
        }}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/bg1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/bg2.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/bg3.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* TEXT HERO */}
      <div className="absolute inset-0 flex items-center z-10 px-4 sm:px-8 md:px-12 lg:px-20 text-center lg:text-left">
        <div className="text-white w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <p className="text-sm sm:text-base md:text-lg lg:text-2xl mb-2">
            Selamat Datang di
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold leading-snug sm:leading-tight md:leading-snug lg:leading-none">
            PT. DELLA <br />
            PRATAMA
          </h1>
        </div>
      </div>
    </div>
  );
}
