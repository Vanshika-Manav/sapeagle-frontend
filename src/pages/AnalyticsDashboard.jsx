import AnalyticsCharts from "../components/AnalyticsCharts";
import AnalyticsSummaryCards from "../components/AnalyticsSummaryCards";
import AnalyticsTable from "../components/AnalyticsTables";

export default function AnalyticsDashboard() {
  return (
    <section className="bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-purple-900 py-10 px-6 min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-8">
          Analytics Dashboard
        </h1>

        <AnalyticsSummaryCards />
        <div className="my-8">
          <AnalyticsCharts />
        </div>
        <AnalyticsTable />
      </div>
    </section>
  );
}
