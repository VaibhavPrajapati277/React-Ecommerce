import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/Cartcontext";

function ProductCard({ data }) {

    const navigate = useNavigate();

    const {increment} = useContext(CartContext)

    return (
        <div
           
            className="flex flex-col w-full bg-white rounded-lg shadow-md p-3 items-center"
        >

            <img
                src={data.image}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                        "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=580&auto=format&fit=crop";
                }}
                 onClick={() => navigate(`/product/${data.id}`)}
                className="h-32 w-full object-cover rounded  cursor-pointer"
                alt={data.name}
            />

            <h2 className="font-bold text-sm mt-2 text-center truncate w-full">
                {data.brand}
            </h2>

            <h2 className="font-medium text-gray-600 text-xs text-center truncate w-full">
                {data.name}
            </h2>

            <div className="flex gap-2 justify-center items-center mt-1 flex-wrap">
                <p className="font-semibold">₹{data.price}</p>
                <p className="line-through text-gray-500 text-xs">
                    ₹{data.originalPrice}
                </p>
                <p className="text-green-500 text-xs">
                    {data.discount}
                </p>
            </div>

            <button
                onClick={increment}
            className="bg-blue-500 text-white px-4 py-1 mt-2 rounded  cursor-pointer hover:bg-blue-600 transition w-full">
                Add to Cart
            </button>                 
        </div>
    );
}

export default ProductCard;