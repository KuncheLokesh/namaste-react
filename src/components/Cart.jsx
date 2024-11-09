import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    handleClick=()=>{
        dispatch(clearCart());
    }
    // console.log(cartItems)

    return (
        <div className="flex justify-center flex-col items-center">
            <div className="text-lg">Cart <span><button onClick={handleClick} className="bg-black text-white m-2 p-2 rounded-lg">Clear</button></span></div>
            {cartItems.map((i,index)=>{
               return <Item  key={index} item={i} />
            })}
        </div>
    )
}
export default Cart;