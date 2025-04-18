import { Component } from "solid-js";

const ServicesSection: Component = () => {
  return (
    <section class="py-16 px-6 md:px-20 bg-green-100">
      <h2 class="text-3xl font-bold text-center">Our Products & Services</h2>
      <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 class="text-xl font-semibold">Wood Pallets</h3>
          <p class="mt-2 text-gray-600">
            Durable, reusable, and sustainably sourced wooden pallets for logistics and storage.
          </p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 class="text-xl font-semibold">Custom Pallet Design</h3>
          <p class="mt-2 text-gray-600">
            Tailored pallet solutions to meet your specific shipping needs and product dimensions.
          </p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 class="text-xl font-semibold">Eco-Friendly Packaging</h3>
          <p class="mt-2 text-gray-600">
            We provide guidance and products to help businesses transition to sustainable packaging solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 