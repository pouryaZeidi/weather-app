import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import BackgroundChanger from "@/components/BackgroundChanger";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" ">
      {/* <BackgroundChanger/> */}
      <Navbar/>
    </main>
  );
}
