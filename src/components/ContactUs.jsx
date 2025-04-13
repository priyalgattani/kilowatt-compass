import React, { useState } from 'react';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message Submitted!');
        // Here you can handle the form submission logic (e.g., sending it to an API).
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="container mt-4 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="text-center" style={{ fontFamily: "'Roboto', sans-serif", color: '#333' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Contact Us</h1>

                {/* Contact Details Section */}
                <div className="mb-5">
                    <h4>Get in Touch</h4>
                    <p>Have questions or need support? Reach out to us!</p>
                    <p><strong>Phone:</strong> +91 123 456 7890</p>
                    <p><strong>Email:</strong> support@example.com</p>
                    <p><strong>Address:</strong> 123, EV Lane, New Delhi, India</p>
                </div>

                {/* Contact Form Section */}
                <div className="contact-form">
                    <h4>Send Us a Message</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
