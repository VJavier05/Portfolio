import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import TiltedCard from "../components/TiltedCard";
import myPhoto from "../assets/me.jpeg";
       
export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-transparent py-24 md:py-32 flex justify-center items-center"
    >
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32 mx-auto">

        {/* Card Container */}
        <div className="relative group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.015] hover:shadow-cyan-500/20">
          {/* Soft Gradient Glow */}
          <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-transparent rounded-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center p-6 sm:p-10 lg:p-16 relative z-10">

            {/* === Left Side: Text === */}
            <motion.div
                className="relative text-white"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
              <h2 className="text-4xl md:text-5xl font-gilroy font-bold mb-8 leading-tight">
                About <span className="text-cyan-400">Me</span>
              </h2>

                <p className="text-lg md:text-xl text-white/85 font-gilroy font-medium leading-relaxed mb-8">
                  I’m <span className="text-cyan-300 font-semibold">Javier</span> — a passionate Mobile & Web Developer who helps businesses and brands bring their ideas to life through clean, dynamic, and user-friendly applications. I specialize in building seamless digital experiences using <span className="text-cyan-400">Python, C#, Java, Flask, PHP and Flutter</span>, backed by solid database expertise in <span className="text-cyan-400">SQL, MySQL</span> and <span className="text-cyan-400">SQLite</span>.
                </p>

                <p className="text-base md:text-lg text-white/70 leading-relaxed mb-10">
                  Beyond functionality, I focus on UI/UX design to ensure every app isn’t just efficient but also engaging and intuitive for users. Whether it’s crafting a modern website, developing a mobile app, or designing a custom solution. If you’re looking for someone who can blend technical skills with creativity to deliver results, let’s build something amazing together.
                </p>


              {/* Stats Section */}
              <div className="mt-12 grid grid-cols-2 gap-6 text-center">
                <div className="flex flex-col items-start">
                  <h3 className="text-5xl md:text-6xl font-bold text-cyan-400">10+</h3>
                  <p className="text-white/80 text-sm md:text-base font-medium mt-2">
                    Projects Created
                  </p>
                </div>

                <div className="flex flex-col items-center border-l border-white/10 pl-6">
                  <h3 className="text-5xl md:text-6xl font-bold text-cyan-400">6+</h3>
                  <p className="text-white/80 text-sm md:text-base font-medium mt-2">
                    UI/UX Designs
                  </p>
                </div>
              </div>
            </motion.div>

            {/* === Right Side: Image === */}
            <motion.div
                className="flex justify-center md:justify-center relative"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                viewport={{ once: true }}
              >
              <TiltedCard
                imageSrc={myPhoto}
                altText="Vincent Angelo - Profile"
                captionText="Kendrick Lamar - GNX"
                containerHeight="520px"
                containerWidth="420px"
                imageHeight="520px"
                imageWidth="420px"
                rotateAmplitude={10}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text text-white font-gilroy font-bold bg-black/70 border border-white/30 rounded-lg px-4 py-2 shadow-lg">
                  Javier Vincent Angelo 
                </p>
              }

              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}