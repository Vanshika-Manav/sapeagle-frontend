export default function AnalyticsSummaryCards() {
  const cards = [
    { title: "Total Bills", value: 120 },
    { title: "Pending Reports", value: 15 },
    { title: "Active Users", value: 45 },
    { title: "Revenue", value: "₹1,20,000" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-gray-50 dark:bg-gray-800 p-4 rounded shadow text-center hover:shadow-lg dark:hover:shadow-purple-700/40 transition"
        >
          <h3 className="text-sm font-medium text-gray-600 dark:text-purple-300">{card.title}</h3>
          <p className="text-xl font-bold text-purple-700 dark:text-purple-200">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
