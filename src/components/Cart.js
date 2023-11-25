import { useDispatch, useSelector } from "react-redux";
import MenuItems from "./MenuItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();
    const handleClearCart =() =>{
        dispatch(clearCart());
        
    }

    return(
        <div className="text-center m-4 p-4" >
            <h1 className="font-bold text-xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <MenuItems items={cartItems}/>
            </div>
            <button onClick={handleClearCart} className="p-2 m-2 rounded-lg bg-black text-white">Clear cart</button>
            {cartItems.length==0 && <h2>add an item to buy</h2>}
        </div>
    )
}

export default Cart;