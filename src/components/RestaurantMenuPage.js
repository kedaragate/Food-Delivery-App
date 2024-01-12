import { useParams } from "react-router-dom";
import RestaurantInfo from "./RestaurantInfo";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);
  console.log(resData);

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
