import Image from "next/image";
import bg from "../../public/background/home-background.jpeg";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
import Link from "next/link";
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full flex h-screen items-center justify-center">
        <Navigation />
        <div className="rounded-full cursor-pointer  overflow-hidden w-[200px] h-[200px]  animate-glow relative z-10">
          <Link href={"/about"}><Image
            alt="tanim image"
            src="https://i.ibb.co.com/KyypXqS/tanim-removebg-preview.png"
            width={200}
            height={200}
          /></Link>
        </div>

      </div>
    </main>
  );
}
