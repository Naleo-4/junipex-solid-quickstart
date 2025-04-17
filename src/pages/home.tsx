import { Component } from "solid-js";

const Home: Component = () => {
  return (
    <main class="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section class="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 class="text-4xl md:text-6xl font-bold">Welcome to NovaTech</h1>
        <p class="mt-4 text-xl md:text-2xl">
          Innovative Solutions for a Connected World
        </p>
        <button class="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Get in Touch
        </button>
      </section>

      {/* About Section */}
      <section class="py-16 px-6 md:px-20 bg-white">
        <h2 class="text-3xl font-bold text-center">About Us</h2>
        <p class="mt-6 max-w-3xl mx-auto text-lg text-gray-700 text-center">
          At NovaTech, we specialize in building cutting-edge web and cloud applications tailored for the future. Our team leverages modern frameworks and agile practices to deliver robust, scalable, and efficient solutions.
        </p>
      </section>

      {/* Services Section */}
      <section class="py-16 px-6 md:px-20 bg-gray-100">
        <h2 class="text-3xl font-bold text-center">Our Services</h2>
        <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 class="text-xl font-semibold">Web Development</h3>
            <p class="mt-2 text-gray-600">
              Responsive and high-performance web apps built with modern tools like SolidJS, Vite, and Tailwind.
            </p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 class="text-xl font-semibold">Cloud Integration</h3>
            <p class="mt-2 text-gray-600">
              Seamlessly deploy, scale, and monitor applications using the best cloud practices.
            </p>
          </div>
          <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 class="text-xl font-semibold">Consulting & Support</h3>
            <p class="mt-2 text-gray-600">
              We help teams modernize workflows and adopt the right tech stack for long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="py-8 bg-blue-600 text-white text-center">
        <p>© 2025 NovaTech. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;
