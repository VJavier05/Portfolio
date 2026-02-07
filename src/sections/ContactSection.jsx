// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Mail, FileText, Github, Linkedin, Calendar } from "lucide-react";

export default function ContactSection() {
  const contactOptions = [
    {
      icon: Mail,
      title: "Send me an email",
      description: "The best way to reach me. I usually respond within 24 hours.",
      action: "angelojavierjj@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=angelojavierjj@gmail.com",
      primary: true
    },
    {
      icon: FileText,
      title: "Resume",
      description: "Download PDF",
      link: "/RESUME.pdf",
      iconColor: "text-blue-500",
      download: true
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check my code",
      link: "https://github.com/VJavier05",
      iconColor: "text-white"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let's connect",
      link: "https://www.linkedin.com/in/vincent-angelo-javier-839241382/",
      iconColor: "text-blue-500"
    }
  ];

  return (
    <section id="contact" className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-gilroy mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Email Card */}
          <motion.a
            href={contactOptions[0].link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-black backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group flex flex-col"
          >
            <div className="bg-neutral-800 p-4 rounded-xl w-fit mb-6 group-hover:bg-cyan-500/10 transition-colors">
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{contactOptions[0].title}</h3>
            <p className="text-white/60 mb-6 text-lg">{contactOptions[0].description}</p>
            <div className="mt-auto bg-white text-black rounded-xl px-6 py-4 flex items-center justify-between hover:bg-white/90 transition-colors font-medium">
              <span>{contactOptions[0].action}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.a>

          {/* Right Side - Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Resume - Takes full width */}
            <motion.a
              href={contactOptions[1].link}
              download="Resume.pdf"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="sm:col-span-2 bg-black backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group text-center"
            >
              <div className="flex flex-col items-center">
                <div className="bg-neutral-800 p-4 rounded-xl mb-4 group-hover:bg-cyan-500/10 transition-colors">
                  <FileText className="text-blue-500" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-1">{contactOptions[1].title}</h3>
                <p className="text-white/60 text-sm">{contactOptions[1].description}</p>
              </div>
            </motion.a>
            
            {/* GitHub and LinkedIn - Bottom row */}
            {contactOptions.slice(2).map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.a
                  key={index}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 group text-center"
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-neutral-800 p-4 rounded-xl mb-4 group-hover:bg-cyan-500/10 transition-colors">
                      <Icon className={option.iconColor} size={24} />
                    </div>
                    <h3 className="text-lg font-bold mb-1">{option.title}</h3>
                    <p className="text-white/60 text-sm">{option.description}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
