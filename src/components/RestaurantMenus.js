import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { CDN_IMG_URL } from "../config";
import useRestaurant from "../utils/useRestaurants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { id } = useParams();

  const dummy = "dummy data" ;

  const restaurant = useRestaurant(id);
  // console.log(restaurant);

 const [ isClicked, setIsClicked] = useState({index: -1 , isClicked: true})

  const [showIndex ,setShowIndex] = useState(null);

  if (!restaurant) {
    return <Shimmer />;
  };

 

  const categories =
    restaurant?.cards[4]?.groupedCard.cardGroupMap.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="text-center">
      {/* <h1> Restaurant id {id} </h1> */}
      <h2 className="font-bold my-4 text-2xl">
        {restaurant?.cards[2]?.card?.card?.info?.name}
      </h2>
      <h3 className="font-bold my-3 text-1xl">
        Cost for two - ₹{restaurant?.cards[2]?.card?.card?.info?.costForTwo/100}
      </h3>
      {/* <img
        src={
          CDN_IMG_URL +
          restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId
        }
      /> */}
      <h2 className="font-bold my-3 text-1xl">
        {restaurant?.cards[2]?.card?.card?.info?.city}
      </h2>
      <h3 className="font-bold text-green-600 text-2xl">
        {restaurant?.cards[2]?.card?.card?.info?.avgRating}⭐
      </h3>

      {/* categories accordions */}
      { 
        categories.map((category,index)=> (
        <RestaurantCategory key = {category?.card?.card?.title} data = {category?.card?.card} 
       

         
        //controlled components
        IsClicked = {()=> setIsClicked({index,isClicked:!!isClicked.isClicked})}
        showItems = {index == showIndex ? true : false}
        setShowIndex = {() =>setShowIndex(index)}
       
        
        
        />
      
      ))}



    </div>
  );
};

export default RestaurantMenu;
