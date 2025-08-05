// src/components/AnimatedGradientBackground.js

const AnimatedGradientBackground = ({ gradient }) => {
  return (
    <div
      className="absolute inset-0 w-full h-full z-0 transition-all duration-1000 ease-in-out"
      style={{
        background: gradient,
        transitionProperty: 'background',
      }}
    />
  );
};

export default AnimatedGradientBackground;