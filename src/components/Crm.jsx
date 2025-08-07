import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SystemModules() {
  const [open, setOpen] = useState(null);
  const toggle = (idx) => setOpen(open === idx ? null : idx);

  const sections = [
    {
      title: "Bill Management",
      desc: "Upload, store, and manage invoices with centralized access, search, and filters.",
    },
    {
      title: "Analytics Dashboard",
      desc: "View real-time billing insights, category-wise spend analysis, and trends via Power BI integration.",
    },
    {
      title: "Report & Export Tools",
      desc: "Export billing records in CSV, PDF, and Excel format for external reporting or compliance.",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-purple-900 py-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side: Accordion and Heading */}
        <div>
          <h2 className="text-3xl font-bold text-purple-900 dark:text-white mb-2 drop-shadow dark:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
            System Modules <span className="text-purple-700 dark:text-purple-300 text-lg font-medium">(Bilaytics Core Functionalities)</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Bilaytics is built on modular architecture allowing organizations to manage their financial documents and data-driven decisions. Here’s a look at the core modules empowering our billing intelligence engine.
          </p>

          {/* Accordion */}
          {sections.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 mb-4 rounded-xl shadow-lg dark:shadow-purple-800/30 overflow-hidden transition"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-100 dark:hover:bg-purple-700/40 transition"
              >
                <span className={`text-lg font-semibold ${open === idx ? "text-purple-600 dark:text-purple-400" : "text-gray-900 dark:text-white"}`}>
                  {item.title}
                </span>
                <ChevronDown
                  className={`transition-transform duration-200 ${open === idx ? "rotate-180 text-purple-500" : "text-gray-500"}`}
                />
              </button>
              {open === idx && (
                <div className="px-4 pb-4 text-gray-700 dark:text-purple-200">
                  {item.desc}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side: Image */}
        <div className="text-center">
<img
  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
  alt="CRM Concept"
  className="rounded-xl shadow-2xl dark:shadow-purple-800/40"
/>


        </div>
      </div>
    </section>
  );
}
