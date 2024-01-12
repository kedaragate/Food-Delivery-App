import { useEffect, useState } from "react";
import { RESTAURANTS_MENU_URL } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState([]);
  useEffect(() => {
    fetchRestaurantMenu(resId);
  });

  const fetchRestaurantMenu = async () => {
    try {
      const data = await fetch(RESTAURANTS_MENU_URL + resId);
      const result = await data.json();

      setResData(result?.data?.cards);
    } catch (err) {
      console.log(err);
    }
  };
  return resData;
};

export default useRestaurantMenu;
