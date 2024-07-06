import { ModeToggle } from "@/components/ui/ModeToggle";
import Image from "next/image";
import { HeroPage } from "@/components/core/HeroPage";
import { Clients } from "@/components/core/Clients";

export default function Home() {
  return (

    <div className="pt-20 h-screen w-full">
      <HeroPage />
      <Clients />
    </div>


  );
}
