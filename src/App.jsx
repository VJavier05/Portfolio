
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import ScrollVelocity from "./components/ScrollVelocity";
import ChatMe from "./components/ChatMe";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
const AboutSection = lazy(() => import("./sections/AboutSection"));
const SkillsSection = lazy(() => import("./sections/SkillsSection"));
const ProjectsSection = lazy(() => import("./sections/ProjectsSection"));
const CertificatesSection = lazy(() => import("./sections/CertificatesSection"));
const ContactSection = lazy(() => import("./sections/ContactSection"));


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

        <Suspense fallback={null}>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificatesSection />
          <ContactSection />
        </Suspense>
        
      </main>
       <Footer />
    </>
  );
}
