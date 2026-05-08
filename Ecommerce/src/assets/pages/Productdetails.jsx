import { useParams } from "react-router-dom";
import { mendata, womendata, kidsdata } from "../../Data/Data";

function Productdetails() {

    const { id } = useParams();

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

    return (

        
        <div className="p-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                <img
                    src={product.image}
                    className="w-full rounded-lg"
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

                    <button className="bg-blue-500 text-white px-6 py-2 rounded mt-5 cursor-pointer">
                        Buy Now
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Productdetails;