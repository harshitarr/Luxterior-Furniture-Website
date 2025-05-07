import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/about/Hero";
import Details from "@/components/about/Details";
import Overview from "@/components/about/Overview"

export default function About() {
  return (
    <div className="max-w-[1600px] mx-auto px-1">
      <Navbar />
      <div>
            <Hero/>
            <Overview/>
            <Details/>
      </div>
      <Footer />
    </div>
  );
}