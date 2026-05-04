import { useState } from "react";
import Bottom from "./Bottom";
import Footer from "./Footer";
import Login from "./Login";

import { Link, useNavigate } from "react-router-dom";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);


    return (

        <>
            <header className="sticky top-0 z-50 bg-white shadow-md">
                <div className="px-8 py-4 flex items-center justify-between">

                    <div className="font-bold  text-blue-500 ">
                        MyShop
                    </div>
                    <button className="md:hidden text-2xl " onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                    <nav className=" hidden md:flex justify-start space-x-8 text-gray-700 font-medium">
                        {/* <a href={Home} className="hover:text-blue-600 transition">Home</a> */}
                        <Link to="/" className="hover:text-blue-600 transition">Home</Link>

                        <a href="#" className="hover:text-blue-600 transition">Contact Us</a>
                        <a href="#" className="hover:text-blue-600 transition">About Us</a>
                        <a href="#" className="hover:text-blue-600 transition">Support</a>
                    </nav>

                    <div className="hidden md:flex gap-4 flex items-center">

                        {/* Searchbar */}
                        <button onClick={() => setShowSearch(!showSearch)} className="px-4 py-2 border rounded-lg text-black-500 cursor-pointer ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>

                        {showSearch && (
                            <div className="mt-0">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="flex flex-row w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        )}
                        <div className="relative">
                        {/* cart button */}
                        <button onClick={() => setCartOpen(true)}
                            className="px-4 py-2 border  rounded-lg text-black-500 cursor-pointer  ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        
                        {/* Badge */}
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                            {cartCount}
                        </span>
                        </div>
                        {cartOpen && (
                            <div
                                className="fixed inset-0 bg-black/40 z-40"
                                onClick={() => setCartOpen(false)}
                            />
                        )}

                        {/* Drawer */}
                        <div
                            className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${cartOpen ? "translate-x-0" : "translate-x-full"
                                }`}
                        >
                            <div className="p-4 flex justify-between items-center border-b">
                                <h2 className="text-lg font-semibold">Your Cart</h2>
                                <button onClick={() => setCartOpen(false)}>✕</button>
                            </div>

                            <div className="p-4">
                                <p className="text-gray-500">Your cart is empty</p>
                            </div>

                            <div className="absolute bottom-0 w-full p-4 border-t">
                                <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                                    Checkout
                                </button>
                            </div>
                        </div>

                        {/* login button */}
                        <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition cursor-pointer" type="button" onClick={() => navigate("/login")}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </button>

                        {/* <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="text-black bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
                            Toggle modal
                        </button> */}

                    </div>
                </div>
                {menuOpen && (
                    <nav className="flex flex-col items-center  mr-4px text-gray-700 font-medium px-6 py-2 space-y-4 ">
                        {/* <a href="#" className="hover:text-blue-600 transition">Home</a> */}
                        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
                        <a href="#" className="hover:text-blue-600 transition">Contact Us</a>
                        <a href="#" className="hover:text-blue-600 transition">About Us</a>
                        <a href="#" className="hover:text-blue-600 transition">Support</a>
                    </nav>
                )}
            </header>
            {/* <div id="Log-in" className="min-h-screen flex items-center justify-center bg-gray-100" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" >
                <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

                  
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Login to your account
                    </h2>

                    
                    <form className="space-y-5">

                     
                        <div>
                            <label className="block text-gray-600 mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                     
                        <div>
                            <label className="block text-gray-600 mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                    
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="text-blue-500 hover:underline">
                                Forgot password?
                            </a>
                        </div>

                      
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            Login
                        </button>
                    </form>

                    
                    <p className="text-center text-gray-600 text-sm mt-6">
                        Don't have an account?{" "}
                        <a href="#" className="text-blue-500 hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div> */}





        </>
    )
}

export default Header