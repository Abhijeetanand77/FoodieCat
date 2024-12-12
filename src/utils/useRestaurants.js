import { useState , useEffect} from "react";
import Shimmer from "../components/Shimmer"; 


const useRestaurant = (id) => {

    const[restaurant,setRestaurant] = useState(null);

    useEffect(() =>{
     
        getRestaurantInfo();
    
       },[])
    
       
       async function getRestaurantInfo () {
    
        const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.820934&lng=86.469719&restaurantId=" + id + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json ();
        console.log(json.data);
    
        setRestaurant(json.data);
       }
     
       return restaurant ;




}

export default useRestaurant;