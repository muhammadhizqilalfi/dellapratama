import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});


export const metadata: Metadata = {
  title: "PT. Della Pratama",
  description: "Website Resmi PT. Della Pratama",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://dellapratama.com"),
  keywords: [
    "konstruksi",
    "supplier",
    "jasa",
    "proyek",
    "Della Pratama",
    "dellapratama",
    "dellapratama.com",
    "Della",
    "della",
    "pratama",
    "Pratama",
    "PT.Della Pratama",
    "web della pratama",
    "website della pratama",
    "web dellapratama",
    "website dellapratama",
  ],
  authors: [{ name: "PT. Della Pratama" }],
  creator: "PT. Della Pratama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
