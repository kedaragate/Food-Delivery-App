export default RestaurantOfferCard = ({ offer }) => {
  console.log(offer);

  const { header, logoBottom, couponCode } = offer;

  return (
    <div className="restaurant-offer-card">
      <h4>{header.toUpperCase()}</h4>
      <p>{couponCode}</p>
    </div>
  );
};
