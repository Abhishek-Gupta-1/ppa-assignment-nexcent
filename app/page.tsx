import { ModeToggle } from "@/components/ui/ModeToggle";
import Image from "next/image";
import { Hero } from "@/components/core/Hero";
import { Clients } from "@/components/core/Clients";
import Community from "@/components/core/Community";

export default function Home() {
  return (

    <div className="pt-20 h-screen w-full bg-white text-gray-700">
      <Hero />
      <Clients />
      <Community />
    </div>


  );
}
