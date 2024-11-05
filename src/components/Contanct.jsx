import React, { useState } from 'react';
// import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (send data to the backend or API)
        alert('Thank you for contacting us! We’ll get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="max-w-5xl mx-auto p-8 bg-gray-50">
  {/* Contact Form */}
  <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Contact Us</h1>
    <p className="text-center text-gray-600 mb-8">
      Have questions, feedback, or need support? Fill out the form below, and our team will get in touch with you soon.
    </p>
    <form onSubmit={handleSubmit} className="space-y-6">
      <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
      />

      <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
      />

      <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        rows="5"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
      ></textarea>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Submit
      </button>
    </form>
  </section>

  {/* Contact Information */}
  <section className="bg-white p-8 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Our Contact Information</h2>
    <p className="text-center text-gray-600 mb-8">
      We're here to help! Reach out to us through the following channels.
    </p>
    <div className="space-y-8 text-center md:flex md:justify-between md:space-y-0">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">Customer Support</h3>
        <p className="text-gray-600">Email: support@lockDelivery.com</p>
        <p className="text-gray-600">Phone: +1 (800) 123-4567</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800">Address</h3>
        <p className="text-gray-600">123 Food Street</p>
        <p className="text-gray-600">City, State, 12345</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800">Follow Us</h3>
        <p className="text-gray-600">Stay connected on social media!</p>
        <div className="flex space-x-4 mt-2 justify-center">
          <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
          <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
          <a href="#" className="text-blue-600 hover:text-blue-800">Instagram</a>
        </div>
      </div>
    </div>
  </section>
</div>

    );
};

export default Contact;
