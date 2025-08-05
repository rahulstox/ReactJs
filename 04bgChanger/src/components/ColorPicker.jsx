// src/components/ColorPicker.jsx

import React from "react";

const ColorPicker = ({ color, onChange, isPending, active }) => {
  return (
    <div
      className={`
        flex items-center gap-3 shadow-2xl bg-white/10 backdrop-blur-xl px-4 py-2
        rounded-full border border-white/20 transition-all duration-500 ease-in-out
        ${active ? "ring-4 ring-white/50" : ""}
        ${isPending ? "scale-95 opacity-70" : "scale-100 opacity-100"}
      `}
    >
      <label
        htmlFor="custom-color-picker"
        className="text-white/80 font-medium"
      >
        Custom
      </label>
      <input
        type="color"
        id="custom-color-picker"
        value={color}
        onChange={onChange}
        disabled={isPending}
        className={`
          w-10 h-10 border-none rounded-full cursor-pointer overflow-hidden
          transition-all duration-200 transform hover:scale-110 active:scale-95
          disabled:cursor-not-allowed
        `}
        style={{
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default ColorPicker;
