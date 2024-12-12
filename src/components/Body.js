import { restrauntlist } from "../config";
import RestrauntCard ,{withOpenedLabel} from "./RestrauntCard";
import { useState, useEffect ,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { filterData } from "../utils/helper";
import useOnline  from "../utils/useOnline";
import UserContext from "../utils/userContext";

const Body = () => {
  const [searchInput, setSearchInput] = useState();

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [FilteredRestaurants, setFilteredRestaurants] = useState([]);

  const {setUserName , loggedInUser} = useContext(UserContext);

  console.log(allRestaurants)

  const RestaurantCardwithOpened = withOpenedLabel(RestrauntCard);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const info = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.820934&lng=86.469719&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await info.json();
    console.log(json);
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline() ;
  
  if(isOnline) {
     return (
      <h1>Check your internet connection ,you are maybe offline</h1>
     )
  };
  


  // EARLY RETURN , NOT RENDER COMPONENT
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-orange-100 my-5">
        <input
          type="text"
          className="search-input p-1 m-2 focus:bg-slate-200"
          placeholder="Explore"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />

        <button
          className="search-btn p-2 m-2 bg-red-700 text-white rounded-md hover:bg-green-400 "
          onClick={() => {
            //filter the data
            const data = filterData(searchInput, allRestaurants);
            // update the search
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <label>username</label>
        <input value = {loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
      </div>

      <div className="restraunt-list flex flex-wrap">
        {FilteredRestaurants.map((restraunt) => {
          return (
            <Link to={"/restraunt/" + restraunt.info.id}>
                {
                  restraunt.info.isOpen ? (<RestaurantCardwithOpened {...restraunt.info} key={restraunt.info.id}  /> ) :
                 (<RestrauntCard {...restraunt.info} key={restraunt.info.id} />) 

                }

              
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
