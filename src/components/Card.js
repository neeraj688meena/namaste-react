import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const Card = (data) => {
  const userData = useContext(UserContext);
  const { name, avgRatingString, costForTwo, cloudinaryImageId, sla } =
    data?.data?.info;
  return (
    <div className="w-40 py-2 px-1 border hover:scale-105">
      <img
        className="w-40 h-40 object-cover rounded-md"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="text-xl">{name}</div>
      <div className="userCompany">{costForTwo}</div>
      <div className="userCompany">{avgRatingString}</div>
      <div className="userCompany">{sla.slaString}</div>
      <div className="userCompany">{userData?.name}</div>
    </div>
  );
};

// higher order component -- take a component and return component

export const LabelCard = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-500 text-white text-xs rounded-md p-1">
          Pure Veg
        </label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
