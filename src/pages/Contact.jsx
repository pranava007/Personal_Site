import React from 'react';

const Contact = () => {
  return (
    <div className="flex p-6 mt-10 max-w-4xl mx-auto flex-col md:flex-row md:items-start mb-80">
      {/* Left Section */}
     


      {/* Right Section - Contact Form */}
      <div className="flex-1 bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Contact Me</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium dark:text-gray-300" htmlFor="name">Your Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white" placeholder="Enter your name" required />
          </div>

          <div>
            <label className="block text-sm font-medium dark:text-gray-300" htmlFor="email">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white" placeholder="Enter your email" required />
          </div>

          <div>
            <label className="block text-sm font-medium dark:text-gray-300" htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white" placeholder="Enter your phone number" required />
          </div>

          <div>
            <label className="block text-sm font-medium dark:text-gray-300" htmlFor="message">Message</label>
            <textarea id="message" className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white" rows="4" placeholder="Your message here..." required></textarea>
          </div>

          <button type="submit" className="w-full px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-700 dark:hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
