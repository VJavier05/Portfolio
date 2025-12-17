"use client";
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SpotlightCard from "../components/SpotlightCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Add a "category" property to each project (default to "projects")
const projects = [
    {
    title: "Victoria HRIS",
    category: "projects",
    description:
      "A Human Resource Information System for employee management, leave tracking, performance evaluation and other HR process.",
    tech: ["Python", "Flask", "MYSQL" ,"Bootstrap","Gemini API" ,"HTML","CSS","JS"],
    thumbnail: "/projects/h1.png",
    images: [
    "/projects/h1.png",
    "/projects/h2.png",
    "/projects/h3.png"
    ],
  },
   {
    title: "E-commerce Website",
    category: "projects",
    description:
      "An online shop where users can browse products, add items to their cart, and place orders easily also includes both admin, seller and rider.",
    tech: ["Python", "Flask", "SQLite", "Bootstrap","HTML","CSS","JS"],
    thumbnail: "/projects/ecom1.png",
    images: [
    "/projects/ecom1.png",
    "/projects/ecom2.png",
    "/projects/ecom3.png"
    ],
  },

  {
    title: "School Permit System",
    category: "projects",
    description:
      "A web-based platform for handling school permits, requests, and approvals online.",
    tech: ["PHP","PDO","MYSQL"],
    thumbnail: "/projects/ss1.png",
    images: [
    "/projects/ss1.png",
    "/projects/ss2.png",
    ],
  },
  {
    title: "Agriculture Management System",
    category: "projects",
    description:
      "A system for managing agricultural records, farm tools, and transactions to support local farmers.",
    tech: ["C#", "WinForms", "Guna Framework","MYSQL"],
    thumbnail: "/projects/agri1.png",
    images: [
    "/projects/agri1.png",
    ],
  },
  {
    title: "Library System",
    category: "projects",
    description:
      "A simple and organized library system that helps users track books, manage records, and handle borrowing activities with ease.",
    tech: ["Python", "TKinter","MySQL"],
    thumbnail: "/projects/lb1.png",
    images: [
    "/projects/lb1.png",
    "/projects/lb2.png",
    "/projects/lb3.png"
    ],
  },
    {
    title: "Barangay Record Management System",
    category: "projects",
    description:
      "A desktop application designed to manage resident records, Files, and Barangay Officials.",
    tech: ["C#", "WinForms", "MYSQL"],
    thumbnail:
      "/projects/sk1.png",
     images: [
    "/projects/sk1.png",
    "/projects/sk2.png"
    ],
  },
  // Example designs
  {
    title: "Book Rental Website",
    category: "designs",
    description: "A static book rental website integrated with the Google Sheets API, allowing seamless and real-time inventory updates.",
    tech: ["Figma", "Canva","Google Sheet API","TypeScript","Tailwind"],
    thumbnail: "/designs/br1.png",
    images: [
    "/designs/br2.png",
    "/designs/br3.png",
    "/designs/br4.png",
    "/designs/br5.png",
    ],
    link: "https://spelledbypaperbacksph.vercel.app",
  },
  {
    title: "Coffee Shop Website",
    category: "designs",
    description: "A stylish coffee shop website that displays menus and store details with a modern interface and smooth user experience..",
    tech: ["Figma", "Canva"],
    thumbnail: "/designs/1.png",
    images: [
    "/designs/1.png",
    "/designs/2.png",
    "/designs/3.png"
    ],
    link: "https://www.figma.com/design/siImBnjF1cuVvj1PFNqi7q/Coffee-Shop?node-id=0-1&t=rdjQ43WPkuwhhSu3-1",
  },
  {
    title: "Patient Hospital App",
    category: "designs",
    description: "A user-friendly hospital app that helps manage patient details, appointments, and medical information with ease.",
    tech: ["Figma", "Canva"],
    thumbnail: "/designs/hs1.png",
    images: [
    "/designs/hs1.png",
    "/designs/hs2.png",
    "/designs/hs3.png"
    ],
    link: "https://www.figma.com/design/hepKsei4hi1yKB6hP6gEoN/Hospital-App?node-id=0-1&t=YYi0USDZflAZSk80-1",
  },
   
  {
    title: "Japanese Restaurant App",
    category: "designs",
    description: "A stylish Japanese restaurant app that highlights signature dishes, seasonal specialties, and a smooth ordering experience.",
    tech: ["Figma", "Canva"],
    thumbnail: "/designs/s1.png",
    images: [
    "/designs/s1.png",
    "/designs/s2.png",
    "/designs/s3.png"
    ],
    link: "https://www.figma.com/design/exug7CD7p46Kjhb0kV7NKN/Restaurant?node-id=0-1&t=vJqSZsUnruzPhEa8-1",
  },

];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeTab, setActiveTab] = useState("projects"); // default tab

  const filteredItems = projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-black text-white">
  <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-gilroy mb-4">
            Featured <span className="text-cyan-400">Works</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
            A selection of my favorite builds and designs — blending performance,
            polish, and creative interaction.
          </p>
        </motion.div>

        {/* Tabs */}
        {/* Tabs */}
<div className="flex justify-center mb-10 gap-4">
  {["projects", "designs"].map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`relative px-6 py-2 font-medium rounded-full transition-all duration-300 border-2
        ${activeTab === tab 
          ? "bg-cyan-400 text-white border-cyan-400 shadow-lg scale-105" 
          : "bg-transparent text-white/70 border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 hover:scale-105"
        }`}
    >
      {tab === "projects" ? "Projects" : "Designs"}
      {/* Optional animated underline */}
    
    </button>
  ))}
</div>


        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {filteredItems.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <SpotlightCard
                className="h-full bg-neutral-900/80 backdrop-blur-xl p-6 rounded-3xl group hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300 border border-white/5"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    {/* Thumbnail */}
                    <div
                      onClick={() => setActiveProject(project)}
                      className="mb-4 overflow-hidden rounded-xl cursor-pointer"
                    >
                      <img
                        src={project.thumbnail}
                        alt="thumbnail"
                        className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Conditional Link */}
                  {project.link && project.link !== "#" && (
                    <div className="mt-3 pt-4 border-t border-white/10">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                      >
                        View Project <ArrowRight size={16} />
                      </a>
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
     <AnimatePresence>
  {activeProject && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={() => setActiveProject(null)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-neutral-900 rounded-2xl p-8 max-w-xl w-full relative border border-white/10 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setActiveProject(null)}
          className="absolute top-4 right-4 text-white hover:text-cyan-400 transition"
        >
          <X size={22} />
        </button>

        {/* Carousel */}
        <div className="relative mb-6">
          <div className="relative mb-6">
         <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}   // 👈 this enables infinite looping
            className="rounded-lg overflow-hidden"
          >
            {activeProject.images?.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`${activeProject.title} screenshot ${idx + 1}`}
                  className="w-full h-64 object-cover rounded-lg border border-white/10"
                />
              </SwiperSlide>
            ))}
          </Swiper>


          {/* Custom Navigation Buttons */}
          <button className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 ..."></button>
          <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 ..."></button>
        </div>


          {/* Custom Navigation Buttons */}
          <button
            className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Title + Description */}
        <h3 className="text-2xl font-bold mb-2 text-white">
          {activeProject.title}
        </h3>
        <p className="text-white/70 mb-4">{activeProject.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {activeProject.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-full text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
}
