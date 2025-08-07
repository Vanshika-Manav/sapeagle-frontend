import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-purple-900 py-16 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="text-gray-800 dark:text-purple-100">
          <h2 className="text-3xl font-bold mb-4 text-purple-600 dark:text-purple-300">Contact Us</h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-purple-200">
            We'd love to hear from you! Fill out the form or reach us directly through the details below.
          </p>

          <div className="mb-6">
            <h4 className="font-semibold">📍 Address</h4>
            <p>Amphil Tower, Block B,<br />
              Tech Park Avenue,
              Metropolis City, XY 123456
            </p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold">📞 Phone</h4>
            <p>+91 90000 00000</p>
            <p>+91 91111 11111</p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold">📧 Email</h4>
            <p>support@bilayticssolutions.com</p>
          </div>
        </div>

        {/* Contact Form Component */}
        <ContactForm />
      </div>
    </section>
  );
}
