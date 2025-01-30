import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ submitted: false, error: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitted: false, error: true });
      return;
    }

    // Example: Sending data to Formspree (replace with your own solution)
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ submitted: true, error: false });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus({ submitted: false, error: true });
      }
    } catch (error) {
      setStatus({ submitted: false, error: true });
    }
  };

  return (
    <section className="container mx-auto mt-10 px-6">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg mx-auto"
      >
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-all"
        >
          Send Message
        </button>

        {status.submitted && (
          <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
        )}
        {status.error && (
          <p className="text-red-400 text-center mt-4">Error sending message. Try again.</p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;