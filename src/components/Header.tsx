import { Component } from "solid-js";

const Header: Component = () => {
  return (
    <header class="flex justify-end items-center px-6 py-4 bg-white shadow-md">
      <img
        src="/junipex-logo.png"
        alt="Junipex Logo"
        class="h-12 w-auto"
      />
    </header>
  );
};

export default Header; 