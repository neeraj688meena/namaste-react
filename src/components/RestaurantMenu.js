import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div>Menu</div>
    </div>
  );
};

export default RestaurantMenu;
