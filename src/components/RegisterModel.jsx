import { useState } from "react";
import { X, CheckCircle, XCircle } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Custom Email Regex (stricter than default Yup.email)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Validation Schema
const validationSchema = Yup.object({
  username: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only letters and spaces allowed")
    .min(3, "Must be at least 3 characters")
    .required("Full Name is required"),
  email: Yup.string()
    .matches(emailRegex, "Invalid email address format")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Must be exactly 10 digits")
    .required("Mobile number is required"),
  company: Yup.string()
    .min(2, "Company name too short")
    .required("Company name is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
      "Must contain uppercase, lowercase, number & special character, min 8 chars"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function RegisterModal({ isOpen, onClose }) {
  const [notification, setNotification] = useState({ show: false, message: "", type: "" });

  if (!isOpen) return null;

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: "", type: "" }), 3000);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const msg = await res.text();
      if (res.ok) {
        showNotification(`Registration Successful: ${msg}`, "success");
        resetForm();
        setTimeout(() => onClose(), 1500);
      } else {
        showNotification(`Registration Failed: ${msg}`, "error");
      }
    } catch (err) {
      showNotification("Something went wrong!", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Notification */}
      {notification.show && (
        <div
          className={`fixed top-6 right-6 flex items-center gap-3 px-5 py-3 rounded-lg shadow-lg z-[9999] animate-slide-in
            ${notification.type === "success" ? "bg-green-500" : "bg-red-500"} text-white`}
        >
          {notification.type === "success" ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <XCircle className="w-5 h-5" />
          )}
          <span className="font-medium">{notification.message}</span>
        </div>
      )}

      {/* Modal */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-lg relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-600 dark:text-purple-300 text-center">
            Create Your Account
          </h2>

          {/* Formik Form */}
          <Formik
            initialValues={{
              username: "",
              email: "",
              mobile: "",
              company: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form className="space-y-4">
                {/* Full Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-purple-600 dark:text-gray-200">
                      Full Name
                    </label>
                    <Field
                      name="username"
                      type="text"
                      placeholder="John Doe"
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                                 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-purple-600 dark:text-gray-200">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                                 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* Mobile + Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-purple-600 dark:text-gray-200">
                      Mobile
                    </label>
                    <Field
                      name="mobile"
                      type="tel"
                      placeholder="9876543210"
                      maxLength="10"
                      onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                        setFieldValue("mobile", e.target.value);
                      }}
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                                 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    <ErrorMessage
                      name="mobile"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-purple-600 dark:text-gray-200">
                      Company Name
                    </label>
                    <Field
                      name="company"
                      type="text"
                      placeholder="Your Company"
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                                 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    <ErrorMessage
                      name="company"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* Password + Confirm Password */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-purple-600 dark:text-gray-200">
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                                 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-purple-600 dark:text-gray-200">
                      Confirm Password
                    </label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                                 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg 
                             font-semibold shadow-lg transition disabled:opacity-50"
                >
                  {isSubmitting ? "Registering..." : "Register"}
                </button>
              </Form>
            )}
          </Formik>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
            <span className="mx-3 text-gray-500 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          </div>

          {/* Google Register */}
          <button
            className="w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-800 
                       border border-gray-300 dark:border-gray-700 py-3 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              Sign Up with Google
            </span>
          </button>
        </div>
      </div>

      {/* Notification Animation */}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(120%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slideIn 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
