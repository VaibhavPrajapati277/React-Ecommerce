import Address from "../components/Address"
import Header from "../components/Header"
import Cart from "./Cart"

function Checkout() {



    return (
        <>

            <Header />
            <div className="max-w-6xl mx-auto p-4">
                 <Cart />
                <Address />
               
            </div>
           
        </>
    )
}

export default Checkout




// 1. Address
// 2. Cart Items
// 3. Order Summary
// 4. Payment Method
// 5. Place Order Button