import { useParams } from "react-router-dom";
import { mendata, womendata, kidsdata } from "../../Data/Data";
import { CartContext } from "../../context/Cartcontext";
import { useContext } from "react";

function Productdetails() {

    const { id } = useParams();
    const { increment } = useContext(CartContext)



    const allProducts = [
        ...mendata,
        ...womendata,
        ...kidsdata
    ];

    const product = allProducts.find(
        (item) => item.id === Number(id)
    );
    // console.log(id);
    // console.log(allProducts);
    if (!product) {
        return <h1>Product Not Found</h1>;
    }

    const { getdata } = useContext(CartContext)
    const handelclick = () => {
        increment();
        getdata(data);
    }

    return (

        <div className="p-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                <img
                    src={product.image}
                    className="w-200 h-130 rounded-lg"
                    alt=""
                />

                <div>
                    <h1 className="text-3xl font-bold">
                        {product.brand}
                    </h1>

                    <p className="text-gray-500 mt-2">
                        {product.name}
                    </p>

                    <div className="flex gap-3 mt-4 items-center">
                        <p className="text-2xl font-bold">
                            ₹{product.price}
                        </p>

                        <p className="line-through text-gray-400">
                            ₹{product.originalPrice}
                        </p>

                        <p className="text-green-500">
                            {product.discount}
                        </p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <button className="bg-blue-500 text-white px-6 py-2 rounded mt-5 cursor-pointer">
                            Buy Now
                        </button>
                        <button className="bg-blue-500 text-white px-6 py-2 rounded mt-5 cursor-pointer">
                            Add to Cart
                        </button>
                    </div>

                    <div className="space-y-4 mt-4">

                        <h2 className="text-2xl font-semibold text-gray-900">
                            Select Size
                        </h2>


                        <div className="flex items-center gap-3 ">

                            <button
                                className="h-12 min-w-[48px] rounded-md border border-gray-500 px-4 text-lg font-medium text-gray-800 transition hover:border-black cursor-pointer"
                            >
                                S
                            </button>
                            <button
                                className="h-12 min-w-[48px] rounded-md border border-gray-500 px-4 text-lg font-medium text-gray-800 transition hover:border-black cursor-pointer"
                            >
                                M
                            </button>

                            <button
                                className="h-12 min-w-[48px] rounded-md border border-gray-500 px-4 text-lg font-medium text-gray-800 transition hover:border-black cursor-pointer"
                            >
                                L
                            </button>

                            <button
                                className="h-12 min-w-[60px] rounded-md border border-gray-500 px-4 text-lg font-medium text-gray-800 transition hover:border-black cursor-pointer"
                            >
                                XL
                            </button>

                            <button
                                className="h-12 min-w-[72px] rounded-md border border-gray-500 px-4 text-lg font-medium text-gray-800 transition hover:border-black cursor-pointer"
                            >
                                XXL
                            </button>

                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Productdetails;