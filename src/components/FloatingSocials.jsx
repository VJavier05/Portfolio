import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

export default function FloatingSocials() {
  return (
    <div
      className="
        fixed bottom-6 right-6 z-50
        flex flex-col items-center gap-3
        bg-black/40 backdrop-blur-xl
        p-3
        rounded-4xl
        border border-white/10
        shadow-lg
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
        href="https://www.linkedin.com/in/vincent-angelo-javier"
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
