import React, { useState } from 'react';
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Support = () => {
   
    const [activeFaq, setActiveFaq] = useState(null);
    const navigate = useNavigate();

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const faqs = [
        { q: "How can I track my order?", a: "You can track your order by visiting the 'My Orders' section in your profile or by using the tracking link sent to your email." },
        { q: "What is your return and refund policy?", a: "We offer a 7-day hassle-free return policy. The product must be unused and in its original packaging with tags intact." },
        { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days. Express shipping options are available at checkout for 1-2 day delivery." },
        { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, UPI (PhonePe, Google Pay), Net Banking, and Cash on Delivery (COD)." }
    ];

    return (
        <>
            <Header />


            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pb-24 md:pb-12">
                <div className="max-w-4xl mx-auto">

                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                            Customer Support & Help Center
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            We are here to help you 24/7. Find quick answers or connect with our team.
                        </p>
                    </div>

                    {/* Quick Help Categories Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
                            <span className="text-4xl block mb-3">📦</span>
                            <h4 className="font-bold text-gray-900 mb-1">Orders & Shipping</h4>
                            <p className="text-gray-500 text-xs">Track status, changes, delays</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
                            <span className="text-4xl block mb-3">🔄</span>
                            <h4 className="font-bold text-gray-900 mb-1">Returns & Refunds</h4>
                            <p className="text-gray-500 text-xs">Initiate return, refund status</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition">
                            <span className="text-4xl block mb-3">💳</span>
                            <h4 className="font-bold text-gray-900 mb-1">Payments & Wallet</h4>
                            <p className="text-gray-500 text-xs">Failed payments, offers, coupons</p>
                        </div>
                    </div>

                    {/* FAQ Section (Accordion Layout) */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center sm:text-left">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
                                    >
                                        <span>{faq.q}</span>
                                        <span className="text-xl text-gray-400">{activeFaq === index ? '−' : '+'}</span>
                                    </button>
                                    {activeFaq === index && (
                                        <div className="p-5 pt-0 text-gray-600 border-t border-gray-100 text-sm leading-relaxed bg-gray-50/50">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Ticket Simulation / Direct Contact */}
                    <div className="bg-blue-600 rounded-2xl shadow-xl p-8 text-white text-center sm:text-left sm:flex sm:items-center sm:justify-between">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Still need help?</h3>
                            <p className="text-blue-100 text-sm max-w-md">If you couldn't find your answer, chat with our support team or head over to our Contact Us page.</p>
                        </div>
                        <div className="mt-6 sm:mt-0">
                            <button
                                onClick={() => navigate('/contactus')}
                                className="w-full sm:w-auto px-6 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 shadow-md transition duration-200 cursor-pointer"
                            >
                                Contact Support Team
                            </button>
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

export default Support;
