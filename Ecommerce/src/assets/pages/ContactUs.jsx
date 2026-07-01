import React, { useState } from 'react';
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });


    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // यहाँ बिना API के डेटा कंसोल में दिखेगा
        console.log('User Feedback Data:', formData);

        // सक्सेस मैसेज एक्टिव करें
        setIsSubmitted(true);

        // 5 सेकंड बाद सक्सेस मैसेज को छुपाने के लिए
        setTimeout(() => {
            setIsSubmitted(false);
            // फॉर्म को खाली करें
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 10000);
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 py-3 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">

                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                            Contact Us
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Have any questions or feedback? We would love to hear from you.
                        </p>
                    </div>

                    {/* Success Toast Notification */}
                    {isSubmitted && (
                        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center font-medium animate-bounce">

                            🎉 Thank you, {formData.name}! Your message has been received successfully. We will get back to you soon.

                        </div>
                    )}

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                        {/* Left Side: Contact Info */}
                        <div className="bg-blue-600 text-white p-8 rounded-2xl shadow-lg space-y-6">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
                                <p className="text-blue-100 text-sm">Fill out the form and our team will get back to you within 24 hours.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <span className="text-xl">📞</span>
                                    <div>
                                        <p className="text-xs text-blue-200">Call Us</p>
                                        <p className="font-medium">+9173765679</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <span className="text-xl">✉️</span>
                                    <div>
                                        <p className="text-xs text-blue-200">Email Us</p>
                                        <p className="font-medium">vaibhavp2708@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <span className="text-xl">📍</span>
                                    <div>
                                        <p className="text-xs text-blue-200">Our Office</p>
                                        <p className="font-medium">123 E-Commerce St, Ahmedabad</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-blue-500">
                                <p className="text-sm font-semibold">Business Hours:</p>
                                <p className="text-xs text-blue-100">Monday - Friday: 9 AM - 6 PM</p>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                        placeholder="Order Issue / General Inquiry"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                                        placeholder="Type your message here..."
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-200 text-center"
                                    >
                                        Send Message
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div className="mb-20 md:mb-0">
                <Footer />
            </div>
            <Bottom />
        </>
    );
};

export default ContactUs;
