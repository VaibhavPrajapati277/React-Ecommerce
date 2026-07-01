import React from 'react';
import Header from '../components/Header';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';


const AboutUs = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">

                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                            About Our Store
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover our journey, our values, and why millions of customers trust us for their daily shopping needs.
                        </p>
                    </div>

                    {/* Story Section (Image + Text Grid) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

                        {/* Left Side: आपकी नई इमेज यहाँ सेट है */}
                        <div className="w-full h-64 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="/images/aboutusimg.png"
                                alt="About Our Store Banner"
                                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                            />
                        </div>

                        {/* Right Side: Text Content */}
                        <div className="space-y-6">
                            <h3 className="text-2xl text-center font-bold text-gray-900">Our Story</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Founded in 2026, our e-commerce platform started with a simple vision: to make high-quality products accessible to everyone at affordable prices. What began as a small garage startup has now grown into a trusted online destination.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We curate the best trends and essentials, ensuring every product meets our strict quality standards before it reaches your doorstep. Customer satisfaction drives everything we do.
                            </p>
                        </div>
                    </div>

                    {/* Core Values Section (3 Columns) */}
                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Our Core Values</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            {/* Value 1 */}
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                                <span className="text-4xl block mb-4">🏆</span>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Premium Quality</h4>
                                <p className="text-gray-600 text-sm">We never compromise on product quality, sourcing only from verified and certified manufacturers.</p>
                            </div>

                            {/* Value 2 */}
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                                <span className="text-4xl block mb-4">⚡</span>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Fast Delivery</h4>
                                <p className="text-gray-600 text-sm">Our robust logistics network ensures your orders are processed safely and delivered on time.</p>
                            </div>

                            {/* Value 3 */}
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
                                <span className="text-4xl block mb-4">🤝</span>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h4>
                                <p className="text-gray-600 text-sm">Our dedicated customer service team is always here to assist you with any questions or issues.</p>
                            </div>

                        </div>
                    </div>

                    {/* Stats Section (Valuable Metric Grid) */}
                    <div className="bg-blue-600 rounded-2xl shadow-xl p-8 sm:p-12 text-white">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <p className="text-3xl sm:text-4xl font-extrabold">10K+</p>
                                <p className="text-blue-100 text-sm mt-1">Happy Customers</p>
                            </div>
                            <div>
                                <p className="text-3xl sm:text-4xl font-extrabold">500+</p>
                                <p className="text-blue-100 text-sm mt-1">Premium Products</p>
                            </div>
                            <div>
                                <p className="text-3xl sm:text-4xl font-extrabold">99%</p>
                                <p className="text-blue-100 text-sm mt-1">Positive Reviews</p>
                            </div>
                            <div>
                                <p className="text-3xl sm:text-4xl font-extrabold">24 Hr</p>
                                <p className="text-blue-100 text-sm mt-1">Dispatch Time</p>
                            </div>
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

export default AboutUs;
