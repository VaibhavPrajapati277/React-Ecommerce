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

                    <div key={item.id}>

                        <img
                            src={item.image}
                            width="150"
                        />

                        <h2>{item.brand}</h2>

                        <p>{item.name}</p>

                        <h3>₹{item.price}</h3>

                        <p>Qty : {item.quantity}</p>

                        

                    </div>
                ))
            }

        </div>
    )
}

export default Cart;