import React, { useState } from "react";
import toast from "react-hot-toast";

const Address = () => {

    const [type, setType] = useState("home");

    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success("Address Saved!", {
            style: {
                borderRadius: '12px',
                background: '#000',
                color: '#fff',
            },
        });
    };

    return (
        <div className="bg-white shadow-sm p-5">

            <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-semibold">
                    Delivery Address
                </h2>

                <span className="text-sm text-gray-500">
                    Fast Delivery
                </span>

            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>

                {/* Name + Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black outline-none"
                    />

                    <input
                        type="text"
                        placeholder="Mobile Number"
                        required
                        className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black outline-none"
                    />
                </div>

                {/* Pincode + City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <input
                        type="text"
                        placeholder="Pincode"
                        required
                        className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black outline-none"
                    />

                    <input
                        type="text"
                        placeholder="City"
                        className="border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black outline-none"
                    />
                </div>

                {/* Address */}
                <textarea
                    rows="3"
                    placeholder="House no, Area, Street..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black outline-none"
                ></textarea>

                {/* Address Type */}
                <div className="flex gap-3">

                    <button
                        type="button"
                        onClick={() => setType("home")}
                        className={`px-5 py-2 rounded-full border transition
                                
                                ${type === "home"
                                ? "bg-black text-white border-black"
                                : "bg-white text-black border-gray-300"
                            }
                            `}
                    >
                        Home
                    </button>

                    {/* Office */}
                    <button
                        type="button"
                        onClick={() => setType("office")}
                        className={`px-5 py-2 rounded-full border transition
                                
                                ${type === "office"
                                ? "bg-black text-white border-black"
                                : "bg-white text-black border-gray-300"
                            }
                            `}
                    >
                        Office
                    </button>
                </div>

                {/* Save Button */}
                <button
                    type="submit"

                    className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-xl font-medium transition cursor-pointer"
                >
                    Save Address

                </button>

            </form>
        </div>
    );
};

export default Address;