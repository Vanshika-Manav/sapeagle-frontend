
import RequestDemoModal from "./RequestDemoModel";
import { useState } from "react";
export default function HeroSection() {
  const [isModelOpen , setIsModalOpen] = useState(false);
  return (
    <section
      className="bg-cover bg-center h-[80vh] flex items-center justify-center text-white text-center dark:text-white transition-colors duration-500"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      <div className="bg-black/50 dark:bg-gradient-to-br dark:from-black/60 dark:to-purple-800/40 p-8 rounded-xl shadow-xl backdrop-blur-sm">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg dark:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
          Monitor & Manage Your Organization’s Bills Effortlessly
        </h1>
        <p className="text-lg mb-6 dark:text-gray-300">
          A modern platform to streamline payments, visualize trends, and centralize invoice tracking.
        </p>
        <button onClick={() => setIsModalOpen(true)} className="bg-purple-600 dark:bg-purple-600 dark:shadow-[0_0_15px_rgba(168,85,247,0.7)] px-6 py-3 rounded text-white hover:bg-purple-700 dark:hover:bg-purple-700 transition duration-300">
          Request a Demo
        </button>
      </div>
            {/* Modal */}
      <RequestDemoModal isOpen={isModelOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
