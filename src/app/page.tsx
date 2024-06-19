import Image from "next/image";
import Navbar from "./mainPageComponents/Navbar";
import HeroSection from "./mainPageComponents/HeroSection";

export default function Home() {
  return (
    <div>
      {/* <h1 className="poppins font-bold">Homepage</h1> */}
      <Navbar />
      <HeroSection />
    </div>
  );
}
