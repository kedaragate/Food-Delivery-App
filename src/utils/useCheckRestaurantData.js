const useCheckRestaurantData = function (result) {
  const checkedresult = result?.data?.cards.filter((res) => {
    if (res.hasOwnProperty("card")) {
      if (res.card.hasOwnProperty("card")) {
        if (res.card.card.hasOwnProperty("gridElements")) {
          if (res.card.card.gridElements.hasOwnProperty("infoWithStyle")) {
            if (
              res.card.card.gridElements.infoWithStyle.hasOwnProperty(
                "restaurants"
              )
            ) {
              return true;
            }
          }
        }
      }
    }
  });
  return checkedresult[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
};

export default useCheckRestaurantData;
