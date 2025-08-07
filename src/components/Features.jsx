const features = [
  {
    title: "Invoice Upload & Management",
    desc: "Easily upload invoices in bulk or individually and store them securely in a centralized repository with searchable indexing.",
  },
  {
    title: "Smart Bill Search",
    desc: "Search invoices by vendor, department, date, or amount using powerful filters and real-time suggestions.",
  },
  {
    title: "Power BI Analytics",
    desc: "Access interactive Power BI dashboards for spend analysis, trends, and actionable insights at both department and organizational levels.",
  },
  {
    title: "Export & Reporting",
    desc: "Download invoice data in CSV, PDF, or Excel formats and generate reports for compliance, audit, or presentation purposes.",
  },
  {
    title: "Role-Based Access",
    desc: "Assign permissions based on roles (Admin, Accountant, Viewer) to ensure data visibility and control across departments.",
  },
  {
    title: "Audit Trail",
    desc: "Track changes and access history of each invoice to ensure compliance and accountability within your organization.",
  },
  {
    title: "Email Notifications",
    desc: "Receive automated alerts and status updates for approvals, pending invoices, or policy violations in real-time.",
  },
  {
    title: "Cloud Storage Integration",
    desc: "Securely store all bills and invoices with scalable cloud storage and backup strategies for business continuity.",
  },
  {
    title: "Multi-Department Access",
    desc: "Support multi-unit and multi-departmental structures for accurate segregation of financial data and team ownership.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-purple-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white drop-shadow dark:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
          Key Features
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 border dark:border-purple-700/50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02] dark:hover:shadow-purple-700/30"
            >
              <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
