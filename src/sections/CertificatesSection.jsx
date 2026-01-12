"use client";
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, X, Calendar } from "lucide-react";

const certificates = [
   {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Jan 2026",
    description: "This course covered key AI concepts such as NLP, computer vision, deep learning, and AI ethics, helping build a strong foundation in artificial intelligence.",
    image: "/certificates/IBMDesign.png",
    verifyUrl: "https://www.credly.com/badges/8ad1b0da-b983-4359-b952-156963f38ff0/linked_in_profile"
  },
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    date: "Dec 2025",
    description: "Learn to use AI in your daily life, craft effective chatbot prompts, and use computer vision and machine translation.",
    image: "/certificates/Introduction_to_Modern_AI_certificate_angelojavierjj-gmail-com_1f969efe-2287-424e-8278-f57ef83c1819-1.png",
    verifyUrl: "https://www.credly.com/badges/bed28f5d-98f0-47a7-bb46-7ffc87cc65c5"
  },
  {
    title: "Linux Essentials Certification",
    issuer: "Cisco Networking Academy",
    date: "Nov 2025",
    description: "Covers fundamental Linux concepts, command-line usage, file management, and basic system administration skills.",
    image: "/certificates/Linux_Essentials_certificate_angelojavierjj-gmail-com_8bd0f988-e7e6-4935-9caa-e9774817803c (1)-1.png",
    verifyUrl: "https://www.credly.com/badges/9c7e0b24-9e3c-42f8-991c-23b73283927a"
  },
  {
    title: "Stay Safe Online: Cyber Security Basics ''Take Control of Your Online Security'",
    issuer: "ICT Literacy and Competency Development Bureau",
    date: "Oct 2025",
    description: "Emphasizes essential cybersecurity habits to help individuals protect themselves from online threats and cyberattacks.",
    image: "/certificates/Stay Safe Online_ Cyber Security Basics-1.png",
    verifyUrl: "https://drive.google.com/file/d/1R-rmrDMKo0FZETlYX3ld8idlYh8D-ggy/view?usp=sharing"
  },
  {
    title: "Data Privacy Awareness",
    issuer: "DICT - CAR",
    date: "Oct 2025",
    description: "Highlights the importance of data privacy, legal considerations, and responsible handling of personal and sensitive information.",
    image: "/certificates/Data Privacy Awareness-1.png",
    verifyUrl: "drive.google.com/file/d/13-4hJ9DmtfG04UmDzm67FsqoSJlsEsa3/view?usp=sharing"
  },
  {
    title: "Cybersecurity for ICT Professionals",
    issuer: "DICT– Catanduanes",
    date: "Oct 2025",
    description: "Provides practical cybersecurity knowledge tailored for ICT professionals, including risk management and security best practices.",
    image: "/certificates/Cybersecurity for ICT-1.png",
    verifyUrl: "https://drive.google.com/file/d/1YUdvfSqeLOFlVdcSBbugvkZscxfbzWFL/view?usp=sharing"
  },
  {
    title: "DESIGN THINKING PROCESS",
    issuer: "ICT Industry Development Bureau",
    date: "Oct 2025",
    description: "Explores a user-centered approach to problem-solving through empathy, ideation, prototyping, and testing.",
    image: "/certificates/DESIGN THINKING PROCESS-1.png",
    verifyUrl: "https://drive.google.com/file/d/1CEl40FGVdEm4tldU_LZ12s3UWkv4Ru4d/view"
  },
  {
    title: "Digital Safety and Security Awareness",
    issuer: "Cisco Networking Academy",
    date: "Oct 2025",
    description: "Professional PFocuses on safe online practices, identifying digital risks, and protecting personal information in the digital environment.",
    image: "/certificates/Digital_Safety_and_Security_Awareness_certificate_angelojavierjj-gmail-com_40d8ccbc-4485-4c83-8a03-a02eda3857b8-1.png",
    verifyUrl: "https://www.credly.com/badges/310d64d2-1fb2-49ed-8b8f-0dfcf25a4be2"
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Oct 2025",
    description: "Introduces key cybersecurity concepts, common threats, and basic strategies for protecting systems and data.",
    image: "/certificates/Introduction_to_Cybersecurity_certificate_angelojavierjj-gmail-com_2ad90679-5224-4f3e-8ed3-c7ca36ad22ab-1.png",
    verifyUrl: "https://www.credly.com/badges/2c949681-41f8-402a-ac72-f2dda58f9388"
  },
  {
    title: "Operating Systems Basics",
    issuer: "Cisco Networking Academy",
    date: "Oct 2025",
    description: "Explains the core functions of operating systems, including process management, memory usage, file systems, and user interaction.",
    image: "/certificates/Operating_Systems_Basics_certificate_angelojavierjj-gmail-com_54604997-baef-4b8d-88fd-7cf4f35567a7 (1)-1.png",
    verifyUrl: "https://www.credly.com/badges/a2e80bb5-54fc-4098-839a-327d2b6a7cf7"
  },
  {
    title: "Build Python Web Apps with Flask",
    issuer: "DICT - ICT Literacy and Competency Development Bureau",
    date: "Nov 2024",
    description: "Teaches how to develop simple and dynamic web applications using Python and the Flask framework.",
    image: "/certificates/Build Python Web Apps with Flask-1.png",
    verifyUrl: "https://courses.buri.io/view/user/certificate/c6e57385-7eed-4401-987f-3ebe94899739/pdf"
  },
  {
    title: "DICT-WD003 Basic Javascript for Web Development",
    issuer: "DICT - ICT Literacy and Competency Development Bureau",
    date: "Apr 2024",
    description: "Provides an introduction to JavaScript, enabling learners to add interactivity and basic functionality to web pages.",
    image: "/certificates/DICT-WD003 Basic Javascript for Web Development-1.png",
    verifyUrl: "https://drive.google.com/file/d/1FUCEbrCZ1a7oFOUDrUAoiI5b-fPE8dGC/view"
  },
  {
    title: "DICT-WD002 Using HTML and CSS to Design a Website",
    issuer: "DICT - ICT Literacy and Competency Development Bureau",
    date: "Feb 2024",
    description: "Covers the use of HTML and CSS to create visually appealing and responsive website layouts with proper styling techniques.",
    image: "/certificates/DICT-WD002 Using HTML and CSS to Design a Website-1.png",
    verifyUrl: "https://drive.google.com/file/d/1LAYIOUfr3YxIBozxmaforMbDgsiWKKs0/view"
  },
  {
    title: "DICT-WD001 Principles of Web Development and Introduction to HTML",
    issuer: "DICT - ICT Literacy and Competency Development Bureau",
    date: "Feb 2024",
    description: "Introduces the fundamentals of web development, focusing on how websites work and the basic structure of web pages using HTML.",
    image: "/certificates/DICT-WD001 Principles of Web Development and Introduction to HTML-1.png",
    verifyUrl: "https://drive.google.com/file/d/1_n_lzKdEyDySmMYsSA2KJNJ6An2yIi7q/view"
  },
 
];

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-gilroy mb-4">
            Certifications & <span className="text-cyan-400">Achievements</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        {/* Certificates List */}
        <div className="space-y-16 ">
          {certificates.map((cert, index) => (
            <div key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-12"
              >
                {/* Number */}
                <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white/10 font-mono lg:w-24 xl:w-32 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Certificate Image */}
                <div 
                  className="relative group cursor-pointer shrink-0"
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="w-64 h-48 sm:w-72 sm:h-54 md:w-80 md:h-60 lg:w-72 lg:h-54 xl:w-80 xl:h-60 rounded-2xl overflow-hidden bg-neutral-800 border border-white/10">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml;base64,${btoa(`
                          <svg width="320" height="240" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
                              </linearGradient>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grad)"/>
                            <text x="50%" y="45%" font-family="Arial" font-size="18" fill="white" text-anchor="middle" dy=".3em">Certificate</text>
                            <text x="50%" y="55%" font-family="Arial" font-size="14" fill="white" text-anchor="middle" dy=".3em">${cert.title}</text>
                          </svg>
                        `)}`;
                      }}
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-cyan-500 rounded-full p-3">
                        <Eye className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left max-w-2xl">
                  {/* Award Icon & Issuer */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                    <Award className="text-cyan-400" size={18} />
                    <span className="text-cyan-400 font-medium text-sm md:text-base">{cert.issuer}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 lg:mb-4 leading-tight">
                    {cert.verifyUrl && cert.verifyUrl !== "#" ? (
                      <a 
                        href={cert.verifyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer underline decoration-transparent hover:decoration-cyan-400"
                      >
                        {cert.title}
                      </a>
                    ) : (
                      cert.title
                    )}
                  </h3>

                  {/* Date */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-3 lg:mb-4">
                    <Calendar size={14} className="text-white/60" />
                    <span className="text-white/60 text-sm md:text-base">{cert.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
              
              {/* Separator Line */}
              {index < certificates.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="mt-16 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-900 rounded-2xl p-6 max-w-4xl w-full relative border border-white/10 shadow-xl max-h-[90vh] overflow-y-auto modal-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-red-500 transition-all duration-300"
              >
                <X size={20} />
              </button>

              {/* Certificate Image */}
              <div className="mb-6">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto rounded-lg border border-white/10 shadow-2xl"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
                          </linearGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grad)"/>
                        <text x="50%" y="40%" font-family="Arial" font-size="32" fill="white" text-anchor="middle" dy=".3em">Certificate of Achievement</text>
                        <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dy=".3em">${selectedCert.title}</text>
                        <text x="50%" y="60%" font-family="Arial" font-size="18" fill="white" text-anchor="middle" dy=".3em">${selectedCert.issuer}</text>
                      </svg>
                    `)}`;
                  }}
                />
              </div>

              {/* Certificate Details */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-3">{selectedCert.title}</h3>
                <p className="text-cyan-400 font-medium text-lg mb-2">{selectedCert.issuer}</p>
                <div className="flex items-center gap-2 text-white/60 mb-6">
                  <Calendar size={16} />
                  <span>{selectedCert.date}</span>
                </div>
                <p className="text-white/80 text-lg leading-relaxed">{selectedCert.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}