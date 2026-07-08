import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("pizza"));
  };

  if (resInfo === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div>Menu</div>
      <button
        onClick={handleAddItem}
        className="rounded-md text-white px-2 py-1 bg-black"
      >
        + add item
      </button>
    </div>
  );
};

export default RestaurantMenu;
