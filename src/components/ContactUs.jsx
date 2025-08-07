export default function ContactUs() {
  return (
    <section className="bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-purple-900 py-16 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div className="text-gray-800 dark:text-purple-100">
          <h2 className="text-3xl font-bold mb-4 text-purple-600 dark:text-purple-300">Contact Bilaytics</h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-purple-200">
            Have questions? Want a demo? Send us a message — we’d love to help you make the most of your billing analytics.
          </p>

          <div className="mb-6">
            <h4 className="font-semibold">📍 Office Address</h4>
            <p>Amphil Tower, Block B,<br />
              Tech Park Avenue,<br />
              Metropolis City, XY 123456</p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold">📞 Call Us</h4>
            <p>+91 90000 00000<br />+91 91111 11111</p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold">📧 Email Us</h4>
            <p>support@bilayticssolutions.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-purple-200">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 dark:border-purple-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm dark:shadow-purple-900/30"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-purple-200">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 dark:border-purple-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm dark:shadow-purple-900/30"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-purple-200">Mobile</label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full p-3 border border-gray-300 dark:border-purple-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm dark:shadow-purple-900/30"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-purple-200">Organization / Industry</label>
            <input
              type="text"
              placeholder="e.g. Retail, Manufacturing"
              className="w-full p-3 border border-gray-300 dark:border-purple-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm dark:shadow-purple-900/30"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 dark:text-purple-200">Message</label>
            <textarea
              rows="4"
              placeholder="Your message or inquiry…"
              className="w-full p-3 border border-gray-300 dark:border-purple-700 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm dark:shadow-purple-900/30"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded shadow-md transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
