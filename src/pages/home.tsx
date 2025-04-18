import { Component } from "solid-js";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

const Home: Component = () => {
  return (
    <>
      <Header />
      <main class="min-h-screen bg-green-50 text-gray-800 font-sans">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;
