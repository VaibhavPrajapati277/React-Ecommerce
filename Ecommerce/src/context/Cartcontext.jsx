import { createContext, useState } from "react";

export const CartContext = createContext()


const CartProvider = ({ children }) => {

    const [num, setNum] = useState(0)
    const [data, setData] = useState([]);
    const increment = () => {

        setNum(num + 1)

    }

    const decrement = () => {
        setNum(num - 1)
    }

    const getdata = (productDetails) => {
        setData((prevData) => {
            // 1. Look for the item in the current state
            const existingItem = prevData.find(item => item.id === productDetails.id);

            if (existingItem) {
                // 2. If it exists, return a NEW array with the updated quantity
                return prevData.map(item =>
                    item.id === productDetails.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                );
            }

            // 3. If it's new, add it to the array and set quantity to 1
            return [...prevData, { ...productDetails, quantity: 1 }];
        });
    };

    return (

        <CartContext.Provider
            value={{
                increment,
                decrement,
                getdata,
                data,
                num
            }}
        >
            {children}

        </CartContext.Provider>
    )

}

export default CartProvider;