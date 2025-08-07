import ReportFilters from "../components/ReportFilters";
import GeneratedReportsTable from "../components/GeneratedReportsTable";

export default function ExportReport() {
  return (
    <section className="bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-purple-900 py-10 px-6 min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8">
          Export Reports
        </h1>

        <ReportFilters />

        <div className="my-10">
          <GeneratedReportsTable />
        </div>
      </div>
    </section>
  );
}
