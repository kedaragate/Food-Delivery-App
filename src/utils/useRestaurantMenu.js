import { useEffect, useState } from "react";
import { RESTAURANTS_MENU_URL, RESTAURANT_DATA_URL } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState([]);
  useEffect(() => {
    fetchRestaurantMenu(resId);
  }, []);

  const fetchRestaurantMenu = async () => {
    try {
      console.log(RESTAURANT_DATA_URL + resId);
      const data = await fetch(RESTAURANTS_MENU_URL + resId);
      const result = await data.json();
      console.log(result, "getting");
      console.log(RESTAURANT_DATA_URL + resId);
      setResData(result?.data?.cards);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(resData);
  return resData;
};

export default useRestaurantMenu;
