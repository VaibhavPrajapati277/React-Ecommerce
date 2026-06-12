
import Footer from "./Footer"
import Header from "./Header"
import { Link } from "react-router-dom";


function Resetpass() {



    return (

        <>
            <div className="flex flex-col justify-between h-screen bg-gray-200">
                <Header />
                <div className=" flex flex-col p-3">
                    <div className="py-11 flex items-center justify-center " >
                        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md ">

                            {/* Title */}
                            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                                Forgot Your Password?
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
                                        Email
                                    </label>
                                </div>




                                {/* Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                                >
                                    Submit
                                </button>

                            </form>

                            {/* Footer */}
                            <p className="text-center text-gray-600 text-sm mt-6">
                                Back to Log?{" "}

                                <Link to="/login" className="text-blue-500 hover:underline">Click Here?</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Resetpass