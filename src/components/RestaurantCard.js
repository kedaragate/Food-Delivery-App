import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines } = resData;
  return (
    <div className="restaurant-card">
      <div className="restaurant-img-container">
        <img src={IMG_URL + cloudinaryImageId} alt="restaurant-image" />
      </div>
      <div className="restaurant-info-div">
        <h3 className="restaurant-name">{name}</h3>
        <span className="restaurant-rating">{avgRating}</span>
        <p className="cuisines">{cuisines.slice(0, 5).join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
