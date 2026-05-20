import React from "react";

const Address = () => {
    return (
        <div className="w-full bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Delivery Address</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Full Name */}
                <div>
                    <label className="block text-gray-700 mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Enter full name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                    />
                </div>

                {/* Mobile Number */}
                <div>
                    <label className="block text-gray-700 mb-2 ">
                        Mobile Number *
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Enter mobile number"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                    />
                </div>

                {/* Pincode */}
                <div>
                    <label className="block text-gray-700 mb-2">
                        Pincode *
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Enter pincode"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                    />
                </div>

                {/* City */}
                <div>
                    <label className="block text-gray-700 mb-2">
                        City *
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Enter city"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                    />
                </div>

                {/* State */}
                <div>
                    <label className="block text-gray-700 mb-2">
                        State
                    </label>
                    <input
                        type="text"
                        placeholder="Enter state"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                    />
                </div>

                {/* Landmark */}
                <div>
                    <label className="block text-gray-700 mb-2">
                        Landmark
                    </label>
                    <input
                        type="text"
                        placeholder="Nearby landmark"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                    />
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">
                        Full Address *
                    </label>
                    <textarea
                        rows="4"
                        required
                        placeholder="Enter full address"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                    ></textarea>
                </div>

                {/* Address Type */}
                <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-3">
                        Address Type
                    </label>

                    <div className="flex gap-6">
                        <label className="flex items-center gap-2">
                            <input type="radio" name="type" />
                            Home
                        </label>

                        <label className="flex items-center gap-2">
                            <input type="radio" name="type" />
                            Office
                        </label>
                    </div>
                </div>

                {/* Button */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
                    >
                        Save Address
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Address;