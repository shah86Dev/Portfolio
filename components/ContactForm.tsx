import React from "react";

const ContactForm = () => {
  return (
    <form className="max-w-md w-full mx-auto p-4 bg-gray-800 rounded-lg shadow-md" action="https://formsubmit.co/shahzaib8620@gmail.com" method="POST">
      <h2 className="text-2xl font-bold mb-2 text-white text-center">Contact Me</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-4 py-2 text-sm text-gray-900 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-4 py-2 text-sm text-gray-900 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Your message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 text-sm text-gray-900 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 rounded"
      >
        Send   E-Mail
      </button>
    </form>
  );
};export default ContactForm;
