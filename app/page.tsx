import { ModeToggle } from "@/components/ui/ModeToggle";
import Image from "next/image";
import { Hero } from "@/components/core/Hero";
import { Clients } from "@/components/core/Clients";
import Community from "@/components/core/Community";
import Unlock from "@/components/core/Unlock";
// import Calender from "@/components/core/Calender";
import Achievements from "@/components/core/Achievements";

export default function Home() {
  return (

    <div className="pt-20 h-screen w-screen  bg-white text-gray-700">
      <Hero />
      <Clients />
      <Community />
      <Unlock />
      {/* <Calender /> */}
      <Achievements />

    </div>


  );
}
