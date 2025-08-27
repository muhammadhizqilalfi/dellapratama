import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div>
      <Navbar />

      <HeroSlider />
      <div className="text-center text-white text-lg sm:text-xl md:text-2xl italic py-6 sm:py-8 bg-red-500">
        <i>"Membangun dengan Kualitas, Berkarya dengan Integritas"</i>
      </div>

      {/* About Us */}
      <section className="py-10 px-4 sm:px-8 md:px-20 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold mb-6 sm:mb-8">
            Tentang Kami
          </h2>
          <p className="mb-4 text-gray-800 text-justify text-sm sm:text-base md:text-base">
            Didirikan pada tahun 2004, PT. Della Pratama bergerak di bidang
            kontraktor, supplier, dan jasa. Dengan pengalaman lebih dari dua
            dekade, kami berkomitmen menghadirkan solusi terbaik melalui
            kualitas kerja yang profesional, tepat waktu, dan terpercaya.
          </p>
          <p className="text-gray-700 mb-6 text-justify text-sm sm:text-base md:text-base">
            Sebagai mitra strategis, kami terus berkembang untuk memenuhi
            kebutuhan klien dengan layanan yang responsif, material berkualitas,
            serta dukungan tenaga ahli berpengalaman. Kami percaya bahwa
            kepuasan pelanggan adalah kunci keberhasilan dan keberlanjutan
            perusahaan.
          </p>
          <Link
            href="about"
            className="mt-4 sm:mt-6 inline-block border border-red-500 text-red-500 font-bold px-4 sm:px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition"
          >
            Selengkapnya →
          </Link>
        </div>

        <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
          <div className="w-full sm:w-[300px] md:w-[450px] h-[200px] sm:h-[250px] md:h-[300px] rounded-lg overflow-hidden relative">
            <Image
              src="/assets/bg2.jpg"
              alt="Deskripsi gambar"
              width={450}
              height={300}
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        </div>
      </section>

      <Carousel />

      <div className="text-center text-gray-600 text-lg py-4 mt-10">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold px-4 sm:px-0 mb-5">
          Informasi lebih lengkap mengenai perusahaan
        </p>
      </div>
      <div className="flex items-center justify-center mb-20">
        <Link
          href="about"
          className="inline-block border border-red-500 text-red-500 font-bold px-4 sm:px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition"
        >
          Lebih Lanjut →
        </Link>
      </div>

      <Footer />
    </div>
  );
}
