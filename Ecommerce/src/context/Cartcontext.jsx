import { createContext, useState } from "react";

export const CartContext = createContext()


const CartProvider = ({children}) => {

    const [num, setNum] = useState(0)

    const increment = () => {

        setNum(num + 1)

    }

    const decrement = () =>{
        setNum(num - 1)
    }


    return (

        <CartContext.Provider
        value={{
            increment,
            decrement,
            num
        }}
        >
        {children}

    </CartContext.Provider>
    )

}

export default CartProvider;