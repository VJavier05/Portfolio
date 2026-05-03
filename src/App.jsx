
import Navbar from "./components/Navbar";
import Threads from "./components/Threads";
import BlurText from "./components/BlurText";       
import RotatingText from "./components/RotatingText";
import ScrollVelocity from "./components/ScrollVelocity";
import FloatingSocials from "./components/FloatingSocials";
import ChatMe from "./components/ChatMe";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import CertificatesSection from "./sections/CertificatesSection";
import ContactSection from "./sections/ContactSection";


export default function App() {



  return (
    <>
      <Navbar />
       <ChatMe />
      <main className="min-h-screen">

      <HeroSection />
        
        {/* ===== MARQUEE TEXT ===== */}
        <div className="w-full bg-transparent py-6">
          <ScrollVelocity
            texts={["Turning Ideas into Reality -"]}
            velocity={100}
            className="custom-scroll-text uppercase bg-linear-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent"
            />
        </div>

        <AboutSection />

        {/* ===== SKILLS SECTION ===== */}
        <SkillsSection />
        
        <ProjectsSection />
        
        <CertificatesSection />
        
        <ContactSection />
        
      </main>
       <Footer />
    </>
  );
}
