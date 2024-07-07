import { ModeToggle } from "@/components/ui/ModeToggle";
import Image from "next/image";
import { Hero } from "@/components/core/Hero";
import { Clients } from "@/components/core/Clients";
import Community from "@/components/core/Community";
import Unlock from "@/components/core/Unlock";
import Calender from "@/components/core/Calender";
import Achievements from "@/components/core/Achievements";
import Customer from "@/components/core/Customer";
import CommunityUpdate from "@/components/core/CommunityUpdate";
import { Footer } from "@/components/common/Footer";
import SubFooter from "@/data/SubFooter";

export default function Home() {
  return (

    <div className="pt-20 h-screen w-screen  bg-white dark:bg-black text-gray-700 dark:text-white">
      <Hero />
      <Clients />
      <Community />
      <Unlock />
      <Achievements />
      <Calender />
      <Customer />
      <CommunityUpdate />
      <SubFooter />
      <Footer />

    </div>


  );
}
