"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Scroll Indicator Component
function ScrollIndicator() {
  return (
    <div className="absolute bottom-5 right-5 -translate-x-1/2 flex flex-col items-center text-white z-20">
      {/* Text */}
      <span className="mb-8 tracking-widest text-sm rotate-270">SCROLL</span>

      {/* Mouse shape */}
      <div className="w-7 h-12 border-3 border-white rounded-full flex justify-center relative">
        <span className="w-2 h-2 bg-white rounded-full absolute top-3 animate-bounce" />
      </div>

      {/* Arrow */}
      <div className="mt-2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

export default function HeroSlider() {
  return (
    <div className="relative w-full h-screen">
      {/* SLIDER GAMBAR */}
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
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/bg1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/bg2.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/bg3.png')" }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* TEXT */}
      <div className="absolute inset-y-0 left-10 flex items-center z-10">
        <div className="text-white">
          <p className="text-2xl">Welcome to</p>
          <h1 className="text-9xl font-bold">PT. DELLA <br />PRATAMA</h1>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <ScrollIndicator />
    </div>
  );
}
