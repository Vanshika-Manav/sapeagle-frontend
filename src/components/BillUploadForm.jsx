import { useState } from "react";

export default function BillUploadForm({ onUpload }) {
  const [file, setFile] = useState(null);
  const [uploader, setUploader] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!file) {
      setMessage("Please select a file.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("uploader", uploader);
    formData.append("description", description);

    try {
      const response = await fetch("http://localhost:8080/api/bills/upload", {
        method: "POST",
        body: formData,
      });
      const text = await response.text();
      if (response.ok) {
        setMessage("Bill uploaded successfully!");
        setFile(null);
        setUploader("");
        setDescription("");
        if (onUpload) onUpload();
      } else {
        setMessage(text || "Upload failed!");
      }
    } catch {
      setMessage("Upload failed!");
    }
    setLoading(false);
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-white">
          Bill Name
        </label>
        <input
          type="text"
          placeholder="Uploader Name"
          value={uploader}
          onChange={e => setUploader(e.target.value)}
          className="w-full p-3 border rounded text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
          required
        />
      </div>
            <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-white">
          Description
        </label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full p-3 border rounded text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-white">
          Bill File (PDF/Image)
        </label>
        <input
          type="file"
          accept="application/pdf,image/*"
          onChange={e => setFile(e.target.files[0])}
          className="w-full p-3 border rounded text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded transition"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload Bill"}
      </button>
      {message && (
        <div className="text-center text-green-700 dark:text-green-200 mt-2">{message}</div>
      )}
    </form>
  );
}