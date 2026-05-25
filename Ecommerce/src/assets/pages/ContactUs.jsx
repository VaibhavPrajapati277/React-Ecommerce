// import React from "react";
// import {
//     FaPhoneAlt,
//     FaEnvelope,
//     FaMapMarkerAlt,
// } from "react-icons/fa";

import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Bottom from "../components/Bottom";

function ContactUs() {
    return (
        <>
            <Header />

            <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Contact Us
                    </h1>

                    <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                        Have questions about your order, products, or services?
                        We’d love to hear from you.
                    </p>
                </div>

                {/* Main Container */}
                <div
                    className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
          "
                >

                    {/* Left Side - Contact Info */}
                    <div
                        className="
              bg-white
              rounded-2xl
              shadow-lg
              p-8
              flex
              flex-col
              justify-center
            "
                    >

                        <h2 className="text-3xl font-bold text-gray-800 mb-8">
                            Get In Touch
                        </h2>

                        {/* Phone */}
                        <div className="flex items-start gap-4 mb-6">
                            <div
                                className="
                  bg-blue-100
                  text-blue-600
                  p-4
                  rounded-full
                "
                            >
                                <FaPhoneAlt size={20} />
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Phone
                                </h3>

                                <p className="text-gray-500">
                                    +91 9876543210
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4 mb-6">
                            <div
                                className="
                  bg-green-100
                  text-green-600
                  p-4
                  rounded-full
                "
                            >
                                <FaEnvelope size={20} />
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Email
                                </h3>

                                <p className="text-gray-500">
                                    support@myshop.com
                                </p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <div
                                className="
                  bg-red-100
                  text-red-600
                  p-4
                  rounded-full
                "
                            >
                                <FaMapMarkerAlt size={20} />
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Address
                                </h3>

                                <p className="text-gray-500">
                                    123 Main Street,
                                    New Delhi, India
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Right Side - Form */}
                    <div
                        className="
              bg-white
              rounded-2xl
              shadow-lg
              p-8
            "
                    >

                        <h2 className="text-3xl font-bold text-gray-800 mb-8">
                            Send Message
                        </h2>

                        <form className="space-y-6">

                            {/* Name */}
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="
                    w-full
                    border
                    border-gray-300
                    rounded-lg
                    px-4
                    py-3
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="
                    w-full
                    border
                    border-gray-300
                    rounded-lg
                    px-4
                    py-3
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter subject"
                                    className="
                    w-full
                    border
                    border-gray-300
                    rounded-lg
                    px-4
                    py-3
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Message
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="
                    w-full
                    border
                    border-gray-300
                    rounded-lg
                    px-4
                    py-3
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                  "
                                ></textarea>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="
                  w-full
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  py-3
                  rounded-lg
                  font-semibold
                  transition
                  duration-300
                  cursor-pointer
                "
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>

            </div>

            <Footer />
            <Bottom />
        </>
    );
}

export default ContactUs;