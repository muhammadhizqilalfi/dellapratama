import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 relative">
      <div className="flex flex-col items-center">
        
        {/* Logo  */}
        <div className="flex items-center gap-3 mb-4 -mt-4">
          <Image
            src="/assets/dp_3.png" // ganti dengan logo kamu
            alt="Logo"
            width={300}
            height={80}
          />
        </div>

        {/* Alamat + Telp */}
        <div className="text-gray-300 text-sm mb-6 text-center">
          <p>
            <span className="font-semibold">Address :</span> Jalan Cut Meutia, 2.
            Matang Kuli, Aceh Utara, Aceh, ID
          </p>
          <p>
            <span className="font-semibold">Telp :</span> (0620) 8212 8309
          </p>
        </div>

        {/* Navigasi */}
        <nav className="flex gap-8 font-semibold mb-6">
          <Link href="/" className="hover:text-blue-900">
            Beranda
          </Link>
          <Link href="about" className="hover:text-blue-900">
            Tentang Kami
          </Link>
          <Link href="porto" className="hover:text-blue-900">
            Portofolio
          </Link>
          <Link href="contact" className="hover:text-blue-900">
            Contact Us
          </Link>
        </nav>

        {/* Garis pemisah */}
        <div className="w-300 border-t border-white/70 my-4"></div>

        {/* Copyright */}
        <p className="absolute bottom-6 left-70 text-gray-400 text-sm text-left ml-20">
          ©2025 - PT. Della Pratama | All Rights Reserved.
        </p>
      </div>

      {/* Bullet indikator */}
      <div className="absolute right-90 bottom-6 flex gap-3">
        <span className="w-5 h-5 bg-white rounded-full"></span>
        <span className="w-5 h-5 bg-white rounded-full"></span>
        <span className="w-5 h-5 bg-white rounded-full"></span>
      </div>
    </footer>
  );
}
