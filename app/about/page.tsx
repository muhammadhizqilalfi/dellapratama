"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function CompanyProfile() {
  const [activeTab, setActiveTab] = useState("profil");

  const tabs = [
    { id: "profil", label: "Profil Perusahaan" },
    { id: "visi", label: "Visi & Misi" },
    { id: "legalitas", label: "Legalitas" },
    { id: "struktur", label: "Struktur Organisasi" },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
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
                        bg-red-500 text-white w-72 sm:w-80 h-10 sm:h-12 
                        flex items-center justify-center 
                        rounded-t-full font-semibold text-sm sm:text-lg"
        >
          TENTANG
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-6 pb-2 mb-6 mt-6 gap-2 sm:gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-1 text-sm sm:text-base font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? "text-red-600"
                : "text-gray-600 hover:text-red-500"
            }`}
          >
            {tab.label}
            <span
              className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-red-600 transition-all duration-300 ${
                activeTab === tab.id ? "w-full" : "w-0"
              }`}
              style={{ transitionProperty: "width" }}
            />
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* PROFIL */}
        {activeTab === "profil" && (
          <section className="py-8 sm:py-16 space-y-8 sm:space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
                  Tentang Kami
                </h2>
                <p className="text-gray-700 mb-2 sm:mb-4 text-justify text-sm sm:text-base">
                  Sejak berdiri pada tahun 2004, PT. Della Pratama terus
                  berkembang sebagai perusahaan di bidang kontraktor, supplier,
                  dan jasa. Dengan pengalaman lebih dari dua dekade, kami selalu
                  mengutamakan kualitas, ketepatan waktu, serta kepuasan
                  pelanggan.
                </p>
                <p className="text-gray-700 text-justify text-sm sm:text-base">
                  Kami dipercaya menangani berbagai proyek skala kecil hingga
                  besar dengan standar kerja profesional, material berkualitas,
                  dan tenaga ahli berpengalaman. Hal ini menjadikan kami mitra
                  yang andal dalam mewujudkan kebutuhan konstruksi dan
                  pengadaan.
                </p>
              </div>

              <div className="flex justify-center mt-4 md:mt-0">
                <Image
                  src="/assets/profil.jpg"
                  alt="Profil Perusahaan"
                  width={400}
                  height={224}
                  className="rounded-lg shadow-md object-cover w-full max-w-sm h-60 sm:h-72 md:h-80"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
                Data Profil Perusahaan :
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-2 sm:gap-4 text-xs sm:text-sm">
                <p>
                  <span className="font-medium">Akte Pendirian No :</span> 80
                  Tgl. 28 Mei 2004
                </p>
                <p>
                  <span className="font-medium">SK Menkumham :</span> AHU
                  C-16267 HT.01.01 TH.2004
                </p>
                <p>
                  <span className="font-medium">Akte Perubahan :</span> 25 Tgl
                  20 Juli 2020
                </p>
                <p>
                  <span className="font-medium">SK Menkumham :</span>{" "}
                  AHU-AH.01.03-0315687
                </p>
                <p>
                  <span className="font-medium">NPWP :</span> 002102479 9410
                  2000
                </p>
                <p>
                  <span className="font-medium">PKP :</span>{" "}
                  PEM-0221/WPJ.01/KP.0203/2004
                </p>
                <p>
                  <span className="font-medium">NIB :</span> 9020202551634
                </p>
              </div>
            </div>
          </section>
        )}

        {/* VISI & MISI */}
        {activeTab === "visi" && (
          <section className="py-8 sm:py-16 space-y-8 sm:space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
                  Misi Kami
                </h2>
                <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">*</span> Efisiensi
                    Optimal
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">*</span> Layanan Prima
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">*</span> Inovasi
                    Berkelanjutan
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">*</span> Transparansi
                    Usaha
                  </li>
                </ul>
              </div>

              <div className="w-full flex justify-center">
                <Image
                  src="/assets/Misi.jpg"
                  alt="Our Mission"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md object-cover w-full max-w-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="w-full flex justify-center">
                <Image
                  src="/assets/visi.png"
                  alt="Our Vision"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md object-cover w-full max-w-sm"
                />
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
                  Visi Kami
                </h2>
                <p className="text-gray-700 leading-relaxed mb-2 sm:mb-4 text-sm sm:text-base text-justify">
                  Mewujudkan perusahaan yang berperan aktif dalam pembangunan
                  dan pengembangan infrastruktur, perdagangan material, serta
                  jasa pendukung yang berkualitas tinggi. PT. Della Pratama
                  bertekad memberikan kontribusi nyata bagi pertumbuhan ekonomi
                  nasional maupun internasional melalui hasil kerja yang
                  produktif, efisien, dan bernilai guna bagi seluruh pemangku
                  kepentingan.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* LEGALITAS */}
        {activeTab === "legalitas" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-20">
            {[
              { label: "Akte Pendirian", src: "/pdf/akte_p.pdf" },
              { label: "NIB", src: "/pdf/nib.pdf" },
              { label: "NPWP", src: "/pdf/npwp.pdf" },
              { label: "PKP", src: "/pdf/pkp.pdf" },
              { label: "Akte Perubahan", src: "/pdf/akte_ubah.pdf" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center w-full">
                <div className="w-full h-64 sm:h-80 border border-gray-300 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                  <iframe
                    src={`${item.src}#toolbar=0`}
                    className="w-full h-full"
                    title={item.label}
                    allow="autoplay"
                  />
                </div>
                <span className="mt-2 font-semibold text-center text-sm sm:text-base">
                  {item.label}
                </span>
                <button
                  onClick={() =>
                    window.open(item.src, "_blank", "noopener,noreferrer")
                  }
                  className="mt-2 text-red-500 px-3 sm:px-4 py-1 sm:py-2 rounded-full hover:bg-red-500 hover:text-white border border-red-600 transition hover:font-bold text-sm sm:text-base"
                >
                  Lihat PDF di tab baru
                </button>
              </div>
            ))}
          </div>
        )}

        {/* STRUKTUR */}
        {activeTab === "struktur" && (
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Struktur Perusahaan
            </h2>
            <Image
              src="/assets/struktur.png"
              alt="Struktur"
              width={400}
              height={300}
              className="rounded-md shadow mx-auto w-full max-w-sm"
            />

            <div className="mt-4 sm:mt-6 mb-20 space-y-2 sm:space-y-4">
              <div className="bg-red-500 text-white rounded-md py-1 sm:py-2 px-3 sm:px-4 flex justify-start space-x-2 text-sm sm:text-base">
                <span className="font-bold text-sm sm:text-lg">
                  BADRUDDIN HASAN
                </span>
                <span className="self-end">Direktur</span>
              </div>
              <div className="bg-red-500 text-white rounded-md py-1 sm:py-2 px-3 sm:px-4 flex justify-start space-x-2 text-sm sm:text-base">
                <span className="font-bold text-sm sm:text-lg">
                  MUHAMMAD SALEH
                </span>
                <span className="self-end">Komisaris</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
