import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gradient-to-r dark:from-gray-900 dark:to-purple-900 text-gray-700 dark:text-gray-300 py-10 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">

        {/* Contact Info */}
        <div>
          <h3 className="text-purple-600 dark:text-purple-300 font-semibold mb-4">Contact Us</h3>
          <p className="mb-3">
            <strong className="text-gray-800 dark:text-purple-200">Address:</strong><br />
            <p>Amphil Tower, Block B,<br />
              Tech Park Avenue,
              Metropolis City, XY 123456
              </p>
          </p>
          <p className="mb-3">
            <strong className="text-gray-800 dark:text-purple-200">Phone:</strong><br />
            <p>+91 90000 00000</p>
            <p>+91 91111 11111</p>
          </p>
          <p>
            <strong className="text-gray-800 dark:text-purple-200">Email:</strong><br />
              support@bilayticssolutions.com
          </p>
        </div>

        {/* Our Services - 1 */}
        <div>
          <h3 className="text-purple-600 dark:text-purple-300 font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-purple-600 dark:hover:text-purple-300 cursor-pointer">PowerBI Analytics</li>
            <li className="hover:text-purple-600 dark:hover:text-purple-300 cursor-pointer">Export & Reporting</li>
            <li className="hover:text-purple-600 dark:hover:text-purple-300 cursor-pointer">Invoices Upload & Management</li>
            <li className="hover:text-purple-600 dark:hover:text-purple-300 cursor-pointer">Cloud Storage Integration</li>
          </ul>
        </div>

        {/* Our Services - 2 */}
        <div className="mt-4 md:mt-0">
          <h3 className="text-purple-600 dark:text-purple-300 font-semibold mb-4">More Solutions</h3>
          <ul className="space-y-2">
            <li className="hover:text-purple-600 dark:hover:text-purple-300 cursor-pointer">Multidepartment Access</li>
            <li className="hover:text-purple-600 dark:hover:text-purple-300 cursor-pointer">Audit Trail</li>
            <li className="hover:text-purple-600 dark:hover:text-purple-300 cursor-pointer">Role Based Access</li>
            <li className="hover:text-purple-600 dark:hover:text-purple-300 cursor-pointer">Email Notification</li>
            <li className="hover:text-purple-600 dark:hover:text-purple-300 cursor-pointer">Smart Bill</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-purple-600 dark:text-purple-300 font-semibold mb-4">Follow Us</h3>
          <p className="mb-4">
            Stay connected with us for updates, insights, and news.
          </p>
          <div className="flex gap-4 text-2xl">
            <a
              href="#"
              className="text-gray-500 hover:text-pink-500 dark:text-purple-400 dark:hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-400 dark:text-purple-400 dark:hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-blue-700 dark:text-purple-400 dark:hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 dark:border-purple-700 pt-6 text-center text-xs text-gray-500 dark:text-purple-300">
        © {new Date().getFullYear()} BILAYTICS. All Rights Reserved.
      </div>
    </footer>
  );
}
