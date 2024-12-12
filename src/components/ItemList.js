import { CDN_IMG_URL } from "../config";
import { useDispatch } from "react-redux";
import {addItems}  from "../utils/cartSlice";

const ItemList = ({items } ) => {

    // console.log(items);
    
    const dispatch = useDispatch()

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch (addItems (item))


    }
    

    return (
        <>
        {items.map((item) => (
             <div key= {item.card.info.id} className="p-2 m-2  border-b-2 border-orange-300 text-left flex justify-between">
                
                <div className="w-9/12">

                <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span> ₹{item.card.info.price/100}</span>
                </div>

                <p className="text-md">{item.card.info.description}</p>

                

                </div>

                <div className="p-4 w-3/12 ">

                <div className="absolute">
                <button className=" rounded-md p-2 m-2 bg-green-500 shadow-lg text-gray-200 font-bold "
                onClick={() => handleAddItem(item)}
                
                >Add +</button>
                </div>

                <img src={CDN_IMG_URL + item.card.info.imageId} className="w-full" />
                </div>


            </div>
            
            
            ))}  
        </>

    )






}
export default ItemList;