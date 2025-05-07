import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactUs from "@/components/Contactus/ContactUs";


export default function About() {
  return (
    <div className="max-w-[1600px] mx-auto px-1">
      <Navbar />
      <div>

            <ContactUs/>
      </div>
      <Footer />
    </div>
  );
}