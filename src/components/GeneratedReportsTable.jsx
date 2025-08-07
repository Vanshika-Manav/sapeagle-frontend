export default function GeneratedReportsTable() {
  const reports = [
    { id: 1, name: "Sales Report - Mar 2024", format: "PDF", date: "2024-03-31" },
    { id: 2, name: "Inventory Report - Apr 2024", format: "Excel", date: "2024-04-30" },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4 text-purple-700 dark:text-purple-300">
        Generated Reports
      </h2>
      <table className="min-w-full">
        <thead>
          <tr className="bg-purple-100 dark:bg-purple-800 text-left text-gray-700 dark:text-purple-200">
            <th className="p-2">Name</th>
            <th className="p-2">Format</th>
            <th className="p-2">Date</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr
              key={report.id}
              className="border-b dark:border-purple-700 text-gray-700 dark:text-purple-100"
            >
              <td className="p-2">{report.name}</td>
              <td className="p-2">{report.format}</td>
              <td className="p-2">{report.date}</td>
              <td className="p-2">
                <button className="text-blue-600 dark:text-purple-300 hover:underline">
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
