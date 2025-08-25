import Link from "next/link";
import Image from "next/image";

// Make sure the Navbar component exists at ../components/Navbar.tsx or update the path below if needed
// Update the import path if Navbar is located elsewhere, e.g.:
// import Navbar from "./components/Navbar";
// import Navbar from "../components/navbar";
// import Navbar from "../Navbar";
// Make sure the path matches the actual file location and casing.
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      
      <HeroSlider/>
      <div className="text-center text-white text-xl italic py-12 bg-red-500">
        <i>"Membangun dengan Kualitas, Berkarya dengan Integritas"</i>
      </div>

      {/* ABOUT US SECTION */}
        <section className="py-16 px-8 bg-white flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 ml-15">
            <h2 className="text-4xl font-bold mb-20">Tentang Kami</h2>
              <p className="mb-4 text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
                quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              </p>
              <p className="text-gray-700 mb-6">
                Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
                massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
              <Link
                href="about"
                className="mt-6 inline-block border border-red-500 text-red-500 font-bold px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition"
              >
                Selengkapnya →
              </Link>
          </div>

            <div className="md:w-1/2 flex justify-center items-center">
            <div className="-mr-10 w-150 h-100 rounded-lg overflow-hidden relative">
              <Image
              src="/assets/bg1.jpg"
              alt="Deskripsi gambar"
              fill
              className="object-cover rounded-lg"
              />
            </div>
            </div>
        </section>
      <Link href="about">Ke halaman about</Link>
      <Footer></Footer>
    </div>
  );
}
