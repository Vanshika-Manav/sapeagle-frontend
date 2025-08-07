export default function AnalyticsTable() {
  const rows = [
    { id: 1, title: "Bill Mar 2024", status: "Completed", amount: "₹10,000" },
    { id: 2, title: "Bill Apr 2024", status: "Pending", amount: "₹15,000" },
    { id: 3, title: "Bill May 2024", status: "Completed", amount: "₹12,500" },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded shadow mt-6">
      <h2 className="text-lg font-semibold mb-4 text-purple-700 dark:text-purple-300">
        Recent Activity
      </h2>
      <table className="min-w-full">
        <thead>
          <tr className="text-left text-gray-600 dark:text-purple-200 border-b dark:border-purple-700">
            <th className="p-2">ID</th>
            <th className="p-2">Title</th>
            <th className="p-2">Status</th>
            <th className="p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="text-gray-700 dark:text-purple-100 border-b dark:border-purple-700">
              <td className="p-2">{row.id}</td>
              <td className="p-2">{row.title}</td>
              <td className="p-2">{row.status}</td>
              <td className="p-2">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
