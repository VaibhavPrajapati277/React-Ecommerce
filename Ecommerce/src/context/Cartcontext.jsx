import { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const CartContext = createContext()


const CartProvider = ({ children }) => {

    // const [num, setNum] = useState(0)
    const [data, setData] = useState([]);
    // const increment = () => {
    //     setNum(num + 1)
    // }

    // const decrement = () => {
    //     setNum(num - 1)
    // }

    const getdata = (productDetails) => {
        setData((prevData) => {
            // 1. Look for the item in the current state
            const existingItem = prevData.find(item => item.id === productDetails.id);

            if (existingItem) {
                // 2. If it exists, return a NEW array with the updated quantity

                toast.success("Quantity Updated");
                return prevData.map(item =>
                    item.id === productDetails.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                );
            }

            // 3. If it's new, add it to the array and set quantity to 1
            toast.success("Added To Cart");
            return [...prevData, { ...productDetails, quantity: 1 }];
        });
    };

    // Increase Quantity
    const increaseQty = (id) => {

        toast.success("Quantity Increased");

        const updatedData = data.map((item) =>

            item.id === id
                ? {
                    ...item,
                    quantity: item.quantity + 1
                }
                : item
        );

        setData(updatedData);
    };
    const decreaseQty = (id) => {

        const existingItem = data.find(
            (item) => item.id === id
        );

        if (existingItem.quantity === 1) {
            toast.error("Item Removed");
        } else {
            toast.success("Quantity Decreased");
        }

        const updatedData = data
            .map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: item.quantity - 1
                    }
                    : item
            )
            .filter((item) => item.quantity > 0);

        setData(updatedData);
    };




    return (

        <CartContext.Provider
            value={{
                // increment,
                // decrement,
                getdata,
                data,
                // num,
                increaseQty,
                decreaseQty
            }}
        >
            {children}

        </CartContext.Provider>
    )

}

export default CartProvider;