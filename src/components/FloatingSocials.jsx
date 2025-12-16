import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

export default function FloatingSocials() {
  return (
    <div
      className="
    fixed z-50
    bottom-6
    left-1/2 transform -translate-x-1/2 md:left-auto md:right-6 md:transform-none
    flex flex-row md:flex-col
    items-center
    gap-3
    bg-black/40 backdrop-blur-xl
    p-3
    rounded-4xl
    border border-white/10
    shadow-lg
    w-max
    /* small screens: shift 20px to the right */
    sm:translate-x-[10%]
  "
    >
      {/* GitHub */}
      <a
        href="https://github.com/VJavier05"
        target="_blank"
        className="
          p-2 rounded-full transition-all
          hover:bg-cyan-500/20 hover:scale-110
          hover:shadow-[0_0_12px_rgba(34,211,238,0.6)]
        "
      >
        <SiGithub className="text-white" size={22} />
      </a>

      {/* Gmail */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=angelojavierjj@gmail.com"
        className="
          p-2 rounded-full transition-all
          hover:bg-cyan-500/20 hover:scale-110
          hover:shadow-[0_0_12px_rgba(34,211,238,0.6)]
        "
      >
        <SiGmail className="text-white" size={22} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/vincent-angelo-javier-839241382"
        target="_blank"
        className="
          p-2 rounded-full transition-all
          hover:bg-cyan-500/20 hover:scale-110
          hover:shadow-[0_0_12px_rgba(34,211,238,0.6)]
        "
      >
        <SiLinkedin className="text-white" size={22} />
      </a>
    </div>
  );
}
