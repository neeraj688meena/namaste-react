import { resData } from "../utils/mockData";
import Card, { LabelCard } from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [userList, setUserList] = useState([]);
  const [filterUser, setFilterUser] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const VegCard = LabelCard(Card);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API);
      const json = await data.json();
      const finaldata =
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setUserList(finaldata);
      setFilterUser(finaldata);
    } catch (error) {
      console.log("Fetch failed:", error);
    }
  };

  if (userList.length === 0) {
    return <Shimmer />;
  }

  if (!onlineStatus) {
    return <h1>Looks like you are offline, please check your internet</h1>;
  }

  return (
    <div className="layout px-3">
      <div className="py-3">
        <div className="flex flex-row justify-between">
          <div className="searchConatiner">
            <input
              // className="w-52 border-2 border-[#dcdcdc] rounded-md px-2 py-1 outline-none"
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search restaurants..."
            />
            <button
              className="rounded-md border-none text-white px-2 py-1 outline-none bg-[#fc8019] cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => {
                const search = searchText.trim().toLowerCase();

                const filteredList = userList.filter((item) =>
                  item.info.name.toLowerCase().includes(search)
                );

                setFilterUser(filteredList);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const list = userList.filter((item) => item.info.avgRating > 4);
              setFilterUser(list);
            }}
          >
            User List Filter
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 rounded-md">
        {filterUser.map((item) => (
          <Link to={`/restaurant/${item.info.id}`} key={item.info.id}>
            {item.info.veg ? <VegCard data={item} /> : <Card data={item} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
