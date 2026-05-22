import { useContext } from "react";
import Address from "../components/Address"
import Header from "../components/Header"
import Cart from "./Cart"
import { CartContext } from "../../context/Cartcontext";
import { useNavigate } from "react-router-dom";

function Checkout() {
    const { data } = useContext(CartContext)
    const totalPrice = data.reduce(

        (total, item) =>

            total + (item.price * item.quantity),

        0
    );

    const navigate = useNavigate();
    return (
        <>
            <Header />

            <div className="max-w-7xl mx-auto p-4">

                {/* Main Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left Section */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Address Box */}
                        <div className="bg-white shadow-md rounded-xl p-4 border">
                            <Address />
                        </div>

                        {/* Cart Items Box */}
                        <div className="bg-white shadow-md rounded-xl p-4 border">
                            <Cart />
                        </div>

                    </div>

                    {/* Right Section */}
                    <div className="bg-white shadow-md rounded-xl p-4 border h-fit sticky top-4">
                        <h2 className="text-xl font-semibold mb-4">
                            Order Summary
                        </h2>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>{totalPrice}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>₹{(totalPrice>0)?40:0}</span>
                            </div>

                            <hr />

                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>{(totalPrice>0)?totalPrice + 40:0}</span>
                            </div>
                        </div>
        
                        <button onClick={()=> navigate("/success")} className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800">
                            Place Order
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Checkout