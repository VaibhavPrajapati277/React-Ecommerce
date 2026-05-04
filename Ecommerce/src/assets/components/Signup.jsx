import { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom";

function Signup() {

    const [show, setShow] = useState(false);

    return (

        <>
            <div className="flex flex-col justify-between h-screen bg-gray-200">

                <Header />
                <div className=" flex flex-col p-3">
                    <div className="py-11 flex items-center justify-center " >
                        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md ">

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                                Sign up
                            </h2>

                            {/* Form */}
                            <form className="space-y-5">

                                {/* Email */}
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        required
                                        placeholder=" "
                                        className="peer w-full px-3 pt-5 pb-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                    <label className="absolute left-3 bg-white px-1 text-gray-500 text-sm transition-all
                            peer-placeholder-shown:top-3.5 
                            peer-placeholder-shown:text-base 
                            peer-placeholder-shown:text-gray-400
                            peer-focus:-top-2 
                            peer-focus:text-sm 
                            peer-focus:text-blue-500">
                                        Name
                                    </label>
                                </div>
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        required
                                        placeholder=" "
                                        className="peer w-full px-3 pt-5 pb-2 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                    <label className="absolute left-3 bg-white px-1 text-gray-500 text-sm transition-all
                            peer-placeholder-shown:top-3.5 
                            peer-placeholder-shown:text-base 
                            peer-placeholder-shown:text-gray-400
                            peer-focus:-top-2 
                            peer-focus:text-sm 
                            peer-focus:text-blue-500">
                                        Email
                                    </label>
                                </div>


                                {/* Password */}
                                <div className="relative w-full">
                                    <input
                                        type={show ? "text" : "password"}
                                        required
                                        placeholder=" "
                                        className="peer w-full px-3 pt-5 pb-2 pr-12 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-blue-500"
                                    />

                                    {/* Label */}
                                    <label className="absolute left-3 bg-white px-1 text-gray-500 text-sm    transition-all
        peer-placeholder-shown:top-3.5 
        peer-placeholder-shown:text-base 
        peer-placeholder-shown:text-gray-400
        peer-focus:-top-2 
        peer-focus:text-sm 
        peer-focus:text-blue-500">
                                        Password
                                    </label>

                                    {/* Eye Icon Button */}
                                    <button
                                        type="button"
                                        onClick={() => setShow(!show)}
                                        className="absolute right-3 top-4 text-gray-500 hover:text-gray-700"
                                    >
                                        {show ? (
                                            // Eye Off
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-10-7a17.72 17.72 0 013.06-4.45M6.18 6.18A9.956 9.956 0 0112 5c5 0 9 4 10 7a17.9 17.9 0 01-4.43 5.55M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 6L3 3" />
                                            </svg>
                                        ) : (
                                            // Eye
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm7 0c-1-3-5-7-10-7S3 9 2 12c1 3 5 7 10 7s9-4 10-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>



                                {/* Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                                >
                                    Sign up
                                </button>

                            </form>

                            {/* Footer */}
                            <p className="text-center text-gray-600 text-sm mt-6">
                                Already have an account?{" "}
                                <Link to="/Login" className="text-blue-500 hover:underline">Log in</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />


            </div>

        </>
    )
}

export default Signup