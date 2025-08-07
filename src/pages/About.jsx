import { useState } from "react";
import RequestDemoModal from "../components/RequestDemoModel"
export default function About() {
      const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Bilaytics</h1>
        <p className="max-w-3xl mx-auto text-lg text-purple-100">
          Redefining the way organizations manage their billing lifecycle — from invoice uploads to actionable insights.
        </p>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-purple-700 dark:text-purple-300">
          Who We Are
        </h2>
        <p className="leading-relaxed mb-6">
          <span className="font-semibold">Bilaytics</span> is a next-generation, centralized billing and analytics
          platform designed to <strong>transform how organizations manage their complete billing lifecycle</strong>.
          From invoice uploading and smart archiving to intelligent spending analysis and real-time financial
          visualization, Bilaytics empowers businesses with the <strong>clarity, efficiency, and control</strong> needed
          to make informed decisions faster.
        </p>
        <p className="leading-relaxed mb-6">
          With Bilaytics, you can effortlessly upload, search, and manage your bills in one secure, centralized
          location. Our advanced indexing and filtering allow you to instantly find the exact document you need —
          whether by vendor, department, date, or amount.
        </p>
        <p className="leading-relaxed">
          Seamlessly integrated with <strong>Microsoft Power BI dashboards</strong>, Bilaytics delivers
          <strong> interactive analytics</strong> that provide deep insights into spending patterns, vendor performance,
          and budget utilization. You can export detailed reports in CSV, PDF, or Excel formats for compliance, audits,
          or internal presentations with just a single click.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-purple-700 dark:text-purple-300">Our Mission</h2>
            <p className="leading-relaxed">
              Our mission is to empower enterprises to streamline their financial documentation, enhance operational
              efficiency, and make confident, data-driven decisions. By combining automation, analytics, and secure
              cloud infrastructure, we provide the tools that modern organizations need to thrive in a digital economy.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-purple-700 dark:text-purple-300">Why Choose Bilaytics</h2>
            <p className="leading-relaxed">
              We bring together automation, analytics, and enterprise-grade security in one unified platform. With
              Bilaytics, you get faster workflows, complete transparency, and a smarter way to manage your entire
              billing process — all backed by the scalability and reliability of cloud technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-purple-700 dark:text-purple-300 text-center">
          Our Core Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Invoice Upload & Management",
              desc: "Easily upload invoices in bulk or individually and store them in a centralized, searchable repository."
            },
            {
              title: "Smart Bill Search",
              desc: "Find invoices instantly using advanced filters and real-time search suggestions."
            },
            {
              title: "Power BI Analytics",
              desc: "Gain real-time insights into spending trends, vendor performance, and financial KPIs."
            },
            {
              title: "Export & Reporting",
              desc: "Generate and download detailed reports in CSV, PDF, or Excel formats."
            },
            {
              title: "Role-Based Access",
              desc: "Control data visibility with permissions tailored to specific roles within your organization."
            },
            {
              title: "Audit Trail",
              desc: "Track every change and maintain a secure, compliant access history for all documents."
            },
            {
              title: "Email Notifications",
              desc: "Receive automated alerts for approvals, pending invoices, or policy violations."
            },
            {
              title: "Cloud Storage Integration",
              desc: "Secure, scalable cloud storage with built-in backup and redundancy."
            },
            {
              title: "Multi-Department Access",
              desc: "Organize data for multiple units or departments while maintaining centralized control."
            }
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 border dark:border-purple-700 p-6 rounded-lg shadow-lg hover:shadow-purple-500/30 transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-purple-700 dark:text-purple-300">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call To Action */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 py-12 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Empower Your Financial Management</h2>
        <p className="mb-6 text-purple-100 max-w-2xl mx-auto">
          Experience the future of billing, analytics, and reporting with Bilaytics. Gain clarity, improve compliance,
          and make smarter, faster business decisions.
        </p>
        <button onClick={() => setIsModalOpen(true)} className="bg-white text-purple-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition">
          Get Started
        </button>
                    {/* Modal */}
      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </section>
    </div>
  );
}
