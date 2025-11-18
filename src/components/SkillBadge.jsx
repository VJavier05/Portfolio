import React from "react";

function SkillBadge({ icon: Icon, imageSrc, label, type, color }) {
  return (
    <div
      className="
        group flex items-center gap-4
        px-6 py-5
        rounded-xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-md
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:scale-[1.05]
        hover:bg-linear-to-r hover:from-cyan-400/20 hover:via-cyan-300/10 hover:to-cyan-500/20
        hover:shadow-xl hover:shadow-cyan-400/40
        cursor-default
      "
    >
      {/* Icon container */}
      <div
        className="
          w-16 h-16 flex items-center justify-center
          rounded-lg bg-white/10
          shrink-0
          transition-all duration-500 ease-out
          group-hover:rotate-6 group-hover:scale-110 group-hover:bg-white/20
        "
        style={{ willChange: "transform" }}
      >
        {Icon && (
          <Icon
            className="w-10 h-10 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-3"
            color={color}
          />
        )}

        {imageSrc && (
          <img
            src={imageSrc}
            alt={label}
            className="w-10 h-10 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-3"
          />
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-white tracking-wide transition-colors duration-500 group-hover:text-cyan-300">
          {label}
        </span>

        {type && (
          <span className="text-sm text-white/60 tracking-wide transition-colors duration-500 group-hover:text-white/80">
            {type}
          </span>
        )}
      </div>
    </div>
  );
}

export default React.memo(SkillBadge);
