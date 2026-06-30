import Header from "@/components/header/header";
import PortraitScene from "@/components/home/portrait-scene";
import Roles from "@/components/home/roles";
import Title from "@/components/home/title";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Header />
      <Title />
      <Roles />
      <p className="w-[10vw] fixed bottom-[2rem] right-[2rem] z-100 pointer-events-none">
        Thoughtful craftsmanship lies at the heart of every project. Blending design and engineering to create digital experiences that are clean, refined, and built with intention.
      </p>
      <PortraitScene />
    </main>
  )
}
