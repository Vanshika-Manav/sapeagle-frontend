import HeroSection from "../components/HeroSection";
import Crm from "../components/Crm";
// import Navbar from "../components/Navbar";
import About from "../components/About";
import Features from "../components/Features";
import Demo from "../components/Demo";
import ContactUs from "../components/ContactUs";
import Testimonials from "../components/Testimonial";
import CTASection from "../components/CTASection";
import Pricing from "../components/Pricing";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <About/>
      <Crm/>
      <Features />
      <Testimonials />
      <Demo/>
      <CTASection />
      <Pricing/>
      <ContactUs/>
    </>
  );
}
