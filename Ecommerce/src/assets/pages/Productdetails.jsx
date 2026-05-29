import { Navigate, useNavigate, useParams } from "react-router-dom";
import { mendata, womendata, kidsdata, shoesdata, watchdata, sunglassesdata, sportsweardata, headphonesdata, jwellerydata, bagdata } from "../../Data/Data";
import { CartContext } from "../../context/Cartcontext";
import { useContext } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Bottom from "../components/Bottom";

function Productdetails() {

    const { id } = useParams();
    const navigate = useNavigate();
    const { data } = useContext(CartContext)

    const {
        getdata,
        data: cartData
    } = useContext(CartContext);

    const allProducts = [
        ...mendata,
        ...womendata,
        ...kidsdata,
        ...shoesdata,
        ...watchdata,
        ...sunglassesdata,
        ...sportsweardata,
        ...headphonesdata,
        ...jwellerydata,
        ...bagdata
    ];

    const product = allProducts.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return (
            <h1 className="text-center text-2xl mt-10">
                Product Not Found
            </h1>
        );
    }

    const cartItem = cartData.find(
        (item) => item.id === Number(id)
    );

    const handleclick = () => {
        getdata(product);
        navigate("/checkout")
    }

    return (
        <>
            <Header />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* Product Image */}
                    <div className="w-full">

                        <img
                            src={product.image}
                            alt={product.name}
                            className="
                                w-full
                                h-[300px]
                                sm:h-[450px]
                                md:h-[550px]
                                object-cover
                                rounded-xl
                                shadow-md
                            "
                        />

                    </div>

                    {/* Product Details */}
                    <div className="w-full">

                        <h1 className="text-3xl md:text-4xl font-bold">
                            {product.brand}
                        </h1>

                        <p className="text-gray-500 mt-3 text-lg">
                            {product.name}
                        </p>

                        {/* Price Section */}
                        <div className="flex flex-wrap items-center gap-3 mt-5">

                            <p className="text-3xl font-bold text-black">
                                ₹{product.price}
                            </p>

                            <p className="line-through text-gray-400 text-lg">
                                ₹{product.originalPrice}
                            </p>

                            <p className="text-green-600 font-semibold">
                                {product.discount}
                            </p>

                        </div>

                        {/* Buttons */}
                        <div className="
                            flex
                            flex-col
                            sm:flex-row
                            gap-4
                            mt-6
                        ">

                            <button
                                onClick={handleclick}
                                className="
                                    bg-blue-600
                                    hover:bg-blue-700
                                    text-white
                                    px-6
                                    py-3
                                    rounded-lg
                                    transition
                                    cursor-pointer
                                    w-full
                                    sm:w-auto
                                "
                            >
                                Buy Now
                            </button>

                            <button
                                onClick={() => getdata(product)}
                                className="
                                    bg-black
                                    hover:bg-gray-800
                                    text-white
                                    px-6
                                    py-3
                                    rounded-lg
                                    transition
                                    cursor-pointer
                                    w-full
                                    sm:w-auto
                                "
                            >
                                Add to Cart
                            </button>

                        </div>

                        {/* Cart Quantity */}
                        {
                            cartItem && (
                                <p className="mt-4 text-green-600 font-medium">
                                    Added to cart ({cartItem.quantity})
                                </p>
                            )
                        }

                        {/* Size Section */}
                        {/* <div className="mt-10">

                            <h2 className="text-2xl font-semibold mb-5">
                                Select Size
                            </h2>

                            <div className="flex flex-wrap gap-3">

                                {
                                    ["S", "M", "L", "XL", "XXL"].map((size) => (
                                        <button
                                            key={size}
                                            className="
                                                h-12
                                                min-w-[56px]
                                                px-4
                                                rounded-md
                                                border
                                                border-gray-400
                                                text-lg
                                                font-medium
                                                hover:border-black
                                                hover:bg-black
                                                hover:text-white
                                                transition
                                                cursor-pointer
                                            "
                                        >
                                            {size}
                                        </button>
                                    ))
                                }

                            </div>

                        </div> */}

                    </div>

                </div>

            </div>

            <Footer />
            <Bottom />

        </>
    );
}

export default Productdetails;