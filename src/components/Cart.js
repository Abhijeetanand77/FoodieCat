import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import {clearCart}  from "../utils/cartSlice";


const Cart = () => {

   const cartItems = useSelector((store)=> store.cart.items)
   console.log(cartItems)

   const dispatch = useDispatch()

   const handleClearCart = () =>{

    dispatch(clearCart()) 


   }
    
    


    return (

        <div className="text-center m-3 p-2 ">

            <h1 className="text-2xl font-bold ">CART</h1>
            
            <div className="w-6/12 m-auto">
            <ItemList items={cartItems} />
            <button className="bg-black text-white font-semibold rounded-sm m-2 p-2 shadow-sm" onClick={handleClearCart} >
                Clear Cart 😿 </button>
            </div>
            
            
        </div>
    ) 



}
export default Cart; 