// src/App.jsx

import { useState, useTransition, useMemo } from "react";
import ColorPalette from "./components/ColorPalette";
import ColorPicker from "./components/ColorPicker"; // Import the new component
import AnimatedGradientBackground from "./components/AnimatedGradientBackground";
import "./index.css";

const presetColors = [
  { name: "Sky", hex: "#0ea5e9" },
  { name: "Emerald", hex: "#059669" },
  { name: "Indigo", hex: "#4f46e5" },
  { name: "Fuchsia", hex: "#d946ef" },
  { name: "Rose", hex: "#e11d48" },
  { name: "Amber", hex: "#fbbf24" },
  { name: "Teal", hex: "#14b8a6" },
  { name: "Violet", hex: "#8b5cf6" },
  { name: "Stone", hex: "#78716c" },
];

function App() {
  const [activeColor, setActiveColor] = useState(presetColors[2].hex);
  const [customColor, setCustomColor] = useState("#ffffff"); // New state for custom color
  const [gradient, setGradient] = useState(
    "radial-gradient(circle, #4f46e5 0%, #1e1b4b 100%)"
  );
  const [isPending, startTransition] = useTransition();

  const handleColorChange = (newColorHex, isPreset = true) => {
    startTransition(() => {
      // Set the active button state only if a preset color is clicked
      setActiveColor(isPreset ? newColorHex : null);

      // Update the gradient
      setGradient(`radial-gradient(circle, ${newColorHex} 0%, #000 100%)`);
    });
  };

  // Handle custom color input changes
  const handleCustomColorChange = (e) => {
    const newColor = e.target.value;
    setCustomColor(newColor);
    handleColorChange(newColor, false); // Pass `false` to indicate it's not a preset color
  };

  const memoizedColorPalette = useMemo(
    () => (
      <ColorPalette
        colors={presetColors}
        onSelectColor={handleColorChange}
        activeColor={activeColor}
        isPending={isPending}
      />
    ),
    [activeColor, isPending]
  );

  return (
    <div className="w-full h-screen relative overflow-hidden transition-all duration-1000 ease-in-out">
      <AnimatedGradientBackground gradient={gradient} />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
        <h1
          className="text-white text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-xl animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          Dynamic BG Changer
        </h1>
        <p
          className="mt-2 text-white/80 text-center text-lg sm:text-xl font-light drop-shadow-md animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          Select a color or choose your own.
        </p>

        <div className="fixed bottom-8 sm:bottom-12 inset-x-0 flex flex-col items-center gap-4">
          {memoizedColorPalette}

          {/* New Custom Color Picker component */}
          <ColorPicker
            color={customColor}
            onChange={handleCustomColorChange}
            isPending={isPending}
            active={!activeColor} // The custom picker is active when no preset color is selected
          />
        </div>
      </div>
    </div>
  );
}

export default App;
