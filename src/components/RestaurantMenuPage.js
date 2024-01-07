import { RESTAURANTS_MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantInfo from "./RestaurantInfo";

const RestaurantMenu = () => {
  const [resData, setResData] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    try {
      const response = await fetch(RESTAURANTS_MENU_URL + resId);
      const result = await response.json();

      setResData(result?.data?.cards);
    } catch (err) {
      console.log(err);
    }
  };

  if (resData.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <RestaurantInfo resData={resData} />
    </>
  );
};

export default RestaurantMenu;
