import React from "react";

const Contact = () => {
  return (
    <section className="px-6 py-12 md:py-20 bg-gray-50 max-w-6xl mx-auto text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600">
          We'd love to hear from you. Whether you have a question, feedback, or just want to say hello — our inbox is always open.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="bg-white p-8 rounded-2xl shadow-md space-y-6">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Contact Information</h3>
          <p className="mb-4 text-gray-700">
            <strong>Email:</strong> support@bookbarn.com
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Phone:</strong> 01670415337
          </p>
          <p className="mb-4 text-gray-700">
            <strong>Address:</strong> East Delta University
          </p>
          <div className="mt-6">
            <h4 className="text-lg font-medium mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
              <a href="#" className="text-blue-600 hover:text-blue-800">Instagram</a>
              <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
