import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const about = () => {
  return (
    <div>
        <Navbar></Navbar>
      <h1>About Page</h1>
        <br />
      <Link href="/">Balik</Link>
        <Footer></Footer>
    </div>
  );
}

export default about;