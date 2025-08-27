"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_rbfmwt9", // Ganti dengan service ID dari EmailJS
        "template_9ci97tj", // Ganti dengan template ID
        form.current,
        "Ri_2aU28mCvhxkgZS" // Ganti dengan public key EmailJS
      )
      .then(
        () => {
          alert("Pesan berhasil dikirim!");
          form.current?.reset();
        },
        (error) => {
          alert("Gagal mengirim pesan: " + error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      {/* Banner / Header */}
      <div className="relative">
        <Image
          src="/assets/banner1.jpeg"
          alt=""
          width={800}
          height={400}
          className="w-full h-48 sm:h-64 md:h-72 object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 
                        bg-red-500 text-white w-64 sm:w-80 h-10 sm:h-12 
                        flex items-center justify-center 
                        rounded-t-full font-semibold text-sm sm:text-lg"
        >
          KONTAK
        </div>
      </div>

      {/* Konten Kontak */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12 flex flex-col md:flex-row gap-8 sm:gap-12">
        {/* Form */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Send Us Message
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="Nama Depan"
                className="w-full sm:w-1/2 border px-4 py-2 rounded"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Nama Belakang"
                className="w-full sm:w-1/2 border px-4 py-2 rounded"
                required
              />
            </div>
            <input
              type="email"
              name="user_email"
              placeholder="E-mail"
              className="w-full border px-4 py-2 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Nomor Telepon"
              className="w-full border px-4 py-2 rounded"
            />
            <textarea
              name="message"
              placeholder="Pesan"
              rows={5}
              className="w-full border px-4 py-2 rounded"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition"
            >
              Kirim →
            </button>
          </form>
        </div>

        {/* Detail Kontak */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Detail Kontak</h2>
          <p>
            Jalan Cut Meutia, 2. Matang Kuli, <br /> Aceh Utara, Aceh
          </p>
          <p className="mt-2">
            <span className="font-bold">Telp :</span>{" "}
            <a href="tel:+6283890309564" className="hover:underline">
              +62 852-6081-0000
            </a>
          </p>
          <p className="mt-2">
            <span className="font-bold">E-mail :</span>{" "}
            <a
              href="mailto:pt.della2@gmail.com"
              className="hover:underline text-blue-500"
            >
              pt.della2@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Maps */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 w-full">
        <div className="w-full h-56 sm:h-64 md:h-72 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.423849525104!2d97.27433647570169!3d5.034811238669096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30478811f785174b%3A0x41fc2003d6ce6298!2sJl.%20Cut%20Meutia%2C%20Kec.%20Matangkuli%2C%20Kabupaten%20Aceh%20Utara%2C%20Aceh%2024386!5e0!3m2!1sid!2sid!4v1756226116308!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}
