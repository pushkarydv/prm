import Navbar from "../components/Navbar";
import Features from "../templates/Features";
import Footer from "../templates/Footer";
import GoCreate from "../templates/GoCreate";
import Hero from "../templates/Hero";
import OpenSource from "../templates/OpenSource";

export default function Home() {
  return (
    <>
      <div className="bg-zinc-50 text-slate-800">
        <Navbar bgClass={"bg-cyan-50"} />
        <Hero />
        <GoCreate />
        <Features />
        <OpenSource />
        <Footer />
      </div>
    </>
  );
}
