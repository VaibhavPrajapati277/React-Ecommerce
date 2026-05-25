import { useContext, useEffect, useState } from "react";
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
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const navigate = useNavigate();
    const [savedAddress, setSavedAddress] = useState(false);
    useEffect(() => {

        window.scrollTo(0, 0);

    }, []);

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
                            <Address savedAddress={savedAddress}
                                setSavedAddress={setSavedAddress} />
                        </div>

                        {/* Cart Items Box */}
                        <div className="bg-white shadow-md rounded-xl p-4 border">
                            <Cart />
                        </div>

                    </div>

                    {/* Right Section */}
                    {/* Right Section */}
                    <div className="bg-white shadow-md rounded-xl p-4 border h-fit sticky top-4">

                        <h2 className="text-xl font-semibold mb-4">
                            Order Summary
                        </h2>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>₹{totalPrice}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>₹{(totalPrice > 0) ? 40 : 0}</span>
                            </div>

                            <hr />

                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>₹{(totalPrice > 0) ? totalPrice + 40 : 0}</span>
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold mb-3">
                                Payment Method
                            </h2>

                            <div className="space-y-3">

                                {/* COD */}
                                <label className={`border rounded-lg p-3 flex items-center gap-3 cursor-pointer transition 
                                        ${paymentMethod === "cod"
                                        ? "border-black bg-gray-100"
                                        : "border-gray-300"}`}>

                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={paymentMethod === "cod"}
                                        onChange={() => setPaymentMethod("cod")}
                                    />

                                    <div>
                                        <p className="font-medium">Cash on Delivery</p>
                                        <p className="text-sm text-gray-500">
                                            Pay after product delivery
                                        </p>
                                    </div>
                                </label>

                                {/* UPI */}
                                <label className={`border rounded-lg p-3 flex items-center gap-3 cursor-pointer transition 
                                         ${paymentMethod === "upi"
                                        ? "border-black bg-gray-100"
                                        : "border-gray-300"}`}>

                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={paymentMethod === "upi"}
                                        onChange={() => setPaymentMethod("upi")}
                                    />

                                    <div>
                                        <p className="font-medium">UPI Payment</p>
                                        <p className="text-sm text-gray-500">
                                            Pay using GPay, PhonePe, Paytm
                                        </p>
                                    </div>
                                </label>

                                {/* Card */}
                                <label className={`border rounded-lg p-3 flex items-center gap-3 cursor-pointer transition 
                                     ${paymentMethod === "card"
                                        ? "border-black bg-gray-100"
                                        : "border-gray-300"}`}>

                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={paymentMethod === "card"}
                                        onChange={() => setPaymentMethod("card")}
                                    />

                                    <div>
                                        <p className="font-medium">Debit / Credit Card</p>
                                        <p className="text-sm text-gray-500">
                                            Visa, Mastercard, RuPay
                                        </p>
                                    </div>
                                </label>

                                {/* Wallet */}
                                <label className={`border rounded-lg p-3 flex items-center gap-3 cursor-pointer transition 
                                            ${paymentMethod === "wallet"
                                        ? "border-black bg-gray-100"
                                        : "border-gray-300"}`}>

                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={paymentMethod === "wallet"}
                                        onChange={() => setPaymentMethod("wallet")}
                                    />

                                    <div>
                                        <p className="font-medium">Wallet</p>
                                        <p className="text-sm text-gray-500">
                                            Amazon Pay, Paytm Wallet
                                        </p>
                                    </div>
                                </label>

                            </div>
                        </div>

                        <button
                            disabled={!savedAddress || data.length === 0}
                            onClick={() => {

                                if (paymentMethod === "cod") {
                                    savedAddress
                                        ? navigate("/success")
                                        : alert("Please save address first")
                                } else {
                                    alert("Currently only Cash on Delivery is available")
                                }
                            }}
                            className={`w-full mt-6 py-3 rounded-lg text-white transition ${(!savedAddress || data.length === 0)
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-black hover:bg-gray-800 cursor-pointer"
                                }`}
                        >
                            {paymentMethod === "cod" ? "Place Order" : "Proceed to Payment"}
                        </button>

                    </div>

                </div>
            </div >
        </>
    )
}

export default Checkout