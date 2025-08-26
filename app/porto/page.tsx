"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Pekerjaan Pembangunan Gedung Olahraga",
    img: "/assets/porto1.jpg",
  },
  { id: 2, title: "Proyek B", img: "/assets/porto1.jpg" },
  { id: 3, title: "Proyek C", img: "/assets/porto1.jpg" },
  { id: 4, title: "Proyek D", img: "/assets/porto1.jpg" },
];

export default function Porto() {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Banner / Header */}
      <div className="relative">
        <Image
          src="/assets/banner1.jpeg"
          alt="Banner"
          width={1920}
          height={400}
          className="w-full h-48 sm:h-64 md:h-72 object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 
                        bg-red-500 text-white w-64 sm:w-80 h-10 sm:h-12 
                        flex items-center justify-center 
                        rounded-t-full font-semibold text-sm sm:text-lg"
        >
          PORTOFOLIO
        </div>
      </div>

      {/* Galeri */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="text-center text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
          Galeri
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 
             max-h-full sm:max-h-[640px] overflow-y-visible sm:overflow-y-auto
             justify-items-center"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="relative w-full sm:w-auto h-56 sm:h-64 md:h-72 bg-gray-300 rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={project.img}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
              />

              <div
                className="absolute bottom-0 left-0 w-full 
                   bg-black/70 text-white py-2 sm:py-3 px-3 sm:px-4 
                   translate-y-full group-hover:translate-y-0
                   transition-all duration-500 ease-in-out text-center"
              >
                <p className="text-sm sm:text-base font-semibold">
                  {project.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-3xl w-full overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol close */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 bg-white text-black px-2 py-1 rounded-full hover:bg-red-600 transition"
            >
              ✕
            </button>

            {/* Isi modal */}
            <Image
              src={selectedProject.img}
              alt={selectedProject.title}
              width={1000}
              height={600}
              className="w-full max-h-[70vh] object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg sm:text-xl font-bold">{selectedProject.title}</h3>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
