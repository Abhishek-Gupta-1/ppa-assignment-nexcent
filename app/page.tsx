import { Hero, SubFooter } from "@/components/core";
import Clients from "@/components/core/Clients";
import Community from "@/components/core/Community";
import Unlock from "@/components/core/Unlock";
import Calender from "@/components/core/Calender";
import Achievements from "@/components/core/Achievements";
import Customer from "@/components/core/Customer";
import CommunityUpdate from "@/components/core/CommunityUpdate";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col">
      <div className="pt-20 h-screen w-screen  bg-white dark:bg-black text-gray-700 dark:text-white">
        <div className='border max-w-screen'>
          <div className='w-full'>
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
        </div>
      </div>
    </main>


  );
}
