import { Link } from "react-router-dom";
export default function About() {
  return (
    <section className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-purple-900 py-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"
            alt="About Bilaytics"
            className="rounded-xl shadow-xl dark:shadow-purple-800/40"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow dark:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
            ABOUT BILAYTICS
          </h2>
          <div className="w-24 h-1 bg-purple-500 dark:bg-purple-500 mb-6 rounded-full"></div>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Bilaytics is a centralized platform designed to simplify the way organizations handle their billing lifecycle.
            From invoice uploading and smart archiving to visualizing spending patterns, Bilaytics helps organizations
            gain financial clarity and efficiency.
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
            <li>Upload, search, and manage bills in one place.</li>
            <li>Visualize financial data using integrated Power BI dashboards.</li>
            <li>Export reports in CSV, PDF, or Excel formats with a click.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Bilaytics supports role-based access, audit trails, and secure cloud storage. It is ideal for enterprises
            aiming to streamline financial documentation while ensuring compliance and visibility across departments.
          </p>
          <button className="px-6 py-2 border border-purple-500 dark:border-purple-500 text-purple-500 dark:text-purple-300 font-medium rounded hover:bg-purple-500 dark:hover:bg-purple-700 hover:text-white transition duration-300 shadow-md dark:shadow-purple-800/40">
            <Link to="/about">
            Read More →
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
