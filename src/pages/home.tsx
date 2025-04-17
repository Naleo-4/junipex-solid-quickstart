import { Component } from "solid-js";

const Home: Component = () => {
  return (
    <main class="min-h-screen bg-green-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section class="bg-green-700 text-white py-20 px-6 text-center">
        <h1 class="text-4xl md:text-6xl font-bold">Welcome to Junipex</h1>
        <p class="mt-4 text-xl md:text-2xl">
          Eco-Friendly Wood Pallets for Sustainable Shipping
        </p>
        <button class="mt-8 px-6 py-3 bg-white text-green-700 font-semibold rounded-lg shadow-md hover:bg-green-100 transition">
          Get in Touch
        </button>
      </section>

      {/* About Section */}
      <section class="py-16 px-6 md:px-20 bg-white">
        <h2 class="text-3xl font-bold text-center">About Us</h2>
        <p class="mt-6 max-w-3xl mx-auto text-lg text-gray-700 text-center">
          At Junipex, we specialize in manufacturing high-quality, sustainable wood pallets. Our mission is to provide reliable, eco-conscious shipping solutions that help businesses reduce their environmental footprint.
        </p>
      </section>

      {/* Services Section */}
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

      {/* Footer */}
      <footer class="py-8 bg-green-700 text-white text-center">
        <p>© 2025 Junipex. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;
