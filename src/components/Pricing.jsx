const plans = [
  {
    name: "Starter Plan",
    price: "499 INR",
    note: "/User/month Billed Annually",
    features: [
      "Upload up to 500 invoices/month",
      "Basic Search & Filters",
      "Role-based Access Control",
      "Basic Reports Export",
      "Email Notifications",
    ],
  },
  {
    name: "Professional Plan",
    price: "699 INR",
    note: "/User/month Billed Annually",
    features: [
      "Unlimited Invoice Uploads",
      "Advanced Search & Filters",
      "Power BI Dashboards",
      "Audit Trail Access",
      "Multi-Department Support",
      "Priority Email Support",
    ],
  },
  {
    name: "Business Plan",
    price: "999 INR",
    note: "/User/month Billed Annually",
    features: [
      "All Professional Features",
      "Custom Reports",
      "Dedicated Account Manager",
      "Cloud Storage Integration",
      "Advanced Role-based Workflows",
    ],
  },
  {
    name: "Enterprise Plan",
    price: "1299 INR",
    note: "/User/month Billed Annually",
    features: [
      "All Business Features",
      "Custom SLAs & Onboarding",
      "Dedicated Technical Support",
      "Full API Access",
      "White-labeling Options",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-purple-900 text-gray-800 dark:text-gray-100 py-16 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-purple-600 dark:text-purple-300">Pricing</h2>
        <p className="text-lg mb-2 dark:text-purple-100">
          Flexible plans to scale your financial analytics with ease.
        </p>
        <p className="text-sm text-gray-600 dark:text-purple-300">
          Empower your teams with insights, control, and efficiency.
        </p>
        <p className="text-sm mt-4 text-purple-600 dark:text-purple-400 font-medium">
          ✓ Upgrade or downgrade anytime &nbsp;&nbsp;&nbsp; ✓ Free trial available
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-purple-700/50 dark:hover:shadow-purple-700 transition duration-300"
          >
            <div>
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-300 mb-2">
                {plan.name}
              </h3>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-300">{plan.price}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{plan.note}</p>
              <ul className="text-sm space-y-2 text-left mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-purple-500 dark:text-purple-400 mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <button className="text-sm font-medium text-blue-600 dark:text-purple-300 hover:underline transition">
                Read More »
              </button>
              <button className="bg-purple-500 dark:bg-purple-600 hover:bg-purple-700 dark:hover:bg-purple-700 text-white py-2 rounded shadow-md transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
