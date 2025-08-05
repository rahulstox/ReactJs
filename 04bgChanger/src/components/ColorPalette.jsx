// src/components/ColorPalette.jsx

import React from "react";

const ColorPalette = ({ colors, onSelectColor, activeColor, isPending }) => {
  return (
    <div
      className={`
        flex flex-wrap justify-center gap-3 sm:gap-4
        shadow-2xl bg-white/10 backdrop-blur-xl px-4 sm:px-6 py-3 sm:py-4
        rounded-full border border-white/20 transition-all duration-500 ease-in-out
        ${isPending ? "scale-95 opacity-70" : "scale-100 opacity-100"}
      `}
    >
      {colors.map((c) => (
        <button
          key={c.name}
          // The onSelectColor handler now receives `true` to mark it as a preset color
          onClick={() => onSelectColor(c.hex, true)}
          className={`
            relative outline-none px-4 py-2 rounded-full text-white font-medium
            shadow-lg transform hover:scale-110 active:scale-95 transition-all duration-200
            focus:outline-none focus:ring-4 focus:ring-offset-2
            ${
              c.hex === activeColor
                ? "ring-4 ring-offset-2 ring-white"
                : "focus:ring-white/50"
            }
            ${isPending && "cursor-not-allowed"}
          `}
          style={{ backgroundColor: c.hex, zIndex: 10 }}
          disabled={isPending}
        >
          {c.name}
          {c.hex === activeColor && (
            <span className="absolute -top-1 -right-1 text-xs text-white bg-green-500 rounded-full px-1 py-0.5">
              Active
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default ColorPalette;
