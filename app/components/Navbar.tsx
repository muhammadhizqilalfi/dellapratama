"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // ✅ Import

export default function Header() {
  const [shrink, setShrink] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname(); // ✅ ambil path aktif

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setShrink(true);
      else setShrink(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/about" },
    { label: "Portofolio", href: "/porto" },
    { label: "Kontak", href: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 transition-all duration-300">
      {/* Topbar */}
      {!shrink && (
        <div className="hidden md:block bg-blue-900 text-white text-sm py-1">
          <div className="container mx-auto flex justify-end gap-10 px-4">
            <span>Aceh Utara - Indonesia</span>
            <span>E-mail: pt.della2@gmail.com</span>
            <span>Telp: +62 852-6081-0000</span>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav
        className={`w-full shadow-sm transition-all duration-300 ${
          shrink ? "bg-white py-0.5" : "bg-transparent py-1"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <Link href="/">
            <Image
              src={shrink ? "/assets/dp_1.png" : "/assets/dp_3.png"}
              alt="Logo"
              width={200}
              height={70}
              className="cursor-pointer transition-all duration-300"
            />
          </Link>

          {/* Menu Desktop & Tablet */}
          <ul
            className={`hidden md:flex gap-10 font-light ${
              shrink ? "text-black" : "text-white"
            }`}
          >
            {menuItems.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <li key={i} className="relative group">
                  <Link
                    href={item.href}
                    className={`relative py-2 transition-all duration-300 
            ${
              isActive
                ? "text-red-500 font-medium"
                : "group-hover:text-red-500"
            }
          `}
                  >
                    {item.label}
                    {/* underline */}
                    <span
                      className={`absolute bottom-0 h-[2px] bg-red-500 transition-all duration-300
              ${
                isActive
                  ? "w-full left-0"
                  : "w-0 left-1/2 group-hover:w-full group-hover:left-0"
              }
            `}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              shrink ? "text-black" : "text-white"
            }`}
          >
            <div className="relative w-6 h-6">
              <div
                className={`absolute left-0 top-1/2 w-6 h-[2px] bg-current transform transition-all duration-500 ease-in-out ${
                  openMenu ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <div
                className={`absolute left-0 top-1/2 w-6 h-[2px] bg-current transform transition-all duration-500 ease-in-out ${
                  openMenu ? "opacity-0" : ""
                }`}
              />
              <div
                className={`absolute left-0 top-1/2 w-6 h-[2px] bg-current transform transition-all duration-500 ease-in-out ${
                  openMenu ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden flex flex-col items-start gap-2 py-2 px-3 transition-all duration-500 ease-in-out
            ${
              openMenu
                ? "max-h-screen opacity-100 bg-white-900 backdrop-blur-lg rounded-lg"
                : "max-h-0 opacity-0 overflow-hidden"
            }
          `}
        >
          {menuItems.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={i}
                href={item.href}
                onClick={() => setOpenMenu(false)}
                className={`w-full px-5 py-2 rounded-lg transition-all duration-300
                  ${isActive ? "text-white font-semibold bg-blue-900" : ""}
                  ${
                    shrink
                      ? "text-black hover:text-blue-900 hover:bg-blue-100"
                      : "text-white hover:text-blue-900 hover:bg-white/30"
                  }
                `}
                style={{
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
