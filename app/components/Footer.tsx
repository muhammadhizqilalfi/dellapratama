import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-8">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-6">

        {/* Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <Image
            src="/assets/dp_3.png"
            alt="Logo"
            width={250}
            height={100}
            className="mx-auto md:mx-0"
          />
          <p className="hidden md:block text-gray-300 text-sm sm:text-base leading-relaxed max-w-xs text-justify">
            PT. Della Pratama bergerak di bidang konstruksi, suplier & jasa, memberikan solusi inovatif untuk setiap proyek.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <h3 className="text-white font-bold text-lg mb-2">Quick Links</h3>
          <Link href="/" className="hover:text-blue-500 transition-colors">Beranda</Link>
          <Link href="/about" className="hover:text-blue-500 transition-colors">Tentang Kami</Link>
          <Link href="/porto" className="hover:text-blue-500 transition-colors">Portofolio</Link>
          <Link href="/contact" className="hover:text-blue-500 transition-colors">Kontak</Link>
        </div>

        {/* Kontak */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <h3 className="text-white font-bold text-lg">Kontak</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            <span className="font-semibold">Alamat :</span> Jalan Cut Meutia, 2. Matang Kuli, <br /> Aceh Utara, Aceh, Indonesia
          </p>
          <a
            href="mailto:ptdella2@gmail.com"
            className="hover:text-blue-500 transition-colors"
          >
            E-mail: ptdella2@gmail.com
          </a>
          <a
            href="https://wa.me/6285260810000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            Telp: +62 852-6081-0000
          </a>
        </div>
      </div>

      {/* Border */}
      <div className="w-full border-t border-white/20 my-6"></div>

      {/* Copyright */}
      <p className="text-gray-400 text-xs sm:text-sm md:text-base text-center">
        ©2025 - <a href="https://www.dellapratama.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">PT. Della Pratama</a> | All Rights Reserved.
      </p>
    </footer>
  );
}
