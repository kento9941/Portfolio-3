import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import PortraitScene from "@/components/home/portrait-scene";
import Title from "@/components/home/title";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Header />
      <Footer />
      <Title />
      <PortraitScene />
    </main>
  )
}
