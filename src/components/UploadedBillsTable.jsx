import { useEffect, useState } from "react";

function EditModal({ bill, onClose, onSave }) {
  const [uploader, setUploader] = useState(bill.uploader);
  const [description, setDescription] = useState(bill.description);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSave(e) {
    e.preventDefault();
    setLoading(true);

    try {
      let response;
      if (file) {
        // If new file selected, send multipart/form-data
        const formData = new FormData();
        formData.append("file", file);
        formData.append("uploader", uploader);
        formData.append("description", description);

        response = await fetch(`http://localhost:8080/api/bills/${bill.id}/update-file`, {
          method: "PUT",
          body: formData,
        });
      } else {
        // Only update metadata
        response = await fetch(`http://localhost:8080/api/bills/${bill.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...bill, uploader, description }),
        });
      }
      if (response.ok) {
        onSave();
        onClose();
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl w-full max-w-md">
        <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">Edit Bill</h3>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-white">Uploader</label>
            <input
              type="text"
              value={uploader}
              onChange={e => setUploader(e.target.value)}
              className="w-full p-2 border rounded text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-white">Description</label>
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full p-2 border rounded text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-white">
              Upload Updated File (PDF/Image)
            </label>
            <input
              type="file"
              accept="application/pdf,image/*"
              onChange={e => setFile(e.target.files[0])}
              className="w-full p-2 border rounded text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
            />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Leave empty to keep previous file.
            </span>
          </div>
          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function UploadedBillsTable() {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editBill, setEditBill] = useState(null);

  function refreshBills() {
    setLoading(true);
    fetch("http://localhost:8080/api/bills")
      .then(res => res.json())
      .then(data => setBills(data))
      .catch(() => setBills([]))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    refreshBills();
  }, []);

  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this bill?")) return;
    await fetch(`http://localhost:8080/api/bills/${id}`, { method: "DELETE" });
    refreshBills();
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
        <thead>
          <tr className="bg-purple-100 dark:bg-gradient-to-r dark:from-purple-900 dark:to-gray-900">
            <th className="px-6 py-4 text-left font-semibold text-gray-700 dark:text-purple-200">Bill Name</th>
            <th className="px-6 py-4 text-left font-semibold text-gray-700 dark:text-purple-200">Uploader</th>
            <th className="px-6 py-4 text-left font-semibold text-gray-700 dark:text-purple-200">Description</th>
            <th className="px-6 py-4 text-left font-semibold text-gray-700 dark:text-purple-200">Upload Date</th>
            <th className="px-6 py-4 text-center font-semibold text-gray-700 dark:text-purple-200">View</th>
            <th className="px-6 py-4 text-center font-semibold text-gray-700 dark:text-purple-200">Edit</th>
            <th className="px-6 py-4 text-center font-semibold text-gray-700 dark:text-purple-200">Delete</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={7} className="text-center py-8 text-gray-700 dark:text-purple-200">Loading...</td>
            </tr>
          ) : bills.length === 0 ? (
            <tr>
              <td colSpan={7} className="text-center py-8 text-gray-700 dark:text-purple-200">No bills uploaded.</td>
            </tr>
          ) : (
            bills.map(bill => (
              <tr
                key={bill.id}
                className="hover:bg-purple-50 dark:hover:bg-purple-900 transition rounded-lg shadow-sm"
                style={{ boxShadow: "0 2px 8px 0 rgba(128,90,213,0.07)" }}
              >
                <td className="px-6 py-4 text-gray-700 dark:text-white">{bill.filename}</td>
                <td className="px-6 py-4 text-gray-700 dark:text-white">{bill.uploader}</td>
                <td className="px-6 py-4 text-gray-700 dark:text-white">{bill.description}</td>
                <td className="px-6 py-4 text-gray-700 dark:text-white">{bill.uploadDate}</td>
                <td className="px-6 py-4 text-center">
                  <a
                    href={`http://localhost:8080${bill.fileUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded shadow transition"
                  >
                    View
                  </a>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => setEditBill(bill)}
                    className="inline-block px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-700 rounded shadow transition"
                  >
                    Edit
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleDelete(bill.id)}
                    className="inline-block px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded shadow transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {editBill && (
        <EditModal
          bill={editBill}
          onClose={() => setEditBill(null)}
          onSave={refreshBills}
        />
      )}
    </div>
  );
}