import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contact = () => {
  return (
    <div>
        <Navbar></Navbar>
      <h1>Contact Page</h1>
        <br />
      <Link href="/">Balik</Link>
        <Footer></Footer>
    </div>
  );
}

export default contact;