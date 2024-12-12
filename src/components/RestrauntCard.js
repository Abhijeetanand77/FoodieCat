import { CDN_IMG_URL } from "../config";

const RestrauntCard = ({
  name,
  cuisines,
  areaName,
  cloudinaryImageId,
  avgRating,
}) => {
  return (
    <div className="w-96 p-1 m-1 shadow-md bg-orange-100">
      <img src={CDN_IMG_URL + cloudinaryImageId} />

      <h2 className="font-bold text-2xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{areaName}</h4>
      <h4>{avgRating} stars </h4>
    </div>
  );
};

// Higher order components
//input - RestaurantCard ==> RestaurantCardOpened

export const withOpenedLabel = (RestrauntCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-1 p-1 bg-green-500 text-white font-bold rounded-md">Opened</label>
        <RestrauntCard {...props}/>
      </div>
    );
  };
};

export default RestrauntCard;
