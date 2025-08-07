import BillUploadForm from "../components/BillUploadForm";
import UploadedBillsTable from "../components/UploadedBillsTable";

export default function BillUpload() {
  return (
    <section className="py-10 px-6 bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-purple-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-6">
          Bill Upload
        </h1>

        <BillUploadForm />
        <div className="my-10">
          <UploadedBillsTable />
        </div>
      </div>
    </section>
  );
}
