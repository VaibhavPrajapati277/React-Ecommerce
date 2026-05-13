import { useContext } from "react";
import { CartContext } from "../../context/Cartcontext";
;

function Cart() {

    // const { data } = useContext(CartContext);
    const { data, increaseQty, decreaseQty } =
        useContext(CartContext)

    return (

        <div>

            <h1>Cart Items</h1>

            {
                data.map((item) => (

                    <div
                        key={item.id}
                        className="flex gap-3 border-b pb-3"
                    >

                        <img
                            src={item.image}
                            alt=""
                            className="w-20 h-20 object-cover rounded"
                        />

                        <div>

                            <h3 className="font-semibold">
                                {item.brand}
                            </h3>

                            <p className="text-sm">
                                {item.name}
                            </p>

                            <p className="text-blue-600 font-bold">
                                ₹{item.price}
                            </p>

                            <p className="text-sm">
                                Qty : {item.quantity}
                            </p>

                            <div className="flex items-center gap-3 mt-2">

                                <button
                                    onClick={() => decreaseQty(item.id)}
                                    className="px-2 bg-gray-200 rounded cursor-pointer"
                                >
                                    -
                                </button>

                                <span>{item.quantity}</span>

                                <button
                                    onClick={() => increaseQty(item.id)}
                                    className="px-2 bg-gray-200 rounded cursor-pointer"
                                >
                                    +
                                </button>

                            </div>

                        </div>

                    </div>
                ))
            }

        </div>
    )
}

export default Cart;