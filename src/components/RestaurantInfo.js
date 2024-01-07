import starIcon from "../../assets/images/star.svg";
import RestaurantMenuItems from "./RestaurantMenuItems";
import RestaurantOffers from "./RestaurantOffers";

const RestaurantInfo = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    areaName,
    city,
    feeDetails,
    sla,
  } = resData[0]?.card?.card?.info;

  return (
    <div className="restaurant-menu-page-info-container">
      <div className="restaurant-menu-page-info">
        <h1 className="restaurant-menu-page-name">{name}</h1>
        <p className="restaurant-menu-page-cuisines">{cuisines.join(", ")}</p>
        <p className="restaurant-menu-page-locality-info">
          {areaName + ", " + city}
        </p>
        <p className="restaurant-menu-page-delivery-charges-message">
          {feeDetails.message}
        </p>
        <div className="restaurant-menupage-delivery-time-message-container">
          <span className="restaurant-menu-page-delivery-time">
            {sla.deliveryTime}MINS
          </span>

          <span className="restaurant-menu-page-cost-for-two-message">
            {costForTwoMessage}
          </span>
        </div>
        <div className="restaurant-menu-page-ratings-container">
          <p className="restaurant-menu-page-avg-rating">
            <img
              className="restaurant-menu-page-avg-rating-icon"
              src={starIcon}
            />
            {avgRating}
          </p>
          <p className="restaurantmenu-page-total-rating">
            {totalRatingsString}
          </p>
        </div>
      </div>
      <RestaurantOffers
        resOffers={resData[1]?.card?.card?.gridElements?.infoWithStyle?.offers}
      />
      <RestaurantMenuItems
        menuItems={resData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards}
      />
    </div>
  );
};

export default RestaurantInfo;
