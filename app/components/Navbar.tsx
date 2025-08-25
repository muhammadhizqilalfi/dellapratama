"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300">
      {/* 🔹 Topbar hanya muncul saat belum scroll */}
      {!shrink && (
        <div className="bg-blue-900 text-white text-sm py-1">
          <div className="container mx-auto flex justify-end gap-10 px-4">
            <span>Aceh Utara - Indonesia</span>
            <span>Email: dellapratama@gmail.com</span>
            <span>Telp: +62 21 1234 5678</span>
          </div>
        </div>
      )}

      {/* 🔹 Main Navbar */}
      <nav
        className={`w-full shadow-sm transition-all duration-300 ${
          shrink ? "bg-white py-1" : "bg-transparent py-2"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/">
            <Image
              src={shrink ? "/assets/dp_1.png" : "/assets/dp_3.png"}
              alt="PT. Della Pratama Logo"
              width={220}
              height={80}
              className="cursor-pointer transition-all duration-300"
            />
          </Link>

          <ul
            className={`flex gap-10 font-extrabold ${
              shrink ? "text-black" : "text-white"
            }`}
          >
            <li>
              <Link
                href="/"
                className="relative hover:text-blue-900 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="relative hover:text-blue-900 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="/porto"
                className="relative hover:text-blue-900 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                Portofolio
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="relative hover:text-blue-900 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
