import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add actual submission logic or API call
    setStatus("Thank you for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-900 dark:text-gray-100">
      <Helmet>
        <title>HobbyHub | Contact Us</title>
      </Helmet>

      <h1 className="text-4xl font-extrabold text-center text-lime-400 mb-8">
        Contact Us
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-lg mx-auto space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-400 dark:focus:ring-lime-600"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-400 dark:focus:ring-lime-600"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-400 dark:focus:ring-lime-600 resize-none"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          className="btn btn-lime-400 w-full py-3 font-semibold text-gray-900 dark:text-gray-100 rounded hover:bg-lime-500 dark:hover:bg-lime-600 transition"
        >
          Send Message
        </button>

        {status && (
          <p className="mt-4 text-center text-green-500 font-medium">{status}</p>
        )}
      </form>
    </div>
  );
}
