import { useState } from "react";
import RequestDemoModal from "./RequestDemoModel";
export default function Demo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      className="relative h-screen bg-fixed bg-center bg-cover flex items-center justify-center text-center text-white px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Dark overlay with blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-purple-900/80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl transition-all duration-500">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
          Experience Bilaytics in Action
        </h1>
        <p className="text-lg md:text-xl mb-6 text-purple-200">
          See how Bilaytics simplifies invoice management, delivers real-time analytics, and gives you full control over your organization's financial data.
        </p>
        <button onClick={() => setIsModalOpen(true)}
 className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition hover:shadow-purple-700/50">
          Request a Demo
        </button>
      </div>
            {/* Modal */}
      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
