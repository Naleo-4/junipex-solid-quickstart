import { Component } from "solid-js";

const HeroSection: Component = () => {
  return (
    <section class="bg-green-700 text-white py-20 px-6 text-center">
      <h1 class="text-4xl md:text-6xl font-bold">Welcome to Junipex</h1>
      <p class="mt-4 text-xl md:text-2xl">
        Eco-Friendly Wood Pallets for Sustainable Shipping
      </p>
      <button class="mt-8 px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow-md hover:bg-green-100 transition">
        Get in Touch
      </button>
    </section>
  );
};

export default HeroSection; 