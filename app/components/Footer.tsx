import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 relative">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        
        {/* 🔹 Kiri: Logo + Alamat */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <Image
            src="/assets/dp_3.png"
            alt="Logo"
            width={200}
            height={60}
            className="mx-auto md:mx-0"
          />
          <div className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            <p>
              <span className="font-semibold">Alamat :</span> Jalan Cut Meutia, 2. Matang Kuli, Aceh Utara, Aceh, ID
            </p>
            <p>
              <span className="font-semibold">Telp :</span> (0620) 8212 8309
            </p>
          </div>
        </div>

        {/* 🔹 Tengah: Quick Links */}
        <div className="flex flex-col text-center md:text-left gap-3">
          <h3 className="text-white font-bold text-lg mb-2">Quick Links</h3>
          <Link href="/" className="hover:text-blue-500 transition-colors">Beranda</Link>
          <Link href="/about" className="hover:text-blue-500 transition-colors">Tentang Kami</Link>
          <Link href="/porto" className="hover:text-blue-500 transition-colors">Portofolio</Link>
          <Link href="/contact" className="hover:text-blue-500 transition-colors">Kontak</Link>
        </div>

        {/* 🔹 Kanan: Kontak Cepat */}
        <div className="flex flex-col text-center md:text-left gap-3">
          <h3 className="text-white font-bold text-lg mb-2">Kontak Cepat</h3>
          <a
            href="mailto:ptdella2@gmail.com"
            className="hover:text-blue-500 transition-colors"
          >
            Email: ptdella2@gmail.com
          </a>
          <a
            href="https://wa.me/6285260810000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors"
          >
            WhatsApp: +62 852-6081-0000
          </a>
        </div>
      </div>

      {/* 🔹 Garis pemisah */}
      <div className="w-full border-t border-white/20 my-6"></div>

      {/* 🔹 Copyright */}
      <p className="text-gray-400 text-xs sm:text-sm md:text-base text-center">
        ©2025 - PT. Della Pratama | All Rights Reserved.
      </p>
    </footer>
  );
}
