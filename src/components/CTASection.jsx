import RegisterModal from "./RegisterModel";
import { useState } from "react";
export default function CTASection() {
    const [showRegister, setShowRegister] = useState(false);
  return (
    <section className="bg-purple-400 dark:bg-gradient-to-r dark:from-gray-900 dark:to-purple-800 text-white py-12 text-center transition-colors duration-500">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-purple-300">
        Get Started with Bilaytics Today
      </h2>
      <p className="mb-6 text-lg text-white/90 dark:text-purple-100">
        Transform your invoice management and analytics — no credit card required.
      </p>
      <button onClick={() => setShowRegister(true)} className="bg-white text-purple-600 dark:bg-purple-600 dark:text-white font-semibold px-6 py-3 rounded hover:bg-gray-200 dark:hover:bg-purple-700 transition-all shadow-md hover:shadow-lg">
        Create Your Free Account
      </button>
      <RegisterModal isOpen={showRegister} onClose={() => setShowRegister(false)} />
    </section>
  );
}
