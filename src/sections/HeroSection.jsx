/* eslint-disable no-unused-vars */
import { useCallback } from "react";
import { motion } from "framer-motion"; // <-- import motion
import BlurText from "../components/BlurText";
import RotatingText from "../components/RotatingText";
import Threads from "../components/Threads"; 
import ScrollVelocity from "../components/ScrollVelocity";
import { useInView } from "react-intersection-observer";

export default function HeroSection() {
  const handleAnimationComplete = useCallback(() => {
    console.log("Animation completed!");
  }, []);

  const { ref: heroRef, inView } = useInView({  
    threshold: 0.3,
  });

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="relative w-full h-[80vh] min-h-[500px] md:min-h-[640px] lg:min-h-[720px]"
        id="home"
      >
        {/* Background animated threads (lazy-loaded) */}
        {inView && (
          <Threads
            color={[0.9, 0.9, 0.9]}
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
            className="absolute inset-0"
          />
        )}

        {/* Foreground animated content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none space-y-8">

          {/* Animated name */}
          <BlurText
            text="Javier Vincent"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-center text-white font-gilroy font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl px-4"
          />

          {/* Subtitle + rotating roles */}
          <div className="flex flex-wrap items-center justify-center gap-4 px-4 text-center font-gilroy font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl">            <span className="text-white">I am</span>

            {/* <-- REPLACE THIS DIV WITH MOTION.DIV */}
            <motion.div
              className="px-5 py-2.5 sm:px-6 sm:py-3 bg-cyan-500 text-white rounded-2xl shadow-[0_0_20px_rgba(34,211,238,0.5)]"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34,211,238,0.8)" }}
            >
              <RotatingText
                texts={[
                  "Web Developer",
                  "Mobile Developer",
                  "UI/UX Designer",
                ]}
                mainClassName="text-white"
                staggerFrom="first"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.05}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
