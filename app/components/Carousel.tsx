"use client";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Pekerjaan Pembangunan Gedung Olahraga",
    image: "/assets/porto1.jpg",
  },
  {
    id: 2,
    title: "Pengelolaan Parkir pada RSU Sakinah Lhokseumawe",
    image: "/assets/porto2.jpg",
  },
];

export default function PortfolioCarousel() {
  const [current, setCurrent] = useState(0);
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[0]
  >(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative bg-blue-900 py-16">
      {/* Wave Atas*/}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 20 470 280"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24 sm:h-32 md:h-40"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,117.3C672,117,768,171,864,181.3C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
        Portofolio
      </h2>

      {/* Carousel */}
      <div className="relative flex items-center justify-center">
        {/* Tombol kiri */}
        <button
          onClick={prevSlide}
          className="absolute left-4 text-white p-2 rounded-full hover:bg-white/20 z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Container card*/}
        <div className="flex items-center justify-center relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl h-[350px] sm:h-[380px] md:h-[400px]">
          {projects.map((project, index) => {
            let position = "opacity-0 scale-75"; // default
            if (index === current) {
              position = "z-20 opacity-100 scale-100"; // aktif
            } else if (
            index ===
              (current - 1 + projects.length) % projects.length
            ) {
              position =
                "z-10 opacity-60 translate-x-16 sm:translate-x-28 md:translate-x-40 scale-90"; // kiri
            } else if (index === (current + 1) % projects.length) {
              position =
                "z-10 opacity-60 -translate-x-16 sm:-translate-x-28 md:-translate-x-40 scale-90"; // kanan
            }

            return (
              <div
                key={project.id}
                className={`absolute transition-all duration-500 ease-in-out w-[200px] sm:w-[250px] md:w-[300px] h-[280px] sm:h-[320px] md:h-[350px] bg-gray-200 rounded-lg overflow-hidden shadow-lg ${position}`}
              >
                {/* Gambar */}
                <div className="relative h-[160px] sm:h-[180px] md:h-[220px] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col justify-between h-[100px] sm:h-[120px] md:h-[130px] bg-gray-200">
                  <h3 className="font-bold text-sm sm:text-base md:text-lg">
                    {project.title}
                  </h3>
                  <span
                    onClick={() => setSelectedProject(project)}
                    className="text-xs sm:text-sm cursor-pointer hover:underline"
                  >
                    Lihat →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tombol kanan */}
        <button
          onClick={nextSlide}
          className="absolute right-4 text-white p-2 rounded-full hover:bg-white/20 z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background blur */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Modal Content*/}
          <div className="relative max-w-4xl w-full mx-4 rounded-lg overflow-hidden z-10 flex flex-col items-center">
            <div className="relative w-full h-[300px] sm:h-[500px] md:h-[600px]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Tombol close*/}
            <button
              className="mt-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-200 transition"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Wave Bawah */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 20 470 280"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24 sm:h-32 md:h-40"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,117.3C672,117,768,171,864,181.3C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
