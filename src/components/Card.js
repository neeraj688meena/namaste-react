import { CDN_URL } from "../utils/constant";

const Card = (data) => {
  const { name, avgRatingString, costForTwo, cloudinaryImageId, sla } =
    data?.data?.info;
  return (
    <div className="cardContainer">
      <img src={CDN_URL + cloudinaryImageId} />
      <div className="userName">{name}</div>
      <div className="userCompany">{costForTwo}</div>
      <div className="userCompany">{avgRatingString}</div>
      <div className="userCompany">{sla.slaString}</div>
    </div>
  );
};

export default Card;
