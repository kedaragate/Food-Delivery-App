import RestaurantOfferCard from "./RestaurantOfferCard";

export default RestaurantOffers = ({ resOffers }) => {
  return (
    <div className="restaurant-page-offer-container">
      {resOffers.map((offer) => {
        return (
          <RestaurantOfferCard
            key={offer?.info?.offerIds[0]}
            offer={offer?.info}
          />
        );
      })}
    </div>
  );
};
