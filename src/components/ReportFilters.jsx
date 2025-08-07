export default function ReportFilters() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded shadow mb-8">
      <h2 className="text-lg font-semibold mb-4 text-purple-700 dark:text-purple-300">
        Report Filters
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="date"
          className="p-3 rounded border border-gray-300 dark:border-purple-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
        />
        <select className="p-3 rounded border border-gray-300 dark:border-purple-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
          <option>Select Report Type</option>
          <option>Sales</option>
          <option>Inventory</option>
          <option>Revenue</option>
        </select>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded py-3 px-4"
        >
          Generate Report
        </button>
      </form>
    </div>
  );
}
