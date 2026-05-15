import { useContext, useState } from "react";
import { CartContext } from "../../context/Cartcontext";
import Cart from "../pages/Cart";
import { Toaster } from "react-hot-toast";

function Bottom() {
    const { data } = useContext(CartContext);
    const [cartOpen, setCartOpen] = useState(false);

    const totalPrice = data.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
      

    return (
        <>
            {/* Bottom Mobile Navbar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 ">
                <div className="flex items-center justify-between bg-white  px-4 py-3">

                    {/* Search */}
                    <button className="p-2 border rounded-lg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </button>

                    {/* Cart */}
                    <div className="relative">
                        <button
                            onClick={() => setCartOpen(true)}
                            className="p-2 border rounded-lg"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {/* Badge */}
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold min-w-[20px] h-5 flex items-center justify-center rounded-full px-1">
                            {data.length}
                        </span>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {cartOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setCartOpen(false)}
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-screen w-full sm:w-96 bg-white z-50 shadow-xl transform transition-transform duration-300 flex flex-col
                ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold">Your Cart</h2>

                    <button
                        onClick={() => setCartOpen(false)}
                        className="text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-4">
                    {data.length === 0 ? (
                        <p className="text-gray-500 text-center mt-10">
                            Your cart is empty
                        </p>
                    ) : (
                        <Cart />
                    )}
                </div>

                {/* Footer */}
                <div className="border-t p-4 bg-white">
                    <div className="flex justify-between mb-3">
                        <span className="font-semibold">Total</span>

                        <span className="font-bold text-blue-600">
                            ₹{totalPrice}
                        </span>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-medium">
                        Checkout
                    </button>
                </div>
            </div>
        </>
    );
}

export default Bottom;  