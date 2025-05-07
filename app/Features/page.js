import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Features/Hero";
import Topcategories from "@/components/Features/Topcategories"
import Fourseater from "@/components/Features/Fourseater"


export default function About() {
  return (
    <div className="max-w-[1600px] mx-auto px-1">
      <Navbar />
      <div>
            <Hero/>
            <Topcategories/>
            <Fourseater/>

      </div>
      <Footer />
    </div>
  );
}