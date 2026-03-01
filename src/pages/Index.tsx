import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import BrandStatement from "@/components/landing/BrandStatement";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import Showcase from "@/components/landing/Showcase";
import WhyFlipScore from "@/components/landing/WhyFlipScore";
import Testimonial from "@/components/landing/Testimonial";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <BrandStatement />
      <Problem />
      <Solution />
      <Showcase />
      <WhyFlipScore />
      <Testimonial />
      <FinalCTA />
      <Footer />
    </main>
  </>
);

export default Index;
