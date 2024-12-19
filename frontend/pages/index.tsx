import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import Users from "@/components/Home/Users";
import Main from "@/components/Home/Main";
import Footer from "@/components/Footer";
import PerCard from "@/components/Home/PerCard";
import { useState } from "react";
import Loader from "@/components/Loader";
import Marque from "@/components/Home/Marquee";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <Users />
          <Marque />
          <PerCard />
          <Main />
          <Footer />
        </div>
      )}
    </div>
  );
}
