import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SkillBadge from "../components/SkillBadge";

// Icons
import {
  SiReact as ReactIcon,
  SiNextdotjs as NextIcon,
  SiTailwindcss as TailwindIcon,
  SiJavascript as JsIcon,
  SiNodedotjs as NodeIcon,
  SiFlask as FlaskIcon,
  SiCodeigniter as CodeigniterIcon,
  SiDotnet as DotnetIcon
} from "react-icons/si";
import { MdDesignServices as UiIcon } from "react-icons/md";

/* =======================
   SKILL DATA (memoized)
   ======================= */
const frontendSkills = [
  { imageSrc: "/icons/html5.svg", label: "HTML", type: "Markup" },
  { icon: JsIcon, label: "JavaScript", type: "Language", color: "#F7DF1E" },
  { imageSrc: "/icons/css.svg", label: "CSS", type: "Styling", color: "#2965F1" },
  { icon: ReactIcon, label: "React", type: "Framework", color: "#61DAFB" },
  { icon: TailwindIcon, label: "Tailwind CSS", type: "Styling", color: "#38BDF8" },
  { imageSrc: "/icons/bootstrap.svg", label: "Bootstrap", type: "Framework" },
];

const backendSkills = [
  { imageSrc: "/icons/python.svg", label: "Python", type: "Language" },
  { imageSrc: "/icons/php.svg", label: "PHP", type: "Language" },
    { icon: DotnetIcon, label: "C#", type: "Language", color: "#8A6FE2" },
  { imageSrc: "/icons/java.svg", label: "Java", type: "Language" },
    { icon: NodeIcon, label: "Node.js", type: "Runtime", color: "#339933" },

  { icon: FlaskIcon, label: "Flask", type: "Framework", color: "#FFFFFF" },
  { imageSrc: "/icons/django.svg", label: "Django", type: "Framework" },
  { icon: CodeigniterIcon, label: "CodeIgniter", type: "Framework", color: "#EE4623" },
  { imageSrc: "/icons/firebase.svg", label: "Firebase", type: "Cloud", color: "#FFCA28" },
  { imageSrc: "/icons/mysql.svg", label: "MySQL", type: "Database" },
  { imageSrc: "/icons/postgresql.svg", label: "PostgreSQL", type: "Database" },
  { imageSrc: "/icons/sqlite.svg", label: "SQLite", type: "Database" }
];

const mobileSkills = [
  { imageSrc: "/icons/flutter.svg", label: "Flutter", type: "Framework" },
  { imageSrc: "/icons/dart.svg", label: "Dart", type: "Language" },
];

const designSkills = [
  { imageSrc: "/icons/figma.svg", label: "Figma", type: "Design Tool" },
  { icon: UiIcon, label: "UI/UX Strategy", type: "Design", color: "#FF5722" },
  { imageSrc: "/icons/vscode.svg", label: "VS Code", type: "Tool" },
  { imageSrc: "/icons/git.svg", label: "GIT", type: "Version Control" },
  { imageSrc: "/icons/github.svg", label: "GitHub", type: "Collaboration Platform" },
  { imageSrc: "/icons/vite.svg", label: "Vite", type: "Build Tool" },

];

/* =======================
   MAIN COMPONENT
   ======================= */
function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full bg-transparent py-24 md:py-32 flex justify-center items-center"
    >
      <div className="w-full max-w-7xl px-6 md:px-20 text-white">

        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-gilroy font-bold mb-4">
            My <span className="text-cyan-400">Skillset</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-medium max-w-3xl mx-auto">
            A curated set of technologies I use to craft fast, scalable, and visually engaging digital experiences.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-20">
          <SkillCategory
            title="FRONTEND DEVELOPMENT"
            icon="⚡"
            iconColor="text-cyan-400"
            description="Building interactive, high-performance user interfaces."
            skills={frontendSkills}
          />

          <SkillCategory
            title="BACKEND & INFRASTRUCTURE"
            icon="🛠️"
            iconColor="text-green-400"
            description="Server logic, databases, and cloud infrastructure."
            skills={backendSkills}
          />

          <SkillCategory
            title="MOBILE DEVELOPMENT"
            icon="📱"
            iconColor="text-violet-400"
            description="Cross-platform mobile-first app experiences."
            skills={mobileSkills}
          />

          <SkillCategory
            title="DESIGN & TOOLS"
            icon="🎨"
            iconColor="text-pink-400"
            description="Intuitive interface layouts and interactive prototypes."
            skills={designSkills}
          />
        </div>

      </div>
    </section>
  );
}

export default React.memo(SkillsSection);

/* =======================
   CATEGORY COMPONENT
   ======================= */
const SkillCategory = React.memo(function SkillCategory({
  title,
  icon,
  iconColor,
  description,
  skills
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className={`${iconColor} text-2xl`}>{icon}</span>
        <h3 className="text-2xl font-bold tracking-wider text-white">{title}</h3>
      </div>

      <p className="text-white/60 mb-8 text-sm md:text-base">{description}</p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08 }
          }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <SkillBadge {...skill} />
          </motion.div>

        ))}
      </motion.div>
    </motion.div>
  );
});
