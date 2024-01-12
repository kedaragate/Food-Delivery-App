export const useFilterRestaurantsByRating = (rating, listOfRes) => {
  console.log(rating, listOfRes);
  return listOfRes.filter((res) => {
    return res.info.avgRating > rating;
  });
};

export const useSearchFilter = (text, listOfRes) => {
  return listOfRes.filter((res) => {
    return res.info.name.toLowerCase().includes(text.toLowerCase());
  });
};
