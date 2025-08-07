import { useState } from "react";
import { X } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile number is required"),
  company: Yup.string().required("Company is required"),
  message: Yup.string().required("Message is required"),
});

export default function RequestDemoModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  async function handleSubmit(values, { resetForm }) {
    setLoading(true);

    const response = await fetch("http://localhost:8080/api/demo-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    setLoading(false);
    if (response.ok) {
      resetForm();
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        onClose();
      }, 2500);
    } else {
      alert("Failed to send request. Please try again.");
    }
  }

  if (!isOpen) return null;

  // Only show popup message after submit, hide modal content
  if (showPopup) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200 px-6 py-3 rounded shadow-lg z-50 font-medium">
          Your request has been received. Our team will contact you soon.
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-purple-900 p-6 rounded-lg w-full max-w-lg shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-purple-300"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-300">
          Request a Demo
        </h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            mobile: "",
            company: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <Field
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  maxLength={10}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="w-full p-3 border rounded text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                  onInput={e => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                  }}
                />
                <ErrorMessage name="mobile" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <Field
                  type="text"
                  name="company"
                  placeholder="Company"
                  className="w-full p-3 border rounded text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                />
                <ErrorMessage name="company" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  rows="3"
                  className="w-full p-3 border rounded text-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded transition"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit Request"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}