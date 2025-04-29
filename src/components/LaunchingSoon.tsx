import { Component } from "solid-js";

const LaunchingSoon: Component = () => {
  return (
    <div style={{
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      overflow: "hidden"
    }}>
      {/* Background */}
      <img
        src="/wood-pellets.jpg"
        alt="Wood Pellets Background"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover" as any
        }}
      />
      
      {/* Overlay */}
      <div style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)"
      }}></div>
      
      {/* Content */}
      <div class="relative h-full flex flex-col items-center justify-center p-6 text-white">
        <img
          src="/junipex-logo.png"
          alt="Junipex Logo"
          class="h-24 w-auto mb-8"
        />
        
        <h1 class="text-5xl font-bold text-center mb-4">
          We're Launching Soon
        </h1>
        <p class="text-2xl text-center mb-8 max-w-2xl">
          We're working hard to bring you the best eco-friendly wood pellets for sustainable energy.
        </p>
      </div>
    </div>
  );
};

export default LaunchingSoon; 