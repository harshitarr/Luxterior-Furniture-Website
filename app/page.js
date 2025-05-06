import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Benefits from "@/components/Benefits"
import Experience from "@/components/Experience"
import Process from "@/components/Process"
import Testimonials from "@/components/Testimonials"
import Subscribe from "@/components/Subscribe"
import Footer from "@/components/Footer"



export default function Home() {
  return(
    <div className="max-w-[1600px] mx-auto px-1" >
        <Navbar/>
        <Hero/>
        <Benefits/>
        <Experience/>
        <Process/>
        <Testimonials/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}