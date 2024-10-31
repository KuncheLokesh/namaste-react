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
        <div className="contact-container">
            {/* Contact Form */}
            <section className="contact-form-section">
                <h1>Contact Us</h1>
                <p>Have questions, feedback, or need support? Fill out the form below, and our team will get in touch with you soon.</p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        required
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </section>

            {/* Contact Information */}
            <section className="contact-info-section">
                <h2>Our Contact Information</h2>
                <p>We're here to help! Reach out to us through the following channels.</p>
                <div className="contact-info">
                    <div>
                        <h3>Customer Support</h3>
                        <p>Email: support@lockDelivery.com</p>
                        <p>Phone: +1 (800) 123-4567</p>
                    </div>
                    <div>
                        <h3>Address</h3>
                        <p>123 Food Street</p>
                        <p>City, State, 12345</p>
                    </div>
                    <div>
                        <h3>Follow Us</h3>
                        <p>Stay connected on social media!</p>
                        <div className="social-icons">
                            <a href="#" className="social-icon">Facebook</a>
                            <a href="#" className="social-icon">Twitter</a>
                            <a href="#" className="social-icon">Instagram</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
