import Image from "next/image";
import localFont from "next/font/local";
import Register from "@/components/Register";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import Users from "@/components/Home/Users";
import Main from "@/components/Home/Main";
import Footer from "@/components/Footer";
import PerCard from "@/components/Home/PerCard";

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
  return (
    <div>
      <Navbar />
      <Hero />
      <Users />
      <PerCard />
      <Main />
      <Footer />
    </div>
  );
}
