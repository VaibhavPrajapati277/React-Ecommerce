import { Link } from "react-router-dom";

function OrderSuccess() {

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6 sm:p-8 text-center">

                {/* Success Icon */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">

                    <span className="text-green-600 text-4xl sm:text-5xl">
                        ✓
                    </span>

                </div>

                {/* Heading */}
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                    Order Placed Successfully!
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-6">
                    Thank you for shopping with us.
                    <p>Your order has been placed successfully.</p>
                </p>

                {/* Order Info */}
                <div className="bg-gray-50 border rounded-2xl p-4 mb-6">

                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">
                            Order ID
                        </span>

                        <span className="font-medium">
                            #ORD12345
                        </span>
                    </div>

                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500">
                            Estimated Delivery
                        </span>

                        <span className="font-medium">
                            3-5 Days
                        </span>
                    </div>

                </div>

                {/* Button */}
                <Link
                    to="/"
                    className="w-full inline-block bg-black hover:bg-gray-800 text-white py-3 rounded-2xl font-medium transition"
                >
                    Continue Shopping
                </Link>

            </div>
        </div>
    );
}

export default OrderSuccess;