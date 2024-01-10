const RestaurantOfferCard = ({ offer }) => {
  const { header, couponCode } = offer;

  return (
    <div className="restaurant-offer-card">
      <h4>{header.toUpperCase()}</h4>
      <p>{couponCode}</p>
    </div>
  );
};

export default RestaurantOfferCard;
