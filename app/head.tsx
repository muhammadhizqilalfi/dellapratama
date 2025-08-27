import Head from "next/head";

export default function MetaHead() {
  return (
    <Head>
      <title>PT. Della Pratama</title>
      <meta name="description" content="PT. Della Pratama bergerak di bidang konstruksi, supplier, dan jasa. Solusi inovatif untuk setiap proyek." />
      <meta name="keywords" content="konstruksi, supplier, jasa, proyek, Della Pratama, dellapratama, dellapratama.com, Della, della, pratama, Pratama, PT.Della Pratama" />
      <meta name="author" content="PT. Della Pratama" />
      <link rel="canonical" href="https://dellapratama.com" />
      {/* Open Graph */}
      <meta property="og:title" content="PT. Della Pratama" />
      <meta property="og:description" content="Konstruksi, supplier, dan jasa. Solusi inovatif untuk proyek Anda." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dellapratama.com" />
      <meta property="og:image" content="https://dellapratama.com/assets/dp_3.png" />
    </Head>
  );
}
