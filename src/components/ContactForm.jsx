export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-purple-200">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 dark:border-purple-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-purple-200">Email</label>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 dark:border-purple-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700 dark:text-purple-200">Message</label>
        <textarea
          rows="4"
          placeholder="Your Message..."
          className="w-full p-3 border border-gray-300 dark:border-purple-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded shadow-md transition-all"
      >
        Send Message
      </button>
    </form>
  );
}
